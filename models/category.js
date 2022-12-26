const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        trim: true
    },

},{timestamps: true}) ;

module.exports = mongoose.model("Category", categorySchema)