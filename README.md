# HelloWorld · 我的第一个 AI 开发的网站

低代码开发实践 · 课堂练习一产物。用自然语言指挥 AI 生成代码，再走通「本地跑通 → GitHub → Vercel → 公网可访问」的完整链路。

## 页面内容

- 大标题：`Hello World！`
- 副标题：`我的第一个AI开发的网站`
- 服务器时间：由 `/api/time` 接口返回，前端每秒刷新展示（不是浏览器本地时间）

## 文件结构

```
helloworld/
├── index.html      # 首页（静态页面，Vercel 直接托管）
├── api/
│   └── time.js     # Serverless 接口：GET /api/time，返回服务器当前时间
├── server.js       # 本地运行入口（纯 Node.js 内置模块，零依赖）
├── package.json    # 项目信息与启动命令
└── README.md
```

## 本地运行

```bash
npm start
# 或
node server.js
```

打开 http://localhost:3000 即可看到页面；接口自检：http://localhost:3000/api/time

## 部署到 Vercel

1. Vercel → Add New → Project → Import 本仓库；
2. Framework Preset 选 `Other`，其余保持默认；
3. 点击 Deploy，约 1 分钟后获得 `helloworld-xxx.vercel.app` 网址。

## 验收标准

- [x] GitHub 仓库中能看到 `server.js` 等源码
- [x] 公网网址可访问，页面显示 Hello World 与服务器时间
