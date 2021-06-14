// #####################
// show and hide the form
// #####################
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');

const addContainer = document.getElementById('add-container');

// Show add container
showBtn.addEventListener('click', () => addContainer.classList.add('show'));
// Hide add container
hideBtn.addEventListener('click', () => addContainer.classList.remove('show'));

// #####################
// show and hide the form
// #####################

const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');

const addContainer = document.getElementById('add-container');

showBtn.addEventListener('click', () => addContainer.classList.add('show'));
hideBtn.addEventListener('click', () => addContainer.classList.remove('show'));

// #####################
// Add a card 
// #####################

const addCardBtn = document.getElementById('add-card');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const cardsContainer = document.getElementById('cards-container');
const currentEl = document.getElementById('current');

let currentActiveCard = 0;

addCardBtn.addEventListener('click', () => {
  const question = questionEl.value;
  const answer = answerEl.value;

  if (question.trim() && answer.trim()) {
    const newCard = { question, answer };

    createCard(newCard);

    questionEl.value = '';
    answerEl.value = '';

    addContainer.classList.remove('show');

	cardsData.push(newCard);
    setCardsData(cardsData);
  }
});

function createCard(data, index) {
  const card = document.createElement('div');
  card.classList.add('card');

  if (index === 0) {
    card.classList.add('active');
  }

  card.innerHTML = `
  <div class="inner-card">
  <div class="inner-card-front">
    <p>
      ${data.question}
    </p>
  </div>
  <div class="inner-card-back">
    <p>
      ${data.answer}
    </p>
  </div>
</div>
  `;

  card.addEventListener('click', () => card.classList.toggle('show-answer'));

  cardsContainer.appendChild(card);
  
  cardsEl.push(card);
  
  updateCurrentText();

}

const cardsEl = [];
function updateCurrentText() {
  currentEl.innerText = `${currentActiveCard + 1}/${cardsEl.length}`;
}

function setCardsData(cards) {
  localStorage.setItem('cards', JSON.stringify(cards));
  window.location.reload();
}

function createCards() {
  cardsData.forEach((data, index) => createCard(data, index));
}

function getCardsData() {
  const cards = JSON.parse(localStorage.getItem('cards'));
  return cards === null ? [] : cards;
}

const cardsData = getCardsData();

createCards()

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

nextBtn.addEventListener('click', () => {
  cardsEl[currentActiveCard].className = 'card left';

  currentActiveCard = currentActiveCard + 1;

  if (currentActiveCard > cardsEl.length - 1) {
    currentActiveCard = cardsEl.length - 1;
  }

  cardsEl[currentActiveCard].className = 'card active';

  updateCurrentText();
});

prevBtn.addEventListener('click', () => {
  cardsEl[currentActiveCard].className = 'card right';

  currentActiveCard = currentActiveCard - 1;

  if (currentActiveCard < 0) {
    currentActiveCard = 0;
  }

  cardsEl[currentActiveCard].className = 'card active';

  updateCurrentText();
});
const clearBtn = document.getElementById('clear');

// Clear cards button
clearBtn.addEventListener('click', () => {
  localStorage.clear();
  cardsContainer.innerHTML = '';
  window.location.reload();
});