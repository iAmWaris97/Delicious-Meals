/**
 * @jest-environment jsdom
 * */

import mealsCounter from '../modules/itemCounter.js';

describe('Testing count of meals', () => {
  const link = document.createElement('p');
  const data = [
    {
      strMeal: 'Fried chips',
      strMealThumb:
        'https://www.chips.com/',
      idMeal: '1',
    },
    {
      strMeal: 'Chicken Curry',
      strMealThumb:
        'https://www.chiken.com/',
      idMeal: '2',
    },
    {
      strMeal: 'Special Soup',
      strMealThumb:
        'https://www.soup.com/',
      idMeal: '3',
    },
    {
      strMeal: 'Beef Burger',
      strMealThumb:
        'https://www.burger.com/',
      idMeal: '4',
    },
  ];

  const count = mealsCounter(data, link);

  test('Expected count: 4', () => {
    expect(count).toBe(4);
  });
});
