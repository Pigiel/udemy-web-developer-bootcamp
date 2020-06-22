var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there!");
});

app.get("/bye", function(req, res) {
    res.send("Goodbye!");
});

app.get("/dog", function(req, res) {
    res.send("MEOW!");
});

app.get("/r/:subredditName", function(req, res) {
    console.log(req.params);
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit.toUpperCase() + " subreddit!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
    console.log(req.params);
    res.send("Welcome the comments page!");
});

app.get("*", function(req, res) {
    res.send("You are a STAR (*)");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});