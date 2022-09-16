/**
 * @jest-environment jsdom
 * */

import itemsCounter from '../modules/itemCounter.js';

describe('Test in count of items', () => {
  const link = document.createElement('p');
  const data = [
    {
      strMeal: 'Fried chips',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg',
      idMeal: '1',
    },
    {
      strMeal: 'Chickpea Fajitas',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/tvtxpq1511464705.jpg',
      idMeal: '2',
    },
    {
      strMeal: 'Egg Drop Soup',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/1529446137.jpg',
      idMeal: '3',
    },
  ];

  const count = itemsCounter(data, link);

  test('the result shuld be 3', () => {
    expect(count).toBe(3);
  });
});
