const express = require('express')
const router = express.Router()
const {
    getNotes,
    getNote,
    createNote,
    deleteNote,
    updateNote
} = require('../Controller/NotesController')

//get notes
router.get('/', getNotes)

//get note
router.get('/:id', getNote)

//create note
router.post('/', createNote)

//delete a note
router.delete('/:id', deleteNote)

//update note
router.patch('/', updateNote)


module.exports = router