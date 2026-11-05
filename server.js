// 本地运行入口：node server.js（默认 http://localhost:3000）
// 纯 Node.js 内置模块实现，不需要安装任何依赖；Vercel 上由 api/time.js 承担接口。
const http = require('http');
const fs = require('fs');
const path = require('path');
const timeHandler = require('./api/time');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = http.createServer((req, res) => {
  const pathname = (req.url || '/').split('?')[0];

  if (pathname === '/api/time') {
    return timeHandler(req, res);
  }

  if (pathname === '/' || pathname === '/index.html') {
    return fs.readFile(INDEX, 'utf8', (err, html) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        return res.end('读取 index.html 失败：' + err.message);
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end(html);
    });
  }

  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('404 Not Found：' + pathname);
});

server.listen(PORT, () => {
  console.log('HelloWorld 网站已启动：http://localhost:' + PORT);
  console.log('接口自检：http://localhost:' + PORT + '/api/time');
});
