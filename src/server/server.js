const express = require("express");
const path = require("path");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const { ApolloServer } = require("apollo-server-express");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "dist")));

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.get("/status", (req, res) => {
  res.send("Working");
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
