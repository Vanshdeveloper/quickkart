let heroSection = document.getElementById('hero');
heroSection.style.height = document.documentElement.clientHeight + 'px';

if (window.innerWidth <= '650') {
    let nav = document.getElementById('nav');
    let closeNavBtn = document.getElementById('closeNavIcon');
    let openNavBtn = document.getElementById('openNavIcon');
    console.log("hii");

    openNavBtn.addEventListener('click', function () {
        openNav();
        closeNavBtn.style.display = 'flex';
        openNavBtn.style.display = 'none';
    });

    closeNavBtn.addEventListener('click', function () {
        closeNav();
        closeNavBtn.style.display = 'none';
        openNavBtn.style.display = 'flex';
    });
}

function openNav() {
    let nav = document.getElementById('nav');
    nav.style.display = 'flex';
}

function closeNav() {
    let nav = document.getElementById('nav');
    nav.style.display = 'none';
}