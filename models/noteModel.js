// noteModel.js

const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const {
    noteColours
} = require('../config/colourThemes');

const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    colour: {
        type: String,
        enum: noteColours,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        // to be updated once userId is implemented
    },
    boxId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Box',
        required: true,
    },
    description: {
        type: String,
        trim: true
    },
    checkboxes: [{
        label: String,
        checked: {
            type: Boolean,
            default: false
        }
    }],
    list: [{
        type: String,
        trim: true
    }],
    links: [{
        label: {
            type: String,
            trim: true
        },
        url: {
            type: String,
            trim: true
        }
    }],
    images: [{
        src: String,
        alt: String
    }],
    archived: {
        type: Boolean,
        default: false
    },

    order: {
        type: Number,
        default: 0
    },
}, {
    timestamps: true
});

const Note = mongoose.model('Note', noteSchema);

module.exports = {
    Note
}