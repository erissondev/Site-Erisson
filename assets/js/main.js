const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        });
    }
}

showMenu('nav-toggle', 'nav-menu')

/* === ACTIVE AND REMOVE MENU === */

const navLink = document.querySelectorAll('.nav__link');

function linkActivo() {
    /* Active link */
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active');

    /* Remove menu mobile */
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkActivo));

/* === SCROLL HOME === */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* === Scroll HOME === */
sr.reveal('.home__title', {})
sr.reveal('.button', {delay: 200})
sr.reveal('.home__title', {delay: 400})
sr.reveal('.home__social-icon', {interval: 200})

/* === Scroll About === */
sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', {delay: 200})
sr.reveal('.about__text', {delay: 200})


/* === Scroll Skills === */
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__text', {delay: 200})
sr.reveal('.skills__data', {interval: 200})
sr.reveal('.skills__img', {delay: 400})

/* === Scrool Work === */
sr.reveal('.work__img', {delay: 200})

/* === Scrool Contact === */
sr.reveal('.contact__input', {delay: 200})