'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: String,
    published: {
        type: Date,
        default: Date.now
    },
    keyword: Array
});

module.exports = mongoose.model('Book', BookSchema);