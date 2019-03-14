var express = require('express');
var mongoose = require('mongoose');
var app = express();

app.get("/api/shorturl/:new?", function(req, res) {
	var site = req.params;
	res.json({"original url": site});
})

//express server & serve HTML file
app.get("/", function(req, res) {
    res.sendFile( __dirname + "/views/index.html");
});

//access public/css folder
app.use(express.static('public'));

//port for heroku
var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('App listening on port 3000!')
});