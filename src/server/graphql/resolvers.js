const db = require("../models");

const resolvers = {
  Query: {
    user: async () => {
      const users = await db.User.findAll();
      const user = await db.User.findOne({ where: { firstName: "James" } });
      return user;
    },
  },
};

module.exports = resolvers;
