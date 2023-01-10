## 简介
* fork from futu-api@6.6.3108 https://www.futunn.com/download/OpenAPI
* support nodejs 

## 安装
`npm install --save node-futu-api`

## 使用
跟官方的例子一样，可直接拷贝官方的例子运行，唯二的区别是安装的依赖由 `futu-api` 改为 `node-futu-api`，引入proto由`futu-api/proto` 改为 `node-futu-api/proto.js`(注意增加了后缀.js)

## demo
```javascript
import ftWebsocket from "node-futu-api";
import { ftCmdID } from "node-futu-api";
import { Common, Qot_Common } from "node-futu-api/proto.js";
import beautify from "js-beautify";

function QotGetSecuritySnapshot(){
    const { RetType } = Common
    const { SubType, QotMarket } = Qot_Common
    let [addr, port, enable_ssl, key] = ["127.0.0.1", 33333, false, '7522027ccf5a06b1'];
    let websocket = new ftWebsocket();

    websocket.onlogin = (ret, msg)=>{
        if (ret) { // 登录成功

            const req = {
                c2s: {
                securityList: [
                    {
                        market: QotMarket.QotMarket_HK_Security,
                        code: "00700",
                    },
                ],
                },
            };
            websocket.GetSecuritySnapshot(req)
            .then((res) => {
                let { errCode, retMsg, retType,s2c } = res
                console.log("Snapshot: errCode %d, retMsg %s, retType %d", errCode, retMsg, retType); 
                if(retType == RetType.RetType_Succeed){
                    let snapshot = beautify(JSON.stringify(s2c), {
                        indent_size: 2,
                        space_in_empty_paren: true,
                    });
                    console.log(snapshot);
                }
            })
            .catch((error) => {
                console.log("error:", error);
            });
        } else {
            console.log("error", msg);
        }
    };

    websocket.start(addr, port, enable_ssl, key);
    
    //关闭行情连接，连接不再使用之后，要关闭，否则占用不必要资源
    //同时OpenD也限制了最多128条连接
    //也可以一个页面或者一个项目维护一条连接，这里范例请求一次创建一条连接
    setTimeout(()=>{ 
        websocket.stop();
        console.log("stop");
    }, 5000); // 5秒后断开
}
QotGetSecuritySnapshot();
```