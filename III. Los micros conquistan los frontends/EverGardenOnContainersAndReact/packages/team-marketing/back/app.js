const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();

const suggestionsService = require("./service/suggestionsService");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/team_marketing", express.static("./build"));

app.get("/team_marketing/api/suggestions/:id", function(req, res) {
  console.log("get /suggestions" + req.params.id);
  res.send(suggestionsService.getSuggestions(req.params.id));
});

app.listen(3004, function() {
  console.log("listening on port 3004 #team marketing");
});
