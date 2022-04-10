const addToDb = (id) => {
  let storedData = getStoredData();

  if (id in storedData) {
    storedData[id] = storedData[id] + 1;
  } else {
    storedData[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(storedData));
};

const getStoredData = () => {
  let storedData = {};
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    storedData = JSON.parse(storedCart);
  }
  return storedData;
};
export { addToDb, getStoredData };
