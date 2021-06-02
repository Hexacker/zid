import express from "express";
import getAbandondCarts from "./zid.js";
var app = express();

app.get("/", async (req, res) => {
  const response = await getAbandondCarts();
  res.send(response);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
