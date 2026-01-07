// notesRouter.js

// --------------------------------------
// Variables
// --------------------------------------
const express = require('express');
const router = express.Router();
const {
    Note
} = require('../models/noteModel');

// --------------------------------------
// Fetch All Notes
// --------------------------------------
router.get('/', async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({
            message: 'Something went wrong! Please try again later.',
            error: err.message
        });
    }
});

// --------------------------------------
// Create New Note
// --------------------------------------
router.post('/', async (req, res) => {
    try {
        const {
            title,
            colour,
            // userId is not set
            boxId,
            description,
            checkboxes,
            list,
            links,
            images,
            archived,
            order
        } = req.body;

        const newNote = new Note({
            title,
            colour,
            // userId is not set
            boxId,
            description,
            checkboxes,
            list,
            links,
            images,
            archived,
            order
        });
        const result = await newNote.save();
        res.status(201).json({
            message: 'New Thought successfully created!',
            result
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error while creating new Thought. Please try again later.',
            error: err.message
        });
    }
});

// --------------------------------------
// Update Existing Note
// --------------------------------------
router.put('/:id', async (req, res) => {
    try {
        const noteId = req.params.id;
        const {
            title,
            colour,
            description,
            checkboxes,
            list,
            links,
            images,
            archived,
        } = req.body;
        const toBeUpdated = await Note.findById(noteId);
        if (toBeUpdated) {
            if (title !== undefined) {
                toBeUpdated.title = title;
            }
            if (colour !== undefined) {
                toBeUpdated.colour = colour;
            }
            if (description !== undefined) {
                toBeUpdated.description = description;
            }
            if (checkboxes !== undefined) {
                toBeUpdated.checkboxes = checkboxes;
            }
            if (list !== undefined) {
                toBeUpdated.list = list;
            }
            if (links !== undefined) {
                toBeUpdated.links = links;
            }
            if (images !== undefined) {
                toBeUpdated.images = images;
            }
            if (archived !== undefined) {
                toBeUpdated.archived = archived;
            }
            await toBeUpdated.save();
            res.status(200).json({
                message: 'Thought updated successfully!',
                note: toBeUpdated
            });
        } else {
            res.status(404).json({
                message: 'Thought not found.'
            });
        }
    } catch (err) {
        res.status(500).json({
            message: 'Error while updating Thought. Please try again later.',
            error: err.message
        });
    }
});

// --------------------------------------
// Delete a Note
// --------------------------------------
router.delete('/:id', async (req, res) => {
    try {
        const noteId = req.params.id;
        const toBeDeleted = await Note.findById(noteId);
        if (toBeDeleted) {
            await Note.deleteOne({
                _id: noteId
            });
            res.status(200).json({
                message: 'Thought deleted successfully.'
            });
        } else {
            res.status(404).json({
                message: 'Thought not found.'
            });
        }
    } catch (err) {
        res.status(500).json({
            message: 'Error while deleting this Thought. Please try again later.',
            error: err.message
        });
    }
});

module.exports = router;