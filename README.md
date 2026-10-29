# Hello World

A simple Hello World project, adapted for deployment on **Vercel**.

## 目录结构

```
.
├── index.html      # 静态首页（部署后访问站点根路径 /）
├── api/
│   └── index.py    # Vercel Python 服务函数（部署后访问 /api）
├── hello.py        # 原始命令行脚本（本地运行用，不参与线上部署）
└── README.md
```

## 本地运行（原始脚本）

```bash
python hello.py
```

Output:

```
Hello, World!
```

## 部署到 Vercel（免费 *.vercel.app 域名）

1. 打开 https://vercel.com ，用 GitHub 账号登录。
2. 点击 **Add New… → Project**，在仓库列表里选择 `tianzhiyaun04/helloworld`，点击 **Import**。
   - 如果列表里看不到仓库，先点 **Adjust GitHub App Permissions**，授权 Vercel 访问该仓库。
3. 配置页保持默认即可（Framework Preset 选 **Other**，Root Directory 保持 `.`，无需填写 Build Command 和 Output Directory）。
4. 点击 **Deploy**，等待构建完成。
5. 部署成功后，Vercel 会自动分配一个免费域名（形如 `helloworld-xxxx.vercel.app`）：
   - 首页：`https://<你的域名>.vercel.app/`
   - Python 接口：`https://<你的域名>.vercel.app/api`

## 线上路由说明

| 路由 | 类型 | 返回 |
|------|------|------|
| `/` | 静态页面 | Hello World 首页，页面会自动请求 `/api` 展示接口返回 |
| `/api` | Python Serverless Function | `{ "message": "Hello, World!", "source": "Vercel Python Function" }` |

> 说明：本项目仅使用 Python 标准库，无需 `requirements.txt`；Python 运行时在 Vercel 免费 Hobby 套餐可用。
