document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        console.log('Filtering by: ' + this.textContent);
    });
});

document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const statusEl = document.getElementById('formStatus');
    statusEl.innerHTML = ""; 

    const service = document.getElementById('service').value || "General Inquiry";
    document.getElementById('emailSubject').value = `New MALC NEXUS Inquiry – ${service}`;

    const formData = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        statusEl.innerHTML = '<p style="color: green; font-weight: bold;">✅ Thank you for your message! We’ll get back to you soon.</p>';
        this.reset();
    } else {
        statusEl.innerHTML = '<p style="color: red; font-weight: bold;">❌ Oops! Something went wrong. Please try again.</p>';
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
