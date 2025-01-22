// Tambahkan animasi ke tombol Read More
const readMoreButtons = document.querySelectorAll('.readmore');

readMoreButtons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.3s';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// Tambahkan scroll ke section dengan animasi
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth',
            });
        }
    });
});

// Navbar sticky effect saat scroll
const navbar = document.querySelector('.navbar');
window.add