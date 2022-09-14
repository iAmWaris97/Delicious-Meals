import './style.css';
/* import api from './modules/api.js'; */
import manageData from './modules/renderMeal.js';

/* search button calling the API */
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', manageData);
