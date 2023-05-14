const productsModel = require("./products.model");

module.exports = {
  Query: {
    products: () => {
      return productsModel.getAllProducts();
    },
    productsByPrice: (_, args) => {
      //normally when you dont use an argument, you name it with underscore.
      return productsModel.getProductsByPrice(args.min, args.max);
    },
    productByID: (_,args)=>{
        return productsModel.getProductById(args.id)
    }
  },
};

/*    
Originally we had this:
But as you can see, we can attach functions to the resolvers. And thats what we do above.
//we need queries that matchs the values from our root schema. See how we need: products, orders
    products: async (parent) => {
      console.log("Getting the products..", __dirname); //parent is the root object.
      const product = await Promise.resolve(parent.products); //adding Promise.resolve is how we make js to wait for the content inside to be executed before continuing to the next line of the code
      return product;
    },
    //this resolvers are functions. So you can make here api calls, or asynchronous operations, among other stuff
  }, */
