const openSwitch = document.getElementById('nav-switch');
const mobileNav = document.getElementById("mobile-nav");
const closeSwitch = document.getElementById("mob-close-menu-switch")
openSwitch.addEventListener('click', showMobilNav);
closeSwitch.addEventListener('click', closeMobileNav);
function showMobilNav() {
    mobileNav.style.transform = 'translateX(0%)';
    mobileNav.setAttribute("aria-hidden", "false");
}
function closeMobileNav() {
    mobileNav.style.transform = "translateX(100%)"
    mobileNav.setAttribute("aria-hidden", "true");

}

const header = document.querySelector("header");

const sectionOne = document.querySelector(".section-1");

const sectionOneOptions = {
    rootMargin: "-100px 0px 0px 0px"
};
const callback = function(entries,  sectionOneObserver) {
    entries.forEach(entry => {
       if(!entry.isIntersecting) {
        console.log("add scrolled")
        header.classList.add('nav-scrolled')
       }
       else {
        console.log('remove scorlled')
        header.classList.remove('nav-scrolled')

       }
    })
}
const sectionOneObserver = new IntersectionObserver(callback, sectionOneOptions)

sectionOneObserver.observe(sectionOne)
