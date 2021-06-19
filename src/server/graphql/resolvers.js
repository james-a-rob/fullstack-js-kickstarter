const resolvers = {
  Query: {
    user: () => ({
      name: "james",
    }),
  },
};

module.exports = resolvers;
