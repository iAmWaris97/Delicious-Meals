const itemsCounter = (data, link) => {
  link.innerHTML = `Meals App(${data.length})`;
  return data.length;
};

export default itemsCounter;