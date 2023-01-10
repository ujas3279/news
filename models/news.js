const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
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
        unique: true,
        required: true
    },
    description: {
        type: String,
        unique: true
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

module.exports = mongoose.model("News", newsSchema)
