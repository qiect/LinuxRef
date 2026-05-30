# LinuxRef

Linux 命令速查 —— 快速查询通俗易懂的 Linux 命令

一个面向开发者和运维人员的命令速查工具，提供通俗易懂的中文解释和全面的命令覆盖，帮助用户快速找到所需命令并理解其用法。

## ✨ 功能特性

- **模糊搜索** — 支持命令名、中文关键词、功能描述实时模糊搜索
- **分类导航** — 按功能分类浏览命令（文件操作、进程管理、网络工具等 10 大类）
- **通俗解释** — 用生活化的比喻解释命令功能，告别晦涩的 man 手册
- **常用示例** — 每个命令提供 3-5 个实际使用场景和示例代码
- **每日一令** — 随机展示一个命令及其通俗解释
- **命令收藏** — 星标收藏常用命令，快速访问
- **危险标识** — 高危命令和需注意命令醒目标注
- **键盘快捷键** — 支持 `/` 搜索、`↑↓` 导航、`Enter` 查看、`Esc` 清空
- **响应式设计** — 适配桌面、平板和手机

## 🛠️ 技术栈

- **Vue 3** + **TypeScript** — 组合式 API + 类型安全
- **Vite** — 极速开发与构建
- **Tailwind CSS 3** — 原子化 CSS 样式
- **Vue Router** — 单页应用路由
- **Lucide Icons** — 简约线条图标
- **纯前端架构** — 所有命令数据内嵌前端，无需后端服务

## 📂 项目结构

```
src/
├── components/
│   ├── CategoryNav.vue      # 分类侧边栏导航
│   ├── CommandCard.vue      # 命令卡片组件
│   ├── CopyButton.vue       # 一键复制按钮
│   ├── DailyCommand.vue     # 每日一令
│   └── SearchBar.vue        # 搜索栏
├── composables/
│   ├── useFavorites.ts      # 收藏功能
│   └── useSearchHistory.ts  # 搜索历史
├── data/
│   └── commands.ts          # 命令数据（分类 + 命令详情）
├── pages/
│   ├── HomePage.vue         # 主页
│   └── CommandPage.vue      # 命令详情页
├── router/
│   └── index.ts             # 路由配置
├── App.vue                  # 根组件
├── main.ts                  # 入口文件
└── style.css                # 全局样式
```

## 🚀 快速开始

### 环境要求

- Node.js >= 20
- npm

### 安装与运行

```bash
# 克隆仓库
git clone https://github.com/your-username/LinuxRef.git
cd LinuxRef

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

### 可用脚本

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 类型检查 + 构建生产版本 |
| `npm run preview` | 预览构建结果 |
| `npm run check` | TypeScript 类型检查 |
| `npm run lint` | ESLint 代码检查 |
| `npm run lint:fix` | ESLint 自动修复 |

## 📖 命令分类

| 分类 | 说明 |
|------|------|
| 文件操作 | 文件和目录的创建、查看、复制、移动与删除 |
| 文本处理 | 文本内容的查看、搜索、替换、排序与格式化 |
| 进程管理 | 系统进程的查看、控制、调度与管理 |
| 网络工具 | 网络连接测试、配置、数据传输与诊断 |
| 权限管理 | 文件权限、用户身份切换与访问控制 |
| 系统信息 | 查看系统硬件、运行状态与环境信息 |
| 磁盘管理 | 磁盘分区、格式化、挂载与存储空间管理 |
| 压缩解压 | 文件压缩打包与解压还原操作 |
| 用户管理 | 用户账号、用户组与登录会话管理 |
| 软件包管理 | 软件安装、卸载、更新与依赖管理 |

## 🎨 设计风格

深色终端风格界面，主色调为 `#0D1117` 深黑背景，搭配 `#58A6FF` 终端蓝高亮和 `#7EE787` 终端绿代码色。代码区使用 JetBrains Mono 等宽字体，正文使用 Noto Sans SC 中文字体。

## 🚢 部署

项目通过 GitHub Actions 自动部署到 GitHub Pages，配置见 `.github/workflows/build.yml`。发布 Release 或手动触发 Workflow 即可部署。

## 📄 许可证

[MIT License](LICENSE)
