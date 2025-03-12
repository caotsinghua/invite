const express = require("express");
const app = express();

app.use(
  express.static(__dirname + "/dist", {
    setHeaders: setCustomCacheControl,
  })
);
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log("服务启动成功，端口：", port);
});

// 缓存控制
function setCustomCacheControl(res, path) {
  // 对html格式文件不设置缓存
  if (express.static.mime.lookup(path) == 'text/html') {
    res.setHeader('Cache-Control', 'no-cache');
  } else {
    // 其他静态资源使用强缓存
    res.setHeader('Cache-Control', 'public, max-age=3600')
  }
}
