const express = require('express');
const router = express.Router();
const Campground = require('../models/campground');

// INDEX - show all campgrounds
router.get('/', (req, res) => {
    // Get all campgrounds from DB
    Campground.find({}, (err, allcampground) => {
        if (err) {
            console.log(err);
        } else {
            res.render('campgrounds/index', {campgrounds: allcampground});
        }
    });
});
// CREATE - add new campground to the DB
router.post('/', isLoggedIn, (req, res) => {
    // Get data from form and add to campgrounds array
    const name = req.body.name;
    const image = req.body.image;
    const description = req.body.description;
    const author = {
        id: req.user._id,
        username: req.user.username
    }
    const newCampground = {name: name, image, image, description: description, author: author};
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
router.get('/new', isLoggedIn, (req, res) => {
    res.render('campgrounds/new');
});
// SHOW - show more info about one campground
router.get('/:id', (req, res) => {
    // Find the campground with provided ID
    Campground.findById(req.params.id).populate('comments').exec((err, foundCampground) => {
        if (err) {
            console.log(err);
        } else {
            // Render show template with that campground
            res.render('campgrounds/show', {campground: foundCampground, currentUser: req.user});
        }
    });
});
// Middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

module.exports = router;