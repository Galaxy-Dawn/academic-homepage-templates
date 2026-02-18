// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
updateBtn();

function updateBtn() {
    if (themeToggle) {
        themeToggle.textContent = html.getAttribute('data-theme') === 'dark' ? 'Morning Ed.' : 'Evening Ed.';
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateBtn();
    });
}

// Dynamic date
const dateline = document.getElementById('dateline');
if (dateline) {
    dateline.textContent = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

// Smooth scroll for section nav
document.querySelectorAll('.section-nav a').forEach(a => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Prevent placeholder href="#" links from scrolling to top
document.querySelectorAll('a[href="#"]').forEach(a => a.addEventListener('click', e => e.preventDefault()));
