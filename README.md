## 简介
* fork from futu-api@6.6.3108 https://www.futunn.com/download/OpenAPI
* support nodejs 

## 安装
`npm install --save node-futu-api`

## 使用
跟官方的例子一样，可直接拷贝官方的例子运行，唯一的区别是安装的依赖由 `futu-api` 改为 `node-futu-api`

```javascript
import ftWebsocket from "node-futu-api";
import beautify from "js-beautify";

function QotGetSecuritySnapshot() {
  let [addr, port, enable_ssl, key] = [
    "127.0.0.1",
    33333,
    false,
    "xxx", // TODO 这里需替换为自己的websocket秘钥
  ];
  let websocket = new ftWebsocket();

  websocket.onlogin = (ret, msg) => {
    if (ret) {
      // 登录成功

      const req = {
        c2s: {
          securityList: [
            {
              market: 1,
              code: "00700",
            },
          ],
        },
      };
      websocket
        .GetSecuritySnapshot(req)
        .then((res) => {
          let { errCode, retMsg, retType, s2c } = res;
          console.log(
            "Snapshot: errCode %d, retMsg %s, retType %d",
            errCode,
            retMsg,
            retType
          );
          if (retType == 0) {
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
  setTimeout(() => {
    websocket.stop();
    console.log("stop");
  }, 5000); // 5秒后断开
}

QotGetSecuritySnapshot();


```