import express from "express";
import path from "path";
import AbandonedCarts from "./zid.js";
import AddCoupon from "./addCoupon.js";

const __dirname = path.resolve();
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.get("/carts", async (req, res) => {
  const response = await AbandonedCarts();
  const renderedData = response["abandoned-carts"];
  res.render("abandoned", { renderedData });
});

app.get("/", async (req, res) => {
  res.render("index");
});

app.get("/coupon", async (req, res) => {
  res.render("coupon");
});

app.get("/error", (req, res) => {
  res.render("error");
});

app.post("/add-coupon", async (req, res) => {
  const data = req.body;
  const dataToSend = Object.assign({}, data);
  const response = await AddCoupon(dataToSend);
  if (response) {
    res.redirect("/");
  } else {
    res.redirect("/error");
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
