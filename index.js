import express from "express";
import path from "path";
import ZidTest from "./zid.js";

var app = express();

app.use(express.json());

console.log("current working directory ===> ", process.cwd());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.get("/carts", async (req, res) => {
  //  console.log("XMANAGER ===> ", config.get("X-MANAGER-TOKEN"));
  // console.log("LOOOOOOG ===> ", process.env.NODE_CONFIG_DIR);
  const response = await ZidTest();
  res.send(response);
});

app.get("/", (req, res) => {
  res.render("index");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
