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

}

//get a single note
const getNote = async (req, res) => {

}

//delete a note
const deleteNote = async (req, res) => {

}

//update a note
const updateNote = async (req, res) => {

}