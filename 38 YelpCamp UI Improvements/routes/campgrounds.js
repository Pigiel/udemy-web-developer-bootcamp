const express = require('express');
const router = express.Router();
const Campground = require('../models/campground');
const middleware = require('../middleware'); // Automatically looking for index.js file

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
router.post('/', middleware.isLoggedIn, (req, res) => {
    // Get data from form and add to campgrounds array
    const name = req.body.name;
    const image = req.body.image;
    const description = req.body.description;
    const price = req.body.price;
    const author = {
        id: req.user._id,
        username: req.user.username
    }
    const newCampground = {name: name, image, image, description: description, price: price, author: author};
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
router.get('/new', middleware.isLoggedIn, (req, res) => {
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
// EDIT - edit information about one campground
router.get('/:id/edit', middleware.checkCampgroundOwnership, (req, res) => {
    Campground.findById(req.params.id, (err, foundCampground) => {
        res.render('campgrounds/edit', {campground: foundCampground});
    });
});
// UPDATE - update information about one campground in DB
router.put('/:id', middleware.checkCampgroundOwnership, (req, res) => {
    // Find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, (err, updatedCampground) => {
        if (err) {
            res.redirect('/campgrounds');
        } else {
            res.redirect('/campgrounds/' + req.params.id);
        }
    });
});
// DESTROY - delete selected campground from the DB
router.delete('/:id', middleware.checkCampgroundOwnership, (req, res) => {
    Campground.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            res.redirect('/campgrounds');
        } else {
            res.redirect('/campgrounds');
        }
    });
    
});

module.exports = router;