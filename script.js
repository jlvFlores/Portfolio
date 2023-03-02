// Header variables
const screenSize = window.matchMedia('(max-width: 767px)');
const navMenuListItems = document.querySelectorAll('nav > *');
const header = document.querySelector('header');
const logo = document.querySelector('#logo');

// Recent works variables
const worksArray = [
  {
    id: 0,
    title: 'To-Do-List',
    listArray: ['HTML', 'CSS', 'JavaScript', 'Webpack', 'JEST'],
    image: 'assets/images/To-do-list.png',
    imageAlt: 'To do list page with a short list of task',
    description: 'The successor to the Awesome Library project. It has the same and functions as well as new features that allow users to delete groups of list and edit the already existing text in the list item.',
    liveUrl: 'https://jlvflores.github.io/To-Do-list/dist/',
    sourceUrl: 'https://github.com/jlvFlores/To-Do-list',
  },
  {
    id: 1,
    title: 'Awesome Books',
    listArray: ['HTML', 'CSS', 'JavaScript'],
    image: 'assets/images/Awesome-books.png',
    imageAlt: 'List page of the Awesome books site',
    description: 'A single-page dynamic library that displays books added or removed by the user using their browser\'s localStorage.',
    liveUrl: 'https://jlvflores.github.io/Awesome-books-with-ES6/',
    sourceUrl: 'https://github.com/jlvFlores/Awesome-books-with-ES6',
  },
  {
    id: 2,
    title: 'Capstone',
    listArray: ['HTML', 'CSS', 'JavaScript'],
    image: 'assets/images/Capstone-1.png',
    imageAlt: 'Middle section of the main page of my capstone project',
    description: 'This is the first major website that I created after created my portfolio site. I contain a dynamic list of special guest and a navigation bar that turns into a drawer when seen on mobile screens.',
    liveUrl: 'https://jlvflores.github.io/Module1-Capstone-project/',
    sourceUrl: 'https://github.com/jlvFlores/Module1-Capstone-project',
  },
];
const featuredContainer = document.querySelector('.featured-work');
const cardsContainer = document.querySelector('.card-works');

// form validation variables
const form = document.getElementById('contact-form');

// Local storage variables
const inputName = document.getElementById('user-name');
const inputEmail = document.getElementById('user-email');
const inputMessage = document.getElementById('user-message');
const inputFields = document.querySelectorAll('.field');

let userData = [];

if (JSON.parse(localStorage.getItem('userData'))) {
  userData = {
    name: JSON.parse(localStorage.getItem('userData')).name,
    email: JSON.parse(localStorage.getItem('userData')).email,
    message: JSON.parse(localStorage.getItem('userData')).message,
  };
}

worksArray.forEach((work) => {
  if (work.id === 0) {
    featuredContainer.insertAdjacentHTML('beforeend', `
    <div class="featured" data-card="${work.id}">
      <img src="${work.image}" alt="${work.imageAlt}">
      <div class="right-block">
        <h3>${work.title}</h3>
        <p>${work.description}</p>
        <ul class="tags">
        <li>${work.listArray[0]}</li>
        <li>${work.listArray[1]}</li>
        <li>${work.listArray[2]}</li>
        <li>${work.listArray[3]}</li>
        <li>${work.listArray[4]}</li>
        </ul>
        <button class="btn featured-btn work-btn" data-id="${work.id}">See Project</button>
      </div>
    </div>`);
  } else {
    cardsContainer.insertAdjacentHTML('beforeend', `
    <div class="card" data-card="${work.id}">
      <img src="${work.image}" alt="${work.imageAlt}">
      <div class="right-block">
        <h3>${work.title}</h3>
        <p>${work.description}</p>
        <ul class="tags">
          <li>${work.listArray[0]}</li>
          <li>${work.listArray[1]}</li>
          <li>${work.listArray[2]}</li>
        </ul>
        <button class="btn work-btn" data-id="${work.id}">See Project</button>
      </div>
    </div>`);
  }
});

const workButtons = document.querySelectorAll('.work-btn');

function toggleMenu() {
  if (screenSize.matches) {
    logo.classList.toggle('hide');
    header.classList.toggle('header-container');
    navMenuListItems.forEach((element) => element.classList.toggle('hide'));
  }
}

function popupWindow(id) {
  const currentWork = document.querySelector(`[data-card="${id}"]`);
  currentWork.insertAdjacentHTML('afterend',
    `<div class="overlay" id="modal-container">
      <div class="modal">
      <div class="heading">
      <h3>${worksArray[id].title}</h3>
          <img id="exit-modal" src="assets/images/Exit.png" alt="Exit icon">
        </div>
        <ul class="modal-tags"></ul>
        <img src="${worksArray[id].image}" alt="Card placeholder">
        <p>${worksArray[id].description}</p>
        <div class="buttons">
          <a href="${worksArray[id].liveUrl}" class="btn">See Live <img src="assets/images/Live.png" alt="Arrow Pointing To Upper Right Corner"></a>
          <a href="${worksArray[id].sourceUrl}" class="btn">See Source <img src="assets/images/Github.png" alt="GitHub logo"></a>
        </div>
      </div>
    </div>`);

  const modal = document.getElementById('modal-container');
  const exitIcon = document.getElementById('exit-modal');
  const ul = document.querySelector('.modal-tags');

  worksArray[id].listArray.forEach((element) => {
    const li = document.createElement('li');
    li.innerHTML = element;
    ul.appendChild(li);
  });

  exitIcon.addEventListener('click', () => {
    modal.parentElement.removeChild(modal);
  });
}

function loadUserInfo() {
  if (JSON.parse(localStorage.getItem('userData'))) {
    inputName.value = JSON.parse(localStorage.getItem('userData')).name;
    inputEmail.value = JSON.parse(localStorage.getItem('userData')).email;
    inputMessage.value = JSON.parse(localStorage.getItem('userData')).message;
  }
}

const setLocalStorage = (event, data) => {
  userData[data] = event.target.value;
  localStorage.setItem('userData', JSON.stringify(userData));
};

window.onload = loadUserInfo;

inputFields.forEach((field) => field.addEventListener('keyup', (e) => {
  setLocalStorage(e, field.name);
}));

navMenuListItems.forEach((element) => element.addEventListener('click', toggleMenu));
workButtons.forEach((button) => button.addEventListener('click', (e) => {
  popupWindow(e.target.dataset.id);
}));

form.addEventListener('submit', (event) => {
  const lowercasedEmail = inputEmail.value.toLocaleLowerCase();
  if (inputEmail.value === lowercasedEmail) {
    form.submit();
  } else {
    form.insertAdjacentHTML('beforeend', `
    <span class="error-message">
      Please make sure your email is in lowercase letters.
    </span>
    <span>Your email should look like this </span>
    <span class="correct-message">${lowercasedEmail}</span>
    `);
    event.preventDefault();
  }
});
