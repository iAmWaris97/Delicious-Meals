const api = {
  async getMealList() {
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    const response = await fetch(url);
    const x = await response.json();
    const allCategories = await x.categories;
    return allCategories;
  },
};

export default api;
