// Theme Toggle
const html = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

function toggleTheme() {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
}

document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
document.getElementById('themeToggleMobile')?.addEventListener('click', toggleTheme);

// Sidebar Navigation - active state on scroll
const sidebarLinks = document.querySelectorAll('.sidebar-icon[data-section]');
const sections = document.querySelectorAll('.panel-section');

function updateActiveNav() {
    let current = '';
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) {
            current = sec.id;
        }
    });
    sidebarLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === current);
    });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });

// Smooth scroll for sidebar links
sidebarLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Mobile menu toggle
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
let overlay = document.createElement('div');
overlay.className = 'sidebar-overlay';
document.body.appendChild(overlay);

function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
}

menuToggle?.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', closeSidebar);

// Close sidebar on nav click (mobile)
sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Publication sorting
const sortBtns = document.querySelectorAll('.sort-btn');
const pubBody = document.getElementById('pubTableBody');

sortBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        sortBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const rows = [...pubBody.querySelectorAll('.pub-row')];
        const key = btn.dataset.sort;

        rows.sort((a, b) => {
            const av = a.dataset[key] || '';
            const bv = b.dataset[key] || '';
            return key === 'year' ? bv.localeCompare(av) : av.localeCompare(bv);
        });

        rows.forEach(r => pubBody.appendChild(r));
    });
});

// Scroll animations
const animEls = document.querySelectorAll('.panel');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

animEls.forEach(el => {
    el.classList.add('scroll-animate');
    observer.observe(el);
});

// Prevent placeholder href="#" links from scrolling to top
document.querySelectorAll('a[href="#"]').forEach(a => a.addEventListener('click', e => e.preventDefault()));
