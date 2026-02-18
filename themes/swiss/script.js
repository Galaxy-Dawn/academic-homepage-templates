// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });
}

// Sidebar active link tracking
const sideLinks = document.querySelectorAll('.side-link');
const sections = document.querySelectorAll('.swiss-section');

sideLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        sideLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Update active link on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            sideLinks.forEach(l => {
                l.classList.toggle('active', l.getAttribute('href') === '#' + id);
            });
        }
    });
}, { threshold: 0.3 });

sections.forEach(s => observer.observe(s));

// Prevent placeholder href="#" links from scrolling to top
document.querySelectorAll('a[href="#"]').forEach(a => a.addEventListener('click', e => e.preventDefault()));
