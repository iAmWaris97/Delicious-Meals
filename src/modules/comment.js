const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const key = 'GMNp8Iw0vFnGN6Z04zFg';

const commentsHeader = document.querySelector('.comments-container h4');

const fetchComments = async (id) => {
  commentsHeader.innerHTML = 'Comments (0)';
  await fetch(`${url}${key}/comments?item_id=${id}`)
    .then((reponse) => reponse.json())
    .then((json) => {
      const commentsList = document.querySelector('.comments-generator');
      commentsList.innerHTML = '';
      // eslint-disable-next-line array-callback-return
      json.map((comment, index) => {
        const newComment = document.createElement('li');
        if (index % 2 !== 0) {
          newComment.classList.add('row-bg');
        }
        newComment.innerHTML = `<span class="date">${comment.creation_date}</span><span class="username">${comment.username}:</span> <span
              class="comment-text">${comment.comment}</span>`;
        commentsList.appendChild(newComment);
      }).join('');
    });
};

const postComment = async (username, comment, id) => {
  await fetch(`${url}${key}/comments/`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(() => {
    fetchComments(id);
  });
};

export { postComment, fetchComments };