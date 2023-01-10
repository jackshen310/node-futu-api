/**
* @fileOverview 富途OpenD websocket js接口封装
* @author dream
* @version 0.1
*/

import util from 'util'
import bytebuffer from 'bytebuffer'
import protobuf from "protobufjs";
import protoRoot from "./proto.js";

const ftApiCmdID = {
    Init: 1,  //初始化
    OpenDisConnect: 2, //websocket和opend之间的连接断开了，用push通知
}

const ftWebsocketRecvError = {
    ErrorSign: 1, //没有解析到正确的sign    
}
/**
 * @readonly
 * @enum {number}
 * @description 回调中的error枚举值
 */
const ftWebsocketError = {
    WEBSOCKET_ERROR_TIMEOUT: 1, //没有收到opend的回包超时
    WEBSOCKET_ERROR_OPEND_TIMEOUT: 2, //opend自己的超时，可能是opend跟服务器之间断了
    WEBSOCKET_ERROR_DISCONNECT: 3, //关闭websocket和opend之间的连接
}

var ftWebsocketSection = 1;
const ftWebsocketHeadLength = 44; //包头大小
const ftWebsocketHeadSign = "ft-v1.0";


/**
 * @name ftWebsocketBase
 * @class websocket封装工具类
 * @constructor ftWebsocketBase
 * @classdesc websocket封装工具类
 * @example
        websocketQotSub() {
        //演示一个订阅请求的发送
        const QotSubPBMessageRequest = protoRoot.lookup("Qot_Sub.Request"); // 请求体message
        const QotSecurityPBMessageRequest = protoRoot.lookup(
            "Qot_Common.Security"
        ); // 请求体message
        let securit1 = QotSecurityPBMessageRequest.create({
            market: 1,
            code: "00700"
        });
        let securit2 = QotSecurityPBMessageRequest.create({
            market: 2,
            code: "999010"
        });
        let subReq = {
            c2s: {
            securityList: [securit1, securit2],
            subTypeList: [1, 2, 4],
            isSubOrUnSub: true,
            isRegOrUnRegPush: true
            }
        };
        let message = QotSubPBMessageRequest.encode(
            QotSubPBMessageRequest.create(subReq)
        ).finish();
        this.$websocket
            .sendBuff(3001, message)
            .then(response => {
            if (response.buff) {
                const QotSubPBMessageResponse = protoRoot.lookup(
                "Qot_Sub.Response"
                ); // 回包message
                const buf = protobuf.util.newBuffer(response.buff);
                const subResult = QotSubPBMessageResponse.decode(buf);
                console.log(subResult);
            }
            })
            .catch(error => {
            console.log("login error:", error);
            });
        }
*/
class ftWebsocketBase {
    constructor() {
        this.websock = null;
        this.wsuri = "wss://127.0.0.1:8080";
        this.initOpenDConfigBuff = null;
        this.timeout = 5000; //5s
        this.reconnectTimeout = 1000; //每秒重连一次
        this.promisePool = {};
        this.message = "";
        this.state = {
            closing: false,
            login: false,
        };
        this.pushCalls = new Map();
        this.connID = 0;
    }


    /**
     * 
     * @description 初始化设置websocket连接的ip和端口号
     * @param {string} ip ip地址，如127.0.0.1
     * @param {number} port 端口号，如 8080
     * @memberof ftWebsocketBase
     */
    setWsConfig(ip, port, ssl) {
        if (ip !== null && port !== null) {
            let wsuri;
            if (ssl == false) {
                wsuri = util.format("ws://%s:%d", ip, port);
            }
            else {
                wsuri = util.format("wss://%s:%d", ip, port);
            }
            if (wsuri != this.wsuri) {
                this.close();
                this.wsuri = wsuri;
            }
        }
    }

    packBuff(cmd, section, buff) {
        var pbuff = new bytebuffer();
        pbuff.writeUTF8String(ftWebsocketHeadSign);
        let completeLength = 8 - bytebuffer.calculateString(ftWebsocketHeadSign);
        if (completeLength > 0) {
            for (let i = 0; i < completeLength; i++) {
                pbuff.writeByte(0);
            }
        }
        pbuff.writeUInt32(cmd);
        pbuff.writeUInt64(section);
        if (buff instanceof Uint8Array) {
            pbuff.append(buff);
        }
        else if (buff instanceof ArrayBuffer) {
            pbuff.append(new Uint8Array(buff));
        }
        pbuff.flip();
        return pbuff.toArrayBuffer();
    }

    // 解包函数
    unpackBuff(buff) {
        if (buff instanceof ArrayBuffer) {
            var pbuff = new bytebuffer(buff.byteLength, false);
            let result = new Object()
            pbuff.append(buff);
            pbuff.flip();
            result.sign = pbuff.readUTF8String(8);
            result.cmd = pbuff.readUInt32();
            result.section = pbuff.readUInt64();
            result.error = pbuff.readInt32();
            //https://github.com/nodejs/node/issues/4775
            result.errmsg = pbuff.readUTF8String(20).replace(/\0/g, '');
            if (buff.byteLength > ftWebsocketHeadLength) {
                let data = pbuff.readBytes(buff.byteLength - ftWebsocketHeadLength);
                result.buff = data.toArrayBuffer();
            }
            return result;
        }
        return null;
    }


    /**
     * @description 数据发送，适用于一应一答的场景，发送数据后，必然回包或超时
     * @see ftWebsocketError
     * @example    
            this.$websocket
            .sendBuff(3001, message) //已经序列化好的pb，直接透传给opend，所以务必保证cmd和二进制对应
            .then(response => {
            if (response.error == 0 && response.buff) { 
                //自己去解包pb包吧，某些协议有可能对buff并不关心
            }
            })
            .catch(error => {
                 console.log("login error:", error);
                 //error包括超时等各种情况
            });
     * @param {Number} cmd 命令字，如1001，注意100以内的命令字可能被征用做内部通讯，参考https://futunnopen.github.io/futu-api-doc/protocol/intro.html
     * @param {Uint8Array} buff 发送的二进制数据，Uint8Array或者ArrayBuffer格式 protobufjs库编码后就是Uint8Array的，可以为空，表示空包协议
     * @param {Number} timeout 协议超时时间，可以默认不填，默认5s超时
     * @return {Promise} 如果有数据正确返回，将会在then得到{cmd:Number;buff:ArrayBuffer;error:Number;errmsg:string}，超时等错误会在catch返回  
     * @async
     * @memberof ftWebsocketBase
     */
    sendBuff(cmd, buff, timeout) {
        var that = this;
        //超时回调
        function timeoutCallBack(section, timeout) {
            return new Promise(function (resolve, reject) {
                let timer = setTimeout(() => {
                    if (that.promisePool[section] != null) {
                        reject('timeout');
                        console.log("section:", section, " timeout");
                        delete that.promisePool[section];
                    }
                }, timeout);
                Object.assign(that.promisePool[section], { timer });
            });
        }

        //数据接收回调填充数据
        function requestCallBack(section) {
            return new Promise((resolve, reject) => {
                Object.assign(that.promisePool[section], {
                    section,
                    resolve,
                    reject,
                    "socket": that.websock,
                });
            });
        }

        var section = 0;
        if (this.websock && this.websock.readyState == WebSocket.OPEN) {
            if (this.state.login || cmd == ftApiCmdID.Init) //没有初始化之前不允许请求
            {
                section = ++ftWebsocketSection;
                this.promisePool[section] = new Object;
                let arrayBuff = this.packBuff(cmd, section, buff);
                this.websock.send(arrayBuff);
                if (timeout == null || timeout == undefined) {
                    timeout = this.timeout
                }
                return Promise.race([requestCallBack(section), timeoutCallBack(section, timeout)])
            }

        }
        return new Promise((resolve, reject) => {
            reject('error websock not ready');
        });
    }

    recvBuff(buff) {
        let result = this.unpackBuff(buff);
        let error = 0;
        if (result !== null && result.sign !== null && result.sign !== undefined) {
            if (result.sign.indexOf(ftWebsocketHeadSign) == -1) {
                console.log(result.sign, "||", ftWebsocketHeadSign);
                error = ftWebsocketRecvError.ErrorSign;
                return { error, result }; //错误的回包数据，直接过滤掉
            }

            delete result.sign; //鉴定完成后，这个数据对后继解析没任何意义了
            let section = 0;
            if (result.section !== null && result.section !== undefined) {
                section = result.section;
            }
            delete result.section; //对后继分析没任何意义了         

            const req = this.promisePool[section]
            // 在promisePool里面找得到的是请求->回包结构，另外一种是push
            if (req != null) {
                req.resolve(result);
                delete this.promisePool[section];
                if (req.timer != null) {
                    clearTimeout(req.timer);
                    req.timer = null;
                }
            }
            else {
                this.pushCalls.forEach(function (f) {
                    f(result);
                });
            }
        }
        return { error, result };
    }

    /**
    * 注册push回调，回调链可以注册多个，务必需要反注册
    * @param {*} key 用于反注册时候使用的key
    * @param {*} func 回调函数，需要满足接收一个参数，参数是传回的整个包
    * @example
        created() {
            this.$websocket.regPushCallback(this, this.onPush.bind(this)); //map结构，只要key唯一，允许反复注册，只有一次调用
        },
        destroyed() {
            this.$websocket.unregPushCallback(this);
        },
    * @memberof ftWebsocketBase    
    */
    regPushCallback(key, func) {
        this.pushCalls.set(key, func);
    }

    /**
    * 反注册push回调
    * @param {*} key 用于反注册时候使用的key
    * @memberof ftWebsocketBase
    */
    unregPushCallback(key) {
        this.pushCalls.delete(key)
    }


    /**
     * 关闭socket
     *
     * @memberof ftWebsocketBase
     */
    close() {
        this.state.closing = true;
        this.killReconnectTimer();
        if (this.websock) {
            this.websock.close()
        }
        this.rejectAll();
    }

    rejectAll() {
        if (this.promisePool !== null && this.promisePool !== undefined) {
            for (var req in Object.values(this.promisePool)) {
                if (req != null) {
                    if (req.reject != null) {
                        req.reject('close');
                    }
                    if (req.timer != null) {
                        clearTimeout(req.timer);
                        req.timer = null;
                    }
                }
            }
        }
        this.promisePool = {};
    }

    reconnect(timeout) {
        this.killReconnectTimer();
        this.reconnectTimer = setTimeout(() => {
            if (this.websock == null || this.websock.readyState != WebSocket.OPEN) {
                this.websock = null
                this.initWebSocket();
                this.reconnectTimer = null;
            }
        }, timeout);
    }

    isReadyConnect() {
        if (this.websock == null || this.websock.readyState != WebSocket.OPEN) {
            return false;
        }
        return this.state.login
    }

    killReconnectTimer() {
        if (this.reconnectTimer !== undefined && this.reconnectTimer !== null) {
            clearTimeout(this.reconnectTimer);
            this.reconnectTimer = null;
        }
    }

    /**
     * 初始化websocket
     *
     * @param {Uint8Array} configBuffer 参考InitWebSocket.proto，非必填字段，
     * @memberof ftWebsocketBase
     * @example
        created() {
            this.$websocket.setWsConfig("127.0.0.1", 8888);
            this.$websocket.regPushCallback(this, this.onPush.bind(this)); //map结构，只要key唯一，允许反复注册，只有一次调用
            this.$websocket.initWebSocket(); //如果连接断开，它会自动重连
        },
        destroyed() {
            this.$websocket.unregPushCallback(this);
            this.$websocket.close(); //断开websocket连接
        },
     */
    initWebSocket(configBuffer) {

        if (this.websock != null) {
            console.debug("websock is not null");
            //清理回调
            this.websock.onmessage = null;
            this.websock.onopen = null;
            this.websock.onerror = null;
            this.websock.onclose = null;
            delete this.websock;
        }
        this.killReconnectTimer(); //定时器要停下
        this.promisePool = {}; //上次的回调清空
        this.state.closing = false;
        if (configBuffer !== null && configBuffer !== undefined && configBuffer instanceof Uint8Array) {
            this.initOpenDConfigBuff = configBuffer
        }
        this.websock = new WebSocket(this.wsuri);
        this.websock.binaryType = "arraybuffer";
        this.websock.onmessage = (e) => {
            let msg = this.recvBuff(e.data)
            if (this.onmessage != undefined && typeof this.onmessage == 'function') {
                this.onmessage(msg);
            }
        };
        this.websock.onopen = () => {
            //连接建立之后执行send方法发送数据
            this.sendBuff(ftApiCmdID.Init, this.initOpenDConfigBuff, 20000)
                .then(response => {
                    if (response.buff != null && response.error == 0) {
                        //解包获取连接ID
                        const initInfo = protoRoot.lookup("InitWebSocket.Response");
                        const buf = protobuf.util.newBuffer(response.buff);
                        const initResult = initInfo.decode(buf);
                        this.connID = initResult.s2c.connID;
                        console.debug("登录成功");
                        if (!this.state.closing) {
                            this.state.login = true;
                            // 登录成功了回调一下
                            if (this.onlogin != undefined && typeof this.onlogin == 'function') {
                                this.onlogin(true, response);
                            }
                        }
                    }
                    else {
                        if (this.onlogin != undefined && typeof this.onlogin == 'function') {
                            this.onlogin(false, response.error);
                        }
                        this.state.login = false;
                        this.close(); //如果初始化失败，理解为用户环境配置用问题，不再尝试了
                    }
                })
                .catch(error => {
                    console.debug("login error:", error);
                    if (this.onlogin != undefined && typeof this.onlogin == 'function') {
                        this.onlogin(false, error);
                    }
                    this.state.login = false;
                    this.close(); //如果初始化的时候20秒都没回应，理解为用户环境配置用问题，不再尝试了
                });
        };
        this.websock.onerror = (e) => {
            //连接建立失败重连
            this.message = "发生异常";
            console.debug("发生异常", e);
            if (this.onerror != undefined && typeof this.onerror == 'function') {
                this.onerror(e);
            }
            // this.state.login = false;
            // this.reconnect(10000);
        };
        this.websock.onclose = (e) => {
            //关闭
            this.message = "断开连接";
            console.debug("断开连接", e);
            this.rejectAll();
            if (!this.state.closing) //非自主断开的，则重连上去
            {
                this.reconnect(this.reconnectTimeout);
            }
            this.state.login = false;

            if (this.onclose != undefined && typeof this.onclose == 'function') {
                this.onclose(e);
            }
        };

        return this;
    }
}



export default ftWebsocketBase