// Theme Toggle (Light/Dark)
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
updateThemeLabel();

function updateThemeLabel() {
    const label = document.querySelector('.theme-label');
    if (label) {
        label.textContent = html.getAttribute('data-theme') === 'dark' ? 'Light' : 'Dark';
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeLabel();
    });
}

// Style (Visual Theme) Switcher
const STYLES = ['academic', 'natural', 'editorial', 'glass', 'swiss', 'terminal', 'bento', 'ink', 'newspaper', 'bauhaus', 'dashboard'];
const styleSheet = document.getElementById('themeStylesheet');
const styleBtns = document.querySelectorAll('.style-btn');

function setStyle(style) {
    if (!STYLES.includes(style)) style = 'academic';

    // Suppress CSS transitions during swap
    html.classList.add('style-transitioning');

    styleSheet.href = 'themes/' + style + '/style.css';
    localStorage.setItem('style', style);

    // Highlight active button
    styleBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.style === style);
    });

    // Re-enable transitions after new CSS loads
    styleSheet.onload = () => {
        requestAnimationFrame(() => html.classList.remove('style-transitioning'));
    };
    // Fallback in case onload doesn't fire (cached)
    setTimeout(() => html.classList.remove('style-transitioning'), 200);
}

// Initialize style from localStorage
setStyle(localStorage.getItem('style') || 'academic');

// Bind click handlers
styleBtns.forEach(btn => {
    btn.addEventListener('click', () => setStyle(btn.dataset.style));
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
