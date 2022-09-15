import './style.css';
import api from './modules/api.js';
import { manageData, loadFromApiIngridients } from './modules/renderMeal.js';

manageData();

/* search button calling 1 Meal to the API */
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', async () => {
  const data = await api.getByIngredient();
  const meal = [...data];
  /* const topNine = x.slice(0, 9); */
  console.log(meal);
  loadFromApiIngridients(meal);
});
