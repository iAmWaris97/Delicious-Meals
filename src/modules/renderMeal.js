import api from './api.js';

const loadFromApi = (topNine) => {
  const meals = document.querySelector('.meals');

  for (let i = 0; i < topNine.length; i += 1) {
    // Parent div.
    const divParent = document.createElement('div');
    divParent.classList.add('parent-div');
    meals.appendChild(divParent);
    // Div picture.
    const picDiv = document.createElement('div');
    picDiv.classList.add('pic-div');
    divParent.appendChild(picDiv);
    // Img for div.
    const pic = document.createElement('img');
    pic.classList.add('img');
    pic.setAttribute('src', `${topNine[i].strCategoryThumb}`);
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
    const thumbsUp = document.createElement('span');
    thumbsUp.classList.add('thumbs');
    thumbsUp.textContent = '❤️';
    divLikes.appendChild(thumbsUp);
    // Count of likes
    const likesCount = document.createElement('p');
    likesCount.classList.add('likes');
    likesCount.textContent = '3 likes';
    divLikes.appendChild(likesCount);
    // Categorie Name
    const categories = document.createElement('p');
    categories.classList.add('categories');
    categories.textContent = `Do you like ${topNine[i].strCategory}?`;
    footCard.appendChild(categories);
    // Comment button.
    const comment = document.createElement('a');
    comment.classList.add('comment');
    comment.textContent = 'Comments';
    footCard.appendChild(comment);
  }
};

const manageData = async () => {
  const data = await api.getMealList();
  const x = [...data];
  // to randomize or shuffle it the original array before do the slice.
  /* x.sort(() => 0.5 - Math.random()); */
  const topNine = x.slice(0, 9);
  console.log(topNine);
  loadFromApi(topNine);
};
/* manageData(); */

export default manageData;