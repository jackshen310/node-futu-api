import ftWebsocketBase from './base.js'
import protoRoot from "./proto.js";
import protobuf from "protobufjs";
import crypto from "crypto";
import long from "long"
protobuf.util.Long = long;
protobuf.configure();

export const ftCmdID = {
    // 全局协议
    InitConnect: { cmd: 1001, name: 'GetGlobalState', description: '初始化连接' }, /**< 初始化连接 */
    GetGlobalState: { cmd: 1002, name: 'GetGlobalState', description: '获取全局状态' }, /**< 获取全局状态 */
    Notify: { cmd: 1003, name: 'Notify', description: '推送通知' }, /**< 推送通知 */
    KeepAlive: { cmd: 1004, name: 'KeepAlive', description: '心跳' },  /**< 心跳 */
    GetUserInfo: { cmd: 1005, name: 'GetUserInfo', description: '获取用户信息' }, /**< 获取用户信息 */
    GetDelayStatistics: { cmd: 1007, name: 'GetDelayStatistics', description: '获取延迟统计' }, /**< 获取延迟统计 */
    // 行情-实时数据协议
    QotSub: { cmd: 3001, name: 'Qot_Sub', description: '订阅或者反订阅' }, /**< 订阅或者反订阅 */
    QotRegQotPush: { cmd: 3002, name: 'Qot_RegQotPush', description: '注册推送' }, /**< 注册推送 */
    QotGetSubInfo: { cmd: 3003, name: 'Qot_GetSubInfo', description: '获取订阅信息' }, /**< 获取订阅信息 */
    QotGetBasicQot: { cmd: 3004, name: 'Qot_GetBasicQot', description: '获取基本行情' }, /**< 获取基本行情 */
    QotUpdateBasicQot: { cmd: 3005, name: 'Qot_UpdateBasicQot', description: '推送基本行情' }, /**< 推送基本行情 */
    QotGetKL: { cmd: 3006, name: 'Qot_GetKL', description: '获取K线' }, /**< 获取K线 */
    QotUpdateKL: { cmd: 3007, name: 'Qot_UpdateKL', description: '推送K线' }, /**< 推送K线 */
    QotGetRT: { cmd: 3008, name: 'Qot_GetRT', description: '获取分时' }, /**< 获取分时 */
    QotUpdateRT: { cmd: 3009, name: 'Qot_UpdateRT', description: '获取分时' }, /**< 获取分时 */
    QotGetTicker: { cmd: 3010, name: 'Qot_GetTicker', description: '获取逐笔' }, /**< 获取逐笔 */
    QotUpdateTicker: { cmd: 3011, name: 'Qot_UpdateTicker', description: '推送逐笔' }, /**< 推送逐笔 */
    QotGetOrderBook: { cmd: 3012, name: 'Qot_GetOrderBook', description: '获取买卖盘' }, /**< 获取买卖盘 */
    QotUpdateOrderBook: { cmd: 3013, name: 'Qot_UpdateOrderBook', description: '推送买卖盘' }, /**< 推送买卖盘 */
    QotGetBroker: { cmd: 3014, name: 'Qot_GetBroker', description: '获取经纪队列' }, /**< 获取经纪队列 */
    QotUpdateBroker: { cmd: 3015, name: 'Qot_UpdateBroker', description: '推送经纪队列' }, /**< 推送经纪队列 */
    QotUpdatePriceReminder: { cmd: 3019, name: 'Qot_UpdatePriceReminder', description: '推送到价提醒' }, /**< 推送到价提醒 */

    //	行情-历史数据协议
    QotGetHistoryKL: { cmd: 3100, name: 'Qot_GetHistoryKL', description: '获取历史K线' }, /**< 获取历史K线 */
    QotGetHistoryKLPoints: { cmd: 3101, name: 'Qot_GetHistoryKLPoints', description: '获取多只股票历史单点K线' }, /**< 获取多只股票历史单点K线 */
    QotGetRehab: { cmd: 3102, name: 'Qot_GetRehab', description: '获取复权信息' }, /**< 获取复权信息 */
    QotRequestHistoryKL: { cmd: 3103, name: 'Qot_RequestHistoryKL', description: '拉取历史K线，不读本地历史数据DB' }, /**< 拉取历史K线，不读本地历史数据DB */
    QotRequestHistoryKLQuota: { cmd: 3104, name: 'Qot_RequestHistoryKLQuota', description: '拉取历史K线已经用掉的额度' }, /**< 拉取历史K线已经用掉的额度 */
    QotRequestRehab: { cmd: 3105, name: 'Qot_RequestRehab', description: '拉取复权信息，不读本地历史数据DB' }, /**< 拉取复权信息，不读本地历史数据DB */

    // 行情-其他数据协议
    QotGetTradeDate: { cmd: 3200, name: 'Qot_GetTradeDate', description: '获取市场交易日' }, /**< 获取市场交易日 */
    QotGetSuspend: { cmd: 3201, name: 'Qot_GetSuspend', description: '获取股票停牌信息' }, /**< 获取股票停牌信息 */
    QotGetStaticInfo: { cmd: 3202, name: 'Qot_GetStaticInfo', description: '获取股票静态信息' }, /**< 获取股票静态信息 */
    QotGetSecuritySnapshot: { cmd: 3203, name: 'Qot_GetSecuritySnapshot', description: '获取股票快照' }, /**< 获取股票快照 */
    QotGetPlateSet: { cmd: 3204, name: 'Qot_GetPlateSet', description: '获取板块集合下的板块' }, /**< 获取板块集合下的板块 */
    QotGetPlateSecurity: { cmd: 3205, name: 'Qot_GetPlateSecurity', description: '获取板块下的股票' }, /**< 获取板块下的股票 */
    QotGetReference: { cmd: 3206, name: 'Qot_GetReference', description: '获取正股相关股票，暂时只有窝轮' }, /**< 获取正股相关股票，暂时只有窝轮 */
    QotGetOwnerPlate: { cmd: 3207, name: 'Qot_GetOwnerPlate', description: '获取股票所属板块' }, /**< 获取股票所属板块 */
    QotGetHoldingChangeList: { cmd: 3208, name: 'Qot_GetHoldingChangeList', description: '获取大股东持股变化列表' }, /**< 获取大股东持股变化列表 */
    QotGetOptionChain: { cmd: 3209, name: 'Qot_GetOptionChain', description: '获取期权链' }, /**< 获取期权链 */
    QotGetWarrant: { cmd: 3210, name: 'Qot_GetWarrant', description: '获取涡轮' }, /**< 获取涡轮 */
    QotGetCapitalFlow: { cmd: 3211, name: 'Qot_GetCapitalFlow', description: '获取资金流向' }, /**< 获取资金流向 */
    QotGetCapitalDistribution: { cmd: 3212, name: 'Qot_GetCapitalDistribution', description: '获取资金分布' }, /**< 获取资金分布 */
    QotGetUserSecurity: { cmd: 3213, name: 'Qot_GetUserSecurity', description: '获取自选股分组下的股票' }, /**< 获取自选股分组下的股票 */
    QotModifyUserSecurity: { cmd: 3214, name: 'Qot_ModifyUserSecurity', description: '修改自选股分组下的股票' }, /**< 修改自选股分组下的股票 */
    QotStockFilter: { cmd: 3215, name: 'Qot_StockFilter', description: '条件选股' }, /**< 条件选股 */
    QotGetCodeChange: { cmd: 3216, name: 'Qot_GetCodeChange', description: '获取股票代码变化信息' }, /**< 获取股票代码变化信息*/
    QotGetIpoList: { cmd: 3217, name: 'Qot_GetIpoList', description: '获取新股IPO' }, /**< 获取新股IPO */
    QotGetFutureInfo: { cmd: 3218, name: 'Qot_GetFutureInfo', description: '获取期货合约资料' }, /**< 获取期货合约资料 */
    QotRequestTradeDate: { cmd: 3219, name: 'Qot_RequestTradeDate', description: '获取市场交易日' }, /**< 获取市场交易日 */
    QotSetPriceReminder: { cmd: 3220, name: 'Qot_SetPriceReminder', description: '设置到价提醒' }, /**< 设置到价提醒 */
    QotGetPriceReminder: { cmd: 3221, name: 'Qot_GetPriceReminder', description: '获取到价提醒' }, /**< 获取到价提醒 */
    QotGetUserSecurityGroup: { cmd: 3222, name: 'Qot_GetUserSecurityGroup', description: '获取自选股分组列表' }, /**< 获取自选股分组列表 */
    QotGetMarketState: { cmd: 3223, name: 'Qot_GetMarketState', description: '获取股票对应市场状态' }, /**< 获取股票对应市场状态 */
    QotGetOptionExpirationDate: { cmd: 3224, name: 'Qot_GetOptionExpirationDate', description: '获取期权链到期日' }, /**< 获取期权链到期日 */

    // 交易协议
    TrdGetAccList: { cmd: 2001, name: 'Trd_GetAccList', description: '获取交易账户列表' }, /**< 获取交易账户列表 */
    TrdUnlockTrade: { cmd: 2005, name: 'Trd_UnlockTrade', description: '解锁或锁定交易' }, /**< 解锁或锁定交易 */
    TrdSubAccPush: { cmd: 2008, name: 'Trd_SubAccPush', description: '订阅接收推送数据的交易账户' }, /**< 订阅接收推送数据的交易账户 */
    TrdGetFunds: { cmd: 2101, name: 'Trd_GetFunds', description: '获取账户资金' }, /**< 获取账户资金 */
    TrdGetPositionList: { cmd: 2102, name: 'Trd_GetPositionList', description: '获取账户持仓' }, /**< 获取账户持仓 */
    TrdGetMaxTrdQtys: { cmd: 2111, name: 'Trd_GetMaxTrdQtys', description: '获取最大交易数量' }, /**< 获取最大交易数量 */
    TrdGetOrderList: { cmd: 2201, name: 'Trd_GetOrderList', description: '获取订单列表' }, /**< 获取订单列表 */
    TrdPlaceOrder: { cmd: 2202, name: 'Trd_PlaceOrder', description: '下单' }, /**< 下单 */
    TrdModifyOrder: { cmd: 2205, name: 'Trd_ModifyOrder', description: '修改订单' }, /**< 修改订单 */
    TrdUpdateOrder: { cmd: 2208, name: 'Trd_UpdateOrder', description: '订单状态变动通知(推送)' }, /**< 订单状态变动通知(推送) */
    TrdGetOrderFillList: { cmd: 2211, name: 'Trd_GetOrderFillList', description: '获取成交列表' }, /**< 获取成交列表 */
    TrdUpdateOrderFill: { cmd: 2218, name: 'Trd_UpdateOrderFill', description: '成交通知(推送)' }, /**< 成交通知(推送) */
    TrdGetHistoryOrderList: { cmd: 2221, name: 'Trd_GetHistoryOrderList', description: '获取历史订单列表' }, /**< 获取历史订单列表 */
    TrdGetHistoryOrderFillList: { cmd: 2222, name: 'Trd_GetHistoryOrderFillList', description: '获取历史成交列表' }, /**< 获取历史成交列表 */
	TrdGetMarginRatio: { cmd: 2223, name: 'Trd_GetMarginRatio', description: '获取融资融券数据' }, /**< 获取融资融券数据 */
}

class ftWebsocket {
    constructor() {
        this.websock = null;
        this.onlogin = null;
        this.onPush = null;
    }

    static findCmdObj(cmd) {
        for (let key in ftCmdID) {
            if (ftCmdID[key].cmd == cmd) {
                return ftCmdID[key];
            }
        }
        return null;
    }

    start(ip, port, ssl, key) {
        if (this.websock == null || this.websock == undefined) {
            this.websock = new ftWebsocketBase()
            this.websock.regPushCallback(this, this._onPush.bind(this));
        }
        else {
            this.websock.close();
        }
        this.websock.setWsConfig(ip, port, ssl);

        let message = null;
        let keyMD5 = "";
        if (key) {
            keyMD5 = crypto.createHash("md5").update(key).digest("hex");
        }
        const InitWebSocketPBMessageRequest = protoRoot.lookup("InitWebSocket.Request"); // 请求体message
        let initWebSocketReq = {
            c2s: {
                websocketKey: keyMD5,
                programmingLanguage: "JavaScript"
            }
        };
        message = InitWebSocketPBMessageRequest.encode(
            InitWebSocketPBMessageRequest.create(initWebSocketReq)
        ).finish();
        this.websock.initWebSocket(message);

        this.websock.onlogin = (ret, msg) => {
            if (this.onlogin && typeof this.onlogin == 'function') {
                this.onlogin(ret, msg)
            }
        };
    }

    getConnID() {
        return this.websock.connID;
    }

	/**
	* @brief 订阅，反订阅
	* @param [in] stReq 请求包，具体字段请参考Qot_Sub.proto协议
	*/
    Sub(req) {
        return this._sendCmd(ftCmdID.QotSub.cmd, req, ftCmdID.QotSub.name);
    }
    /**
     * @brief 获取交易帐号列表
     * @param [in] stReq 请求包，具体字段请参考Trd_GetAccList.proto协议
     */
    GetAccList(req) {
        return this._sendCmd(ftCmdID.TrdGetAccList.cmd, req, ftCmdID.TrdGetAccList.name);
    }
	/**
	* @brief 解锁，针对OpenD解锁一次即可
	* @param [in] stReq 请求包，具体字段请参考Trd_UnlockTrade.proto协议
	*/
    UnlockTrade(req) {
        return this._sendCmd(ftCmdID.TrdUnlockTrade.cmd, req, ftCmdID.TrdUnlockTrade.name);
    }
	/**
	* @brief 订阅接收推送数据的交易账户
	* @param [in] stReq 请求包，具体字段请参考Trd_SubAccPush.proto协议
	*/
    SubAccPush(req) {
        return this._sendCmd(ftCmdID.TrdSubAccPush.cmd, req, ftCmdID.TrdSubAccPush.name);
    }
	/**
	* @brief 获取账户资金
	* @param [in] stReq 请求包，具体字段请参考Trd_GetFunds.proto协议
	*/
    GetFunds(req) {
        return this._sendCmd(ftCmdID.TrdGetFunds.cmd, req, ftCmdID.TrdGetFunds.name);
    }
	/**
	* @brief 获取账户持仓
	* @param [in] stReq 请求包，具体字段请参考Trd_GetPositionList.proto协议
	*/
    GetPositionList(req) {
        return this._sendCmd(ftCmdID.TrdGetPositionList.cmd, req, ftCmdID.TrdGetPositionList.name);
    }
	/**
	* @brief 获取最大交易数量
	* @param [in] stReq 请求包，具体字段请参考Trd_GetMaxTrdQtys.proto协议
	*/
    GetMaxTrdQtys(req) {
        return this._sendCmd(ftCmdID.TrdGetMaxTrdQtys.cmd, req, ftCmdID.TrdGetMaxTrdQtys.name);
    }
	/**
	* @brief 获取当日订单列表
	* @param [in] stReq 请求包，具体字段请参考Trd_GetOrderList.proto协议
	*/
    GetOrderList(req) {
        return this._sendCmd(ftCmdID.TrdGetOrderList.cmd, req, ftCmdID.TrdGetOrderList.name);
    }
	/**
	* @brief 下单
	* @param [in] stReq 请求包，具体字段请参考Trd_PlaceOrder.proto协议，PacketID不需填写，发送时接口会填
	*/
    PlaceOrder(req) {
        return this._sendCmd(ftCmdID.TrdPlaceOrder.cmd, req, ftCmdID.TrdPlaceOrder.name);
    }
	/**
	* @brief 修改订单
	* @param [in] stReq 请求包，具体字段请参考Trd_ModifyOrder.proto协议，PacketID不需填写，发送时接口会填
	*/
    ModifyOrder(req) {
        return this._sendCmd(ftCmdID.TrdModifyOrder.cmd, req, ftCmdID.TrdModifyOrder.name);
    }
	/**
	* @brief 获取当日成交列表
	* @param [in] stReq 请求包，具体字段请参考Trd_GetOrderFillList.proto协议
	*/
    GetOrderFillList(req) {
        return this._sendCmd(ftCmdID.TrdGetOrderFillList.cmd, req, ftCmdID.TrdGetOrderFillList.name);
    }
	/**
	* @brief 获取历史订单列表
	* @param [in] stReq 请求包，具体字段请参考Trd_GetHistoryOrderList.proto协议
	*/
    GetHistoryOrderList(req) {
        return this._sendCmd(ftCmdID.TrdGetHistoryOrderList.cmd, req, ftCmdID.TrdGetHistoryOrderList.name);
    }
	/**
	* @brief 获取历史成交列表
	* @param [in] stReq 请求包，具体字段请参考Trd_GetHistoryOrderFillList.proto协议
	*/
    GetHistoryOrderFillList(req) {
        return this._sendCmd(ftCmdID.TrdGetHistoryOrderFillList.cmd, req, ftCmdID.TrdGetHistoryOrderFillList.name);
    }
	/**
	* @brief 获取融资融券数据
	* @param [in] stReq 请求包，具体字段请参考Trd_GetMarginRatio.proto协议
	*/
    GetMarginRatio(req) {
        return this._sendCmd(ftCmdID.TrdGetMarginRatio.cmd, req, ftCmdID.TrdGetMarginRatio.name);
    }

    /**
	* @brief 请求全局状态
	* @praram 具体字段请参考GetGlobalState.proto协议
	*/
    GetGlobalState(req) {
        return this._sendCmd(ftCmdID.GetGlobalState.cmd, req, ftCmdID.GetGlobalState.name);
    }
	/**
	* @brief 注册推送
	* @param 具体字段请参考Qot_RegQotPush.proto协议
	*/
    RegQotPush(req) {
        return this._sendCmd(ftCmdID.QotRegQotPush.cmd, req, ftCmdID.QotRegQotPush.name);
    }
	/**
	* @brief 获取订阅信息
	* @praram 具体字段请参考Qot_GetSubInfo.proto协议
	*/
    GetSubInfo(req) {
        return this._sendCmd(ftCmdID.QotGetSubInfo.cmd, req, ftCmdID.QotGetSubInfo.name);
    }
	/**
	* @brief 获取逐笔
	* @praram 具体字段请参考Qot_GetTicker.proto协议
	*/
    GetTicker(req) {
        return this._sendCmd(ftCmdID.QotGetTicker.cmd, req, ftCmdID.QotGetTicker.name);
    }
	/**
	* @brief 获取报价
	* @praram 具体字段请参考Qot_GetBasicQot.proto协议
	*/
    GetBasicQot(req) {
        return this._sendCmd(ftCmdID.QotGetBasicQot.cmd, req, ftCmdID.QotGetBasicQot.name);
    }
	/**
	* @brief 获取摆盘
	* @praram 具体字段请参考Qot_GetOrderBook.proto协议
	*/
    GetOrderBook(req) {
        return this._sendCmd(ftCmdID.QotGetOrderBook.cmd, req, ftCmdID.QotGetOrderBook.name);
    }
	/**
	* @brief 获取K线
	* @praram 具体字段请参考Qot_GetKL.proto协议
	*/
    GetKL(req) {
        return this._sendCmd(ftCmdID.QotGetKL.cmd, req, ftCmdID.QotGetKL.name);
    }
	/**
	* @brief 获取分时
	* @praram 具体字段请参考Qot_GetRT.proto协议
	*/
    GetRT(req) {
        return this._sendCmd(ftCmdID.QotGetRT.cmd, req, ftCmdID.QotGetRT.name);
    }
	/**
	* @brief 获取经纪队列
	* @praram 具体字段请参考Qot_GetBroker.proto协议
	*/
    GetBroker(req) {
        return this._sendCmd(ftCmdID.QotGetBroker.cmd, req, ftCmdID.QotGetBroker.name);
    }
	/**
	* @brief 在线请求历史复权信息，不读本地历史数据DB
	* @praram 具体字段请参考Qot_RequestRehab.proto协议
	*/
    RequestRehab(req) {
        return this._sendCmd(ftCmdID.QotRequestRehab.cmd, req, ftCmdID.QotRequestRehab.name);
    }
	/**
	* @brief 在线请求历史K线，不读本地历史数据DB
	* @praram 具体字段请参考Qot_RequestHistoryKL.proto协议
	*/
    RequestHistoryKL(req) {
        return this._sendCmd(ftCmdID.QotRequestHistoryKL.cmd, req, ftCmdID.QotRequestHistoryKL.name);
    }
	/**
	* @brief 获取历史K线已经用掉的额度 
	* @praram 具体字段请参考Qot_RequestHistoryKLQuota.proto协议
	*/
    RequestHistoryKLQuota(req) {
        return this._sendCmd(ftCmdID.QotRequestHistoryKLQuota.cmd, req, ftCmdID.QotRequestHistoryKLQuota.name);
    }
	/**
	* @brief 获取交易日
	* @praram 具体字段请参考Qot_GetTradeDate.proto协议
	*/
    GetTradeDate(req) {
        return this._sendCmd(ftCmdID.QotGetTradeDate.cmd, req, ftCmdID.QotGetTradeDate.name);
    }
	/**
	* @brief 获取静态信息
	* @praram 具体字段请参考Qot_GetStaticInfo.proto协议
	*/
    GetStaticInfo(req) {
        return this._sendCmd(ftCmdID.QotGetStaticInfo.cmd, req, ftCmdID.QotGetStaticInfo.name);
    }
	/**
	* @brief 获取股票快照
	* @praram 具体字段请参考Qot_GetSecuritySnapshot.proto协议
	*/
    GetSecuritySnapshot(req) {
        return this._sendCmd(ftCmdID.QotGetSecuritySnapshot.cmd, req, ftCmdID.QotGetSecuritySnapshot.name);
    }
	/**
	* @brief 获取板块集合下的板块
	* @praram 具体字段请参考Qot_GetPlateSet.proto协议
	*/
    GetPlateSet(req) {
        return this._sendCmd(ftCmdID.QotGetPlateSet.cmd, req, ftCmdID.QotGetPlateSet.name);
    }
	/**
	* @brief 获取板块下的股票
	* @praram 具体字段请参考Qot_GetPlateSecurity.proto协议
	*/
    GetPlateSecurity(req) {
        return this._sendCmd(ftCmdID.QotGetPlateSecurity.cmd, req, ftCmdID.QotGetPlateSecurity.name);
    }
	/**
	* @brief 获取相关股票
	* @praram 具体字段请参考Qot_GetReference.proto协议
	*/
    GetReference(req) {
        return this._sendCmd(ftCmdID.QotGetReference.cmd, req, ftCmdID.QotGetReference.name);
    }
	/**
	* @brief 获取股票所属的板块
	* @praram 具体字段请参考Qot_GetOwnerPlate.proto协议
	*/
    GetOwnerPlate(req) {
        return this._sendCmd(ftCmdID.QotGetOwnerPlate.cmd, req, ftCmdID.QotGetOwnerPlate.name);
    }
	/**
	* @brief 获取大股东持股变化列表
	* @praram 具体字段请参考Qot_GetHoldingChangeList.proto协议
	*/
    GetHoldingChangeList(req) {
        return this._sendCmd(ftCmdID.QotGetHoldingChangeList.cmd, req, ftCmdID.QotGetHoldingChangeList.name);
    }
	/**
	* @brief 筛选期权
	* @praram 具体字段请参考Qot_GetOptionChain.proto协议
	*/
    GetOptionChain(req) {
        return this._sendCmd(ftCmdID.QotGetOptionChain.cmd, req, ftCmdID.QotGetOptionChain.name);
    }
	/**
	* @brief 筛选窝轮
	* @praram 具体字段请参考Qot_GetWarrant.proto协议
	*/
    GetWarrant(req) {
        return this._sendCmd(ftCmdID.QotGetWarrant.cmd, req, ftCmdID.QotGetWarrant.name);
    }
	/**
	* @brief 获取资金流向
	* @praram 具体字段请参考Qot_GetCapitalFlow.proto协议
	*/
    GetCapitalFlow(req) {
        return this._sendCmd(ftCmdID.QotGetCapitalFlow.cmd, req, ftCmdID.QotGetCapitalFlow.name);
    }
	/**
	* @brief 获取资金分布
	* @praram 具体字段请参考Qot_GetCapitalDistribution.proto协议
	*/
    GetCapitalDistribution(req) {
        return this._sendCmd(ftCmdID.QotGetCapitalDistribution.cmd, req, ftCmdID.QotGetCapitalDistribution.name);
    }
	/**
	* @brief 获取自选股分组下的股票
	* @praram 具体字段请参考Qot_GetUserSecurity.proto协议
	*/
    GetUserSecurity(req) {
        return this._sendCmd(ftCmdID.QotGetUserSecurity.cmd, req, ftCmdID.QotGetUserSecurity.name);
    }
	/**
	* @brief 修改自选股分组下的股票
	* @praram 具体字段请参考Qot_ModifyUserSecurity.proto协议
	*/
    ModifyUserSecurity(req) {
        return this._sendCmd(ftCmdID.QotModifyUserSecurity.cmd, req, ftCmdID.QotModifyUserSecurity.name);
    }
	/**
	* @brief 条件选股
	* @praram 具体字段请参考Qot_StockFilter.proto协议
	*/
    StockFilter(req) {
        return this._sendCmd(ftCmdID.QotStockFilter.cmd, req, ftCmdID.QotStockFilter.name);
    }
	/**
	* @brief 获取股票代码变化信息
	* @praram 具体字段请参考Qot_GetCodeChange.proto协议
	*/
    GetCodeChange(req) {
        return this._sendCmd(ftCmdID.QotGetCodeChange.cmd, req, ftCmdID.QotGetCodeChange.name);
    }
	/**
	* @brief 新股IPO
	* @praram 具体字段请参考Qot_GetIpoList.proto协议
	*/
    GetIpoList(req) {
        return this._sendCmd(ftCmdID.QotGetIpoList.cmd, req, ftCmdID.QotGetIpoList.name);
    }
    /**
	* @brief 期货合约资料
	* @praram 具体字段请参考Qot_GetFutureInfo.proto协议
	*/
    GetFutureInfo(req) {
        return this._sendCmd(ftCmdID.QotGetFutureInfo.cmd, req, ftCmdID.QotGetFutureInfo.name);
    }
    /**
	* @brief 获取市场交易日
	* @praram 具体字段请参考QotRequestTradeDate.proto协议
	*/
    RequestTradeDate(req) {
        return this._sendCmd(ftCmdID.QotRequestTradeDate.cmd, req, ftCmdID.QotRequestTradeDate.name);
    }
	/**
	* @brief 设置到价提醒
	* @praram 具体字段请参考QotSetPriceReminder.proto协议
	*/
    SetPriceReminder(req) {
        return this._sendCmd(ftCmdID.QotSetPriceReminder.cmd, req, ftCmdID.QotSetPriceReminder.name);
    }
	/**
	* @brief 获取到价提醒
	* @praram 具体字段请参考QotGetPriceReminder.proto协议
	*/
    GetPriceReminder(req) {
        return this._sendCmd(ftCmdID.QotGetPriceReminder.cmd, req, ftCmdID.QotGetPriceReminder.name);
    }
	/**
	* @brief 获取自选股分组列表
	* @praram 具体字段请参考QotGetUserSecurityGroup.proto协议
	*/
    GetUserSecurityGroup(req) {
        return this._sendCmd(ftCmdID.QotGetUserSecurityGroup.cmd, req, ftCmdID.QotGetUserSecurityGroup.name);
    }
    /**
	* @brief 获取股票对应市场状态
	* @praram 具体字段请参考QotGetMarketState.proto协议
	*/
    GetMarketState(req) {
        return this._sendCmd(ftCmdID.QotGetMarketState.cmd, req, ftCmdID.QotGetMarketState.name);
    }
    /**
	* @brief 获取期权链到期日
	* @praram 具体字段请参考QotGetOptionExpirationDate.proto协议
	*/
    GetOptionExpirationDate(req) {
        return this._sendCmd(ftCmdID.QotGetOptionExpirationDate.cmd, req, ftCmdID.QotGetOptionExpirationDate.name);
    }
    //=============================================
    /**
	* @brief 发送数据
	*/
    _sendCmd(cmd, buff, name) {
        return new Promise((resolve, reject) => {
            if (cmd == null || name == null || name == undefined) {
                reject('error parameter');
                return;
            }
            if (this.websock == null || this.websock == undefined) {
                reject('websock is null');
                return
            }
            const PBMessageRequest = protoRoot.lookup(name + ".Request"); // 请求体message
            let message = PBMessageRequest.encode(PBMessageRequest.create(buff)).finish();
            this.websock.sendBuff(cmd, message)
                .then(response => {
                    if (response.buff) {
                        const PBMessageResponse = protoRoot.lookup(
                            name + ".Response"
                        ); // 回包message
                        const buf = protobuf.util.newBuffer(response.buff);
                        const ResponseObj = PBMessageResponse.decode(buf);
                        if (ResponseObj.retType != null && ResponseObj.retType != undefined && ResponseObj.retType === 0) {
                            resolve(ResponseObj)
                        }
                        else {
                            reject(ResponseObj);
                        }
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    stop() {
        if (this.websock != null && this.websock != undefined) {
            this.websock.unregPushCallback(this);
        }
    }

    _onPush(response) {
        if (response && response.cmd) {
            if (this.onPush && typeof this.onPush == 'function') {
                if (response.error == 0 && response.buff) {  //成功的推送
                    let obj = ftWebsocket.findCmdObj(response.cmd)
                    if (obj != null && obj.name) {
                        const NotifyPBMessageResponse = protoRoot.lookup(obj.name + ".Response");
                        const buf = protobuf.util.newBuffer(response.buff);
                        const notifyObj = NotifyPBMessageResponse.decode(buf);
                        this.onPush(response.cmd, notifyObj);
                    }
                }
            }
        }
    }

}

export default ftWebsocket
