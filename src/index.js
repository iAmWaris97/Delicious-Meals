import './style.css';

import displayCards from './modules/displayItems.js';

const recipes = document.querySelector('#meals');

window.addEventListener('DOMContentLoaded', () => {
  displayCards();
  recipes.classList.remove('hidden');
});
