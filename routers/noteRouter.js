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
// router.get('/', async (req, res) => {
//     try {
//         const notes = await Note.find({
//             archived: false
//         });

//         // Update to filter by UserId once User feature is functional

//         res.status(200).json(notes);
//     } catch (err) {
//         res.status(500).json({
//             message: 'Something went wrong! Please try again later.',
//             error: err.message
//         });
//     }
// });

// --------------------------------------
// Create New Note
// --------------------------------------
router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        const {
            noteTitle,
            noteColour,
            noteType,
            noteBoxId,
            noteText,
        } = req.body;

        if (!noteBoxId) {
            return res.status(400).send('Box ID is required');
        };

        const note = new Note({
            title: noteTitle,
            colour: noteColour || undefined,
            type: noteType,
            boxId: noteBoxId,
        });

        if (noteType === 'text') {
            note.text = noteText;
        };

        await note.save();
        res.redirect('/');
    } catch (err) {
        console.error('Error creating new Thought:', err);
        res.status(500).send('Failed to create new Thought');
    }
});

// --------------------------------------
// Update Existing Note
// --------------------------------------
// 

// --------------------------------------
// Delete a Note
// --------------------------------------
router.delete('/delete/:id', async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        console.error('Error deleting Thought:', err);
        res.status(500).send('Failed to delete Thought');
    }
})
module.exports = router;