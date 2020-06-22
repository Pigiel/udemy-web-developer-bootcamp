const express = require('express');
const router = express.Router({mergeParams: true});
const Campground = require('../models/campground');
const Comment = require('../models/comment');

// Comments New
router.get('/new', isLoggedIn, (req, res) => {
    // Find the campground by ID
    Campground.findById(req.params.id, (err, campground) => {
        if (err) {
            console.log(err);
        } else {
            res.render('comments/new', {campground: campground});
        }
    });
});
// Comments Create
router.post('/', isLoggedIn, (req, res) => {
    // Find the campground by ID
    Campground.findById(req.params.id, (err, campground) => {
        if (err) {
            console.log(err);
            res.redirect('/campgrounds');
        } else {
            // Create new comment
            // console.log(req.body.comment);
            Comment.create(req.body.comment, (err, comment) => {
                if (err) {
                    console.log(err);
                } else {
                    // Add username and ID to comment
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    // Save the comment
                    comment.save();
                    // Connect new comment to campground
                    campground.comments.push(comment);
                    campground.save();
                    // Redirect to campground show page
                    res.redirect('/campgrounds/' + campground._id);
                }
            });
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