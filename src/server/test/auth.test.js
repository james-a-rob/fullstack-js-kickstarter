const { ApolloServer } = require("apollo-server");
const typeDefs = require("../graphql/typeDefs");
const resolvers = require("../graphql/resolvers");
const context = require("../graphql/context");
const { LOGIN } = require("../graphql/mutations");
const db = require("../models");

beforeAll(async () => {
  await db.sequelize.sync({ force: true });
});

describe("auth", () => {
  it("allows a user to login", async () => {
    await db.User.create({
      firstName: "James",
      lastName: "Robertson",
      email: "jamesrobertson@outlook.com",
    });
    const server = new ApolloServer({ typeDefs, resolvers, context });
    const result = await server.executeOperation(
      {
        query: LOGIN,
        variables: { firstName: "James" },
      },
      { req: "blah" }
    );
    expect(result.errors).toBeUndefined();
    expect(typeof result.data.login).toBe("string");
  });

  it("allows a user to logout", () => {});

  it("only allows user to see private data when logged in", () => {});
});
