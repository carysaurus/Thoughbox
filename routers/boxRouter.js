// boxRouter.js

// --------------------------------------
// Variables
// --------------------------------------
const express = require('express');
const router = express.Router();
const {
    Box
} = require('../models/boxModel');

// --------------------------------------
// Fetch All Boxes
// --------------------------------------
router.get('/', async (req, res) => {
    try {
        const boxes = await Box.find();
        res.status(200).json(boxes);
    } catch (err) {
        res.status(500).json({
            message: 'Something went wrong! Please try again later.',
            error: err.message
        });
    }
});

// --------------------------------------
// Create New Box
// --------------------------------------
router.post('/', async (req, res) => {
    try {
        const {
            title,
            colour,
            // userId is not set

        } = req.body;

        const newBox = new Box({
            title,
            colour
            // userId is not set
        });
        const result = await newBox.save();
        res.status(201).json({
            message: 'New box successfully created!',
            result
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error while creating new box. Please try again later.',
            error: err.message
        });
    }
});

// --------------------------------------
// Update Existing Box
// --------------------------------------
router.put('/:id', async (req, res) => {
    try {
        const boxId = req.params.id;
        const {
            title,
            colour
            // userId is not set
        } = req.body;
        const toBeUpdated = await Box.findById(boxId);
        if (toBeUpdated) {
            if (title !== undefined) {
                toBeUpdated.title = title;
            }
            if (colour !== undefined) {
                toBeUpdated.colour = colour;
            }
            await toBeUpdated.save();
            res.status(200).json({
                message: 'Box updated successfully!',
                box: toBeUpdated
            });
        } else {
            res.status(404).json({
                message: 'Box not found.'
            });
        }
    } catch (err) {
        res.status(500).json({
            message: 'Error while updating Box. Please try again later.',
            error: err.message
        });
    }
});

// --------------------------------------
// Delete a Box
// --------------------------------------
router.delete('/:id', async (req, res) => {
    try {
        const boxId = req.params.id;
        const toBeDeleted = await Box.findById(boxId);
        if (toBeDeleted) {
            await Box.deleteOne({
                _id: boxId
            });
            res.status(200).json({
                message: 'Box deleted successfully.'
            });
        } else {
            res.status(404).json({
                message: 'Box not found.'
            });
        }
    } catch (err) {
        res.status(500).json({
            message: 'Error while deleting this Box. Please try again later.',
            error: err.message
        });
    }
});

module.exports = router;