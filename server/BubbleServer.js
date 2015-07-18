var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require("fs");
var userLocations = {};

app.use(bodyParser.json()); // for parsing application/json

app.post('/userLocations', function (req, res) {
  var body = req.body;
  console.log(body);

  res.send("Json got");

  userLocations[body.id] = body.coordinate;

  console.log(userLocations);
  res.status(200);
});

app.get('/userLocations', function(req, res) {
  res.json(userLocations);
});

var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
