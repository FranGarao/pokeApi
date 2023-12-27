const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const pokeRouter = require("./router/pokeRouter");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "./public")));

app.use("/", pokeRouter);
app.listen(3000, () => {
  console.log("El puerto esta funcionando");
});
