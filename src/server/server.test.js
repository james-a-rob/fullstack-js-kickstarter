const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const { GET_USER } = require("./graphql/queries");

describe("simple app", () => {
  it("gets a user", async () => {
    const server = new ApolloServer({ typeDefs, resolvers });
    const result = await server.executeOperation({
      query: GET_USER,
    });
    expect(result.errors).toBeUndefined();
    expect(result.data.user.name).toBe("james");
  });
});
