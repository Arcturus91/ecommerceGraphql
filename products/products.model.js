const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.42,
  },
  {
    id: "bluejean",
    description: " Blue jeans",
    price: 55.55,
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter((item) => {
    return item.price >= min && item.price <= max;
  });
}

function getProductById(id) {
  return products.find((item) => {
    return item.id === id;
  });
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
};
