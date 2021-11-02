'use strict'

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navbar = document.querySelector('#navbar-logo');
// const signActiveBarRemove = document.querySelector('#signup')

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active')
};

menu.addEventListener('click', mobileMenu);


// Show active menu when scrolling 

const highlightMenu = function () {
    const element = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const serviceMenu = document.querySelector('#service-page');
    const scrollPage = window.scrollY

    // console.log(scrollPage);

    if (window.innerWidth > 960 && scrollPage < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    }else if (window.innerWidth > 960 && scrollPage < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        serviceMenu.classList.remove('highlight');
        return
    }else if (window.innerWidth > 960 && scrollPage < 2345) {
        serviceMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    }

    if ((element && window.innerWidth > 960 && scrollPage < 600) || element.classList.remove('highlight')) {
        
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMobileMenu = () => {
    const menubars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menubars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navbar.addEventListener('click', hideMobileMenu);