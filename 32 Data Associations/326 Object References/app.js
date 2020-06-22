const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/blog_demo', {useNewUrlParser: true, useUnifiedTopology: true});

var Post = require('./models/post');
var User = require('./models/user');

User.create({
    name: 'Bob Belcher',
    email: 'bob@gmail.com'
});

Post.create({
    title: 'How to cook the best burger',
    content: 'Buy the best ingredients'
}, (err, post) => {
    console.log(post);
});

Post.create({
    title: 'How to cook the best burger pt. 2',
    content: 'Buy the best ingredients'
}, (err, post) => {
    User.findOne({email: 'bob@gmail.com'}, (err, foundUser) => {
        if (err) {
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save((err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
});

Post.create({
    title: 'How to cook the best burger pt. 3',
    content: 'Ha ha ha ha ha ha!'
}, (err, post) => {
    User.findOne({email: 'bob@gmail.com'}, (err, foundUser) => {
        if (err) {
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save((err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
});

// Find all posts for that user
User.findOne({email: 'bob@gmail.com'}).populate('posts').exec((err, user) => {
    if (err) {
        console.log(err);
    } else {
        console.log(user);
    }
});