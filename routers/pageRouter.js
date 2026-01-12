// pageRouter.js

const express = require('express');
const {
    Box
} = require('../models/boxModel');
const {
    Note
} = require('../models/noteModel'); // ready to add Notes once function is implemented
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const userBoxes = await Box.find({});
        // Box.find({ user: req.user._id });
        res.render('index', {
            boxes: userBoxes
        });
    } catch (err) {
        console.error('Error fetching user Boxes:', err);
        res.status(500).send('Failed to load boxes');
    }
});

module.exports = router;