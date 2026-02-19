# Academic Homepage Templates

<p align="center">
  <img src="https://img.shields.io/badge/themes-11-blue" alt="Themes">
  <img src="https://img.shields.io/badge/dark%20mode-supported-green" alt="Dark Mode">
  <img src="https://img.shields.io/badge/responsive-yes-orange" alt="Responsive">
  <img src="https://img.shields.io/badge/license-MIT-brightgreen" alt="License">
</p>

<p align="center">
  <b>English</b> | <a href="README_CN.md">中文</a>
</p>

A collection of beautiful, responsive academic homepage templates for researchers and PhD students. **11 unique themes** with instant switching, dark/light mode, and zero build tools required.

## Features

| Feature | Description |
|:-------:|-------------|
| 🎨 | **11 Unique Themes** - From minimal to retro newspaper to cyberpunk terminal |
| 🌓 | **Dark/Light Mode** - Toggle with smooth transitions |
| 📱 | **Responsive Design** - Works on all devices |
| ⚡ | **No Build Tools** - Pure HTML, CSS, JavaScript |
| 🔀 | **Instant Theme Switching** - Switch themes without page reload |
| 📝 | **One-File Config** - Edit only `config.js` to fill in all your info |
| 🎯 | **Easy to Customize** - CSS variables for quick styling |

## Themes

| Theme | Style | Best For |
|:-----:|-------|----------|
| 📚 **Academic** | Clean, minimal | Content-focused researchers |
| 🌿 **Natural** | Organic, warm | Creative academics |
| 📰 **Editorial** | Magazine-style | Writers & journalists |
| 💎 **Glass** | Glassmorphism | Modern tech researchers |
| 🇨🇭 **Swiss** | International typographic style | Design-conscious academics |
| 💻 **Terminal** | Cyberpunk hacker aesthetic | CS & engineering researchers |
| 🍱 **Bento** | Modular grid layout | Information-dense profiles |
| 🖋️ **Ink** | East Asian ink scholar | Humanities & interdisciplinary |
| 🗞️ **Newspaper** | Retro broadsheet layout | Classic print aesthetic |
| 🔷 **Bauhaus** | Geometric primary colors | Art & design researchers |
| 📊 **Dashboard** | Data visualization panel | Quantitative researchers |

## Preview

### Academic
| Light | Dark |
|-------|------|
| ![Academic Light](assets/previews/academic-light.png) | ![Academic Dark](assets/previews/academic-dark.png) |

### Natural
| Light | Dark |
|-------|------|
| ![Natural Light](assets/previews/natural-light.png) | ![Natural Dark](assets/previews/natural-dark.png) |

### Editorial
| Light | Dark |
|-------|------|
| ![Editorial Light](assets/previews/editorial-light.png) | ![Editorial Dark](assets/previews/editorial-dark.png) |

### Glass
| Light | Dark |
|-------|------|
| ![Glass Light](assets/previews/glass-light.png) | ![Glass Dark](assets/previews/glass-dark.png) |

## Quick Start

1. Clone the repository
2. Open `index.html` in your browser to preview all themes
3. Choose a theme and copy the folder from `themes/`
4. Edit **`config.js`** with your information (name, publications, projects, etc.)
5. Deploy to GitHub Pages or any static hosting

## Project Structure

```
academic-homepage-templates/
├── index.html          # Theme switcher (preview all themes)
├── script.js           # Theme switching logic
├── README.md
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
        └── config.js   # ← Edit this file only
```

## Customization

### Personal Information

Edit **`config.js`** in your chosen theme folder — no HTML editing required:

```js
const USER_CONFIG = {
  name: "Jane Smith",
  role: "PhD Candidate",
  university: "MIT",
  email: "jane@mit.edu",
  bio: "Your research bio here.",
  photo: "assets/photo.jpg",   // optional

  publications: [
    { year: 2025, title: "Paper Title", authors: "Jane Smith, Co-Author",
      venue: "NeurIPS 2025", links: { pdf: "#", code: "#" } },
  ],

  projects: [
    { name: "Project", desc: "Description.", tags: ["Python", "PyTorch"] },
  ],

  news: [
    { date: "2025.01", badge: "New", text: "Paper accepted at NeurIPS 2025!" },
  ],

  education: [
    { period: "2020–Present", degree: "Ph.D. in CS", institution: "MIT" },
  ],
};
```

If `config.js` is removed, the page falls back to the original placeholder HTML.

### Colors

Each theme uses CSS variables. Edit `style.css`:

```css
:root {
    --accent-color: #your-color;
    --bg-primary: #your-bg;
}
```

## Deployment

### GitHub Pages

1. Copy your chosen theme folder contents to the repo root
2. Go to Settings → Pages
3. Select "main" branch and save

### Other Hosting

Simply upload the HTML, CSS, and JS files to any static hosting service.

## License

MIT License - feel free to use for personal or commercial projects.
