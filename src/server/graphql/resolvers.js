const db = require("../models");
const jwt = require("jsonwebtoken");

const resolvers = {
  Query: {
    user: async () => {
      const users = await db.User.findAll();
      const user = await db.User.findOne({ where: { firstName: "James" } });
      return user;
    },
  },
  Mutation: {
    login: () => {
      console.log("yep logging in");
      return jwt.sign({ "http://blah": { blah: "blah" } }, "KEEP_PRIVATE", {
        algorithm: "HS256",
      });
    },
  },
};

module.exports = resolvers;
