const { gql } = require("apollo-server-express");

const mutations = {
  LOGIN: gql`
    mutation Login($username: String, $password: String) {
      login(username: $username, password: $password)
    }
  `,
};

module.exports = mutations;
