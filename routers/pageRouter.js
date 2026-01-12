// pageRouter.js

const express = require('express');
const {
    Box
} = require('../models/boxModel');
const {
    Note
} = require('../models/noteModel');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const userBoxes = await Box.find({});
        // Box.find({ user: req.user._id });
        const boxNotes = await Note.find({});
        res.render('index', {
            boxes: userBoxes,
            notes: boxNotes,
        });

    } catch (err) {
        console.error('Error fetching User data:', err);
        res.status(500).send('Failed to load data');
    }
});

module.exports = router;