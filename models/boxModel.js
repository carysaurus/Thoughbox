// boxModel.js

const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const {
    boxColours
} = require('../config/colourThemes');

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
        // to be updated once userId is implemented
    }
});

const Box = mongoose.model('Box', boxSchema);

module.exports = {
    Box
}