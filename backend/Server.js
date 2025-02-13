const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Zephyr");
});

app.listen(port, () => {
  console.log(`Zephyr is listening on port ${port}`);
});
