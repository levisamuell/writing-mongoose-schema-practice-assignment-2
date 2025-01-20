const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
        title: {
            type: String,
            unique: true,
            minLength: 5,
        },
        content: {
            type: String,
            required: true,
            minLength: 50,
        },
        author: {
            type: String,
        },
        tags: {
            type: [String],
        },
        category: {
            type: String,
            default: 'General',
        },
        likes: {
            type: [String],
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
        },
        comments: {
            username: {
                type: String,
            },
            message: {
                type: String,
                required: true,
            },
            commentedAt: {
                type: Date,
                default: Date.now,
            },
        }
});

mongoose.model('User', blogPostSchema);