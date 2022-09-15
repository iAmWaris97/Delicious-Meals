import './style.css';
import api from './modules/api.js';
import manageData from './modules/renderMeal.js';

manageData();

const loadFromApiIngridients = (topNine) => {
  const meals = document.querySelector('.meals');
  meals.innerHTML = '';

  for (let i = 0; i < topNine.length; i += 1) {
    // Parent div.
    const meals1 = document.getElementById('meals');
    const divParent = document.createElement('div');
    divParent.classList.add('parent-div');
    meals1.appendChild(divParent);
    // Div picture.
    const picDiv = document.createElement('div');
    picDiv.classList.add('pic-div');
    divParent.appendChild(picDiv);
    // Img for div.
    const pic = document.createElement('img');
    pic.classList.add('img');
    pic.setAttribute('src', `${topNine[i].strMealThumb}`);
    picDiv.appendChild(pic);
    // Footer card.
    const footCard = document.createElement('div');
    footCard.classList.add('foot-div');
    divParent.appendChild(footCard);
    // Div likes
    const divLikes = document.createElement('div');
    divLikes.classList.add('div-likes');
    footCard.appendChild(divLikes);
    // Heand thumbs up to press to have the like
    /* const thumbsUp = document.createElement('span');
    thumbsUp.classList.add('thumbs');
    thumbsUp.textContent = '❤️';
    divLikes.appendChild(thumbsUp);
    // Count of likes
    const likesCount = document.createElement('p');
    likesCount.classList.add('likes');
    likesCount.textContent = '3 likes';
    divLikes.appendChild(likesCount); */
    // Categorie Name
    const categories = document.createElement('p');
    categories.classList.add('categories');
    categories.textContent = `Try doing this ${topNine[i].strMeal}!!`;
    footCard.appendChild(categories);
    // Comment button.
    /* const comment = document.createElement('a');
    comment.classList.add('comment');
    comment.textContent = 'Comments';
    footCard.appendChild(comment); */
  }
};

/* search button calling the API */
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', async () => {
  const data = await api.getByIngredient();
  const x = [...data];
  const topNine = x.slice(0, 9);
  console.log(topNine);
  loadFromApiIngridients(topNine);
});
