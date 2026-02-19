# 学术主页模板

<p align="center">
  <img src="https://img.shields.io/badge/主题-11个-blue" alt="Themes">
  <img src="https://img.shields.io/badge/深色模式-支持-green" alt="Dark Mode">
  <img src="https://img.shields.io/badge/响应式-是-orange" alt="Responsive">
  <img src="https://img.shields.io/badge/许可证-MIT-brightgreen" alt="License">
</p>

<p align="center">
  <a href="README.md">English</a> | <b>中文</b>
</p>

为研究人员和博士生打造的精美响应式学术主页模板集合。**11 种独特主题**，支持即时切换、深色/浅色模式，无需任何构建工具。

## 特性

| 特性 | 说明 |
|:----:|------|
| 🎨 | **11 种独特主题** - 从极简学术风到复古报纸风、赛博终端风 |
| 🌓 | **深色/浅色模式** - 平滑过渡切换 |
| 📱 | **响应式设计** - 适配所有设备 |
| ⚡ | **无需构建工具** - 纯 HTML, CSS, JavaScript |
| 🔀 | **即时主题切换** - 无需刷新页面即可切换主题 |
| 📝 | **一键配置** - 只需编辑 `config.js` 即可填入所有个人信息 |
| 🎯 | **易于定制** - CSS 变量快速调整样式 |

## 主题

| 主题 | 设计理念 |
|:----:|----------|
| 📚 **Academic** | 排版优先的极简主义。每个元素服务于内容——充裕的留白、严格的层级、零装饰，让研究成果自己说话。 |
| 🌿 **Natural** | 以自然为视觉语言。森林绿、岩石灰与苔藓质感唤起户外书房的静谧——不急不躁，脚踏实地，充满有机生命的细节。 |
| 📰 **Editorial** | 杂志网格逻辑应用于学术场景。非对称分栏、引言提示与编辑间距借鉴印刷新闻学，让研究读起来像一篇深度报道。 |
| 💎 **Glass** | 通过半透明感营造层次。磨砂玻璃面板、多层模糊与发光点缀构建出空间纵深感——现代而不冷漠。 |
| 🇨🇭 **Swiss** | 国际主义排版风格的精华提炼。严格网格、左对齐文本与几何精度致敬 Helvetica 时代——永恒、权威、理性到底。 |
| 💻 **Terminal** | 命令行即身份认同。等宽字体、扫描线叠加与文件系统导航隐喻，将你的简历变成一次交互式 shell 会话。 |
| 🍱 **Bento** | 日式便当盒的网格思维。每个板块是自成一体的磁贴——模块化、均衡，一眼扫完而不牺牲信息密度。 |
| 🖋️ **Ink** | 东亚水墨美学与西方学术结构的融合。笔触点缀、垂直韵律与克制的色彩，唤起书斋学者的意境。 |
| 🗞️ **Newspaper** | 大报怀旧感的当代重构。报头字体、分栏线与日期行将你的成果框定为头版新闻——严肃而有个性。 |
| 🔷 **Bauhaus** | 三原色几何作为视觉语言。大胆的红、蓝、黄色块，构成主义构图与风格派比例，让每次滚动都成为视觉宣言。 |
| 📊 **Dashboard** | 数据室式的清晰感。侧边栏导航、表格式论文列表与看板项目面板，将产品设计思维引入学术主页。 |

## 预览

### Academic（学术风）
| 浅色 | 深色 |
|------|------|
| ![Academic Light](assets/previews/academic-light.png) | ![Academic Dark](assets/previews/academic-dark.png) |

### Natural（自然风）
| 浅色 | 深色 |
|------|------|
| ![Natural Light](assets/previews/natural-light.png) | ![Natural Dark](assets/previews/natural-dark.png) |

### Editorial（编辑风）
| 浅色 | 深色 |
|------|------|
| ![Editorial Light](assets/previews/editorial-light.png) | ![Editorial Dark](assets/previews/editorial-dark.png) |

### Glass（玻璃风）
| 浅色 | 深色 |
|------|------|
| ![Glass Light](assets/previews/glass-light.png) | ![Glass Dark](assets/previews/glass-dark.png) |

## 快速开始

1. 克隆仓库
2. 在浏览器中打开 `index.html` 预览所有主题
3. 选择喜欢的主题，复制 `themes/` 下对应文件夹
4. 编辑 **`config.js`** 填入你的信息（姓名、论文、项目等）
5. 部署到 GitHub Pages 或其他静态托管服务

## 项目结构

```
academic-homepage-templates/
├── index.html          # 主题切换器（预览所有主题）
├── script.js           # 主题切换逻辑
├── README.md
├── README_CN.md
├── LICENSE
└── themes/
    ├── academic/
    ├── natural/
    ├── editorial/
    ├── glass/
    ├── swiss/
    ├── terminal/
    ├── bento/
    ├── ink/
    ├── newspaper/
    ├── bauhaus/
    └── dashboard/
        ├── index.html
        ├── style.css
        ├── script.js
        └── config.js   # ← 只需编辑这个文件
```

## 定制指南

### 修改个人信息

编辑主题文件夹中的 **`config.js`**，无需修改 HTML：

```js
const USER_CONFIG = {
  name: "张三",
  role: "博士研究生",
  university: "清华大学",
  email: "zhangsan@tsinghua.edu.cn",
  bio: "研究方向：大语言模型对齐与推理。",
  photo: "assets/photo.jpg",   // 可选

  publications: [
    { year: 2025, title: "论文标题", authors: "张三, 合作者",
      venue: "NeurIPS 2025", links: { pdf: "#", code: "#" } },
  ],

  projects: [
    { name: "项目名称", desc: "项目描述。", tags: ["Python", "PyTorch"] },
  ],

  news: [
    { date: "2025.01", badge: "新", text: "论文被 NeurIPS 2025 录用！" },
  ],

  education: [
    { period: "2020–至今", degree: "计算机科学博士", institution: "清华大学" },
  ],
};
```

删除 `config.js` 后，页面将回退到原始占位符内容。

### 修改主题颜色

编辑 `style.css` 中的 CSS 变量：

```css
:root {
    --accent-color: #你的主题色;
    --bg-primary: #你的背景色;
}
```

## 部署

### GitHub Pages

1. 将选择的主题文件夹内容复制到仓库根目录
2. 进入 Settings → Pages
3. 选择 "main" 分支并保存

### 其他托管

上传 HTML、CSS、JS 文件到任意静态托管服务即可。

## 许可证

MIT 许可证 - 可自由用于个人或商业项目。
