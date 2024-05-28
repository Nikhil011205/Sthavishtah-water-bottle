/*MENU*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*menu show*/
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

/*hide menu*/
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}
/*mobile menu rem*/


const navLink = document.querySelectorAll('.nav__link')
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

/*show header*/
const shadowHeader = ()=>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)

/*swiper*/ 
const swiperAbout = new Swiper('.about__swiper', {
    loop: true, 
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
})

/* scroll up */

const scrollUp = ()=>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/* scroll active */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY
    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*='+sectionId+']')

        if(scrollDown>sectionTop && scrollDown<=sectionTop+sectionHeight){
            sectionsClass.classList.add('active-link')
        }
        else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)

/* scroll reveal */
const sr=  ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:300,
    reset:true,
})
sr.reveal(`.home__data, .about__container, .footer__container`)
sr.reveal(`.home__circle, .home__img`,{delay:600, scale:.5})
sr.reveal(`.home__bottle-1, .home__bottle-3, .home__bottle-6`,{delay:1000, interval:100})
sr.reveal(`.home__bottle-2, .home__bottle-4, .home__bottle-5`,{delay:1400, interval:100})
sr.reveal(`.future__img, .contact__img`,{origin:'left'})
sr.reveal(`.future__list, .contact__data`,{origin:'right'})
sr.reveal(`.banner__item, .products__card`,{interval:100})
