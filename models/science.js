const mongoose = require('mongoose');

const scienceSchema = new mongoose.Schema({
    sourceId: {
        type: String,
        trim: true
    },
    sourceName: {
        type: String,
        trim: true

    },
    author: {
        type: String,
        trim: true
    },
    title: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        required: true
    },
    urlToImage: {
        type: String,
        trim: true
    },
    publishedAt: {
        type: Date,
        trim: true
    },
    content: {
        type: String,
        trim: true
    },

},{timestamps: true}) ;

module.exports = mongoose.model("Science", scienceSchema)