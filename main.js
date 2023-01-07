const openSwitch = document.getElementById('nav-switch');
const mobileNav = document.getElementById("mobile-nav");
const closeSwitch = document.getElementById("mob-close-menu-switch")
openSwitch.addEventListener('click', showMobilNav);
closeSwitch.addEventListener('click', closeMobileNav);
function showMobilNav() {
    mobileNav.style.transform = 'translateX(0%)';
}
function closeMobileNav() {
    mobileNav.style.transform = "translateX(100%)"
}