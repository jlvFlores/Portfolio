const screenSize = window.matchMedia('(max-width: 767px)');
const navMenuListItems = document.querySelectorAll('nav > *');
const header = document.querySelector('header');
const logo = document.querySelector('#logo');

function toggleMenu() {
  if (screenSize.matches) {
    logo.classList.toggle('hide');
    header.classList.toggle('header-container');
    navMenuListItems.forEach((element) => element.classList.toggle('hide'));
  }
}

navMenuListItems.forEach((element) => element.addEventListener('click', toggleMenu));
