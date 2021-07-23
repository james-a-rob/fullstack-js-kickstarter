const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    user(firstName: String): User
  }

  type Mutation {
    login(username: String, password: String): String
  }

  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
  }
`;

module.exports = typeDefs;
