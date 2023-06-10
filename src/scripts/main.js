'use strict';

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__item');
const form = document.querySelector('.contacts__form');
const menuLink = document.querySelector('.menu__link');
const homeLink = document.querySelector('.home-link');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');

  if (menu.classList.contains('active')) {
    document.body.classList.add('menu-active');
  } else {
    document.body.classList.remove('menu-active');
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

menuLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    document.body.classList.remove('menu-active');
  });
});

menuBtn.addEventListener('click', function() {
  if (!menu.classList.contains('active')) {
    menu.style.transform = 'translateX(100%)';
  } else {
    menu.style.transform = '';
  }
});

function handleMenuLinkClick(event) {
  event.preventDefault();
  menu.style.transform = 'translateX(100%)';
  menuBtn.classList.remove('active');
  menu.classList.remove('active');
  document.body.classList.remove('menu-active');
}

menuLink.addEventListener('click', handleMenuLinkClick);

homeLink.addEventListener('click', function() {
  if (menu.classList.contains('active')) {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    document.body.classList.remove('menu-active');
  }
});
