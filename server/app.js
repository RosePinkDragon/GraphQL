const { ApolloServer, gql } = require("apollo-server");
const axios = require("axios");

const { typeDefs } = require("./Schema/TypeDefs");
const { resolvers } = require("./Schema/Resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then((data) => console.log(`Server ready at ${data.url}`));
