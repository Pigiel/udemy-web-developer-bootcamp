var express = require("express");
var app = express();

var port = 3000;
var ip = "0.0.0.0";

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "Post 1", author: "Pigiel"},
        {title: "Is RED the best color", author: "Pigiel"},
        {title: "Vacations ideas", author: "Pigiel"},
    ];

    res.render("posts", {posts: posts})
});

app.listen(port, ip, function() {
    console.log("Server started on " + ip + ":" + port);
});