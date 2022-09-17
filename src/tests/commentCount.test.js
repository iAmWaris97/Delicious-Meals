/**
 * @jest-environment jsdom
 * */

import commentCount from '../modules/commentCount.js';

describe('Testing if the counter counts the comments', () => {
  const link = document.createElement('p');

  const emptyList = [];

  const commentsList = [{
    username: 'Waris',
    creation_date: '2022-09-17',
    comment: 'Wow, Nice food',
  },
  {
    username: 'Gustavo',
    creation_date: '2022-09-17',
    comment: 'Wow, I will cook this food',
  },
  ];

  const count = commentCount(commentsList, link);
  const empty = commentCount(emptyList, link);

  test('Check if there are two comments', () => {
    expect(count).toBe(2);
  });

  test('Check if there is no comment (0)', () => {
    expect(empty).toBe(0);
  });
});
