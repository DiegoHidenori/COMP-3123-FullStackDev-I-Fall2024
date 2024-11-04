// const noteModel = require('../models/Notes.js');
const express = require('express');
const Notes = require('../models/NotesModel');
const router = express.Router();
const { body, validationResult } = require('express-validator');

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
router.post('/notes', [
    body('noteTitle').notEmpty().withMessage('Title is required'),
    body('noteDescription').notEmpty().withMessage('Description is required'),
    body('priority').notEmpty().withMessage('Position is required').isIn(['HIGH', 'LOW', 'MEDIUM']).withMessage('Invalid priority')
], (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    // Validate request
    if(!req.body.noteTitle || !req.body.noteDescription) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    const { noteTitle, noteDescription, priority } = req.body;

    //TODO - Write your code here to save the note
    const note = new Notes({
        noteTitle,
        noteDescription,
        priority,
        dateAdded: Date.now(),
        dateUpdated: Date.now()
    });

    note.save()
        .then(data => {
            res.status(201).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
router.get('/notes', (req, res) => {
    // Validate request
    Notes.find()
        .then(notes => {
            res.status(200).send(notes);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message,
            });
        });
    //TODO - Write your code here to returns all note
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get('/notes/:noteId', (req, res) => {
    const id = req.params.noteId;

    Notes.findById(id)
        .then(note => {
            if(!note) {
                return res.status(404).send({
                    message: `Note not found with ID: ${id}`
                });
            }
            res.status(200).send(note);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: `Note not found with ID: ${id}`
                });
            }
            return res.status(500).send({
                message: `Error retrieving the note with ID: ${id}`
            });
        });
    //TODO - Write your code here to return onlt one note using noteid
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put('/notes/:noteId', [
    body('noteTitle').optional().notEmpty().withMessage('Title is required'),
    body('noteDescription').optional().notEmpty().withMessage('Description is required'),
    body('priority').optional().notEmpty().withMessage('Position is required').isIn(['HIGH', 'LOW', 'MEDIUM']).withMessage('Invalid priority')
], (req, res) => {
    const noteId = req.params.noteId;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    Notes.findByIdAndUpdate(noteId, {
        noteTitle: req.body.noteTitle,
        noteDescription: req.body.noteDescription,
        priority: req.body.priority || 'MEDIUM',
        dateUpdated: Date.now()
    }, { new: true })
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: `Note not found with ID: ${noteId}`
                });
            }
            res.status(200).send(note);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: `Note not found with ID: ${noteId}`
                });
            }
            return res.status(500).send({
                message: `Error updating the note with ID: ${noteId}`
            });
        });
    //TODO - Write your code here to update the note using noteid
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete('/notes/:noteId', (req, res) => {
    const noteId = req.params.noteId;

    Notes.findByIdAndDelete(noteId)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: `Note not found with ID: ${noteId}`
                });
            }
            res.status(200).send({ message: "Note deleted successfully!" });
        })
        .catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: `Note not found with ID: ${noteId}`
                })
            }
            return res.status(500).send({
                message: `Could not delete note with ID: ${noteId}`
            });
        });
    //TODO - Write your code here to delete the note using noteid
});

module.exports = router;