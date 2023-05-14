const path = require("path");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { start } = require("repl");

const typesArray = loadFilesSync("**/*", {
  extensions: ["graphql"],
});
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

async function startApolloServer() {
  const app = express();
  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray, //estos son los que deben retornar un resultado. por eso cuando importamos las funciones de los models en los resolvers files, las ejecutamos
  });
  /* This line is importing the buildSchema function from the GraphQL library, 
  which is used to define the data schema for the GraphQL API. */

  const server = new ApolloServer({
    schema,
  });

  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  app.listen(3000, () => {
    console.log("Running GraphQL server...");
  });
}
startApolloServer();

/* const root = {
  products: require("./products/products.model"),
  orders: require("./orders/orders.model"),
}; */
/*  This is the root resolver object for the GraphQL server. which is not longer used when we create the resolvers for each query schema */

/* graphqlHTTP({
  schema: schema,
  rootValue: root, no longer needed since all resolver are coming from schema and maeExecutableSchema
  graphiql: true,
}) */

/* for using apollo server,
we have to uninstall:
const { graphqlHTTP } = require("express-graphql"); //express middleware function that responds to graphql queries.
 */

/* app.use(
  "/graphql", //this is the path where we are mounting the middleware
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
); */
/* - This line mounts the graphqlHTTP middleware at the root path */
