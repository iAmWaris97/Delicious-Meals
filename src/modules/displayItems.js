import displayPopup from './popupWindow.js';
import { getLikes, likeInteract } from './newLike.js';

const recipeCards = document.querySelector('.meals');

const displayCards = async () => {
  fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood')
    .then((response) => response.json())
    .then((data) => {
      let html = '';
      data.meals.forEach((meal) => {
        html += `<div class="parent-div" id="${meal.idMeal}">
               <div class="pic-div">
                   <img src="${meal.strMealThumb}" class="img" alt="${meal.strMeal}">
               </div>
               <div class="foot-div">
                   <h2 class="categories">${meal.strMeal}</h2>
                   <ul class = "list-footer">
                       <li><button id=${meal.idMeal}  class="comment" type="button">Comments</button></li>
                       <li><button class="like-btn"><i class="far fa-heart"></i><span class="like-count">0</span></button></li>
                   </ul>
               </div>
             </div>`;
        recipeCards.innerHTML = html;
      });
      displayPopup();
      getLikes();
      likeInteract();
    });
};

export default displayCards;
