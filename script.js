// Header variables
const screenSize = window.matchMedia('(max-width: 767px)');
const navMenuListItems = document.querySelectorAll('nav > *');
const header = document.querySelector('header');
const logo = document.querySelector('#logo');

// Recent works variables
const worksArray = [
  {
    id: 0,
    title: 'Multi-Post Stories',
    listArray: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    image: 'assets/images/Featured-Placeholder.png',
    imageAlt: 'Featured work, ballet dancer inside orange circle and border',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 1,
    title: 'Profesional Art Printing Data',
    listArray: ['HTML', 'Bootstrap', 'Ruby'],
    image: 'assets/images/Card-Placeholder.png',
    imageAlt: 'Project image with a vertical dark gradient',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard.',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 2,
    title: 'Profesional Art Printing Data',
    listArray: ['HTML', 'Bootstrap', 'Ruby'],
    image: 'assets/images/Card-Placeholder.png',
    imageAlt: 'Project image with a vertical dark gradient',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard.',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 3,
    title: 'Profesional Art Printing Data',
    listArray: ['HTML', 'Bootstrap', 'Ruby'],
    image: 'assets/images/Card-Placeholder.png',
    imageAlt: 'Project image with a vertical dark gradient',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard.',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 4,
    title: 'Profesional Art Printing Data',
    listArray: ['HTML', 'Bootstrap', 'Ruby'],
    image: 'assets/images/Card-Placeholder.png',
    imageAlt: 'Project image with a vertical dark gradient',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard.',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 5,
    title: 'Profesional Art Printing Data',
    listArray: ['HTML', 'Bootstrap', 'Ruby'],
    image: 'assets/images/Card-Placeholder.png',
    imageAlt: 'Project image with a vertical dark gradient',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard.',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 6,
    title: 'Profesional Art Printing Data',
    listArray: ['HTML', 'Bootstrap', 'Ruby'],
    image: 'assets/images/Card-Placeholder.png',
    imageAlt: 'Project image with a vertical dark gradient',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard.',
    liveUrl: '#',
    sourceUrl: '#',
  },
];
const featuredContainer = document.querySelector('.featured-work');
const cardsContainer = document.querySelector('.card-works');

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
          <button href="${worksArray[id].liveUrl}" class="btn">See Live <img src="assets/images/Live.png" alt="Arrow Pointing To Upper Right Corner"></button>
          <button href="${worksArray[id].sourceUrl}" class="btn">See Source <img src="assets/images/Github.png" alt="GitHub logo"></button>
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

navMenuListItems.forEach((element) => element.addEventListener('click', toggleMenu));
workButtons.forEach((button) => button.addEventListener('click', (e) => {
  popupWindow(e.target.dataset.id);
}));