const { gql } = require("apollo-server-express");

const queries = {
  GET_USER: gql`
    query GetUser($name: String) {
      user(name: $name) {
        id
        name
      }
    }
  `,
};

module.exports = queries;
