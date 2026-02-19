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

| Theme | Design Philosophy |
|:-----:|-------------------|
| 📚 **Academic** | Typography-first minimalism. Every element serves the content — generous whitespace, strict hierarchy, and zero decoration let your research speak for itself. |
| 🌿 **Natural** | Biophilic warmth meets scholarly depth. Earthy tones, organic textures, and soft curves create a calm, human reading experience far from sterile lab aesthetics. |
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

### Swiss
| Light | Dark |
|-------|------|
| ![Swiss Light](assets/previews/swiss-light.png) | ![Swiss Dark](assets/previews/swiss-dark.png) |

### Terminal
| Light | Dark |
|-------|------|
| ![Terminal Light](assets/previews/terminal-light.png) | ![Terminal Dark](assets/previews/terminal-dark.png) |

### Bento
| Light | Dark |
|-------|------|
| ![Bento Light](assets/previews/bento-light.png) | ![Bento Dark](assets/previews/bento-dark.png) |

### Ink
| Light | Dark |
|-------|------|
| ![Ink Light](assets/previews/ink-light.png) | ![Ink Dark](assets/previews/ink-dark.png) |

### Newspaper
| Light | Dark |
|-------|------|
| ![Newspaper Light](assets/previews/newspaper-light.png) | ![Newspaper Dark](assets/previews/newspaper-dark.png) |

### Bauhaus
| Light | Dark |
|-------|------|
| ![Bauhaus Light](assets/previews/bauhaus-light.png) | ![Bauhaus Dark](assets/previews/bauhaus-dark.png) |

### Dashboard
| Light | Dark |
|-------|------|
| ![Dashboard Light](assets/previews/dashboard-light.png) | ![Dashboard Dark](assets/previews/dashboard-dark.png) |

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
