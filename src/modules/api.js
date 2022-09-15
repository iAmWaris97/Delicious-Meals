const api = {
  async getMealList() {
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    const response = await fetch(url);
    const x = await response.json();
    const allCategories = await x.categories;
    return allCategories;
  },
  async getByIngredient() {
    const searchInputTxt = document.getElementById('search-input').value.trim();
    const url1 = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`;
    const response = await fetch(url1);
    const x = await response.json();
    const ingredientMeal = await x.meals;
    return ingredientMeal;
  },
};

export default api;
