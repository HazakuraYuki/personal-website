function sayHello() {
    alert("Halo! Selamat datang 😄");
}

// ANIMASI SCROLL
const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
});

// NAVBAR TOGGLE
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}