// Theme Toggle
const html = document.documentElement;
const saved = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', saved);

function toggleTheme() {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    document.querySelectorAll('.theme-label').forEach(el => {
        el.textContent = next === 'dark' ? 'Light' : 'Dark';
    });
}

// Update labels on load
document.querySelectorAll('.theme-label').forEach(el => {
    el.textContent = saved === 'dark' ? 'Light' : 'Dark';
});

document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
document.getElementById('mobileThemeToggle')?.addEventListener('click', toggleTheme);

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const t = document.querySelector(a.getAttribute('href'));
        if (t) t.scrollIntoView({ behavior: 'smooth' });
    });
});

// Active nav tracking on scroll
const sections = document.querySelectorAll('.hero-composition, .bh-section');
const navItems = document.querySelectorAll('.geo-nav-item[data-section]');

function updateActiveNav() {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 200) current = s.id;
    });
    navItems.forEach(item => {
        item.classList.toggle('active', item.dataset.section === current);
    });
}
window.addEventListener('scroll', updateActiveNav, { passive: true });

// Scroll animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));

// Back to top
const btt = document.querySelector('.back-to-top');
if (btt) {
    window.addEventListener('scroll', () => {
        btt.classList.toggle('visible', window.scrollY > 300);
    }, { passive: true });
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Prevent placeholder href="#" links from scrolling to top
document.querySelectorAll('a[href="#"]').forEach(a => a.addEventListener('click', e => e.preventDefault()));
