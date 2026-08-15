// Smooth scroll to section
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        const navHeight = document.querySelector('.nav-bar').offsetHeight;
        const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight - 10;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
    // Update active button
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
}

// Scroll to top button visibility
window.addEventListener('scroll', () => {
    const btn = document.getElementById('scrollTopBtn');
    if (window.scrollY > 400) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
});

// Fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Highlight active nav on scroll
const sections = document.querySelectorAll('.menu-section');
const navBtns = document.querySelectorAll('.nav-btn');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(current)) {
            btn.classList.add('active');
        }
    });
});