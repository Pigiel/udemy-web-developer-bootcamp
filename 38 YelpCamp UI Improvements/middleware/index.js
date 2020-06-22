const Campground = require('../models/campground');
const Comment = require('../models/comment');
// All the middleware goes here
const middlewareObject = {};

middlewareObject.checkCampgroundOwnership = (req, res, next) => {
    // Is user logged in
    if (req.isAuthenticated()) {
        Campground.findById(req.params.id, (err, foundCampground) => {
            if (err) {
                req.flash('error', 'Campground not found');
                res.redirect('back');
            } else {
                // Does the user own the campground
                if (foundCampground.author.id.equals(req.user._id)) {
                    next();
                } else {
                    req.flash('error', 'Access denied - no user permission');
                    res.redirect('back');
                }
            }
        });
    } else {
        // If not then redirect
        req.flash('error', 'You need to be logged in first!');
        res.redirect('back');
    }
}

middlewareObject.checkCommentOwnership = (req, res, next) => {
    // Is user logged in
    if (req.isAuthenticated()) {
        Comment.findById(req.params.comment_id, (err, foundComment) => {
            if (err) {
                req.flash('error', 'Comment not found');
                res.redirect('back');
            } else {
                // Does the user own the comment
                if (foundComment.author.id.equals(req.user._id)) {
                    next();
                } else {
                    req.flash('error', 'Access denied - no user permission');
                    res.redirect('back');
                }
            }
        });
    } else {
        // If not then redirect
        req.flash('error', 'You need to be logged in first!');
        res.redirect('back');
    }
}
// Middleware
middlewareObject.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash('error', 'You need to be logged in first!');
    res.redirect('/login');
}

module.exports = middlewareObject;