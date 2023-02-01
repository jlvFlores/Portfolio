// Header variables
const screenSize = window.matchMedia('(max-width: 767px)');
const navMenuListItems = document.querySelectorAll('nav > *');
const header = document.querySelector('header');
const logo = document.querySelector('#logo');

// Recent works variables
const workButtons = document.querySelectorAll('.work-btn');

function toggleMenu() {
  if (screenSize.matches) {
    logo.classList.toggle('hide');
    header.classList.toggle('header-container');
    navMenuListItems.forEach((element) => element.classList.toggle('hide'));
  }
}

function popupWindow(id) {

  const work = {
    title: document.querySelector(`[data-card="${id}"] h3`).textContent,
    listArray: document.querySelectorAll(`[data-card="${id}"] li`),
    image:  document.querySelector(`[data-card="${id}"] img`).getAttribute('src'),
    description: document.querySelector(`[data-card="${id}"] p`).textContent,
    liveUrl: '#',
    sourceUrl: '#',
  }

  const currentWork = document.querySelector(`[data-card="${id}"]`);
  currentWork.insertAdjacentHTML('afterend', 
    `<div class="overlay" id="modal-container">
      <div class="modal">
        <div class="heading">
          <h3>${work.title}</h3>
          <img id="exit-modal" src="assets/images/Exit.png" alt="Exit icon">
        </div>

        <ul class="tags"></ul>

        <img src="${work.image}" alt="Card placeholder">
        
        <p class="">${work.description}</p>

        <div class="buttons">
          <button href="${work.liveUrl}" class="btn">See Live <img src="assets/images/Live.png" alt="Arrow Pointing To Upper Right Corner"></button>
          <button href="${work.sourceUrl}" class="btn">See Source <img src="assets/images/Github.png" alt="GitHub logo"></button>
        </div>
      </div>
    </div>`
  );

  const modal = document.getElementById('modal-container');
  const exitIcon = document.getElementById('exit-modal');
  const ul = document.querySelector('.modal ul');

  for (let i = 0; i < work.listArray.length; i++) {
    ul.appendChild(work.listArray[i]);
  }

  exitIcon.addEventListener("click", function() {
    modal.parentElement.removeChild(modal);
  });
}

navMenuListItems.forEach((element) => element.addEventListener('click', toggleMenu));
workButtons.forEach((button) => button.addEventListener('click', (e) => {
  popupWindow(e.target.dataset.id);
}));