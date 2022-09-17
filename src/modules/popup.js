const popupContainer = document.querySelector('.popup-container');
const popupImg = document.querySelector('.popup-image img');
const mealName = document.querySelector('.meal-name');
const recipe = document.querySelector('.meal-recipe');
const close = document.querySelector('#close-btn');
const formContainer = document.querySelector('.add-comment');

const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

const createForm = (id) => {
  formContainer.innerHTML = '<h4> Write your comment </h4>';
  const form = document.createElement('form');
  form.classList.add('form');
  form.id = id;
  form.innerHTML = `<input class='name' name='name' type="text" placeholder="Your Name..." required>
          <input class='new-comment' name='comment' type="text" placeholder="Your comment..." required>
          <input class="btn" name='comment-button' type="submit" value="Comment">`;
  formContainer.appendChild(form);
};

const popup = () => {
  const commentBtns = document.querySelectorAll('.comment-btn');

  commentBtns.forEach((button) => {
    button.addEventListener('click', () => {
      createForm(button.id);
      fetch(`${url}${button.id}`)
        .then((response) => response.json())
        .then((elem) => {
          popupContainer.classList.remove('hidden');
          document.querySelector('body').classList.add('no-scroll');
          popupImg.setAttribute('src', elem.meals[0].strMealThumb);
          mealName.innerHTML = elem.meals[0].strMeal;
          recipe.innerHTML = elem.meals[0].strInstructions;
        });
    });
  });

  close.addEventListener('click', () => {
    popupContainer.classList.add('hidden');
    document.querySelector('body').classList.remove('no-scroll');
  });
};

export default popup;