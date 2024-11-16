const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});

// Smooth scrolling functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
