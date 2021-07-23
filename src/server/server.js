const express = require("express");
const path = require("path");
const expressJwt = require("express-jwt");
const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const context = require("./graphql/context");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "dist")));
app.use(
  expressJwt({
    secret: "KEEP_PRIVATE",
    algorithms: ["HS256"],
    credentialsRequired: false,
  })
);

const server = new ApolloServer({ typeDefs, resolvers, context });

server.applyMiddleware({ app });

app.get("/status", (req, res) => {
  res.send("Working");
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
