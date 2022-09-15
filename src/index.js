import './style.css';
import api from './modules/api.js';
import { manageData, loadFromApiIngridients/* , meals */ } from './modules/renderMeal.js';

manageData();

/* search button calling other Meals to the API by name */
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', async () => {
  const data = await api.getByIngredient();
  if (data) {
    const x = [...data];
    const meal = x.slice(0, 9);
    loadFromApiIngridients(meal);
    console.log(meal);
  } else {
    alert('Sorry, we didn`t find any meal!');
  }
});

// pop alert code not working!!.

/* meals.innerHTML = '';
const popError = document.createElement('div');
popError.classList.add('notFound');
const noMeal = document.createElement('h2');
noMeal.textContent = 'Sorry, we didn`t find any meal!';
popError.appendChild(noMeal);
meals.appendChild(popError);

const deletePopError = document.querySelector('notFound');
meals.addEventListener('click', () => {
  deletePopError.classList.remove('notFound');
}); */