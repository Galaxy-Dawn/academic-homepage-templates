# Academic Homepage Templates

A collection of beautiful, responsive academic homepage templates for researchers, professors, and PhD students.

## Features

- 5 unique design themes
- Dark/Light mode toggle
- Fully responsive design
- Clean, semantic HTML
- Easy to customize
- No build tools required

## Themes

| Theme | Description |
|-------|-------------|
| **Academic** | Clean, minimal design with focus on content |
| **Natural** | Organic, warm aesthetic with soft colors |
| **Editorial** | Magazine-style layout with elegant typography |
| **Glass** | Modern glassmorphism with blur effects |
| **SPA** | Single-page app style with sidebar navigation |

## Quick Start

1. Choose a theme from the `themes/` directory
2. Copy the theme folder to your project
3. Edit `index.html` with your information
4. Deploy to GitHub Pages or any static hosting

## Project Structure

```
academic-homepage-templates/
├── README.md
├── LICENSE
└── themes/
    ├── academic/
    │   ├── index.html
    │   ├── style.css
    │   └── script.js
    ├── natural/
    ├── editorial/
    ├── glass/
    └── spa/
```

## Customization

### Personal Information

Edit `index.html` and replace the placeholder text:

- `Your Name` → Your actual name
- `Your University` → Your institution
- `your.email@university.edu` → Your email
- Update publications, projects, and experience sections

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

1. Create a new repository
2. Upload your chosen theme files
3. Go to Settings → Pages
4. Select "main" branch and save

### Other Hosting

Simply upload the HTML, CSS, and JS files to any static hosting service.

## License

MIT License - feel free to use for personal or commercial projects.

## Credits

Created with care for the academic community.
