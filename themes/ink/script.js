// Theme toggle with localStorage
const toggle = document.getElementById('themeToggle');
const html = document.documentElement;
const saved = localStorage.getItem('ink-theme');
if (saved) html.setAttribute('data-theme', saved);

toggle.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('ink-theme', next);
});

// Vertical TOC active state via IntersectionObserver
const sections = document.querySelectorAll('section[id], header[id]');
const tocLinks = document.querySelectorAll('.toc-link');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            tocLinks.forEach(l => l.classList.remove('active'));
            const active = document.querySelector(`.toc-link[data-section="${entry.target.id}"]`);
            if (active) active.classList.add('active');
        }
    });
}, { rootMargin: '-20% 0px -60% 0px' });

sections.forEach(s => observer.observe(s));

// Smooth scroll on TOC link click
tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Prevent placeholder href="#" links from scrolling to top
document.querySelectorAll('a[href="#"]').forEach(a => a.addEventListener('click', e => e.preventDefault()));
