const mongoose = require('mongoose');
mongoose.connect("mongodb://mongodb/cat_app", {useNewUrlParser: true, useUnifiedTopology: true});

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
}, {autoIndex: false});

var Cat = mongoose.model("Cat", catSchema);

var george = new Cat({
    name: "George",
    age: 11,
    temperament: "Grouchy"
    // name: "Mrs. Norris",
    // age: 7,
    // temperament: "Evil"
});

george.save((err, cat) => {
    if (err) {
        console.log("Something went wrong");
        console.log(err);
    } else {
        console.log("We just saved a cat to the DB");
        console.log(cat);
    }
});

// Same method as new & save
Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, (err, cat) => {
    if (err) {
        console.log(err);
    } else {
        console.log(cat);
    }
});

Cat.find({}, (err, cats) => {
    if (err) {
        console.log("Oh no! Error");
        console.log(err);
    } else {
        console.log("All the cats ...");
        console.log(cats);
    }
});