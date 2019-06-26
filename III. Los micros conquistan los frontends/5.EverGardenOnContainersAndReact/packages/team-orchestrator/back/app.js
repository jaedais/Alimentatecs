const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();

app.use(morgan("dev"));
app.use(express.static("./build"));

app.listen(3001, function() {
  console.log("listening on port 3001 #team orchestrator");
});
