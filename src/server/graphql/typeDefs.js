const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    user(name: String): User
  }

  type User {
    id: ID
    name: String
  }
`;

module.exports = typeDefs;
