const { gql } = require("apollo-server-express");

const queries = {
  GET_USER: gql`
    query {
      user {
        name
      }
    }
  `,
};

module.exports = queries;
