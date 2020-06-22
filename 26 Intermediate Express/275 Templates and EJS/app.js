var express = require("express");
var app = express();

var PORT = 3000;
var IP = "0.0.0.0";

app.get("/", function(req, res) {
    res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
});

app.listen(PORT, IP, function() {
    console.log("Server started on " + IP + ":" + PORT);
});