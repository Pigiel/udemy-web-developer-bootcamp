var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var IP = "0.0.0.0";
var PORT = 80;

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.get("/", function(req, res) {
    res.render("home");
});

app.post("/addfriend", function(req, res) {
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res) {
    res.render("friends", {friends: friends});
});

app.listen(PORT, IP, function() {
    console.log("Server started on " + IP + ":" + PORT)
});