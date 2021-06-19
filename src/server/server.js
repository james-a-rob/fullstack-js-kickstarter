const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "dist")));

app.get("/status", (req, res) => {
  res.send("Working");
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
