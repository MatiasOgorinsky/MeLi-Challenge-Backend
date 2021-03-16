var express = require("express");
var api = express();
const cors = require("cors");
api.use(cors());

var mercadoLibre = require("./meli.service.js");

api.get("/items", function (req, res) {
  var search = req.query.search;
  mercadoLibre.getBySearch(search).then(function (response) {
    res.send(response);
  });
});

api.get("/items/:ml_id", function (req, res) {
  var ml_id = req.params.ml_id;
  mercadoLibre.getById(ml_id).then(function (response) {
    res.send(response);
  });
});

var server = api.listen(3000, function () {
  console.log("Api is up on port 3000");
});
