const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu----------------------------------->
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu scroll------------------------------->
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    let scrollPOS = window.scrollY;
    
//  // Remove to set new boundaries for the higlight.----->
    //console.log(scrollPOS);
//  // Find highlight below.------------------------------>
    
    // Adds "highlight" to my menu classes---------------->
    if(window.innerWidth > 960 && scrollPOS < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    }else if(window.innerWidth > 960 && scrollPOS < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return
    }else if(window.innerWidth > 960 && scrollPOS < 2350) {
        aboutMenu.classList.remove('highlight');
        servicesMenu.classList.add('highlight');
        return
    }

    if(elem && window.innerWidth < 960 && scrollPOS < 600 || elem){
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMobileMenu = () =>{
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}


menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);