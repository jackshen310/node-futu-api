/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  Common: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/common"
    },
    nested: {
      RetType: {
        values: {
          RetType_Succeed: 0,
          RetType_Failed: -1,
          RetType_TimeOut: -100,
          RetType_DisConnect: -200,
          RetType_Unknown: -400,
          RetType_Invalid: -500
        }
      },
      PacketEncAlgo: {
        values: {
          PacketEncAlgo_FTAES_ECB: 0,
          PacketEncAlgo_None: -1,
          PacketEncAlgo_AES_ECB: 1,
          PacketEncAlgo_AES_CBC: 2
        }
      },
      PacketID: {
        fields: {
          connID: {
            rule: "required",
            type: "uint64",
            id: 1
          },
          serialNo: {
            rule: "required",
            type: "uint32",
            id: 2
          }
        }
      },
      ProtoFmt: {
        values: {
          ProtoFmt_Protobuf: 0,
          ProtoFmt_Json: 1
        }
      },
      UserAttribution: {
        values: {
          UserAttribution_Unknown: 0,
          UserAttribution_NN: 1,
          UserAttribution_MM: 2,
          UserAttribution_SG: 3
        }
      },
      ProgramStatusType: {
        values: {
          ProgramStatusType_None: 0,
          ProgramStatusType_Loaded: 1,
          ProgramStatusType_Loging: 2,
          ProgramStatusType_NeedPicVerifyCode: 3,
          ProgramStatusType_NeedPhoneVerifyCode: 4,
          ProgramStatusType_LoginFailed: 5,
          ProgramStatusType_ForceUpdate: 6,
          ProgramStatusType_NessaryDataPreparing: 7,
          ProgramStatusType_NessaryDataMissing: 8,
          ProgramStatusType_UnAgreeDisclaimer: 9,
          ProgramStatusType_Ready: 10,
          ProgramStatusType_ForceLogout: 11,
          ProgramStatusType_DisclaimerPullFailed: 12
        }
      },
      ProgramStatus: {
        fields: {
          type: {
            rule: "required",
            type: "ProgramStatusType",
            id: 1
          },
          strExtDesc: {
            type: "string",
            id: 2
          }
        }
      }
    }
  },
  GetDelayStatistics: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/getdelaystatistics"
    },
    nested: {
      DelayStatisticsType: {
        values: {
          DelayStatisticsType_Unkonw: 0,
          DelayStatisticsType_QotPush: 1,
          DelayStatisticsType_ReqReply: 2,
          DelayStatisticsType_PlaceOrder: 3
        }
      },
      QotPushStage: {
        values: {
          QotPushStage_Unkonw: 0,
          QotPushStage_SR2SS: 1,
          QotPushStage_SS2CR: 2,
          QotPushStage_CR2CS: 3,
          QotPushStage_SS2CS: 4,
          QotPushStage_SR2CS: 5
        }
      },
      QotPushType: {
        values: {
          QotPushType_Unkonw: 0,
          QotPushType_Price: 1,
          QotPushType_Ticker: 2,
          QotPushType_OrderBook: 3,
          QotPushType_Broker: 4
        }
      },
      C2S: {
        fields: {
          typeList: {
            rule: "repeated",
            type: "int32",
            id: 1,
            options: {
              packed: false
            }
          },
          qotPushStage: {
            type: "int32",
            id: 2
          },
          segmentList: {
            rule: "repeated",
            type: "int32",
            id: 3,
            options: {
              packed: false
            }
          }
        }
      },
      DelayStatisticsItem: {
        fields: {
          begin: {
            rule: "required",
            type: "int32",
            id: 1
          },
          end: {
            rule: "required",
            type: "int32",
            id: 2
          },
          count: {
            rule: "required",
            type: "int32",
            id: 3
          },
          proportion: {
            rule: "required",
            type: "float",
            id: 4
          },
          cumulativeRatio: {
            rule: "required",
            type: "float",
            id: 5
          }
        }
      },
      DelayStatistics: {
        fields: {
          qotPushType: {
            rule: "required",
            type: "int32",
            id: 1
          },
          itemList: {
            rule: "repeated",
            type: "DelayStatisticsItem",
            id: 2
          },
          delayAvg: {
            rule: "required",
            type: "float",
            id: 3
          },
          count: {
            rule: "required",
            type: "int32",
            id: 4
          }
        }
      },
      ReqReplyStatisticsItem: {
        fields: {
          protoID: {
            rule: "required",
            type: "int32",
            id: 1
          },
          count: {
            rule: "required",
            type: "int32",
            id: 2
          },
          totalCostAvg: {
            rule: "required",
            type: "float",
            id: 3
          },
          openDCostAvg: {
            rule: "required",
            type: "float",
            id: 4
          },
          netDelayAvg: {
            rule: "required",
            type: "float",
            id: 5
          },
          isLocalReply: {
            rule: "required",
            type: "bool",
            id: 6
          }
        }
      },
      PlaceOrderStatisticsItem: {
        fields: {
          orderID: {
            rule: "required",
            type: "string",
            id: 1
          },
          totalCost: {
            rule: "required",
            type: "float",
            id: 2
          },
          openDCost: {
            rule: "required",
            type: "float",
            id: 3
          },
          netDelay: {
            rule: "required",
            type: "float",
            id: 4
          },
          updateCost: {
            rule: "required",
            type: "float",
            id: 5
          }
        }
      },
      S2C: {
        fields: {
          qotPushStatisticsList: {
            rule: "repeated",
            type: "DelayStatistics",
            id: 1
          },
          reqReplyStatisticsList: {
            rule: "repeated",
            type: "ReqReplyStatisticsItem",
            id: 2
          },
          placeOrderStatisticsList: {
            rule: "repeated",
            type: "PlaceOrderStatisticsItem",
            id: 3
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  GetGlobalState: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/getglobalstate"
    },
    nested: {
      C2S: {
        fields: {
          userID: {
            rule: "required",
            type: "uint64",
            id: 1
          }
        }
      },
      S2C: {
        fields: {
          marketHK: {
            rule: "required",
            type: "int32",
            id: 1
          },
          marketUS: {
            rule: "required",
            type: "int32",
            id: 2
          },
          marketSH: {
            rule: "required",
            type: "int32",
            id: 3
          },
          marketSZ: {
            rule: "required",
            type: "int32",
            id: 4
          },
          marketHKFuture: {
            rule: "required",
            type: "int32",
            id: 5
          },
          marketUSFuture: {
            type: "int32",
            id: 15
          },
          marketSGFuture: {
            type: "int32",
            id: 17
          },
          marketJPFuture: {
            type: "int32",
            id: 18
          },
          qotLogined: {
            rule: "required",
            type: "bool",
            id: 6
          },
          trdLogined: {
            rule: "required",
            type: "bool",
            id: 7
          },
          serverVer: {
            rule: "required",
            type: "int32",
            id: 8
          },
          serverBuildNo: {
            rule: "required",
            type: "int32",
            id: 9
          },
          time: {
            rule: "required",
            type: "int64",
            id: 10
          },
          localTime: {
            type: "double",
            id: 11
          },
          programStatus: {
            type: "Common.ProgramStatus",
            id: 12
          },
          qotSvrIpAddr: {
            type: "string",
            id: 13
          },
          trdSvrIpAddr: {
            type: "string",
            id: 14
          },
          connID: {
            type: "uint64",
            id: 16
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_Common: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotcommon"
    },
    nested: {
      QotMarket: {
        values: {
          QotMarket_Unknown: 0,
          QotMarket_HK_Security: 1,
          QotMarket_HK_Future: 2,
          QotMarket_US_Security: 11,
          QotMarket_CNSH_Security: 21,
          QotMarket_CNSZ_Security: 22,
          QotMarket_SG_Security: 31,
          QotMarket_JP_Security: 41
        }
      },
      SecurityType: {
        values: {
          SecurityType_Unknown: 0,
          SecurityType_Bond: 1,
          SecurityType_Bwrt: 2,
          SecurityType_Eqty: 3,
          SecurityType_Trust: 4,
          SecurityType_Warrant: 5,
          SecurityType_Index: 6,
          SecurityType_Plate: 7,
          SecurityType_Drvt: 8,
          SecurityType_PlateSet: 9,
          SecurityType_Future: 10
        }
      },
      PlateSetType: {
        values: {
          PlateSetType_All: 0,
          PlateSetType_Industry: 1,
          PlateSetType_Region: 2,
          PlateSetType_Concept: 3,
          PlateSetType_Other: 4
        }
      },
      WarrantType: {
        values: {
          WarrantType_Unknown: 0,
          WarrantType_Buy: 1,
          WarrantType_Sell: 2,
          WarrantType_Bull: 3,
          WarrantType_Bear: 4,
          WarrantType_InLine: 5
        }
      },
      OptionType: {
        values: {
          OptionType_Unknown: 0,
          OptionType_Call: 1,
          OptionType_Put: 2
        }
      },
      IndexOptionType: {
        values: {
          IndexOptionType_Unknown: 0,
          IndexOptionType_Normal: 1,
          IndexOptionType_Small: 2
        }
      },
      OptionAreaType: {
        values: {
          OptionAreaType_Unknown: 0,
          OptionAreaType_American: 1,
          OptionAreaType_European: 2,
          OptionAreaType_Bermuda: 3
        }
      },
      QotMarketState: {
        values: {
          QotMarketState_None: 0,
          QotMarketState_Auction: 1,
          QotMarketState_WaitingOpen: 2,
          QotMarketState_Morning: 3,
          QotMarketState_Rest: 4,
          QotMarketState_Afternoon: 5,
          QotMarketState_Closed: 6,
          QotMarketState_PreMarketBegin: 8,
          QotMarketState_PreMarketEnd: 9,
          QotMarketState_AfterHoursBegin: 10,
          QotMarketState_AfterHoursEnd: 11,
          QotMarketState_NightOpen: 13,
          QotMarketState_NightEnd: 14,
          QotMarketState_FutureDayOpen: 15,
          QotMarketState_FutureDayBreak: 16,
          QotMarketState_FutureDayClose: 17,
          QotMarketState_FutureDayWaitForOpen: 18,
          QotMarketState_HkCas: 19,
          QotMarketState_FutureNightWait: 20,
          QotMarketState_FutureAfternoon: 21,
          QotMarketState_FutureSwitchDate: 22,
          QotMarketState_FutureOpen: 23,
          QotMarketState_FutureBreak: 24,
          QotMarketState_FutureBreakOver: 25,
          QotMarketState_FutureClose: 26,
          QotMarketState_StibAfterHoursWait: 27,
          QotMarketState_StibAfterHoursBegin: 28,
          QotMarketState_StibAfterHoursEnd: 29
        }
      },
      TradeDateMarket: {
        values: {
          TradeDateMarket_Unknown: 0,
          TradeDateMarket_HK: 1,
          TradeDateMarket_US: 2,
          TradeDateMarket_CN: 3,
          TradeDateMarket_NT: 4,
          TradeDateMarket_ST: 5,
          TradeDateMarket_JP_Future: 6,
          TradeDateMarket_SG_Future: 7
        }
      },
      TradeDateType: {
        values: {
          TradeDateType_Whole: 0,
          TradeDateType_Morning: 1,
          TradeDateType_Afternoon: 2
        }
      },
      RehabType: {
        values: {
          RehabType_None: 0,
          RehabType_Forward: 1,
          RehabType_Backward: 2
        }
      },
      KLType: {
        values: {
          KLType_Unknown: 0,
          KLType_1Min: 1,
          KLType_Day: 2,
          KLType_Week: 3,
          KLType_Month: 4,
          KLType_Year: 5,
          KLType_5Min: 6,
          KLType_15Min: 7,
          KLType_30Min: 8,
          KLType_60Min: 9,
          KLType_3Min: 10,
          KLType_Quarter: 11
        }
      },
      KLFields: {
        values: {
          KLFields_None: 0,
          KLFields_High: 1,
          KLFields_Open: 2,
          KLFields_Low: 4,
          KLFields_Close: 8,
          KLFields_LastClose: 16,
          KLFields_Volume: 32,
          KLFields_Turnover: 64,
          KLFields_TurnoverRate: 128,
          KLFields_PE: 256,
          KLFields_ChangeRate: 512
        }
      },
      SubType: {
        values: {
          SubType_None: 0,
          SubType_Basic: 1,
          SubType_OrderBook: 2,
          SubType_Ticker: 4,
          SubType_RT: 5,
          SubType_KL_Day: 6,
          SubType_KL_5Min: 7,
          SubType_KL_15Min: 8,
          SubType_KL_30Min: 9,
          SubType_KL_60Min: 10,
          SubType_KL_1Min: 11,
          SubType_KL_Week: 12,
          SubType_KL_Month: 13,
          SubType_Broker: 14,
          SubType_KL_Qurater: 15,
          SubType_KL_Year: 16,
          SubType_KL_3Min: 17
        }
      },
      TickerDirection: {
        values: {
          TickerDirection_Unknown: 0,
          TickerDirection_Bid: 1,
          TickerDirection_Ask: 2,
          TickerDirection_Neutral: 3
        }
      },
      TickerType: {
        values: {
          TickerType_Unknown: 0,
          TickerType_Automatch: 1,
          TickerType_Late: 2,
          TickerType_NoneAutomatch: 3,
          TickerType_InterAutomatch: 4,
          TickerType_InterNoneAutomatch: 5,
          TickerType_OddLot: 6,
          TickerType_Auction: 7,
          TickerType_Bulk: 8,
          TickerType_Crash: 9,
          TickerType_CrossMarket: 10,
          TickerType_BulkSold: 11,
          TickerType_FreeOnBoard: 12,
          TickerType_Rule127Or155: 13,
          TickerType_Delay: 14,
          TickerType_MarketCenterClosePrice: 15,
          TickerType_NextDay: 16,
          TickerType_MarketCenterOpening: 17,
          TickerType_PriorReferencePrice: 18,
          TickerType_MarketCenterOpenPrice: 19,
          TickerType_Seller: 20,
          TickerType_T: 21,
          TickerType_ExtendedTradingHours: 22,
          TickerType_Contingent: 23,
          TickerType_AvgPrice: 24,
          TickerType_OTCSold: 25,
          TickerType_OddLotCrossMarket: 26,
          TickerType_DerivativelyPriced: 27,
          TickerType_ReOpeningPriced: 28,
          TickerType_ClosingPriced: 29,
          TickerType_ComprehensiveDelayPrice: 30,
          TickerType_Overseas: 31
        }
      },
      DarkStatus: {
        values: {
          DarkStatus_None: 0,
          DarkStatus_Trading: 1,
          DarkStatus_End: 2
        }
      },
      SecurityStatus: {
        values: {
          SecurityStatus_Unknown: 0,
          SecurityStatus_Normal: 1,
          SecurityStatus_Listing: 2,
          SecurityStatus_Purchasing: 3,
          SecurityStatus_Subscribing: 4,
          SecurityStatus_BeforeDrakTradeOpening: 5,
          SecurityStatus_DrakTrading: 6,
          SecurityStatus_DrakTradeEnd: 7,
          SecurityStatus_ToBeOpen: 8,
          SecurityStatus_Suspended: 9,
          SecurityStatus_Called: 10,
          SecurityStatus_ExpiredLastTradingDate: 11,
          SecurityStatus_Expired: 12,
          SecurityStatus_Delisted: 13,
          SecurityStatus_ChangeToTemporaryCode: 14,
          SecurityStatus_TemporaryCodeTradeEnd: 15,
          SecurityStatus_ChangedPlateTradeEnd: 16,
          SecurityStatus_ChangedCodeTradeEnd: 17,
          SecurityStatus_RecoverableCircuitBreaker: 18,
          SecurityStatus_UnRecoverableCircuitBreaker: 19,
          SecurityStatus_AfterCombination: 20,
          SecurityStatus_AfterTransation: 21
        }
      },
      HolderCategory: {
        values: {
          HolderCategory_Unknow: 0,
          HolderCategory_Agency: 1,
          HolderCategory_Fund: 2,
          HolderCategory_SeniorManager: 3
        }
      },
      PushDataType: {
        values: {
          PushDataType_Unknow: 0,
          PushDataType_Realtime: 1,
          PushDataType_ByDisConn: 2,
          PushDataType_Cache: 3
        }
      },
      SortField: {
        values: {
          SortField_Unknow: 0,
          SortField_Code: 1,
          SortField_CurPrice: 2,
          SortField_PriceChangeVal: 3,
          SortField_ChangeRate: 4,
          SortField_Status: 5,
          SortField_BidPrice: 6,
          SortField_AskPrice: 7,
          SortField_BidVol: 8,
          SortField_AskVol: 9,
          SortField_Volume: 10,
          SortField_Turnover: 11,
          SortField_Amplitude: 30,
          SortField_Score: 12,
          SortField_Premium: 13,
          SortField_EffectiveLeverage: 14,
          SortField_Delta: 15,
          SortField_ImpliedVolatility: 16,
          SortField_Type: 17,
          SortField_StrikePrice: 18,
          SortField_BreakEvenPoint: 19,
          SortField_MaturityTime: 20,
          SortField_ListTime: 21,
          SortField_LastTradeTime: 22,
          SortField_Leverage: 23,
          SortField_InOutMoney: 24,
          SortField_RecoveryPrice: 25,
          SortField_ChangePrice: 26,
          SortField_Change: 27,
          SortField_StreetRate: 28,
          SortField_StreetVol: 29,
          SortField_WarrantName: 31,
          SortField_Issuer: 32,
          SortField_LotSize: 33,
          SortField_IssueSize: 34,
          SortField_UpperStrikePrice: 45,
          SortField_LowerStrikePrice: 46,
          SortField_InLinePriceStatus: 47,
          SortField_PreCurPrice: 35,
          SortField_AfterCurPrice: 36,
          SortField_PrePriceChangeVal: 37,
          SortField_AfterPriceChangeVal: 38,
          SortField_PreChangeRate: 39,
          SortField_AfterChangeRate: 40,
          SortField_PreAmplitude: 41,
          SortField_AfterAmplitude: 42,
          SortField_PreTurnover: 43,
          SortField_AfterTurnover: 44,
          SortField_LastSettlePrice: 48,
          SortField_Position: 49,
          SortField_PositionChange: 50
        }
      },
      Issuer: {
        values: {
          Issuer_Unknow: 0,
          Issuer_SG: 1,
          Issuer_BP: 2,
          Issuer_CS: 3,
          Issuer_CT: 4,
          Issuer_EA: 5,
          Issuer_GS: 6,
          Issuer_HS: 7,
          Issuer_JP: 8,
          Issuer_MB: 9,
          Issuer_SC: 10,
          Issuer_UB: 11,
          Issuer_BI: 12,
          Issuer_DB: 13,
          Issuer_DC: 14,
          Issuer_ML: 15,
          Issuer_NM: 16,
          Issuer_RB: 17,
          Issuer_RS: 18,
          Issuer_BC: 19,
          Issuer_HT: 20,
          Issuer_VT: 21,
          Issuer_KC: 22,
          Issuer_MS: 23,
          Issuer_GJ: 24,
          Issuer_XZ: 25
        }
      },
      IpoPeriod: {
        values: {
          IpoPeriod_Unknow: 0,
          IpoPeriod_Today: 1,
          IpoPeriod_Tomorrow: 2,
          IpoPeriod_Nextweek: 3,
          IpoPeriod_Lastweek: 4,
          IpoPeriod_Lastmonth: 5
        }
      },
      PriceType: {
        values: {
          PriceType_Unknow: 0,
          PriceType_Outside: 1,
          PriceType_WithIn: 2
        }
      },
      WarrantStatus: {
        values: {
          WarrantStatus_Unknow: 0,
          WarrantStatus_Normal: 1,
          WarrantStatus_Suspend: 2,
          WarrantStatus_StopTrade: 3,
          WarrantStatus_PendingListing: 4
        }
      },
      CompanyAct: {
        values: {
          CompanyAct_None: 0,
          CompanyAct_Split: 1,
          CompanyAct_Join: 2,
          CompanyAct_Bonus: 4,
          CompanyAct_Transfer: 8,
          CompanyAct_Allot: 16,
          CompanyAct_Add: 32,
          CompanyAct_Dividend: 64,
          CompanyAct_SPDividend: 128
        }
      },
      QotRight: {
        values: {
          QotRight_Unknow: 0,
          QotRight_Bmp: 1,
          QotRight_Level1: 2,
          QotRight_Level2: 3,
          QotRight_SF: 4,
          QotRight_No: 5
        }
      },
      PriceReminderType: {
        values: {
          PriceReminderType_Unknown: 0,
          PriceReminderType_PriceUp: 1,
          PriceReminderType_PriceDown: 2,
          PriceReminderType_ChangeRateUp: 3,
          PriceReminderType_ChangeRateDown: 4,
          PriceReminderType_5MinChangeRateUp: 5,
          PriceReminderType_5MinChangeRateDown: 6,
          PriceReminderType_VolumeUp: 7,
          PriceReminderType_TurnoverUp: 8,
          PriceReminderType_TurnoverRateUp: 9,
          PriceReminderType_BidPriceUp: 10,
          PriceReminderType_AskPriceDown: 11,
          PriceReminderType_BidVolUp: 12,
          PriceReminderType_AskVolUp: 13,
          PriceReminderType_3MinChangeRateUp: 14,
          PriceReminderType_3MinChangeRateDown: 15
        }
      },
      PriceReminderFreq: {
        values: {
          PriceReminderFreq_Unknown: 0,
          PriceReminderFreq_Always: 1,
          PriceReminderFreq_OnceADay: 2,
          PriceReminderFreq_OnlyOnce: 3
        }
      },
      AssetClass: {
        values: {
          AssetClass_Unknow: 0,
          AssetClass_Stock: 1,
          AssetClass_Bond: 2,
          AssetClass_Commodity: 3,
          AssetClass_CurrencyMarket: 4,
          AssetClass_Future: 5,
          AssetClass_Swap: 6
        }
      },
      ExpirationCycle: {
        values: {
          ExpirationCycle_Unknown: 0,
          ExpirationCycle_Week: 1,
          ExpirationCycle_Month: 2
        }
      },
      ExchType: {
        values: {
          ExchType_Unknown: 0,
          ExchType_HK_MainBoard: 1,
          ExchType_HK_GEMBoard: 2,
          ExchType_HK_HKEX: 3,
          ExchType_US_NYSE: 4,
          ExchType_US_Nasdaq: 5,
          ExchType_US_Pink: 6,
          ExchType_US_AMEX: 7,
          ExchType_US_Option: 8,
          ExchType_US_NYMEX: 9,
          ExchType_US_COMEX: 10,
          ExchType_US_CBOT: 11,
          ExchType_US_CME: 12,
          ExchType_US_CBOE: 13,
          ExchType_CN_SH: 14,
          ExchType_CN_SZ: 15,
          ExchType_CN_STIB: 16,
          ExchType_SG_SGX: 17,
          ExchType_JP_OSE: 18
        }
      },
      PeriodType: {
        values: {
          PeriodType_Unknown: 0,
          PeriodType_INTRADAY: 1,
          PeriodType_DAY: 2,
          PeriodType_WEEK: 3,
          PeriodType_MONTH: 4
        }
      },
      Security: {
        fields: {
          market: {
            rule: "required",
            type: "int32",
            id: 1
          },
          code: {
            rule: "required",
            type: "string",
            id: 2
          }
        }
      },
      KLine: {
        fields: {
          time: {
            rule: "required",
            type: "string",
            id: 1
          },
          isBlank: {
            rule: "required",
            type: "bool",
            id: 2
          },
          highPrice: {
            type: "double",
            id: 3
          },
          openPrice: {
            type: "double",
            id: 4
          },
          lowPrice: {
            type: "double",
            id: 5
          },
          closePrice: {
            type: "double",
            id: 6
          },
          lastClosePrice: {
            type: "double",
            id: 7
          },
          volume: {
            type: "int64",
            id: 8
          },
          turnover: {
            type: "double",
            id: 9
          },
          turnoverRate: {
            type: "double",
            id: 10
          },
          pe: {
            type: "double",
            id: 11
          },
          changeRate: {
            type: "double",
            id: 12
          },
          timestamp: {
            type: "double",
            id: 13
          }
        }
      },
      OptionBasicQotExData: {
        fields: {
          strikePrice: {
            rule: "required",
            type: "double",
            id: 1
          },
          contractSize: {
            rule: "required",
            type: "int32",
            id: 2
          },
          contractSizeFloat: {
            type: "double",
            id: 17
          },
          openInterest: {
            rule: "required",
            type: "int32",
            id: 3
          },
          impliedVolatility: {
            rule: "required",
            type: "double",
            id: 4
          },
          premium: {
            rule: "required",
            type: "double",
            id: 5
          },
          delta: {
            rule: "required",
            type: "double",
            id: 6
          },
          gamma: {
            rule: "required",
            type: "double",
            id: 7
          },
          vega: {
            rule: "required",
            type: "double",
            id: 8
          },
          theta: {
            rule: "required",
            type: "double",
            id: 9
          },
          rho: {
            rule: "required",
            type: "double",
            id: 10
          },
          netOpenInterest: {
            type: "int32",
            id: 11
          },
          expiryDateDistance: {
            type: "int32",
            id: 12
          },
          contractNominalValue: {
            type: "double",
            id: 13
          },
          ownerLotMultiplier: {
            type: "double",
            id: 14
          },
          optionAreaType: {
            type: "int32",
            id: 15
          },
          contractMultiplier: {
            type: "double",
            id: 16
          },
          indexOptionType: {
            type: "int32",
            id: 18
          }
        }
      },
      PreAfterMarketData: {
        fields: {
          price: {
            type: "double",
            id: 1
          },
          highPrice: {
            type: "double",
            id: 2
          },
          lowPrice: {
            type: "double",
            id: 3
          },
          volume: {
            type: "int64",
            id: 4
          },
          turnover: {
            type: "double",
            id: 5
          },
          changeVal: {
            type: "double",
            id: 6
          },
          changeRate: {
            type: "double",
            id: 7
          },
          amplitude: {
            type: "double",
            id: 8
          }
        }
      },
      FutureBasicQotExData: {
        fields: {
          lastSettlePrice: {
            rule: "required",
            type: "double",
            id: 1
          },
          position: {
            rule: "required",
            type: "int32",
            id: 2
          },
          positionChange: {
            rule: "required",
            type: "int32",
            id: 3
          },
          expiryDateDistance: {
            type: "int32",
            id: 4
          }
        }
      },
      WarrantBasicQotExData: {
        fields: {
          delta: {
            type: "double",
            id: 1
          },
          impliedVolatility: {
            type: "double",
            id: 2
          },
          premium: {
            rule: "required",
            type: "double",
            id: 3
          }
        }
      },
      BasicQot: {
        fields: {
          security: {
            rule: "required",
            type: "Security",
            id: 1
          },
          isSuspended: {
            rule: "required",
            type: "bool",
            id: 2
          },
          listTime: {
            rule: "required",
            type: "string",
            id: 3
          },
          priceSpread: {
            rule: "required",
            type: "double",
            id: 4
          },
          updateTime: {
            rule: "required",
            type: "string",
            id: 5
          },
          highPrice: {
            rule: "required",
            type: "double",
            id: 6
          },
          openPrice: {
            rule: "required",
            type: "double",
            id: 7
          },
          lowPrice: {
            rule: "required",
            type: "double",
            id: 8
          },
          curPrice: {
            rule: "required",
            type: "double",
            id: 9
          },
          lastClosePrice: {
            rule: "required",
            type: "double",
            id: 10
          },
          volume: {
            rule: "required",
            type: "int64",
            id: 11
          },
          turnover: {
            rule: "required",
            type: "double",
            id: 12
          },
          turnoverRate: {
            rule: "required",
            type: "double",
            id: 13
          },
          amplitude: {
            rule: "required",
            type: "double",
            id: 14
          },
          darkStatus: {
            type: "int32",
            id: 15
          },
          optionExData: {
            type: "OptionBasicQotExData",
            id: 16
          },
          listTimestamp: {
            type: "double",
            id: 17
          },
          updateTimestamp: {
            type: "double",
            id: 18
          },
          preMarket: {
            type: "PreAfterMarketData",
            id: 19
          },
          afterMarket: {
            type: "PreAfterMarketData",
            id: 20
          },
          secStatus: {
            type: "int32",
            id: 21
          },
          futureExData: {
            type: "FutureBasicQotExData",
            id: 22
          },
          warrantExData: {
            type: "WarrantBasicQotExData",
            id: 23
          }
        }
      },
      TimeShare: {
        fields: {
          time: {
            rule: "required",
            type: "string",
            id: 1
          },
          minute: {
            rule: "required",
            type: "int32",
            id: 2
          },
          isBlank: {
            rule: "required",
            type: "bool",
            id: 3
          },
          price: {
            type: "double",
            id: 4
          },
          lastClosePrice: {
            type: "double",
            id: 5
          },
          avgPrice: {
            type: "double",
            id: 6
          },
          volume: {
            type: "int64",
            id: 7
          },
          turnover: {
            type: "double",
            id: 8
          },
          timestamp: {
            type: "double",
            id: 9
          }
        }
      },
      SecurityStaticBasic: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          id: {
            rule: "required",
            type: "int64",
            id: 2
          },
          lotSize: {
            rule: "required",
            type: "int32",
            id: 3
          },
          secType: {
            rule: "required",
            type: "int32",
            id: 4
          },
          name: {
            rule: "required",
            type: "string",
            id: 5
          },
          listTime: {
            rule: "required",
            type: "string",
            id: 6
          },
          delisting: {
            type: "bool",
            id: 7
          },
          listTimestamp: {
            type: "double",
            id: 8
          },
          exchType: {
            type: "int32",
            id: 9
          }
        }
      },
      WarrantStaticExData: {
        fields: {
          type: {
            rule: "required",
            type: "int32",
            id: 1
          },
          owner: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 2
          }
        }
      },
      OptionStaticExData: {
        fields: {
          type: {
            rule: "required",
            type: "int32",
            id: 1
          },
          owner: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 2
          },
          strikeTime: {
            rule: "required",
            type: "string",
            id: 3
          },
          strikePrice: {
            rule: "required",
            type: "double",
            id: 4
          },
          suspend: {
            rule: "required",
            type: "bool",
            id: 5
          },
          market: {
            rule: "required",
            type: "string",
            id: 6
          },
          strikeTimestamp: {
            type: "double",
            id: 7
          },
          indexOptionType: {
            type: "int32",
            id: 8
          }
        }
      },
      FutureStaticExData: {
        fields: {
          lastTradeTime: {
            rule: "required",
            type: "string",
            id: 1
          },
          lastTradeTimestamp: {
            type: "double",
            id: 2
          },
          isMainContract: {
            rule: "required",
            type: "bool",
            id: 3
          }
        }
      },
      SecurityStaticInfo: {
        fields: {
          basic: {
            rule: "required",
            type: "SecurityStaticBasic",
            id: 1
          },
          warrantExData: {
            type: "WarrantStaticExData",
            id: 2
          },
          optionExData: {
            type: "OptionStaticExData",
            id: 3
          },
          futureExData: {
            type: "FutureStaticExData",
            id: 4
          }
        }
      },
      Broker: {
        fields: {
          id: {
            rule: "required",
            type: "int64",
            id: 1
          },
          name: {
            rule: "required",
            type: "string",
            id: 2
          },
          pos: {
            rule: "required",
            type: "int32",
            id: 3
          },
          orderID: {
            type: "int64",
            id: 4
          },
          volume: {
            type: "int64",
            id: 5
          }
        }
      },
      Ticker: {
        fields: {
          time: {
            rule: "required",
            type: "string",
            id: 1
          },
          sequence: {
            rule: "required",
            type: "int64",
            id: 2
          },
          dir: {
            rule: "required",
            type: "int32",
            id: 3
          },
          price: {
            rule: "required",
            type: "double",
            id: 4
          },
          volume: {
            rule: "required",
            type: "int64",
            id: 5
          },
          turnover: {
            rule: "required",
            type: "double",
            id: 6
          },
          recvTime: {
            type: "double",
            id: 7
          },
          type: {
            type: "int32",
            id: 8
          },
          typeSign: {
            type: "int32",
            id: 9
          },
          pushDataType: {
            type: "int32",
            id: 10
          },
          timestamp: {
            type: "double",
            id: 11
          }
        }
      },
      OrderBookDetail: {
        fields: {
          orderID: {
            rule: "required",
            type: "int64",
            id: 1
          },
          volume: {
            rule: "required",
            type: "int64",
            id: 2
          }
        }
      },
      OrderBook: {
        fields: {
          price: {
            rule: "required",
            type: "double",
            id: 1
          },
          volume: {
            rule: "required",
            type: "int64",
            id: 2
          },
          orederCount: {
            rule: "required",
            type: "int32",
            id: 3
          },
          detailList: {
            rule: "repeated",
            type: "OrderBookDetail",
            id: 4
          }
        }
      },
      ShareHoldingChange: {
        fields: {
          holderName: {
            rule: "required",
            type: "string",
            id: 1
          },
          holdingQty: {
            rule: "required",
            type: "double",
            id: 2
          },
          holdingRatio: {
            rule: "required",
            type: "double",
            id: 3
          },
          changeQty: {
            rule: "required",
            type: "double",
            id: 4
          },
          changeRatio: {
            rule: "required",
            type: "double",
            id: 5
          },
          time: {
            rule: "required",
            type: "string",
            id: 6
          },
          timestamp: {
            type: "double",
            id: 7
          }
        }
      },
      SubInfo: {
        fields: {
          subType: {
            rule: "required",
            type: "int32",
            id: 1
          },
          securityList: {
            rule: "repeated",
            type: "Qot_Common.Security",
            id: 2
          }
        }
      },
      ConnSubInfo: {
        fields: {
          subInfoList: {
            rule: "repeated",
            type: "SubInfo",
            id: 1
          },
          usedQuota: {
            rule: "required",
            type: "int32",
            id: 2
          },
          isOwnConnData: {
            rule: "required",
            type: "bool",
            id: 3
          }
        }
      },
      PlateInfo: {
        fields: {
          plate: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          name: {
            rule: "required",
            type: "string",
            id: 2
          },
          plateType: {
            type: "int32",
            id: 3
          }
        }
      },
      Rehab: {
        fields: {
          time: {
            rule: "required",
            type: "string",
            id: 1
          },
          companyActFlag: {
            rule: "required",
            type: "int64",
            id: 2
          },
          fwdFactorA: {
            rule: "required",
            type: "double",
            id: 3
          },
          fwdFactorB: {
            rule: "required",
            type: "double",
            id: 4
          },
          bwdFactorA: {
            rule: "required",
            type: "double",
            id: 5
          },
          bwdFactorB: {
            rule: "required",
            type: "double",
            id: 6
          },
          splitBase: {
            type: "int32",
            id: 7
          },
          splitErt: {
            type: "int32",
            id: 8
          },
          joinBase: {
            type: "int32",
            id: 9
          },
          joinErt: {
            type: "int32",
            id: 10
          },
          bonusBase: {
            type: "int32",
            id: 11
          },
          bonusErt: {
            type: "int32",
            id: 12
          },
          transferBase: {
            type: "int32",
            id: 13
          },
          transferErt: {
            type: "int32",
            id: 14
          },
          allotBase: {
            type: "int32",
            id: 15
          },
          allotErt: {
            type: "int32",
            id: 16
          },
          allotPrice: {
            type: "double",
            id: 17
          },
          addBase: {
            type: "int32",
            id: 18
          },
          addErt: {
            type: "int32",
            id: 19
          },
          addPrice: {
            type: "double",
            id: 20
          },
          dividend: {
            type: "double",
            id: 21
          },
          spDividend: {
            type: "double",
            id: 22
          },
          timestamp: {
            type: "double",
            id: 23
          }
        }
      }
    }
  },
  GetUserInfo: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/getuserinfo"
    },
    nested: {
      UpdateType: {
        values: {
          UpdateType_None: 0,
          UpdateType_Advice: 1,
          UpdateType_Force: 2
        }
      },
      UserInfoField: {
        values: {
          UserInfoField_Basic: 1,
          UserInfoField_API: 2,
          UserInfoField_QotRight: 4,
          UserInfoField_Disclaimer: 8,
          UserInfoField_Update: 16,
          UserInfoField_WebKey: 2048
        }
      },
      C2S: {
        fields: {
          flag: {
            type: "int32",
            id: 2
          }
        }
      },
      S2C: {
        fields: {
          nickName: {
            type: "string",
            id: 1
          },
          avatarUrl: {
            type: "string",
            id: 2
          },
          apiLevel: {
            type: "string",
            id: 3
          },
          hkQotRight: {
            type: "int32",
            id: 4
          },
          usQotRight: {
            type: "int32",
            id: 5
          },
          cnQotRight: {
            type: "int32",
            id: 6
          },
          isNeedAgreeDisclaimer: {
            type: "bool",
            id: 7
          },
          userID: {
            type: "int64",
            id: 8
          },
          updateType: {
            type: "int32",
            id: 9
          },
          webKey: {
            type: "string",
            id: 10
          },
          webJumpUrlHead: {
            type: "string",
            id: 18
          },
          hkOptionQotRight: {
            type: "int32",
            id: 11
          },
          hasUSOptionQotRight: {
            type: "bool",
            id: 12
          },
          hkFutureQotRight: {
            type: "int32",
            id: 13
          },
          subQuota: {
            type: "int32",
            id: 14
          },
          historyKLQuota: {
            type: "int32",
            id: 15
          },
          usFutureQotRight: {
            type: "int32",
            id: 16
          },
          usOptionQotRight: {
            type: "int32",
            id: 17
          },
          userAttribution: {
            type: "int32",
            id: 19
          },
          updateWhatsNew: {
            type: "string",
            id: 20
          },
          usIndexQotRight: {
            type: "int32",
            id: 21
          },
          usOtcQotRight: {
            type: "int32",
            id: 22
          },
          usCMEFutureQotRight: {
            type: "int32",
            id: 23
          },
          usCBOTFutureQotRight: {
            type: "int32",
            id: 24
          },
          usNYMEXFutureQotRight: {
            type: "int32",
            id: 25
          },
          usCOMEXFutureQotRight: {
            type: "int32",
            id: 26
          },
          usCBOEFutureQotRight: {
            type: "int32",
            id: 27
          },
          sgFutureQotRight: {
            type: "int32",
            id: 28
          },
          jpFutureQotRight: {
            type: "int32",
            id: 29
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  InitConnect: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/initconnect"
    },
    nested: {
      C2S: {
        fields: {
          clientVer: {
            rule: "required",
            type: "int32",
            id: 1
          },
          clientID: {
            rule: "required",
            type: "string",
            id: 2
          },
          recvNotify: {
            type: "bool",
            id: 3
          },
          packetEncAlgo: {
            type: "int32",
            id: 4
          },
          pushProtoFmt: {
            type: "int32",
            id: 5
          },
          programmingLanguage: {
            type: "string",
            id: 6
          }
        }
      },
      S2C: {
        fields: {
          serverVer: {
            rule: "required",
            type: "int32",
            id: 1
          },
          loginUserID: {
            rule: "required",
            type: "uint64",
            id: 2
          },
          connID: {
            rule: "required",
            type: "uint64",
            id: 3
          },
          connAESKey: {
            rule: "required",
            type: "string",
            id: 4
          },
          keepAliveInterval: {
            rule: "required",
            type: "int32",
            id: 5
          },
          aesCBCiv: {
            type: "string",
            id: 6
          },
          userAttribution: {
            type: "int32",
            id: 7
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  InitWebSocket: {
    nested: {
      C2S: {
        fields: {
          IP: {
            type: "string",
            id: 1
          },
          Port: {
            type: "int32",
            id: 2
          },
          RSAPrivateKey: {
            type: "string",
            id: 3
          },
          websocketKey: {
            type: "string",
            id: 4
          },
          clientID: {
            type: "string",
            id: 5
          },
          programmingLanguage: {
            type: "string",
            id: 6
          }
        }
      },
      S2C: {
        fields: {
          serverTime: {
            type: "int64",
            id: 1
          },
          connID: {
            type: "uint64",
            id: 2
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  KeepAlive: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/keepalive"
    },
    nested: {
      C2S: {
        fields: {
          time: {
            rule: "required",
            type: "int64",
            id: 1
          }
        }
      },
      S2C: {
        fields: {
          time: {
            rule: "required",
            type: "int64",
            id: 1
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Notify: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/notify"
    },
    nested: {
      NotifyType: {
        values: {
          NotifyType_None: 0,
          NotifyType_GtwEvent: 1,
          NotifyType_ProgramStatus: 2,
          NotifyType_ConnStatus: 3,
          NotifyType_QotRight: 4,
          NotifyType_APILevel: 5,
          NotifyType_APIQuota: 6
        }
      },
      GtwEventType: {
        values: {
          GtwEventType_None: 0,
          GtwEventType_LocalCfgLoadFailed: 1,
          GtwEventType_APISvrRunFailed: 2,
          GtwEventType_ForceUpdate: 3,
          GtwEventType_LoginFailed: 4,
          GtwEventType_UnAgreeDisclaimer: 5,
          GtwEventType_NetCfgMissing: 6,
          GtwEventType_KickedOut: 7,
          GtwEventType_LoginPwdChanged: 8,
          GtwEventType_BanLogin: 9,
          GtwEventType_NeedPicVerifyCode: 10,
          GtwEventType_NeedPhoneVerifyCode: 11,
          GtwEventType_AppDataNotExist: 12,
          GtwEventType_NessaryDataMissing: 13,
          GtwEventType_TradePwdChanged: 14,
          GtwEventType_EnableDeviceLock: 15
        }
      },
      GtwEvent: {
        fields: {
          eventType: {
            rule: "required",
            type: "int32",
            id: 1
          },
          desc: {
            rule: "required",
            type: "string",
            id: 2
          }
        }
      },
      ProgramStatus: {
        fields: {
          programStatus: {
            rule: "required",
            type: "Common.ProgramStatus",
            id: 1
          }
        }
      },
      ConnectStatus: {
        fields: {
          qotLogined: {
            rule: "required",
            type: "bool",
            id: 1
          },
          trdLogined: {
            rule: "required",
            type: "bool",
            id: 2
          }
        }
      },
      QotRight: {
        fields: {
          hkQotRight: {
            rule: "required",
            type: "int32",
            id: 4
          },
          usQotRight: {
            rule: "required",
            type: "int32",
            id: 5
          },
          cnQotRight: {
            rule: "required",
            type: "int32",
            id: 6
          },
          hkOptionQotRight: {
            type: "int32",
            id: 7
          },
          hasUSOptionQotRight: {
            type: "bool",
            id: 8
          },
          hkFutureQotRight: {
            type: "int32",
            id: 9
          },
          usFutureQotRight: {
            type: "int32",
            id: 10
          },
          usOptionQotRight: {
            type: "int32",
            id: 11
          },
          usIndexQotRight: {
            type: "int32",
            id: 12
          },
          usOtcQotRight: {
            type: "int32",
            id: 13
          },
          sgFutureQotRight: {
            type: "int32",
            id: 14
          },
          jpFutureQotRight: {
            type: "int32",
            id: 15
          },
          usCMEFutureQotRight: {
            type: "int32",
            id: 16
          },
          usCBOTFutureQotRight: {
            type: "int32",
            id: 17
          },
          usNYMEXFutureQotRight: {
            type: "int32",
            id: 18
          },
          usCOMEXFutureQotRight: {
            type: "int32",
            id: 19
          },
          usCBOEFutureQotRight: {
            type: "int32",
            id: 20
          }
        }
      },
      APILevel: {
        fields: {
          apiLevel: {
            rule: "required",
            type: "string",
            id: 3
          }
        }
      },
      APIQuota: {
        fields: {
          subQuota: {
            rule: "required",
            type: "int32",
            id: 1
          },
          historyKLQuota: {
            rule: "required",
            type: "int32",
            id: 2
          }
        }
      },
      S2C: {
        fields: {
          type: {
            rule: "required",
            type: "int32",
            id: 1
          },
          event: {
            type: "GtwEvent",
            id: 2
          },
          programStatus: {
            type: "ProgramStatus",
            id: 3
          },
          connectStatus: {
            type: "ConnectStatus",
            id: 4
          },
          qotRight: {
            type: "QotRight",
            id: 5
          },
          apiLevel: {
            type: "APILevel",
            id: 6
          },
          apiQuota: {
            type: "APIQuota",
            id: 7
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_GetBasicQot: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotgetbasicqot"
    },
    nested: {
      C2S: {
        fields: {
          securityList: {
            rule: "repeated",
            type: "Qot_Common.Security",
            id: 1
          }
        }
      },
      S2C: {
        fields: {
          basicQotList: {
            rule: "repeated",
            type: "Qot_Common.BasicQot",
            id: 1
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_GetBroker: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotgetbroker"
    },
    nested: {
      C2S: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          }
        }
      },
      S2C: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          brokerAskList: {
            rule: "repeated",
            type: "Qot_Common.Broker",
            id: 2
          },
          brokerBidList: {
            rule: "repeated",
            type: "Qot_Common.Broker",
            id: 3
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_GetCapitalDistribution: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotgetcapitaldistribution"
    },
    nested: {
      C2S: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          }
        }
      },
      S2C: {
        fields: {
          capitalInSuper: {
            type: "double",
            id: 9
          },
          capitalInBig: {
            rule: "required",
            type: "double",
            id: 1
          },
          capitalInMid: {
            rule: "required",
            type: "double",
            id: 2
          },
          capitalInSmall: {
            rule: "required",
            type: "double",
            id: 3
          },
          capitalOutSuper: {
            type: "double",
            id: 10
          },
          capitalOutBig: {
            rule: "required",
            type: "double",
            id: 4
          },
          capitalOutMid: {
            rule: "required",
            type: "double",
            id: 5
          },
          capitalOutSmall: {
            rule: "required",
            type: "double",
            id: 6
          },
          updateTime: {
            type: "string",
            id: 7
          },
          updateTimestamp: {
            type: "double",
            id: 8
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_GetCapitalFlow: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotgetcapitalflow"
    },
    nested: {
      C2S: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          periodType: {
            type: "int32",
            id: 2
          },
          beginTime: {
            type: "string",
            id: 3
          },
          endTime: {
            type: "string",
            id: 4
          }
        }
      },
      CapitalFlowItem: {
        fields: {
          inFlow: {
            rule: "required",
            type: "double",
            id: 1
          },
          time: {
            type: "string",
            id: 2
          },
          timestamp: {
            type: "double",
            id: 3
          },
          mainInFlow: {
            type: "double",
            id: 4
          },
          superInFlow: {
            type: "double",
            id: 5
          },
          bigInFlow: {
            type: "double",
            id: 6
          },
          midInFlow: {
            type: "double",
            id: 7
          },
          smlInFlow: {
            type: "double",
            id: 8
          }
        }
      },
      S2C: {
        fields: {
          flowItemList: {
            rule: "repeated",
            type: "CapitalFlowItem",
            id: 1
          },
          lastValidTime: {
            type: "string",
            id: 2
          },
          lastValidTimestamp: {
            type: "double",
            id: 3
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_GetCodeChange: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotgetcodechange"
    },
    nested: {
      CodeChangeType: {
        values: {
          CodeChangeType_Unkown: 0,
          CodeChangeType_GemToMain: 1,
          CodeChangeType_Unpaid: 2,
          CodeChangeType_ChangeLot: 3,
          CodeChangeType_Split: 4,
          CodeChangeType_Joint: 5,
          CodeChangeType_JointSplit: 6,
          CodeChangeType_SplitJoint: 7,
          CodeChangeType_Other: 8
        }
      },
      CodeChangeInfo: {
        fields: {
          type: {
            rule: "required",
            type: "int32",
            id: 1
          },
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 2
          },
          relatedSecurity: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 3
          },
          publicTime: {
            type: "string",
            id: 4
          },
          publicTimestamp: {
            type: "double",
            id: 5
          },
          effectiveTime: {
            type: "string",
            id: 6
          },
          effectiveTimestamp: {
            type: "double",
            id: 7
          },
          endTime: {
            type: "string",
            id: 8
          },
          endTimestamp: {
            type: "double",
            id: 9
          }
        }
      },
      TimeFilterType: {
        values: {
          TimeFilterType_Unknow: 0,
          TimeFilterType_Public: 1,
          TimeFilterType_Effective: 2,
          TimeFilterType_End: 3
        }
      },
      TimeFilter: {
        fields: {
          type: {
            rule: "required",
            type: "int32",
            id: 1
          },
          beginTime: {
            type: "string",
            id: 2
          },
          endTime: {
            type: "string",
            id: 3
          }
        }
      },
      C2S: {
        fields: {
          placeHolder: {
            type: "int32",
            id: 1
          },
          securityList: {
            rule: "repeated",
            type: "Qot_Common.Security",
            id: 2
          },
          timeFilterList: {
            rule: "repeated",
            type: "TimeFilter",
            id: 3
          },
          typeList: {
            rule: "repeated",
            type: "int32",
            id: 4,
            options: {
              packed: false
            }
          }
        }
      },
      S2C: {
        fields: {
          codeChangeList: {
            rule: "repeated",
            type: "CodeChangeInfo",
            id: 1
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_GetFutureInfo: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotgetfutureinfo"
    },
    nested: {
      TradeTime: {
        fields: {
          begin: {
            type: "double",
            id: 1
          },
          end: {
            type: "double",
            id: 2
          }
        }
      },
      FutureInfo: {
        fields: {
          name: {
            rule: "required",
            type: "string",
            id: 1
          },
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 2
          },
          lastTradeTime: {
            rule: "required",
            type: "string",
            id: 3
          },
          lastTradeTimestamp: {
            type: "double",
            id: 4
          },
          owner: {
            type: "Qot_Common.Security",
            id: 5
          },
          ownerOther: {
            rule: "required",
            type: "string",
            id: 6
          },
          exchange: {
            rule: "required",
            type: "string",
            id: 7
          },
          contractType: {
            rule: "required",
            type: "string",
            id: 8
          },
          contractSize: {
            rule: "required",
            type: "double",
            id: 9
          },
          contractSizeUnit: {
            rule: "required",
            type: "string",
            id: 10
          },
          quoteCurrency: {
            rule: "required",
            type: "string",
            id: 11
          },
          minVar: {
            rule: "required",
            type: "double",
            id: 12
          },
          minVarUnit: {
            rule: "required",
            type: "string",
            id: 13
          },
          quoteUnit: {
            type: "string",
            id: 14
          },
          tradeTime: {
            rule: "repeated",
            type: "TradeTime",
            id: 15
          },
          timeZone: {
            rule: "required",
            type: "string",
            id: 16
          },
          exchangeFormatUrl: {
            rule: "required",
            type: "string",
            id: 17
          },
          origin: {
            type: "Qot_Common.Security",
            id: 18
          }
        }
      },
      C2S: {
        fields: {
          securityList: {
            rule: "repeated",
            type: "Qot_Common.Security",
            id: 1
          }
        }
      },
      S2C: {
        fields: {
          futureInfoList: {
            rule: "repeated",
            type: "FutureInfo",
            id: 1
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_GetHoldingChangeList: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotgetholdingchangelist"
    },
    nested: {
      C2S: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          holderCategory: {
            rule: "required",
            type: "int32",
            id: 2
          },
          beginTime: {
            type: "string",
            id: 3
          },
          endTime: {
            type: "string",
            id: 4
          }
        }
      },
      S2C: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          holdingChangeList: {
            rule: "repeated",
            type: "Qot_Common.ShareHoldingChange",
            id: 2
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_GetIpoList: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotgetipolist"
    },
    nested: {
      BasicIpoData: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          name: {
            rule: "required",
            type: "string",
            id: 2
          },
          listTime: {
            type: "string",
            id: 3
          },
          listTimestamp: {
            type: "double",
            id: 4
          }
        }
      },
      CNIpoExData: {
        fields: {
          applyCode: {
            rule: "required",
            type: "string",
            id: 1
          },
          issueSize: {
            rule: "required",
            type: "int64",
            id: 2
          },
          onlineIssueSize: {
            rule: "required",
            type: "int64",
            id: 3
          },
          applyUpperLimit: {
            rule: "required",
            type: "int64",
            id: 4
          },
          applyLimitMarketValue: {
            rule: "required",
            type: "int64",
            id: 5
          },
          isEstimateIpoPrice: {
            rule: "required",
            type: "bool",
            id: 6
          },
          ipoPrice: {
            rule: "required",
            type: "double",
            id: 7
          },
          industryPeRate: {
            rule: "required",
            type: "double",
            id: 8
          },
          isEstimateWinningRatio: {
            rule: "required",
            type: "bool",
            id: 9
          },
          winningRatio: {
            rule: "required",
            type: "double",
            id: 10
          },
          issuePeRate: {
            rule: "required",
            type: "double",
            id: 11
          },
          applyTime: {
            type: "string",
            id: 12
          },
          applyTimestamp: {
            type: "double",
            id: 13
          },
          winningTime: {
            type: "string",
            id: 14
          },
          winningTimestamp: {
            type: "double",
            id: 15
          },
          isHasWon: {
            rule: "required",
            type: "bool",
            id: 16
          },
          winningNumData: {
            rule: "repeated",
            type: "WinningNumData",
            id: 17
          }
        }
      },
      WinningNumData: {
        fields: {
          winningName: {
            rule: "required",
            type: "string",
            id: 1
          },
          winningInfo: {
            rule: "required",
            type: "string",
            id: 2
          }
        }
      },
      HKIpoExData: {
        fields: {
          ipoPriceMin: {
            rule: "required",
            type: "double",
            id: 1
          },
          ipoPriceMax: {
            rule: "required",
            type: "double",
            id: 2
          },
          listPrice: {
            rule: "required",
            type: "double",
            id: 3
          },
          lotSize: {
            rule: "required",
            type: "int32",
            id: 4
          },
          entrancePrice: {
            rule: "required",
            type: "double",
            id: 5
          },
          isSubscribeStatus: {
            rule: "required",
            type: "bool",
            id: 6
          },
          applyEndTime: {
            type: "string",
            id: 7
          },
          applyEndTimestamp: {
            type: "double",
            id: 8
          }
        }
      },
      USIpoExData: {
        fields: {
          ipoPriceMin: {
            rule: "required",
            type: "double",
            id: 1
          },
          ipoPriceMax: {
            rule: "required",
            type: "double",
            id: 2
          },
          issueSize: {
            rule: "required",
            type: "int64",
            id: 3
          }
        }
      },
      IpoData: {
        fields: {
          basic: {
            rule: "required",
            type: "BasicIpoData",
            id: 1
          },
          cnExData: {
            type: "CNIpoExData",
            id: 2
          },
          hkExData: {
            type: "HKIpoExData",
            id: 3
          },
          usExData: {
            type: "USIpoExData",
            id: 4
          }
        }
      },
      C2S: {
        fields: {
          market: {
            rule: "required",
            type: "int32",
            id: 1
          }
        }
      },
      S2C: {
        fields: {
          ipoList: {
            rule: "repeated",
            type: "IpoData",
            id: 1
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_GetKL: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotgetkl"
    },
    nested: {
      C2S: {
        fields: {
          rehabType: {
            rule: "required",
            type: "int32",
            id: 1
          },
          klType: {
            rule: "required",
            type: "int32",
            id: 2
          },
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 3
          },
          reqNum: {
            rule: "required",
            type: "int32",
            id: 4
          }
        }
      },
      S2C: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          klList: {
            rule: "repeated",
            type: "Qot_Common.KLine",
            id: 2
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_GetMarketState: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotgetmarketstate"
    },
    nested: {
      C2S: {
        fields: {
          securityList: {
            rule: "repeated",
            type: "Qot_Common.Security",
            id: 1
          }
        }
      },
      MarketInfo: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          name: {
            rule: "required",
            type: "string",
            id: 2
          },
          marketState: {
            rule: "required",
            type: "int32",
            id: 3
          }
        }
      },
      S2C: {
        fields: {
          marketInfoList: {
            rule: "repeated",
            type: "MarketInfo",
            id: 1
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_GetOptionChain: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotgetoptionchain"
    },
    nested: {
      OptionCondType: {
        values: {
          OptionCondType_Unknow: 0,
          OptionCondType_WithIn: 1,
          OptionCondType_Outside: 2
        }
      },
      DataFilter: {
        fields: {
          impliedVolatilityMin: {
            type: "double",
            id: 1
          },
          impliedVolatilityMax: {
            type: "double",
            id: 2
          },
          deltaMin: {
            type: "double",
            id: 3
          },
          deltaMax: {
            type: "double",
            id: 4
          },
          gammaMin: {
            type: "double",
            id: 5
          },
          gammaMax: {
            type: "double",
            id: 6
          },
          vegaMin: {
            type: "double",
            id: 7
          },
          vegaMax: {
            type: "double",
            id: 8
          },
          thetaMin: {
            type: "double",
            id: 9
          },
          thetaMax: {
            type: "double",
            id: 10
          },
          rhoMin: {
            type: "double",
            id: 11
          },
          rhoMax: {
            type: "double",
            id: 12
          },
          netOpenInterestMin: {
            type: "double",
            id: 13
          },
          netOpenInterestMax: {
            type: "double",
            id: 14
          },
          openInterestMin: {
            type: "double",
            id: 15
          },
          openInterestMax: {
            type: "double",
            id: 16
          },
          volMin: {
            type: "double",
            id: 17
          },
          volMax: {
            type: "double",
            id: 18
          }
        }
      },
      C2S: {
        fields: {
          owner: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          indexOptionType: {
            type: "int32",
            id: 6
          },
          type: {
            type: "int32",
            id: 2
          },
          condition: {
            type: "int32",
            id: 3
          },
          beginTime: {
            rule: "required",
            type: "string",
            id: 4
          },
          endTime: {
            rule: "required",
            type: "string",
            id: 5
          },
          dataFilter: {
            type: "DataFilter",
            id: 7
          }
        }
      },
      OptionItem: {
        fields: {
          call: {
            type: "Qot_Common.SecurityStaticInfo",
            id: 1
          },
          put: {
            type: "Qot_Common.SecurityStaticInfo",
            id: 2
          }
        }
      },
      OptionChain: {
        fields: {
          strikeTime: {
            rule: "required",
            type: "string",
            id: 1
          },
          option: {
            rule: "repeated",
            type: "OptionItem",
            id: 2
          },
          strikeTimestamp: {
            type: "double",
            id: 3
          }
        }
      },
      S2C: {
        fields: {
          optionChain: {
            rule: "repeated",
            type: "OptionChain",
            id: 1
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_GetOptionExpirationDate: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/getoptionexpirationdate"
    },
    nested: {
      C2S: {
        fields: {
          owner: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          indexOptionType: {
            type: "int32",
            id: 2
          }
        }
      },
      OptionExpirationDate: {
        fields: {
          strikeTime: {
            type: "string",
            id: 1
          },
          strikeTimestamp: {
            type: "double",
            id: 2
          },
          optionExpiryDateDistance: {
            rule: "required",
            type: "int32",
            id: 3
          },
          cycle: {
            type: "int32",
            id: 4
          }
        }
      },
      S2C: {
        fields: {
          dateList: {
            rule: "repeated",
            type: "OptionExpirationDate",
            id: 1
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_GetOrderBook: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotgetorderbook"
    },
    nested: {
      C2S: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          num: {
            rule: "required",
            type: "int32",
            id: 2
          }
        }
      },
      S2C: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          orderBookAskList: {
            rule: "repeated",
            type: "Qot_Common.OrderBook",
            id: 2
          },
          orderBookBidList: {
            rule: "repeated",
            type: "Qot_Common.OrderBook",
            id: 3
          },
          svrRecvTimeBid: {
            type: "string",
            id: 4
          },
          svrRecvTimeBidTimestamp: {
            type: "double",
            id: 5
          },
          svrRecvTimeAsk: {
            type: "string",
            id: 6
          },
          svrRecvTimeAskTimestamp: {
            type: "double",
            id: 7
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_GetOwnerPlate: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotgetownerplate"
    },
    nested: {
      C2S: {
        fields: {
          securityList: {
            rule: "repeated",
            type: "Qot_Common.Security",
            id: 1
          }
        }
      },
      SecurityOwnerPlate: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          plateInfoList: {
            rule: "repeated",
            type: "Qot_Common.PlateInfo",
            id: 2
          }
        }
      },
      S2C: {
        fields: {
          ownerPlateList: {
            rule: "repeated",
            type: "SecurityOwnerPlate",
            id: 1
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_GetPlateSecurity: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotgetplatesecurity"
    },
    nested: {
      C2S: {
        fields: {
          plate: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          sortField: {
            type: "int32",
            id: 2
          },
          ascend: {
            type: "bool",
            id: 3
          }
        }
      },
      S2C: {
        fields: {
          staticInfoList: {
            rule: "repeated",
            type: "Qot_Common.SecurityStaticInfo",
            id: 1
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_GetPlateSet: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotgetplateset"
    },
    nested: {
      C2S: {
        fields: {
          market: {
            rule: "required",
            type: "int32",
            id: 1
          },
          plateSetType: {
            rule: "required",
            type: "int32",
            id: 2
          }
        }
      },
      S2C: {
        fields: {
          plateInfoList: {
            rule: "repeated",
            type: "Qot_Common.PlateInfo",
            id: 1
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_GetPriceReminder: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotgetpricereminder"
    },
    nested: {
      PriceReminderItem: {
        fields: {
          key: {
            rule: "required",
            type: "int64",
            id: 1
          },
          type: {
            rule: "required",
            type: "int32",
            id: 2
          },
          value: {
            rule: "required",
            type: "double",
            id: 3
          },
          note: {
            rule: "required",
            type: "string",
            id: 4
          },
          freq: {
            rule: "required",
            type: "int32",
            id: 5
          },
          isEnable: {
            rule: "required",
            type: "bool",
            id: 6
          }
        }
      },
      PriceReminder: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          itemList: {
            rule: "repeated",
            type: "PriceReminderItem",
            id: 2
          }
        }
      },
      C2S: {
        fields: {
          security: {
            type: "Qot_Common.Security",
            id: 1
          },
          market: {
            type: "int32",
            id: 2
          }
        }
      },
      S2C: {
        fields: {
          priceReminderList: {
            rule: "repeated",
            type: "PriceReminder",
            id: 1
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_GetReference: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotgetreference"
    },
    nested: {
      ReferenceType: {
        values: {
          ReferenceType_Unknow: 0,
          ReferenceType_Warrant: 1,
          ReferenceType_Future: 2
        }
      },
      C2S: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          referenceType: {
            rule: "required",
            type: "int32",
            id: 2
          }
        }
      },
      S2C: {
        fields: {
          staticInfoList: {
            rule: "repeated",
            type: "Qot_Common.SecurityStaticInfo",
            id: 2
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_GetRT: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotgetrt"
    },
    nested: {
      C2S: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          }
        }
      },
      S2C: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          rtList: {
            rule: "repeated",
            type: "Qot_Common.TimeShare",
            id: 2
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_GetSecuritySnapshot: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotgetsecuritysnapshot"
    },
    nested: {
      C2S: {
        fields: {
          securityList: {
            rule: "repeated",
            type: "Qot_Common.Security",
            id: 1
          }
        }
      },
      EquitySnapshotExData: {
        fields: {
          issuedShares: {
            rule: "required",
            type: "int64",
            id: 1
          },
          issuedMarketVal: {
            rule: "required",
            type: "double",
            id: 2
          },
          netAsset: {
            rule: "required",
            type: "double",
            id: 3
          },
          netProfit: {
            rule: "required",
            type: "double",
            id: 4
          },
          earningsPershare: {
            rule: "required",
            type: "double",
            id: 5
          },
          outstandingShares: {
            rule: "required",
            type: "int64",
            id: 6
          },
          outstandingMarketVal: {
            rule: "required",
            type: "double",
            id: 7
          },
          netAssetPershare: {
            rule: "required",
            type: "double",
            id: 8
          },
          eyRate: {
            rule: "required",
            type: "double",
            id: 9
          },
          peRate: {
            rule: "required",
            type: "double",
            id: 10
          },
          pbRate: {
            rule: "required",
            type: "double",
            id: 11
          },
          peTTMRate: {
            rule: "required",
            type: "double",
            id: 12
          },
          dividendTTM: {
            type: "double",
            id: 13
          },
          dividendRatioTTM: {
            type: "double",
            id: 14
          },
          dividendLFY: {
            type: "double",
            id: 15
          },
          dividendLFYRatio: {
            type: "double",
            id: 16
          }
        }
      },
      WarrantSnapshotExData: {
        fields: {
          conversionRate: {
            rule: "required",
            type: "double",
            id: 1
          },
          warrantType: {
            rule: "required",
            type: "int32",
            id: 2
          },
          strikePrice: {
            rule: "required",
            type: "double",
            id: 3
          },
          maturityTime: {
            rule: "required",
            type: "string",
            id: 4
          },
          endTradeTime: {
            rule: "required",
            type: "string",
            id: 5
          },
          owner: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 6
          },
          recoveryPrice: {
            rule: "required",
            type: "double",
            id: 7
          },
          streetVolumn: {
            rule: "required",
            type: "int64",
            id: 8
          },
          issueVolumn: {
            rule: "required",
            type: "int64",
            id: 9
          },
          streetRate: {
            rule: "required",
            type: "double",
            id: 10
          },
          delta: {
            rule: "required",
            type: "double",
            id: 11
          },
          impliedVolatility: {
            rule: "required",
            type: "double",
            id: 12
          },
          premium: {
            rule: "required",
            type: "double",
            id: 13
          },
          maturityTimestamp: {
            type: "double",
            id: 14
          },
          endTradeTimestamp: {
            type: "double",
            id: 15
          },
          leverage: {
            type: "double",
            id: 16
          },
          ipop: {
            type: "double",
            id: 17
          },
          breakEvenPoint: {
            type: "double",
            id: 18
          },
          conversionPrice: {
            type: "double",
            id: 19
          },
          priceRecoveryRatio: {
            type: "double",
            id: 20
          },
          score: {
            type: "double",
            id: 21
          },
          upperStrikePrice: {
            type: "double",
            id: 22
          },
          lowerStrikePrice: {
            type: "double",
            id: 23
          },
          inLinePriceStatus: {
            type: "int32",
            id: 24
          },
          issuerCode: {
            type: "string",
            id: 25
          }
        }
      },
      OptionSnapshotExData: {
        fields: {
          type: {
            rule: "required",
            type: "int32",
            id: 1
          },
          owner: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 2
          },
          strikeTime: {
            rule: "required",
            type: "string",
            id: 3
          },
          strikePrice: {
            rule: "required",
            type: "double",
            id: 4
          },
          contractSize: {
            rule: "required",
            type: "int32",
            id: 5
          },
          contractSizeFloat: {
            type: "double",
            id: 22
          },
          openInterest: {
            rule: "required",
            type: "int32",
            id: 6
          },
          impliedVolatility: {
            rule: "required",
            type: "double",
            id: 7
          },
          premium: {
            rule: "required",
            type: "double",
            id: 8
          },
          delta: {
            rule: "required",
            type: "double",
            id: 9
          },
          gamma: {
            rule: "required",
            type: "double",
            id: 10
          },
          vega: {
            rule: "required",
            type: "double",
            id: 11
          },
          theta: {
            rule: "required",
            type: "double",
            id: 12
          },
          rho: {
            rule: "required",
            type: "double",
            id: 13
          },
          strikeTimestamp: {
            type: "double",
            id: 14
          },
          indexOptionType: {
            type: "int32",
            id: 15
          },
          netOpenInterest: {
            type: "int32",
            id: 16
          },
          expiryDateDistance: {
            type: "int32",
            id: 17
          },
          contractNominalValue: {
            type: "double",
            id: 18
          },
          ownerLotMultiplier: {
            type: "double",
            id: 19
          },
          optionAreaType: {
            type: "int32",
            id: 20
          },
          contractMultiplier: {
            type: "double",
            id: 21
          }
        }
      },
      IndexSnapshotExData: {
        fields: {
          raiseCount: {
            rule: "required",
            type: "int32",
            id: 1
          },
          fallCount: {
            rule: "required",
            type: "int32",
            id: 2
          },
          equalCount: {
            rule: "required",
            type: "int32",
            id: 3
          }
        }
      },
      PlateSnapshotExData: {
        fields: {
          raiseCount: {
            rule: "required",
            type: "int32",
            id: 1
          },
          fallCount: {
            rule: "required",
            type: "int32",
            id: 2
          },
          equalCount: {
            rule: "required",
            type: "int32",
            id: 3
          }
        }
      },
      FutureSnapshotExData: {
        fields: {
          lastSettlePrice: {
            rule: "required",
            type: "double",
            id: 1
          },
          position: {
            rule: "required",
            type: "int32",
            id: 2
          },
          positionChange: {
            rule: "required",
            type: "int32",
            id: 3
          },
          lastTradeTime: {
            rule: "required",
            type: "string",
            id: 4
          },
          lastTradeTimestamp: {
            type: "double",
            id: 5
          },
          isMainContract: {
            rule: "required",
            type: "bool",
            id: 6
          }
        }
      },
      TrustSnapshotExData: {
        fields: {
          dividendYield: {
            rule: "required",
            type: "double",
            id: 1
          },
          aum: {
            rule: "required",
            type: "double",
            id: 2
          },
          outstandingUnits: {
            rule: "required",
            type: "int64",
            id: 3
          },
          netAssetValue: {
            rule: "required",
            type: "double",
            id: 4
          },
          premium: {
            rule: "required",
            type: "double",
            id: 5
          },
          assetClass: {
            rule: "required",
            type: "int32",
            id: 6
          }
        }
      },
      SnapshotBasicData: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          type: {
            rule: "required",
            type: "int32",
            id: 2
          },
          isSuspend: {
            rule: "required",
            type: "bool",
            id: 3
          },
          listTime: {
            rule: "required",
            type: "string",
            id: 4
          },
          lotSize: {
            rule: "required",
            type: "int32",
            id: 5
          },
          priceSpread: {
            rule: "required",
            type: "double",
            id: 6
          },
          updateTime: {
            rule: "required",
            type: "string",
            id: 7
          },
          highPrice: {
            rule: "required",
            type: "double",
            id: 8
          },
          openPrice: {
            rule: "required",
            type: "double",
            id: 9
          },
          lowPrice: {
            rule: "required",
            type: "double",
            id: 10
          },
          lastClosePrice: {
            rule: "required",
            type: "double",
            id: 11
          },
          curPrice: {
            rule: "required",
            type: "double",
            id: 12
          },
          volume: {
            rule: "required",
            type: "int64",
            id: 13
          },
          turnover: {
            rule: "required",
            type: "double",
            id: 14
          },
          turnoverRate: {
            rule: "required",
            type: "double",
            id: 15
          },
          listTimestamp: {
            type: "double",
            id: 16
          },
          updateTimestamp: {
            type: "double",
            id: 17
          },
          askPrice: {
            type: "double",
            id: 18
          },
          bidPrice: {
            type: "double",
            id: 19
          },
          askVol: {
            type: "int64",
            id: 20
          },
          bidVol: {
            type: "int64",
            id: 21
          },
          enableMargin: {
            type: "bool",
            id: 22
          },
          mortgageRatio: {
            type: "double",
            id: 23
          },
          longMarginInitialRatio: {
            type: "double",
            id: 24
          },
          enableShortSell: {
            type: "bool",
            id: 25
          },
          shortSellRate: {
            type: "double",
            id: 26
          },
          shortAvailableVolume: {
            type: "int64",
            id: 27
          },
          shortMarginInitialRatio: {
            type: "double",
            id: 28
          },
          amplitude: {
            type: "double",
            id: 29
          },
          avgPrice: {
            type: "double",
            id: 30
          },
          bidAskRatio: {
            type: "double",
            id: 31
          },
          volumeRatio: {
            type: "double",
            id: 32
          },
          highest52WeeksPrice: {
            type: "double",
            id: 33
          },
          lowest52WeeksPrice: {
            type: "double",
            id: 34
          },
          highestHistoryPrice: {
            type: "double",
            id: 35
          },
          lowestHistoryPrice: {
            type: "double",
            id: 36
          },
          preMarket: {
            type: "Qot_Common.PreAfterMarketData",
            id: 37
          },
          afterMarket: {
            type: "Qot_Common.PreAfterMarketData",
            id: 38
          },
          secStatus: {
            type: "int32",
            id: 39
          },
          closePrice5Minute: {
            type: "double",
            id: 40
          }
        }
      },
      Snapshot: {
        fields: {
          basic: {
            rule: "required",
            type: "SnapshotBasicData",
            id: 1
          },
          equityExData: {
            type: "EquitySnapshotExData",
            id: 2
          },
          warrantExData: {
            type: "WarrantSnapshotExData",
            id: 3
          },
          optionExData: {
            type: "OptionSnapshotExData",
            id: 4
          },
          indexExData: {
            type: "IndexSnapshotExData",
            id: 5
          },
          plateExData: {
            type: "PlateSnapshotExData",
            id: 6
          },
          futureExData: {
            type: "FutureSnapshotExData",
            id: 7
          },
          trustExData: {
            type: "TrustSnapshotExData",
            id: 8
          }
        }
      },
      S2C: {
        fields: {
          snapshotList: {
            rule: "repeated",
            type: "Snapshot",
            id: 1
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_GetStaticInfo: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotgetstaticinfo"
    },
    nested: {
      C2S: {
        fields: {
          market: {
            type: "int32",
            id: 1
          },
          secType: {
            type: "int32",
            id: 2
          },
          securityList: {
            rule: "repeated",
            type: "Qot_Common.Security",
            id: 3
          }
        }
      },
      S2C: {
        fields: {
          staticInfoList: {
            rule: "repeated",
            type: "Qot_Common.SecurityStaticInfo",
            id: 1
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_GetSubInfo: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotgetsubinfo"
    },
    nested: {
      C2S: {
        fields: {
          isReqAllConn: {
            type: "bool",
            id: 1
          }
        }
      },
      S2C: {
        fields: {
          connSubInfoList: {
            rule: "repeated",
            type: "Qot_Common.ConnSubInfo",
            id: 1
          },
          totalUsedQuota: {
            rule: "required",
            type: "int32",
            id: 2
          },
          remainQuota: {
            rule: "required",
            type: "int32",
            id: 3
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_GetSuspend: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotgetsuspend"
    },
    nested: {
      C2S: {
        fields: {
          securityList: {
            rule: "repeated",
            type: "Qot_Common.Security",
            id: 1
          },
          beginTime: {
            rule: "required",
            type: "string",
            id: 2
          },
          endTime: {
            rule: "required",
            type: "string",
            id: 3
          }
        }
      },
      Suspend: {
        fields: {
          time: {
            rule: "required",
            type: "string",
            id: 1
          },
          timestamp: {
            type: "double",
            id: 2
          }
        }
      },
      SecuritySuspend: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          suspendList: {
            rule: "repeated",
            type: "Suspend",
            id: 2
          }
        }
      },
      S2C: {
        fields: {
          SecuritySuspendList: {
            rule: "repeated",
            type: "SecuritySuspend",
            id: 1
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_GetTicker: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotgetticker"
    },
    nested: {
      C2S: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          maxRetNum: {
            rule: "required",
            type: "int32",
            id: 2
          }
        }
      },
      S2C: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          tickerList: {
            rule: "repeated",
            type: "Qot_Common.Ticker",
            id: 2
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_GetUserSecurity: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotgetusersecurity"
    },
    nested: {
      C2S: {
        fields: {
          groupName: {
            rule: "required",
            type: "string",
            id: 1
          }
        }
      },
      S2C: {
        fields: {
          staticInfoList: {
            rule: "repeated",
            type: "Qot_Common.SecurityStaticInfo",
            id: 1
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_GetUserSecurityGroup: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotgetusersecuritygroup"
    },
    nested: {
      GroupType: {
        values: {
          GroupType_Unknown: 0,
          GroupType_Custom: 1,
          GroupType_System: 2,
          GroupType_All: 3
        }
      },
      C2S: {
        fields: {
          groupType: {
            rule: "required",
            type: "int32",
            id: 1
          }
        }
      },
      GroupData: {
        fields: {
          groupName: {
            rule: "required",
            type: "string",
            id: 1
          },
          groupType: {
            rule: "required",
            type: "int32",
            id: 2
          }
        }
      },
      S2C: {
        fields: {
          groupList: {
            rule: "repeated",
            type: "GroupData",
            id: 1
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_GetWarrant: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotgetwarrant"
    },
    nested: {
      C2S: {
        fields: {
          begin: {
            rule: "required",
            type: "int32",
            id: 1
          },
          num: {
            rule: "required",
            type: "int32",
            id: 2
          },
          sortField: {
            rule: "required",
            type: "int32",
            id: 3
          },
          ascend: {
            rule: "required",
            type: "bool",
            id: 4
          },
          owner: {
            type: "Qot_Common.Security",
            id: 5
          },
          typeList: {
            rule: "repeated",
            type: "int32",
            id: 6,
            options: {
              packed: false
            }
          },
          issuerList: {
            rule: "repeated",
            type: "int32",
            id: 7,
            options: {
              packed: false
            }
          },
          maturityTimeMin: {
            type: "string",
            id: 8
          },
          maturityTimeMax: {
            type: "string",
            id: 9
          },
          ipoPeriod: {
            type: "int32",
            id: 10
          },
          priceType: {
            type: "int32",
            id: 11
          },
          status: {
            type: "int32",
            id: 12
          },
          curPriceMin: {
            type: "double",
            id: 13
          },
          curPriceMax: {
            type: "double",
            id: 14
          },
          strikePriceMin: {
            type: "double",
            id: 15
          },
          strikePriceMax: {
            type: "double",
            id: 16
          },
          streetMin: {
            type: "double",
            id: 17
          },
          streetMax: {
            type: "double",
            id: 18
          },
          conversionMin: {
            type: "double",
            id: 19
          },
          conversionMax: {
            type: "double",
            id: 20
          },
          volMin: {
            type: "uint64",
            id: 21
          },
          volMax: {
            type: "uint64",
            id: 22
          },
          premiumMin: {
            type: "double",
            id: 23
          },
          premiumMax: {
            type: "double",
            id: 24
          },
          leverageRatioMin: {
            type: "double",
            id: 25
          },
          leverageRatioMax: {
            type: "double",
            id: 26
          },
          deltaMin: {
            type: "double",
            id: 27
          },
          deltaMax: {
            type: "double",
            id: 28
          },
          impliedMin: {
            type: "double",
            id: 29
          },
          impliedMax: {
            type: "double",
            id: 30
          },
          recoveryPriceMin: {
            type: "double",
            id: 31
          },
          recoveryPriceMax: {
            type: "double",
            id: 32
          },
          priceRecoveryRatioMin: {
            type: "double",
            id: 33
          },
          priceRecoveryRatioMax: {
            type: "double",
            id: 34
          }
        }
      },
      WarrantData: {
        fields: {
          stock: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          owner: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 2
          },
          type: {
            rule: "required",
            type: "int32",
            id: 3
          },
          issuer: {
            rule: "required",
            type: "int32",
            id: 4
          },
          maturityTime: {
            rule: "required",
            type: "string",
            id: 5
          },
          maturityTimestamp: {
            type: "double",
            id: 6
          },
          listTime: {
            rule: "required",
            type: "string",
            id: 7
          },
          listTimestamp: {
            type: "double",
            id: 8
          },
          lastTradeTime: {
            rule: "required",
            type: "string",
            id: 9
          },
          lastTradeTimestamp: {
            type: "double",
            id: 10
          },
          recoveryPrice: {
            type: "double",
            id: 11
          },
          conversionRatio: {
            rule: "required",
            type: "double",
            id: 12
          },
          lotSize: {
            rule: "required",
            type: "int32",
            id: 13
          },
          strikePrice: {
            rule: "required",
            type: "double",
            id: 14
          },
          lastClosePrice: {
            rule: "required",
            type: "double",
            id: 15
          },
          name: {
            rule: "required",
            type: "string",
            id: 16
          },
          curPrice: {
            rule: "required",
            type: "double",
            id: 17
          },
          priceChangeVal: {
            rule: "required",
            type: "double",
            id: 18
          },
          changeRate: {
            rule: "required",
            type: "double",
            id: 19
          },
          status: {
            rule: "required",
            type: "int32",
            id: 20
          },
          bidPrice: {
            rule: "required",
            type: "double",
            id: 21
          },
          askPrice: {
            rule: "required",
            type: "double",
            id: 22
          },
          bidVol: {
            rule: "required",
            type: "int64",
            id: 23
          },
          askVol: {
            rule: "required",
            type: "int64",
            id: 24
          },
          volume: {
            rule: "required",
            type: "int64",
            id: 25
          },
          turnover: {
            rule: "required",
            type: "double",
            id: 26
          },
          score: {
            rule: "required",
            type: "double",
            id: 27
          },
          premium: {
            rule: "required",
            type: "double",
            id: 28
          },
          breakEvenPoint: {
            rule: "required",
            type: "double",
            id: 29
          },
          leverage: {
            rule: "required",
            type: "double",
            id: 30
          },
          ipop: {
            rule: "required",
            type: "double",
            id: 31
          },
          priceRecoveryRatio: {
            type: "double",
            id: 32
          },
          conversionPrice: {
            rule: "required",
            type: "double",
            id: 33
          },
          streetRate: {
            rule: "required",
            type: "double",
            id: 34
          },
          streetVol: {
            rule: "required",
            type: "int64",
            id: 35
          },
          amplitude: {
            rule: "required",
            type: "double",
            id: 36
          },
          issueSize: {
            rule: "required",
            type: "int64",
            id: 37
          },
          highPrice: {
            rule: "required",
            type: "double",
            id: 39
          },
          lowPrice: {
            rule: "required",
            type: "double",
            id: 40
          },
          impliedVolatility: {
            type: "double",
            id: 41
          },
          delta: {
            type: "double",
            id: 42
          },
          effectiveLeverage: {
            rule: "required",
            type: "double",
            id: 43
          },
          upperStrikePrice: {
            type: "double",
            id: 44
          },
          lowerStrikePrice: {
            type: "double",
            id: 45
          },
          inLinePriceStatus: {
            type: "int32",
            id: 46
          }
        }
      },
      S2C: {
        fields: {
          lastPage: {
            rule: "required",
            type: "bool",
            id: 1
          },
          allCount: {
            rule: "required",
            type: "int32",
            id: 2
          },
          warrantDataList: {
            rule: "repeated",
            type: "WarrantData",
            id: 3
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_ModifyUserSecurity: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotmodifyusersecurity"
    },
    nested: {
      ModifyUserSecurityOp: {
        values: {
          ModifyUserSecurityOp_Unknown: 0,
          ModifyUserSecurityOp_Add: 1,
          ModifyUserSecurityOp_Del: 2,
          ModifyUserSecurityOp_MoveOut: 3
        }
      },
      C2S: {
        fields: {
          groupName: {
            rule: "required",
            type: "string",
            id: 1
          },
          op: {
            rule: "required",
            type: "int32",
            id: 2
          },
          securityList: {
            rule: "repeated",
            type: "Qot_Common.Security",
            id: 3
          }
        }
      },
      S2C: {
        fields: {}
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_RegQotPush: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotregqotpush"
    },
    nested: {
      C2S: {
        fields: {
          securityList: {
            rule: "repeated",
            type: "Qot_Common.Security",
            id: 1
          },
          subTypeList: {
            rule: "repeated",
            type: "int32",
            id: 2,
            options: {
              packed: false
            }
          },
          rehabTypeList: {
            rule: "repeated",
            type: "int32",
            id: 3,
            options: {
              packed: false
            }
          },
          isRegOrUnReg: {
            rule: "required",
            type: "bool",
            id: 4
          },
          isFirstPush: {
            type: "bool",
            id: 5
          }
        }
      },
      S2C: {
        fields: {}
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_RequestHistoryKL: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotrequesthistorykl"
    },
    nested: {
      C2S: {
        fields: {
          rehabType: {
            rule: "required",
            type: "int32",
            id: 1
          },
          klType: {
            rule: "required",
            type: "int32",
            id: 2
          },
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 3
          },
          beginTime: {
            rule: "required",
            type: "string",
            id: 4
          },
          endTime: {
            rule: "required",
            type: "string",
            id: 5
          },
          maxAckKLNum: {
            type: "int32",
            id: 6
          },
          needKLFieldsFlag: {
            type: "int64",
            id: 7
          },
          nextReqKey: {
            type: "bytes",
            id: 8
          },
          extendedTime: {
            type: "bool",
            id: 9
          }
        }
      },
      S2C: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          klList: {
            rule: "repeated",
            type: "Qot_Common.KLine",
            id: 2
          },
          nextReqKey: {
            type: "bytes",
            id: 3
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_RequestHistoryKLQuota: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotrequesthistoryklquota"
    },
    nested: {
      DetailItem: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          requestTime: {
            rule: "required",
            type: "string",
            id: 2
          },
          requestTimeStamp: {
            type: "int64",
            id: 3
          }
        }
      },
      C2S: {
        fields: {
          bGetDetail: {
            type: "bool",
            id: 2
          }
        }
      },
      S2C: {
        fields: {
          usedQuota: {
            rule: "required",
            type: "int32",
            id: 1
          },
          remainQuota: {
            rule: "required",
            type: "int32",
            id: 2
          },
          detailList: {
            rule: "repeated",
            type: "DetailItem",
            id: 3
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_RequestRehab: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotrequestrehab"
    },
    nested: {
      C2S: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          }
        }
      },
      S2C: {
        fields: {
          rehabList: {
            rule: "repeated",
            type: "Qot_Common.Rehab",
            id: 1
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_RequestTradeDate: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotrequesttradedate"
    },
    nested: {
      C2S: {
        fields: {
          market: {
            rule: "required",
            type: "int32",
            id: 1
          },
          beginTime: {
            rule: "required",
            type: "string",
            id: 2
          },
          endTime: {
            rule: "required",
            type: "string",
            id: 3
          },
          security: {
            type: "Qot_Common.Security",
            id: 4
          }
        }
      },
      TradeDate: {
        fields: {
          time: {
            rule: "required",
            type: "string",
            id: 1
          },
          timestamp: {
            type: "double",
            id: 2
          },
          tradeDateType: {
            type: "int32",
            id: 3
          }
        }
      },
      S2C: {
        fields: {
          tradeDateList: {
            rule: "repeated",
            type: "TradeDate",
            id: 1
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_SetPriceReminder: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotsetpricereminder"
    },
    nested: {
      SetPriceReminderOp: {
        values: {
          SetPriceReminderOp_Unknown: 0,
          SetPriceReminderOp_Add: 1,
          SetPriceReminderOp_Del: 2,
          SetPriceReminderOp_Enable: 3,
          SetPriceReminderOp_Disable: 4,
          SetPriceReminderOp_Modify: 5,
          SetPriceReminderOp_DelAll: 6
        }
      },
      C2S: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          op: {
            rule: "required",
            type: "int32",
            id: 2
          },
          key: {
            type: "int64",
            id: 3
          },
          type: {
            type: "int32",
            id: 4
          },
          freq: {
            type: "int32",
            id: 7
          },
          value: {
            type: "double",
            id: 5
          },
          note: {
            type: "string",
            id: 6
          }
        }
      },
      S2C: {
        fields: {
          key: {
            rule: "required",
            type: "int64",
            id: 1
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_StockFilter: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotstockfilter"
    },
    nested: {
      StockField: {
        values: {
          StockField_Unknown: 0,
          StockField_StockCode: 1,
          StockField_StockName: 2,
          StockField_CurPrice: 3,
          StockField_CurPriceToHighest52WeeksRatio: 4,
          StockField_CurPriceToLowest52WeeksRatio: 5,
          StockField_HighPriceToHighest52WeeksRatio: 6,
          StockField_LowPriceToLowest52WeeksRatio: 7,
          StockField_VolumeRatio: 8,
          StockField_BidAskRatio: 9,
          StockField_LotPrice: 10,
          StockField_MarketVal: 11,
          StockField_PeAnnual: 12,
          StockField_PeTTM: 13,
          StockField_PbRate: 14,
          StockField_ChangeRate5min: 15,
          StockField_ChangeRateBeginYear: 16,
          StockField_PSTTM: 17,
          StockField_PCFTTM: 18,
          StockField_TotalShare: 19,
          StockField_FloatShare: 20,
          StockField_FloatMarketVal: 21
        }
      },
      AccumulateField: {
        values: {
          AccumulateField_Unknown: 0,
          AccumulateField_ChangeRate: 1,
          AccumulateField_Amplitude: 2,
          AccumulateField_Volume: 3,
          AccumulateField_Turnover: 4,
          AccumulateField_TurnoverRate: 5
        }
      },
      FinancialField: {
        values: {
          FinancialField_Unknown: 0,
          FinancialField_NetProfit: 1,
          FinancialField_NetProfitGrowth: 2,
          FinancialField_SumOfBusiness: 3,
          FinancialField_SumOfBusinessGrowth: 4,
          FinancialField_NetProfitRate: 5,
          FinancialField_GrossProfitRate: 6,
          FinancialField_DebtAssetsRate: 7,
          FinancialField_ReturnOnEquityRate: 8,
          FinancialField_ROIC: 9,
          FinancialField_ROATTM: 10,
          FinancialField_EBITTTM: 11,
          FinancialField_EBITDA: 12,
          FinancialField_OperatingMarginTTM: 13,
          FinancialField_EBITMargin: 14,
          FinancialField_EBITDAMargin: 15,
          FinancialField_FinancialCostRate: 16,
          FinancialField_OperatingProfitTTM: 17,
          FinancialField_ShareholderNetProfitTTM: 18,
          FinancialField_NetProfitCashCoverTTM: 19,
          FinancialField_CurrentRatio: 20,
          FinancialField_QuickRatio: 21,
          FinancialField_CurrentAssetRatio: 22,
          FinancialField_CurrentDebtRatio: 23,
          FinancialField_EquityMultiplier: 24,
          FinancialField_PropertyRatio: 25,
          FinancialField_CashAndCashEquivalents: 26,
          FinancialField_TotalAssetTurnover: 27,
          FinancialField_FixedAssetTurnover: 28,
          FinancialField_InventoryTurnover: 29,
          FinancialField_OperatingCashFlowTTM: 30,
          FinancialField_AccountsReceivable: 31,
          FinancialField_EBITGrowthRate: 32,
          FinancialField_OperatingProfitGrowthRate: 33,
          FinancialField_TotalAssetsGrowthRate: 34,
          FinancialField_ProfitToShareholdersGrowthRate: 35,
          FinancialField_ProfitBeforeTaxGrowthRate: 36,
          FinancialField_EPSGrowthRate: 37,
          FinancialField_ROEGrowthRate: 38,
          FinancialField_ROICGrowthRate: 39,
          FinancialField_NOCFGrowthRate: 40,
          FinancialField_NOCFPerShareGrowthRate: 41,
          FinancialField_OperatingRevenueCashCover: 42,
          FinancialField_OperatingProfitToTotalProfit: 43,
          FinancialField_BasicEPS: 44,
          FinancialField_DilutedEPS: 45,
          FinancialField_NOCFPerShare: 46
        }
      },
      CustomIndicatorField: {
        values: {
          CustomIndicatorField_Unknown: 0,
          CustomIndicatorField_Price: 1,
          CustomIndicatorField_MA5: 2,
          CustomIndicatorField_MA10: 3,
          CustomIndicatorField_MA20: 4,
          CustomIndicatorField_MA30: 5,
          CustomIndicatorField_MA60: 6,
          CustomIndicatorField_MA120: 7,
          CustomIndicatorField_MA250: 8,
          CustomIndicatorField_RSI: 9,
          CustomIndicatorField_EMA5: 10,
          CustomIndicatorField_EMA10: 11,
          CustomIndicatorField_EMA20: 12,
          CustomIndicatorField_EMA30: 13,
          CustomIndicatorField_EMA60: 14,
          CustomIndicatorField_EMA120: 15,
          CustomIndicatorField_EMA250: 16,
          CustomIndicatorField_Value: 17,
          CustomIndicatorField_MA: 30,
          CustomIndicatorField_EMA: 40,
          CustomIndicatorField_KDJ_K: 50,
          CustomIndicatorField_KDJ_D: 51,
          CustomIndicatorField_KDJ_J: 52,
          CustomIndicatorField_MACD_DIFF: 60,
          CustomIndicatorField_MACD_DEA: 61,
          CustomIndicatorField_MACD: 62,
          CustomIndicatorField_BOLL_UPPER: 70,
          CustomIndicatorField_BOLL_MIDDLER: 71,
          CustomIndicatorField_BOLL_LOWER: 72
        }
      },
      PatternField: {
        values: {
          PatternField_Unknown: 0,
          PatternField_MAAlignmentLong: 1,
          PatternField_MAAlignmentShort: 2,
          PatternField_EMAAlignmentLong: 3,
          PatternField_EMAAlignmentShort: 4,
          PatternField_RSIGoldCrossLow: 5,
          PatternField_RSIDeathCrossHigh: 6,
          PatternField_RSITopDivergence: 7,
          PatternField_RSIBottomDivergence: 8,
          PatternField_KDJGoldCrossLow: 9,
          PatternField_KDJDeathCrossHigh: 10,
          PatternField_KDJTopDivergence: 11,
          PatternField_KDJBottomDivergence: 12,
          PatternField_MACDGoldCrossLow: 13,
          PatternField_MACDDeathCrossHigh: 14,
          PatternField_MACDTopDivergence: 15,
          PatternField_MACDBottomDivergence: 16,
          PatternField_BOLLBreakUpper: 17,
          PatternField_BOLLLower: 18,
          PatternField_BOLLCrossMiddleUp: 19,
          PatternField_BOLLCrossMiddleDown: 20
        }
      },
      FinancialQuarter: {
        values: {
          FinancialQuarter_Unknown: 0,
          FinancialQuarter_Annual: 1,
          FinancialQuarter_FirstQuarter: 2,
          FinancialQuarter_Interim: 3,
          FinancialQuarter_ThirdQuarter: 4,
          FinancialQuarter_MostRecentQuarter: 5
        }
      },
      RelativePosition: {
        values: {
          RelativePosition_Unknown: 0,
          RelativePosition_More: 1,
          RelativePosition_Less: 2,
          RelativePosition_CrossUp: 3,
          RelativePosition_CrossDown: 4
        }
      },
      SortDir: {
        values: {
          SortDir_No: 0,
          SortDir_Ascend: 1,
          SortDir_Descend: 2
        }
      },
      BaseFilter: {
        fields: {
          fieldName: {
            rule: "required",
            type: "int32",
            id: 1
          },
          filterMin: {
            type: "double",
            id: 2
          },
          filterMax: {
            type: "double",
            id: 3
          },
          isNoFilter: {
            type: "bool",
            id: 4
          },
          sortDir: {
            type: "int32",
            id: 5
          }
        }
      },
      AccumulateFilter: {
        fields: {
          fieldName: {
            rule: "required",
            type: "int32",
            id: 1
          },
          filterMin: {
            type: "double",
            id: 2
          },
          filterMax: {
            type: "double",
            id: 3
          },
          isNoFilter: {
            type: "bool",
            id: 4
          },
          sortDir: {
            type: "int32",
            id: 5
          },
          days: {
            rule: "required",
            type: "int32",
            id: 6
          }
        }
      },
      FinancialFilter: {
        fields: {
          fieldName: {
            rule: "required",
            type: "int32",
            id: 1
          },
          filterMin: {
            type: "double",
            id: 2
          },
          filterMax: {
            type: "double",
            id: 3
          },
          isNoFilter: {
            type: "bool",
            id: 4
          },
          sortDir: {
            type: "int32",
            id: 5
          },
          quarter: {
            rule: "required",
            type: "int32",
            id: 6
          }
        }
      },
      PatternFilter: {
        fields: {
          fieldName: {
            rule: "required",
            type: "int32",
            id: 1
          },
          klType: {
            rule: "required",
            type: "int32",
            id: 2
          },
          isNoFilter: {
            type: "bool",
            id: 3
          },
          consecutivePeriod: {
            type: "int32",
            id: 4
          }
        }
      },
      CustomIndicatorFilter: {
        fields: {
          firstFieldName: {
            rule: "required",
            type: "int32",
            id: 1
          },
          secondFieldName: {
            rule: "required",
            type: "int32",
            id: 2
          },
          relativePosition: {
            rule: "required",
            type: "int32",
            id: 3
          },
          fieldValue: {
            type: "double",
            id: 4
          },
          klType: {
            rule: "required",
            type: "int32",
            id: 5
          },
          isNoFilter: {
            type: "bool",
            id: 6
          },
          firstFieldParaList: {
            rule: "repeated",
            type: "int32",
            id: 7,
            options: {
              packed: false
            }
          },
          secondFieldParaList: {
            rule: "repeated",
            type: "int32",
            id: 8,
            options: {
              packed: false
            }
          },
          consecutivePeriod: {
            type: "int32",
            id: 9
          }
        }
      },
      BaseData: {
        fields: {
          fieldName: {
            rule: "required",
            type: "int32",
            id: 1
          },
          value: {
            rule: "required",
            type: "double",
            id: 2
          }
        }
      },
      AccumulateData: {
        fields: {
          fieldName: {
            rule: "required",
            type: "int32",
            id: 1
          },
          value: {
            rule: "required",
            type: "double",
            id: 2
          },
          days: {
            rule: "required",
            type: "int32",
            id: 3
          }
        }
      },
      FinancialData: {
        fields: {
          fieldName: {
            rule: "required",
            type: "int32",
            id: 1
          },
          value: {
            rule: "required",
            type: "double",
            id: 2
          },
          quarter: {
            rule: "required",
            type: "int32",
            id: 3
          }
        }
      },
      CustomIndicatorData: {
        fields: {
          fieldName: {
            rule: "required",
            type: "int32",
            id: 1
          },
          value: {
            rule: "required",
            type: "double",
            id: 2
          },
          klType: {
            rule: "required",
            type: "int32",
            id: 3
          },
          fieldParaList: {
            rule: "repeated",
            type: "int32",
            id: 4,
            options: {
              packed: false
            }
          }
        }
      },
      StockData: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          name: {
            rule: "required",
            type: "string",
            id: 2
          },
          baseDataList: {
            rule: "repeated",
            type: "BaseData",
            id: 3
          },
          accumulateDataList: {
            rule: "repeated",
            type: "AccumulateData",
            id: 4
          },
          financialDataList: {
            rule: "repeated",
            type: "FinancialData",
            id: 5
          },
          customIndicatorDataList: {
            rule: "repeated",
            type: "CustomIndicatorData",
            id: 6
          }
        }
      },
      C2S: {
        fields: {
          begin: {
            rule: "required",
            type: "int32",
            id: 1
          },
          num: {
            rule: "required",
            type: "int32",
            id: 2
          },
          market: {
            rule: "required",
            type: "int32",
            id: 3
          },
          plate: {
            type: "Qot_Common.Security",
            id: 4
          },
          baseFilterList: {
            rule: "repeated",
            type: "BaseFilter",
            id: 5
          },
          accumulateFilterList: {
            rule: "repeated",
            type: "AccumulateFilter",
            id: 6
          },
          financialFilterList: {
            rule: "repeated",
            type: "FinancialFilter",
            id: 7
          },
          patternFilterList: {
            rule: "repeated",
            type: "PatternFilter",
            id: 8
          },
          customIndicatorFilterList: {
            rule: "repeated",
            type: "CustomIndicatorFilter",
            id: 9
          }
        }
      },
      S2C: {
        fields: {
          lastPage: {
            rule: "required",
            type: "bool",
            id: 1
          },
          allCount: {
            rule: "required",
            type: "int32",
            id: 2
          },
          dataList: {
            rule: "repeated",
            type: "StockData",
            id: 3
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_Sub: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotsub"
    },
    nested: {
      C2S: {
        fields: {
          securityList: {
            rule: "repeated",
            type: "Qot_Common.Security",
            id: 1
          },
          subTypeList: {
            rule: "repeated",
            type: "int32",
            id: 2,
            options: {
              packed: false
            }
          },
          isSubOrUnSub: {
            rule: "required",
            type: "bool",
            id: 3
          },
          isRegOrUnRegPush: {
            type: "bool",
            id: 4
          },
          regPushRehabTypeList: {
            rule: "repeated",
            type: "int32",
            id: 5,
            options: {
              packed: false
            }
          },
          isFirstPush: {
            type: "bool",
            id: 6
          },
          isUnsubAll: {
            type: "bool",
            id: 7
          },
          isSubOrderBookDetail: {
            type: "bool",
            id: 8
          },
          extendedTime: {
            type: "bool",
            id: 9
          }
        }
      },
      S2C: {
        fields: {}
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_UpdateBasicQot: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotupdatebasicqot"
    },
    nested: {
      S2C: {
        fields: {
          basicQotList: {
            rule: "repeated",
            type: "Qot_Common.BasicQot",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_UpdateBroker: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotupdatebroker"
    },
    nested: {
      S2C: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          brokerAskList: {
            rule: "repeated",
            type: "Qot_Common.Broker",
            id: 2
          },
          brokerBidList: {
            rule: "repeated",
            type: "Qot_Common.Broker",
            id: 3
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_UpdateKL: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotupdatekl"
    },
    nested: {
      S2C: {
        fields: {
          rehabType: {
            rule: "required",
            type: "int32",
            id: 1
          },
          klType: {
            rule: "required",
            type: "int32",
            id: 2
          },
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 3
          },
          klList: {
            rule: "repeated",
            type: "Qot_Common.KLine",
            id: 4
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_UpdateOrderBook: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotupdateorderbook"
    },
    nested: {
      S2C: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          orderBookAskList: {
            rule: "repeated",
            type: "Qot_Common.OrderBook",
            id: 2
          },
          orderBookBidList: {
            rule: "repeated",
            type: "Qot_Common.OrderBook",
            id: 3
          },
          svrRecvTimeBid: {
            type: "string",
            id: 4
          },
          svrRecvTimeBidTimestamp: {
            type: "double",
            id: 5
          },
          svrRecvTimeAsk: {
            type: "string",
            id: 6
          },
          svrRecvTimeAskTimestamp: {
            type: "double",
            id: 7
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_UpdatePriceReminder: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotupdatepricereminder"
    },
    nested: {
      MarketStatus: {
        values: {
          MarketStatus_Unknow: 0,
          MarketStatus_Open: 1,
          MarketStatus_USPre: 2,
          MarketStatus_USAfter: 3
        }
      },
      S2C: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          price: {
            rule: "required",
            type: "double",
            id: 2
          },
          changeRate: {
            rule: "required",
            type: "double",
            id: 3
          },
          marketStatus: {
            rule: "required",
            type: "int32",
            id: 4
          },
          content: {
            rule: "required",
            type: "string",
            id: 5
          },
          note: {
            rule: "required",
            type: "string",
            id: 6
          },
          key: {
            type: "int64",
            id: 7
          },
          type: {
            type: "int32",
            id: 8
          },
          setValue: {
            type: "double",
            id: 9
          },
          curValue: {
            type: "double",
            id: 10
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_UpdateRT: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotupdatert"
    },
    nested: {
      S2C: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          rtList: {
            rule: "repeated",
            type: "Qot_Common.TimeShare",
            id: 2
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Qot_UpdateTicker: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/qotupdateticker"
    },
    nested: {
      S2C: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          tickerList: {
            rule: "repeated",
            type: "Qot_Common.Ticker",
            id: 2
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  TestCmd: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/testcmd"
    },
    nested: {
      C2S: {
        fields: {
          cmd: {
            rule: "required",
            type: "string",
            id: 1
          },
          params: {
            type: "string",
            id: 2
          }
        }
      },
      S2C: {
        fields: {
          cmd: {
            rule: "required",
            type: "string",
            id: 1
          },
          result: {
            rule: "required",
            type: "string",
            id: 2
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Trd_Common: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/trdcommon"
    },
    nested: {
      TrdEnv: {
        values: {
          TrdEnv_Simulate: 0,
          TrdEnv_Real: 1
        }
      },
      TrdCategory: {
        values: {
          TrdCategory_Unknown: 0,
          TrdCategory_Security: 1,
          TrdCategory_Future: 2
        }
      },
      TrdMarket: {
        values: {
          TrdMarket_Unknown: 0,
          TrdMarket_HK: 1,
          TrdMarket_US: 2,
          TrdMarket_CN: 3,
          TrdMarket_HKCC: 4,
          TrdMarket_Futures: 5,
          TrdMarket_SG: 6
        }
      },
      TrdSecMarket: {
        values: {
          TrdSecMarket_Unknown: 0,
          TrdSecMarket_HK: 1,
          TrdSecMarket_US: 2,
          TrdSecMarket_CN_SH: 31,
          TrdSecMarket_CN_SZ: 32,
          TrdSecMarket_SG: 41,
          TrdSecMarket_JP: 51
        }
      },
      TrdSide: {
        values: {
          TrdSide_Unknown: 0,
          TrdSide_Buy: 1,
          TrdSide_Sell: 2,
          TrdSide_SellShort: 3,
          TrdSide_BuyBack: 4
        }
      },
      OrderType: {
        values: {
          OrderType_Unknown: 0,
          OrderType_Normal: 1,
          OrderType_Market: 2,
          OrderType_AbsoluteLimit: 5,
          OrderType_Auction: 6,
          OrderType_AuctionLimit: 7,
          OrderType_SpecialLimit: 8,
          OrderType_SpecialLimit_All: 9,
          OrderType_Stop: 10,
          OrderType_StopLimit: 11,
          OrderType_MarketifTouched: 12,
          OrderType_LimitifTouched: 13,
          OrderType_TrailingStop: 14,
          OrderType_TrailingStopLimit: 15
        }
      },
      TrailType: {
        values: {
          TrailType_Unknown: 0,
          TrailType_Ratio: 1,
          TrailType_Amount: 2
        }
      },
      OrderStatus: {
        values: {
          OrderStatus_Unsubmitted: 0,
          OrderStatus_Unknown: -1,
          OrderStatus_WaitingSubmit: 1,
          OrderStatus_Submitting: 2,
          OrderStatus_SubmitFailed: 3,
          OrderStatus_TimeOut: 4,
          OrderStatus_Submitted: 5,
          OrderStatus_Filled_Part: 10,
          OrderStatus_Filled_All: 11,
          OrderStatus_Cancelling_Part: 12,
          OrderStatus_Cancelling_All: 13,
          OrderStatus_Cancelled_Part: 14,
          OrderStatus_Cancelled_All: 15,
          OrderStatus_Failed: 21,
          OrderStatus_Disabled: 22,
          OrderStatus_Deleted: 23,
          OrderStatus_FillCancelled: 24
        }
      },
      OrderFillStatus: {
        values: {
          OrderFillStatus_OK: 0,
          OrderFillStatus_Cancelled: 1,
          OrderFillStatus_Changed: 2
        }
      },
      PositionSide: {
        values: {
          PositionSide_Long: 0,
          PositionSide_Unknown: -1,
          PositionSide_Short: 1
        }
      },
      ModifyOrderOp: {
        values: {
          ModifyOrderOp_Unknown: 0,
          ModifyOrderOp_Normal: 1,
          ModifyOrderOp_Cancel: 2,
          ModifyOrderOp_Disable: 3,
          ModifyOrderOp_Enable: 4,
          ModifyOrderOp_Delete: 5
        }
      },
      TrdAccType: {
        values: {
          TrdAccType_Unknown: 0,
          TrdAccType_Cash: 1,
          TrdAccType_Margin: 2
        }
      },
      Currency: {
        values: {
          Currency_Unknown: 0,
          Currency_HKD: 1,
          Currency_USD: 2,
          Currency_CNH: 3,
          Currency_JPY: 4,
          Currency_SGD: 5
        }
      },
      CltRiskLevel: {
        values: {
          CltRiskLevel_Unknown: -1,
          CltRiskLevel_Safe: 0,
          CltRiskLevel_Warning: 1,
          CltRiskLevel_Danger: 2,
          CltRiskLevel_AbsoluteSafe: 3,
          CltRiskLevel_OptDanger: 4
        }
      },
      TimeInForce: {
        values: {
          TimeInForce_DAY: 0,
          TimeInForce_GTC: 1
        }
      },
      SecurityFirm: {
        values: {
          SecurityFirm_Unknown: 0,
          SecurityFirm_FutuSecurities: 1,
          SecurityFirm_FutuInc: 2,
          SecurityFirm_FutuSG: 3
        }
      },
      SimAccType: {
        values: {
          SimAccType_Unknown: 0,
          SimAccType_Stock: 1,
          SimAccType_Option: 2
        }
      },
      CltRiskStatus: {
        values: {
          CltRiskStatus_Unknown: 0,
          CltRiskStatus_Level1: 1,
          CltRiskStatus_Level2: 2,
          CltRiskStatus_Level3: 3,
          CltRiskStatus_Level4: 4,
          CltRiskStatus_Level5: 5,
          CltRiskStatus_Level6: 6,
          CltRiskStatus_Level7: 7,
          CltRiskStatus_Level8: 8,
          CltRiskStatus_Level9: 9
        }
      },
      DTStatus: {
        values: {
          DTStatus_Unknown: 0,
          DTStatus_Unlimited: 1,
          DTStatus_EMCall: 2,
          DTStatus_DTCall: 3
        }
      },
      AccCashInfo: {
        fields: {
          currency: {
            type: "int32",
            id: 1
          },
          cash: {
            type: "double",
            id: 2
          },
          availableBalance: {
            type: "double",
            id: 3
          }
        }
      },
      TrdHeader: {
        fields: {
          trdEnv: {
            rule: "required",
            type: "int32",
            id: 1
          },
          accID: {
            rule: "required",
            type: "uint64",
            id: 2
          },
          trdMarket: {
            rule: "required",
            type: "int32",
            id: 3
          }
        }
      },
      TrdAcc: {
        fields: {
          trdEnv: {
            rule: "required",
            type: "int32",
            id: 1
          },
          accID: {
            rule: "required",
            type: "uint64",
            id: 2
          },
          trdMarketAuthList: {
            rule: "repeated",
            type: "int32",
            id: 3,
            options: {
              packed: false
            }
          },
          accType: {
            type: "int32",
            id: 4
          },
          cardNum: {
            type: "string",
            id: 5
          },
          securityFirm: {
            type: "int32",
            id: 6
          },
          simAccType: {
            type: "int32",
            id: 7
          }
        }
      },
      Funds: {
        fields: {
          power: {
            rule: "required",
            type: "double",
            id: 1
          },
          totalAssets: {
            rule: "required",
            type: "double",
            id: 2
          },
          cash: {
            rule: "required",
            type: "double",
            id: 3
          },
          marketVal: {
            rule: "required",
            type: "double",
            id: 4
          },
          frozenCash: {
            rule: "required",
            type: "double",
            id: 5
          },
          debtCash: {
            rule: "required",
            type: "double",
            id: 6
          },
          avlWithdrawalCash: {
            rule: "required",
            type: "double",
            id: 7
          },
          currency: {
            type: "int32",
            id: 8
          },
          availableFunds: {
            type: "double",
            id: 9
          },
          unrealizedPL: {
            type: "double",
            id: 10
          },
          realizedPL: {
            type: "double",
            id: 11
          },
          riskLevel: {
            type: "int32",
            id: 12
          },
          initialMargin: {
            type: "double",
            id: 13
          },
          maintenanceMargin: {
            type: "double",
            id: 14
          },
          cashInfoList: {
            rule: "repeated",
            type: "AccCashInfo",
            id: 15
          },
          maxPowerShort: {
            type: "double",
            id: 16
          },
          netCashPower: {
            type: "double",
            id: 17
          },
          longMv: {
            type: "double",
            id: 18
          },
          shortMv: {
            type: "double",
            id: 19
          },
          pendingAsset: {
            type: "double",
            id: 20
          },
          maxWithdrawal: {
            type: "double",
            id: 21
          },
          riskStatus: {
            type: "int32",
            id: 22
          },
          marginCallMargin: {
            type: "double",
            id: 23
          },
          isPdt: {
            type: "bool",
            id: 24
          },
          pdtSeq: {
            type: "string",
            id: 25
          },
          beginningDTBP: {
            type: "double",
            id: 26
          },
          remainingDTBP: {
            type: "double",
            id: 27
          },
          dtCallAmount: {
            type: "double",
            id: 28
          },
          dtStatus: {
            type: "int32",
            id: 29
          }
        }
      },
      Position: {
        fields: {
          positionID: {
            rule: "required",
            type: "uint64",
            id: 1
          },
          positionSide: {
            rule: "required",
            type: "int32",
            id: 2
          },
          code: {
            rule: "required",
            type: "string",
            id: 3
          },
          name: {
            rule: "required",
            type: "string",
            id: 4
          },
          qty: {
            rule: "required",
            type: "double",
            id: 5
          },
          canSellQty: {
            rule: "required",
            type: "double",
            id: 6
          },
          price: {
            rule: "required",
            type: "double",
            id: 7
          },
          costPrice: {
            type: "double",
            id: 8
          },
          val: {
            rule: "required",
            type: "double",
            id: 9
          },
          plVal: {
            rule: "required",
            type: "double",
            id: 10
          },
          plRatio: {
            type: "double",
            id: 11
          },
          secMarket: {
            type: "int32",
            id: 12
          },
          tdPlVal: {
            type: "double",
            id: 21
          },
          tdTrdVal: {
            type: "double",
            id: 22
          },
          tdBuyVal: {
            type: "double",
            id: 23
          },
          tdBuyQty: {
            type: "double",
            id: 24
          },
          tdSellVal: {
            type: "double",
            id: 25
          },
          tdSellQty: {
            type: "double",
            id: 26
          },
          unrealizedPL: {
            type: "double",
            id: 28
          },
          realizedPL: {
            type: "double",
            id: 29
          },
          currency: {
            type: "int32",
            id: 30
          },
          trdMarket: {
            type: "int32",
            id: 31
          }
        }
      },
      Order: {
        fields: {
          trdSide: {
            rule: "required",
            type: "int32",
            id: 1
          },
          orderType: {
            rule: "required",
            type: "int32",
            id: 2
          },
          orderStatus: {
            rule: "required",
            type: "int32",
            id: 3
          },
          orderID: {
            rule: "required",
            type: "uint64",
            id: 4
          },
          orderIDEx: {
            rule: "required",
            type: "string",
            id: 5
          },
          code: {
            rule: "required",
            type: "string",
            id: 6
          },
          name: {
            rule: "required",
            type: "string",
            id: 7
          },
          qty: {
            rule: "required",
            type: "double",
            id: 8
          },
          price: {
            type: "double",
            id: 9
          },
          createTime: {
            rule: "required",
            type: "string",
            id: 10
          },
          updateTime: {
            rule: "required",
            type: "string",
            id: 11
          },
          fillQty: {
            type: "double",
            id: 12
          },
          fillAvgPrice: {
            type: "double",
            id: 13
          },
          lastErrMsg: {
            type: "string",
            id: 14
          },
          secMarket: {
            type: "int32",
            id: 15
          },
          createTimestamp: {
            type: "double",
            id: 16
          },
          updateTimestamp: {
            type: "double",
            id: 17
          },
          remark: {
            type: "string",
            id: 18
          },
          timeInForce: {
            type: "int32",
            id: 19
          },
          fillOutsideRTH: {
            type: "bool",
            id: 20
          },
          auxPrice: {
            type: "double",
            id: 21
          },
          trailType: {
            type: "int32",
            id: 22
          },
          trailValue: {
            type: "double",
            id: 23
          },
          trailSpread: {
            type: "double",
            id: 24
          },
          currency: {
            type: "int32",
            id: 25
          },
          trdMarket: {
            type: "int32",
            id: 26
          }
        }
      },
      OrderFill: {
        fields: {
          trdSide: {
            rule: "required",
            type: "int32",
            id: 1
          },
          fillID: {
            rule: "required",
            type: "uint64",
            id: 2
          },
          fillIDEx: {
            rule: "required",
            type: "string",
            id: 3
          },
          orderID: {
            type: "uint64",
            id: 4
          },
          orderIDEx: {
            type: "string",
            id: 5
          },
          code: {
            rule: "required",
            type: "string",
            id: 6
          },
          name: {
            rule: "required",
            type: "string",
            id: 7
          },
          qty: {
            rule: "required",
            type: "double",
            id: 8
          },
          price: {
            rule: "required",
            type: "double",
            id: 9
          },
          createTime: {
            rule: "required",
            type: "string",
            id: 10
          },
          counterBrokerID: {
            type: "int32",
            id: 11
          },
          counterBrokerName: {
            type: "string",
            id: 12
          },
          secMarket: {
            type: "int32",
            id: 13
          },
          createTimestamp: {
            type: "double",
            id: 14
          },
          updateTimestamp: {
            type: "double",
            id: 15
          },
          status: {
            type: "int32",
            id: 16
          }
        }
      },
      MaxTrdQtys: {
        fields: {
          maxCashBuy: {
            rule: "required",
            type: "double",
            id: 1
          },
          maxCashAndMarginBuy: {
            type: "double",
            id: 2
          },
          maxPositionSell: {
            rule: "required",
            type: "double",
            id: 3
          },
          maxSellShort: {
            type: "double",
            id: 4
          },
          maxBuyBack: {
            type: "double",
            id: 5
          },
          longRequiredIM: {
            type: "double",
            id: 6
          },
          shortRequiredIM: {
            type: "double",
            id: 7
          }
        }
      },
      TrdFilterConditions: {
        fields: {
          codeList: {
            rule: "repeated",
            type: "string",
            id: 1
          },
          idList: {
            rule: "repeated",
            type: "uint64",
            id: 2,
            options: {
              packed: false
            }
          },
          beginTime: {
            type: "string",
            id: 3
          },
          endTime: {
            type: "string",
            id: 4
          }
        }
      }
    }
  },
  Trd_GetAccList: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/trdgetacclist"
    },
    nested: {
      C2S: {
        fields: {
          userID: {
            rule: "required",
            type: "uint64",
            id: 1
          },
          trdCategory: {
            type: "int32",
            id: 2
          },
          needGeneralSecAccount: {
            type: "bool",
            id: 3
          }
        }
      },
      S2C: {
        fields: {
          accList: {
            rule: "repeated",
            type: "Trd_Common.TrdAcc",
            id: 1
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Trd_GetFunds: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/trdgetfunds"
    },
    nested: {
      C2S: {
        fields: {
          header: {
            rule: "required",
            type: "Trd_Common.TrdHeader",
            id: 1
          },
          refreshCache: {
            type: "bool",
            id: 2
          },
          currency: {
            type: "int32",
            id: 3
          }
        }
      },
      S2C: {
        fields: {
          header: {
            rule: "required",
            type: "Trd_Common.TrdHeader",
            id: 1
          },
          funds: {
            type: "Trd_Common.Funds",
            id: 2
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Trd_GetHistoryOrderFillList: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/trdgethistoryorderfilllist"
    },
    nested: {
      C2S: {
        fields: {
          header: {
            rule: "required",
            type: "Trd_Common.TrdHeader",
            id: 1
          },
          filterConditions: {
            rule: "required",
            type: "Trd_Common.TrdFilterConditions",
            id: 2
          }
        }
      },
      S2C: {
        fields: {
          header: {
            rule: "required",
            type: "Trd_Common.TrdHeader",
            id: 1
          },
          orderFillList: {
            rule: "repeated",
            type: "Trd_Common.OrderFill",
            id: 2
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Trd_GetHistoryOrderList: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/trdgethistoryorderlist"
    },
    nested: {
      C2S: {
        fields: {
          header: {
            rule: "required",
            type: "Trd_Common.TrdHeader",
            id: 1
          },
          filterConditions: {
            rule: "required",
            type: "Trd_Common.TrdFilterConditions",
            id: 2
          },
          filterStatusList: {
            rule: "repeated",
            type: "int32",
            id: 3,
            options: {
              packed: false
            }
          }
        }
      },
      S2C: {
        fields: {
          header: {
            rule: "required",
            type: "Trd_Common.TrdHeader",
            id: 1
          },
          orderList: {
            rule: "repeated",
            type: "Trd_Common.Order",
            id: 2
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Trd_GetMarginRatio: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/trdgetmarginratio"
    },
    nested: {
      MarginRatioInfo: {
        fields: {
          security: {
            rule: "required",
            type: "Qot_Common.Security",
            id: 1
          },
          isLongPermit: {
            type: "bool",
            id: 2
          },
          isShortPermit: {
            type: "bool",
            id: 3
          },
          shortPoolRemain: {
            type: "double",
            id: 4
          },
          shortFeeRate: {
            type: "double",
            id: 5
          },
          alertLongRatio: {
            type: "double",
            id: 6
          },
          alertShortRatio: {
            type: "double",
            id: 7
          },
          imLongRatio: {
            type: "double",
            id: 8
          },
          imShortRatio: {
            type: "double",
            id: 9
          },
          mcmLongRatio: {
            type: "double",
            id: 10
          },
          mcmShortRatio: {
            type: "double",
            id: 11
          },
          mmLongRatio: {
            type: "double",
            id: 12
          },
          mmShortRatio: {
            type: "double",
            id: 13
          }
        }
      },
      C2S: {
        fields: {
          header: {
            rule: "required",
            type: "Trd_Common.TrdHeader",
            id: 1
          },
          securityList: {
            rule: "repeated",
            type: "Qot_Common.Security",
            id: 2
          }
        }
      },
      S2C: {
        fields: {
          header: {
            rule: "required",
            type: "Trd_Common.TrdHeader",
            id: 1
          },
          marginRatioInfoList: {
            rule: "repeated",
            type: "MarginRatioInfo",
            id: 2
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Trd_GetMaxTrdQtys: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/trdgetmaxtrdqtys"
    },
    nested: {
      C2S: {
        fields: {
          header: {
            rule: "required",
            type: "Trd_Common.TrdHeader",
            id: 1
          },
          orderType: {
            rule: "required",
            type: "int32",
            id: 2
          },
          code: {
            rule: "required",
            type: "string",
            id: 3
          },
          price: {
            rule: "required",
            type: "double",
            id: 4
          },
          orderID: {
            type: "uint64",
            id: 5
          },
          adjustPrice: {
            type: "bool",
            id: 6
          },
          adjustSideAndLimit: {
            type: "double",
            id: 7
          },
          secMarket: {
            type: "int32",
            id: 8
          }
        }
      },
      S2C: {
        fields: {
          header: {
            rule: "required",
            type: "Trd_Common.TrdHeader",
            id: 1
          },
          maxTrdQtys: {
            type: "Trd_Common.MaxTrdQtys",
            id: 2
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Trd_GetOrderFillList: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/trdgetorderfilllist"
    },
    nested: {
      C2S: {
        fields: {
          header: {
            rule: "required",
            type: "Trd_Common.TrdHeader",
            id: 1
          },
          filterConditions: {
            type: "Trd_Common.TrdFilterConditions",
            id: 2
          },
          refreshCache: {
            type: "bool",
            id: 3
          }
        }
      },
      S2C: {
        fields: {
          header: {
            rule: "required",
            type: "Trd_Common.TrdHeader",
            id: 1
          },
          orderFillList: {
            rule: "repeated",
            type: "Trd_Common.OrderFill",
            id: 2
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Trd_GetOrderList: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/trdgetorderlist"
    },
    nested: {
      C2S: {
        fields: {
          header: {
            rule: "required",
            type: "Trd_Common.TrdHeader",
            id: 1
          },
          filterConditions: {
            type: "Trd_Common.TrdFilterConditions",
            id: 2
          },
          filterStatusList: {
            rule: "repeated",
            type: "int32",
            id: 3,
            options: {
              packed: false
            }
          },
          refreshCache: {
            type: "bool",
            id: 4
          }
        }
      },
      S2C: {
        fields: {
          header: {
            rule: "required",
            type: "Trd_Common.TrdHeader",
            id: 1
          },
          orderList: {
            rule: "repeated",
            type: "Trd_Common.Order",
            id: 2
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Trd_GetPositionList: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/trdgetpositionlist"
    },
    nested: {
      C2S: {
        fields: {
          header: {
            rule: "required",
            type: "Trd_Common.TrdHeader",
            id: 1
          },
          filterConditions: {
            type: "Trd_Common.TrdFilterConditions",
            id: 2
          },
          filterPLRatioMin: {
            type: "double",
            id: 3
          },
          filterPLRatioMax: {
            type: "double",
            id: 4
          },
          refreshCache: {
            type: "bool",
            id: 5
          }
        }
      },
      S2C: {
        fields: {
          header: {
            rule: "required",
            type: "Trd_Common.TrdHeader",
            id: 1
          },
          positionList: {
            rule: "repeated",
            type: "Trd_Common.Position",
            id: 2
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Trd_ModifyOrder: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/trdmodifyorder"
    },
    nested: {
      C2S: {
        fields: {
          packetID: {
            rule: "required",
            type: "Common.PacketID",
            id: 1
          },
          header: {
            rule: "required",
            type: "Trd_Common.TrdHeader",
            id: 2
          },
          orderID: {
            rule: "required",
            type: "uint64",
            id: 3
          },
          modifyOrderOp: {
            rule: "required",
            type: "int32",
            id: 4
          },
          forAll: {
            type: "bool",
            id: 5
          },
          trdMarket: {
            type: "int32",
            id: 6
          },
          qty: {
            type: "double",
            id: 8
          },
          price: {
            type: "double",
            id: 9
          },
          adjustPrice: {
            type: "bool",
            id: 10
          },
          adjustSideAndLimit: {
            type: "double",
            id: 11
          },
          auxPrice: {
            type: "double",
            id: 12
          },
          trailType: {
            type: "int32",
            id: 13
          },
          trailValue: {
            type: "double",
            id: 14
          },
          trailSpread: {
            type: "double",
            id: 15
          }
        }
      },
      S2C: {
        fields: {
          header: {
            rule: "required",
            type: "Trd_Common.TrdHeader",
            id: 1
          },
          orderID: {
            rule: "required",
            type: "uint64",
            id: 2
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Trd_Notify: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/trdnotify"
    },
    nested: {
      S2C: {
        fields: {
          header: {
            rule: "required",
            type: "Trd_Common.TrdHeader",
            id: 1
          },
          type: {
            rule: "required",
            type: "int32",
            id: 2
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Trd_PlaceOrder: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/trdplaceorder"
    },
    nested: {
      C2S: {
        fields: {
          packetID: {
            rule: "required",
            type: "Common.PacketID",
            id: 1
          },
          header: {
            rule: "required",
            type: "Trd_Common.TrdHeader",
            id: 2
          },
          trdSide: {
            rule: "required",
            type: "int32",
            id: 3
          },
          orderType: {
            rule: "required",
            type: "int32",
            id: 4
          },
          code: {
            rule: "required",
            type: "string",
            id: 5
          },
          qty: {
            rule: "required",
            type: "double",
            id: 6
          },
          price: {
            type: "double",
            id: 7
          },
          adjustPrice: {
            type: "bool",
            id: 8
          },
          adjustSideAndLimit: {
            type: "double",
            id: 9
          },
          secMarket: {
            type: "int32",
            id: 10
          },
          remark: {
            type: "string",
            id: 11
          },
          timeInForce: {
            type: "int32",
            id: 12
          },
          fillOutsideRTH: {
            type: "bool",
            id: 13
          },
          auxPrice: {
            type: "double",
            id: 14
          },
          trailType: {
            type: "int32",
            id: 15
          },
          trailValue: {
            type: "double",
            id: 16
          },
          trailSpread: {
            type: "double",
            id: 17
          }
        }
      },
      S2C: {
        fields: {
          header: {
            rule: "required",
            type: "Trd_Common.TrdHeader",
            id: 1
          },
          orderID: {
            type: "uint64",
            id: 2
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Trd_ReconfirmOrder: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/trdreconfirmorder"
    },
    nested: {
      C2S: {
        fields: {
          packetID: {
            rule: "required",
            type: "Common.PacketID",
            id: 1
          },
          header: {
            rule: "required",
            type: "Trd_Common.TrdHeader",
            id: 2
          },
          orderID: {
            rule: "required",
            type: "uint64",
            id: 3
          },
          reconfirmReason: {
            rule: "required",
            type: "int32",
            id: 4
          }
        }
      },
      S2C: {
        fields: {
          header: {
            rule: "required",
            type: "Trd_Common.TrdHeader",
            id: 1
          },
          orderID: {
            rule: "required",
            type: "uint64",
            id: 2
          }
        }
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Trd_SubAccPush: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/trdsubaccpush"
    },
    nested: {
      C2S: {
        fields: {
          accIDList: {
            rule: "repeated",
            type: "uint64",
            id: 1,
            options: {
              packed: false
            }
          }
        }
      },
      S2C: {
        fields: {}
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Trd_UnlockTrade: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/trdunlocktrade"
    },
    nested: {
      C2S: {
        fields: {
          unlock: {
            rule: "required",
            type: "bool",
            id: 1
          },
          pwdMD5: {
            type: "string",
            id: 2
          },
          securityFirm: {
            type: "int32",
            id: 3
          }
        }
      },
      S2C: {
        fields: {}
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Trd_UpdateOrder: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/trdupdateorder"
    },
    nested: {
      S2C: {
        fields: {
          header: {
            rule: "required",
            type: "Trd_Common.TrdHeader",
            id: 1
          },
          order: {
            rule: "required",
            type: "Trd_Common.Order",
            id: 2
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Trd_UpdateOrderFill: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/trdupdateorderfill"
    },
    nested: {
      S2C: {
        fields: {
          header: {
            rule: "required",
            type: "Trd_Common.TrdHeader",
            id: 1
          },
          orderFill: {
            rule: "required",
            type: "Trd_Common.OrderFill",
            id: 2
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  },
  Verification: {
    options: {
      java_package: "com.futu.openapi.pb",
      go_package: "github.com/futuopen/ftapi4go/pb/verification"
    },
    nested: {
      VerificationType: {
        values: {
          VerificationType_Unknow: 0,
          VerificationType_Picture: 1,
          VerificationType_Phone: 2
        }
      },
      VerificationOp: {
        values: {
          VerificationOp_Unknow: 0,
          VerificationOp_Request: 1,
          VerificationOp_InputAndLogin: 2
        }
      },
      C2S: {
        fields: {
          type: {
            rule: "required",
            type: "int32",
            id: 1
          },
          op: {
            rule: "required",
            type: "int32",
            id: 2
          },
          code: {
            type: "string",
            id: 3
          }
        }
      },
      S2C: {
        fields: {}
      },
      Request: {
        fields: {
          c2s: {
            rule: "required",
            type: "C2S",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          retType: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": -400
            }
          },
          retMsg: {
            type: "string",
            id: 2
          },
          errCode: {
            type: "int32",
            id: 3
          },
          s2c: {
            type: "S2C",
            id: 4
          }
        }
      }
    }
  }
});

module.exports = $root;
