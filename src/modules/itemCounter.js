const mealsCounter = (data, link) => {
  link.innerHTML = `Recipes (${data.length})`;
  return data.length;
};

export default mealsCounter;