const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');


menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
        nav.classList.remove('active');
    }
});