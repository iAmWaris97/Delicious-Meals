const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/GMNp8Iw0vFnGN6Z04zFg/likes';
const fetchLikes = async () => {
  const meal = document.querySelectorAll('.meal');
  const likeCount = document.querySelectorAll('.like-count');
  await fetch(url)
    .then((response) => response.json())
    .then((json) => {
      meal.forEach((meal, index) => {
        json.forEach((item) => {
          if (item.item_id === meal.id) {
            likeCount[index].innerHTML = item.likes;
          }
        });
      });
    });
};
const likeAtction = async () => {
  const likeBtns = document.querySelectorAll('.like-btn');
  const likeBtnIcon = document.querySelectorAll('.fa-heart');
  const likeBtnCount = document.querySelectorAll('.like-count');
  const meal = document.querySelectorAll('.meal');
  likeBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      likeBtnIcon[index].classList.remove('far');
      likeBtnIcon[index].classList.add('fas');
      likeBtnCount[index].innerHTML = Number(likeBtnCount[index].innerHTML) + 1;
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          item_id: meal[index].id,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    });
  });
};
export { fetchLikes, likeAtction };