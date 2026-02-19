# Academic Homepage Templates

<p align="center">
  <img src="https://img.shields.io/badge/themes-11-blue" alt="Themes">
  <img src="https://img.shields.io/badge/dark%20mode-supported-green" alt="Dark Mode">
  <img src="https://img.shields.io/badge/responsive-yes-orange" alt="Responsive">
  <img src="https://img.shields.io/badge/license-MIT-brightgreen" alt="License">
  <a href="https://galaxy-dawn.github.io/academic-homepage-templates"><img src="https://img.shields.io/badge/live%20demo-GitHub%20Pages-blue" alt="Live Demo"></a>
</p>

<p align="center">
  <b>English</b> | <a href="README_CN.md">中文</a>
</p>

A collection of beautiful, responsive academic homepage templates for researchers and PhD students. **11 unique themes** with instant switching, dark/light mode, and zero build tools required.

> **Live Demo**: [galaxy-dawn.github.io/academic-homepage-templates](https://galaxy-dawn.github.io/academic-homepage-templates)

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

| Theme | Design Philosophy |
|:-----:|-------------------|
| 📚 **Academic** | Typography-first minimalism. Every element serves the content — generous whitespace, strict hierarchy, and zero decoration let your research speak for itself. |
| 🌿 **Natural** | Nature as visual grammar. Forest greens, stone grays, and moss textures evoke the quiet of an outdoor study — unhurried, grounded, and alive with organic detail. |
| 📰 **Editorial** | Magazine grid logic applied to academia. Asymmetric columns, pull quotes, and editorial spacing borrow from print journalism to make research feel like a feature story. |
| 💎 **Glass** | Depth through translucency. Frosted-glass panels, layered blur, and luminous accents build a sense of dimension — modern without being cold. |
| 🇨🇭 **Swiss** | International Typographic Style distilled. Rigid grid, flush-left text, and geometric precision echo the Helvetica era — timeless, authoritative, and unapologetically rational. |
| 💻 **Terminal** | The command line as identity. Monospace type, scan-line overlays, and a file-system navigation metaphor turn your CV into an interactive shell session. |
| 🍱 **Bento** | Japanese bento-box grid thinking. Each section is a self-contained tile — modular, balanced, and scannable at a glance without sacrificing density. |
| 🖋️ **Ink** | East Asian ink-wash aesthetics meet Western academic structure. Brush-stroke accents, vertical rhythm, and restrained color evoke the scholar's study. |
| 🗞️ **Newspaper** | Broadsheet nostalgia reimagined. Masthead typography, column rules, and datelines frame your work as front-page news — serious yet characterful. |
| 🔷 **Bauhaus** | Primary geometry as language. Bold red, blue, and yellow blocks, Constructivist composition, and De Stijl proportions make every scroll a visual statement. |
| 📊 **Dashboard** | Data-room clarity. Sidebar navigation, tabular publication lists, and a kanban project board apply product-design thinking to the academic profile. |

## Preview

### Academic
| Light | Dark |
|-------|------|
| <img src="assets/previews/academic-light.png" width="600" alt="Academic Light"> | <img src="assets/previews/academic-dark.png" width="600" alt="Academic Dark"> |

### Natural
| Light | Dark |
|-------|------|
| <img src="assets/previews/natural-light.png" width="600" alt="Natural Light"> | <img src="assets/previews/natural-dark.png" width="600" alt="Natural Dark"> |

### Editorial
| Light | Dark |
|-------|------|
| <img src="assets/previews/editorial-light.png" width="600" alt="Editorial Light"> | <img src="assets/previews/editorial-dark.png" width="600" alt="Editorial Dark"> |

### Glass
| Light | Dark |
|-------|------|
| <img src="assets/previews/glass-light.png" width="600" alt="Glass Light"> | <img src="assets/previews/glass-dark.png" width="600" alt="Glass Dark"> |

### Swiss
| Light | Dark |
|-------|------|
| <img src="assets/previews/swiss-light.png" width="600" alt="Swiss Light"> | <img src="assets/previews/swiss-dark.png" width="600" alt="Swiss Dark"> |

### Terminal
| Light | Dark |
|-------|------|
| <img src="assets/previews/terminal-light.png" width="600" alt="Terminal Light"> | <img src="assets/previews/terminal-dark.png" width="600" alt="Terminal Dark"> |

### Bento
| Light | Dark |
|-------|------|
| <img src="assets/previews/bento-light.png" width="600" alt="Bento Light"> | <img src="assets/previews/bento-dark.png" width="600" alt="Bento Dark"> |

### Ink
| Light | Dark |
|-------|------|
| <img src="assets/previews/ink-light.png" width="600" alt="Ink Light"> | <img src="assets/previews/ink-dark.png" width="600" alt="Ink Dark"> |

### Newspaper
| Light | Dark |
|-------|------|
| <img src="assets/previews/newspaper-light.png" width="600" alt="Newspaper Light"> | <img src="assets/previews/newspaper-dark.png" width="600" alt="Newspaper Dark"> |

### Bauhaus
| Light | Dark |
|-------|------|
| <img src="assets/previews/bauhaus-light.png" width="600" alt="Bauhaus Light"> | <img src="assets/previews/bauhaus-dark.png" width="600" alt="Bauhaus Dark"> |

### Dashboard
| Light | Dark |
|-------|------|
| <img src="assets/previews/dashboard-light.png" width="600" alt="Dashboard Light"> | <img src="assets/previews/dashboard-dark.png" width="600" alt="Dashboard Dark"> |

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
