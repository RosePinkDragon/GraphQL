const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID
    login: String
    avatar_url: String
  }

  type Query {
    users: [User]
  }
`;

module.exports = { typeDefs };
