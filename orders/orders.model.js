const orders = [
  {
    date: "2005-01-12",
    subtotal: 30.23,
    items: [
      {
        product: {
          id: "redshoe",
          description: "old red shoe",
          price: 45.11,
        },
        quantity: 12,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders
};
