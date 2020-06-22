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

app.get("/posts", function(req, res) {
    var posts = [
        {title: "Post 1", author: "Pigiel"},
        {title: "Is RED the best color", author: "Pigiel"},
        {title: "Vacations ideas", author: "Pigiel"},
    ];

    res.render("posts.ejs", {posts: posts})
});

app.listen(PORT, IP, function() {
    console.log("Server started on " + IP + ":" + PORT);
});