let openMenu = document.getElementById('openBtn');
let closeMenu = document.getElementById('closeBtn');
let menu = document.getElementById('mobileMenu');

openMenu.addEventListener('click', () => {
    menu.style.display = 'block';
    closeMenu.addEventListener('click', () => {
        menu.style.display = 'none';
    })
})