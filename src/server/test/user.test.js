const { ApolloServer } = require("apollo-server");
const typeDefs = require("../graphql/typeDefs");
const resolvers = require("../graphql/resolvers");
const { GET_USER } = require("../graphql/queries");
const db = require("../models");

beforeAll(async () => {
  await db.sequelize.sync({ force: true });
});

describe("user", () => {
  it("gets a user", async () => {
    await db.User.create({
      firstName: "James",
      lastName: "Robertson",
      email: "jamesrobertson@outlook.com",
    });
    const server = new ApolloServer({ typeDefs, resolvers });
    const result = await server.executeOperation({
      query: GET_USER,
      variables: { firstName: "James" },
    });
    expect(result.errors).toBeUndefined();
    expect(result.data.user.firstName).toBe("James");
  });
});
