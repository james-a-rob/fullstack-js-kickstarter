const { gql } = require("apollo-server-express");

const queries = {
  GET_USER: gql`
    query GetUser($firstName: String) {
      user(firstName: $firstName) {
        id
        firstName
        lastName
        email
      }
    }
  `,
};

module.exports = queries;
