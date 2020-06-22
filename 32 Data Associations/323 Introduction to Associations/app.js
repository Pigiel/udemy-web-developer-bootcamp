const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/blog_demo', {useNewUrlParser: true, useUnifiedTopology: true});

// POST - title, content
const postSchema = {
    title: String,
    content: String
};

const Post = new mongoose.model('Post', postSchema);

// USER - email, name, posts
const userSchema = {
    name: String,
    email: String,
    posts: [postSchema]
};

const User = new mongoose.model('User', userSchema);

var newUser = new User({
    name: 'Hermione Granger',
    email: 'hermione@hogwarts.edu'
});

newUser.posts.push({
    title: 'How to brew polyjuice potion',
    connect: 'Just kidding. Go to potions class to learn it!'
});

newUser.save((err, user) => {
    if (err) {
        console.log(err);
    } else {
        console.log(user);
    }
});

User.findOne({name: 'Hermione Granger'}, (err, user) => {
    if (err) {
        console.log(err);
    } else {
        user.posts.push({
            title: '3 things I really hate',
            content: 'Voldemort! Voldemort! Voldemort!'
        });
        user.save((err, user) => {
            if (err) {
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});