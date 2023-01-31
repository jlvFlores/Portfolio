const screenSize = window.matchMedia('(max-width: 768px)');
const navMenuListItems = document.querySelectorAll('nav > *');
const header = document.querySelector('header');
const logo = document.querySelector('#logo');

function toggleMenu() {
  logo.classList.toggle('hide');
  header.classList.toggle('header-container');
  navMenuListItems.forEach((element) => element.classList.toggle('hide'));
}

if (screenSize.matches) {
  navMenuListItems.forEach((element) => element.addEventListener('click', toggleMenu));
}
