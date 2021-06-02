import express from "express";
import getAbandondCarts from "./zid.js";
import ZidTest from "./zid.js";
import config from "config";

var app = express();

app.get("/", async (req, res) => {
  //  console.log("XMANAGER ===> ", config.get("X-MANAGER-TOKEN"));
  // console.log("LOOOOOOG ===> ", process.env.NODE_CONFIG_DIR);
  const response = await ZidTest();
  res.send(response);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
