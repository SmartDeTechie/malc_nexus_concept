// main.js

document.addEventListener('DOMContentLoaded', () => {

    // Mobile menu toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            document.querySelector('nav ul').classList.toggle('show');
        });
    }

    // Project filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            console.log('Filtering by: ' + btn.textContent);
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Authentication & dashboard redirect
    const authLinks = document.getElementById('authLinks');
    if (authLinks) {
        const accessToken = localStorage.getItem('access');

        if (accessToken) {
            // Show Dashboard / Logout if logged in
            authLinks.innerHTML = `
                <a href="/dashboard/">Dashboard</a> /
                <a href="#" id="logoutLink">Logout</a>
            `;

            const logoutLink = document.getElementById('logoutLink');
            if (logoutLink) {
                logoutLink.addEventListener('click', () => {
                    localStorage.removeItem('access');
                    localStorage.removeItem('refresh');
                    window.location.href = '/';
                });
            }
        } else {
            // Optional: make sure Login/Register links point to Django URLs
            authLinks.innerHTML = `
                <a href="/login/">Login</a> /
                <a href="/register/">Register</a>
            `;
        }
    }

});
