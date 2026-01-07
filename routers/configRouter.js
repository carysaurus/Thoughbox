// configRouter.js

const express = require('express');
const router = express.Router();

const {
    boxColours,
    noteColours
} = require('../config/colourThemes');

router.get('/colours', async (req, res) => {
    res.json({
        boxColours,
        noteColours
    });
});

module.exports = router;