# HelloWorld · 我的第一个 AI 开发的网站

低代码开发实践 · 课堂练习一产物。用自然语言指挥 AI 生成代码，再走通「本地跑通 → GitHub → Vercel → 公网可访问」的完整链路。

- GitHub 仓库：https://github.com/tianzhiyaun04/helloworld
- 生产访问地址：https://helloworld-eta-seven.vercel.app
- 单次部署地址：https://helloworld-6e9a152r9-tianzhiyaun04.vercel.app

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

本地实测：首页返回 200，`/api/time` 返回形如
`{"iso":"2026-11-05T11:04:20.010Z","timezone":"Asia/Shanghai (UTC+8)","serverClock":"2026-11-05 星期四 19:04:20",...}`。

## 部署到 Vercel

1. Vercel → Add New → Project → Import 本仓库；
2. Framework Preset 自动识别为 `Node`（等价于手册里的 `Other`），其余保持默认；
3. 点击 Deploy，约 1 分钟后部署完成，状态为 `Ready`。

## 验收标准

- [x] GitHub 仓库中能看到 `server.js` 等源码
- [x] Vercel 部署状态 `Ready`，生产域名已分配
- [ ] 公网访问：国内部分网络（含校园网/家用宽带）对 `*.vercel.app` 存在 DNS 污染与连接阻断，直连会 `ERR_CONNECTION_TIMED_OUT`；需要换网络（手机流量）、挂代理，或绑定自定义域名后再验证

## 访问不通时的处理

- 换网络验证：手机 4G/5G 打开上面的生产地址；
- 挂代理后访问；
- 绑定自定义域名（对应手册练习三：在 dnshe.com 申请域名，再在 Vercel 的 Domains 里添加，按提示配置 CNAME）。
