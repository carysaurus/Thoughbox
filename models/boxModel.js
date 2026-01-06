// boxModel.js

const mongoose = require('mongoose');
const {
    Schema
} = mongoose;
const boxColours = require('../public/js/boxColours');

const boxSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    colour: {
        type: String,
        enum: boxColours,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    }
});

const Box = mongoose.model('Box', boxSchema);

module.exports = {
    Box
}