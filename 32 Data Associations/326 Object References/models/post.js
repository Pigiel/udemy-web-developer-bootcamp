const mongoose = require('mongoose');

// POST - title, content
const postSchema = {
    title: String,
    content: String
};

module.exports = mongoose.model('Post', postSchema);