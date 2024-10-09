// Toggle nav menu on click
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const navBar = document.querySelector('nav.bar');
    navBar.classList.toggle('active'); // เปลี่ยนคลาส active เพื่อแสดงหรือซ่อนเมนู
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav.bar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Close the menu after selecting an option on mobile
        if (window.innerWidth <= 768) {
            document.querySelector('nav.bar').classList.remove('active');
        }
    });
});

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-up');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries, 
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('fade-in');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});
