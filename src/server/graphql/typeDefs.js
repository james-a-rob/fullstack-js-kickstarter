const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    user: User
  }

  type User {
    name: String
  }
`;

module.exports = typeDefs;
