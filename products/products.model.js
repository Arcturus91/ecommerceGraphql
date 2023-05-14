const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.42,
    reviews: [],
  },
  {
    id: "bluejean",
    description: " Blue jeans",
    price: 55.55,
    reviews: [],
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

function addNewProduct(id, description, price) {
  const newProduct = { id, price, description, reviews: [] };
  products.push(newProduct);
  return newProduct;
}

function addNewProductReview(id, rating, comment) {
  const productToReview = getProductById(id);
  productToReview.reviews.push({ rating, comment });
  return productToReview.reviews;
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
