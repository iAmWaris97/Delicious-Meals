import popup from './popup.js';
import { fetchLikes, likeAtction } from './newLike.js';
import mealsCounter from './itemCounter.js';

const meals = document.querySelector('.meals');
const mealCount = document.querySelector('.title-recipe');

const displayMeals = async () => {
  fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood')
    .then((response) => response.json())
    .then((data) => {
      let html = '';
      data.meals.forEach((meal) => {
        html += `<div class="meal" id="${meal.idMeal}">
               <div class="pic-div">
                   <img src="${meal.strMealThumb}" class="img" alt="${meal.strMeal}">
               </div>
               <div class="foot-div">
                   <h2 class="categories">${meal.strMeal}</h2>
                   <ul class = "list-footer">
                       <li><button id=${meal.idMeal}  class="comment-btn" type="button">Comments</button></li>
                       <li><button class="like-btn"><i class="far fa-heart"></i><span class="like-count">0</span></button></li>
                   </ul>
               </div>
             </div>`;
        meals.innerHTML = html;
      });
      popup();
      fetchLikes();
      likeAtction();
      mealsCounter(data.meals, mealCount);
    });
};

export default displayMeals;
