const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();

const basketService = require("./service/basketService");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/team_sales", express.static("./build"));

app.listen(3003, function() {
  console.log("listening on port 3003 #team sales");
});

app.get("/team_sales/api/basket", function(req, res) {
  console.log("get /basket");
  res.send(basketService.list());
});

app.post("/team_sales/api/basket/add", function(req, res) {
  console.log("post /basket/add");
  res.send(basketService.add(req.body));
});

app.delete("/team_sales/api/basket/delete/:id", function(req, res) {
  console.log("post /basket/delete/" + req.params.id);
  res.send(basketService.delete(req.params.id));
});
