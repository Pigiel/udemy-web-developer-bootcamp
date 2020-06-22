var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there! Welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
    var sounds = {
        pig: "'Oink'",
        cow: "'Moo'",
        dog: "'Woof Woof!'",
        cat: "'Meow' [I hate you human!]",
        bird: "'Tweet'"
    }

    var animal = req.params.animal.toLowerCase();
    var speak = sounds[animal];

    res.send("The " + animal + " says " + speak);
});

app.get("/repeat/:word/:number", function(req, res) {
    var word = req.params.word;
    var number = Number(req.params.number);
    var output = "";
    
    for (i = 0; i < number; i++) {
        output += word + " ";
    }
    res.send(output);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found... What are you doing with your life?");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});