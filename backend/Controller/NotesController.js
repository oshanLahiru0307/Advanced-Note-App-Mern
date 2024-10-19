const note = require('../models/NotesModel')

//create note
const createNote = async (req, res) => {
    const { title, content} = req.body
    try{
        const note = await note.create({title, content})
        res.status(200).json(note)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//get notes
const getNotes = async (req, res) => {

    const notes = await note.find({}).sort({createdAt: -1})
    if(!notes){
        res.status(400).json({mssg:"no notes available"})
    }
    res.status(200).json(notes)
}

//get a single note
const getNote = async (req, res) => {
    const {id} = req.params
    const note = await note.findById(id)
    if(!note){
        res.status(400).json({mssg:"there is not such a note"})
    }
    res.status(200).json(note)
}

//delete a note
const deleteNote = async (req, res) => {
    const {id} = req.params
    const note = await note.findOneAndDelete(id)
    if(!note){
        res.status(400).json({mssg:"there is not such a note"})
    }
    res.status(200).json(note)
}

//update a note
const updateNote = async (req, res) => {
    const {id} = req.params
    const note = await note.findOneAndUpdate({_id:id}, {...req.body})
    if(!note){
        res.status(400).json({mssg:"there is not such a note"})
    }
    res.status(200).json(note)
}

module.exports = {
    getNotes,
    getNote,
    createNote,
    deleteNote,
    updateNote
}