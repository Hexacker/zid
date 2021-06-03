import express from "express";
import path from "path";
import ZidTest from "./zid.js";

const __dirname = path.resolve();
var app = express();

app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
/* app.set("views", __dirname + "/views"); // set express to look in this folder to render our view
app.set("view engine", "pug"); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, "public"))); // configure express to use public folder
 */
app.get("/carts", async (req, res) => {
  //  console.log("XMANAGER ===> ", config.get("X-MANAGER-TOKEN"));
  // console.log("LOOOOOOG ===> ", process.env.NODE_CONFIG_DIR);
  const response = await ZidTest();
  res.send(response);
});

app.get("/", async (req, res) => {
  const response = await ZidTest();
  // console.log("DATA ==> ", response);
  const renderedData = response["abandoned-carts"];
  //const renderedData = response.status;
  // console.log("DATA ==> ", renderedData);
  res.render("data", { renderedData });
});

app.get("/test", async (req, res) => {
  const response = await ZidTest();
  // console.log("DATA ==> ", response);
  // const renderedData = response["abandoned-carts"];
  //const renderedData = response.status;
  // console.log("DATA ==> ", renderedData);
  res.render("test");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
