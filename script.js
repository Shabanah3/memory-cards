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
// Add a card 
// #####################

// #####################
// navigate cards
// #####################
