const express     = require('express'),
      app         = express(),
      bodyParser  = require('body-parser'),
      mongoose    = require('mongoose');

const port = 80;

mongoose.connect('mongodb://yelp-camp-db:27017/yelp_camp', {useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

const campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

const Campground = mongoose.model("Campground", campgroundSchema);

Campground.create(
    {
        name: 'Salmon Creek',
        image: 'https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    }, (err, campground) => {
        if (err) {
            console.log(err);
        } else {
            console.log("New campground created");
            console.log(campground);
        }
    }
);

Campground.create(
    {
        name: 'Granite Hill',
        image: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        description: 'This is a huge granite hill! No bathrooms. No water. Beautiful granite!'
    }, (err, campground) => {
        if (err) {
            console.log(err);
        } else {
            console.log("New campground created");
            console.log(campground);
        }
    }
);

// var campgrounds = [
//     {name: 'Salmon Creek', image: 'https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'},
//     {name: 'Granite Hill', image: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'},
//     {name: 'Mountain Goat\'s Rest', image: 'https://images.unsplash.com/photo-1506535995048-638aa1b62b77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'},
// ];

app.get('/', (req, res) => {
    res.render('landing');
});
// INDEX - show all campgrounds
app.get('/campgrounds', (req, res) => {
    // Get all campgrounds from DB
    Campground.find({}, (err, allcampground) => {
        if (err) {
            console.log(err);
        } else {
            res.render('index', {campgrounds: allcampground});
        }
    });
});
// CREATE - add new campground to the DB
app.post('/campgrounds', (req, res) => {
    // Get data from form and add to campgrounds array
    const name = req.body.name;
    const image = req.body.image;
    const description = req.body.description;
    const newCampground = {name: name, image, image, description: description};
    // Create a new campground and seve to DB
    Campground.create(newCampground, (err, newCampground) => {
        if (err) {
            console.log(err);
        } else {
            // Redirect back to campgrounds page
            res.redirect('/campgrounds');
        }
    });
});
// NEW - show form to create new campground
app.get('/campgrounds/new', (req, res) => {
    res.render('new');
});
// SHOW - show more info about one campground
app.get('/campgrounds/:id', (req, res) => {
    // Find the campground with provided ID
    Campground.findById(req.params.id, (err, foundCampground) => {
        if (err) {
            console.log(err);
        } else {
            // Render show template with that campground
            res.render('show', {campground: foundCampground});
        }
    });
});

app.listen(port, () => {
    console.log(`YelpCamp server started at http://localhost:${port}`);
});