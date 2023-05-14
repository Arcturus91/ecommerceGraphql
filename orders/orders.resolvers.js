const ordersModule = require("./orders.model");

module.exports = {
  Query: {
    orders: () => {
      return ordersModule.getAllOrders();
    },
  },
};
