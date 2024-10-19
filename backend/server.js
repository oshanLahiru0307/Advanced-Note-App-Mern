const express = require('express')
const app = express()
const NoteRouter = require('./routes/NoteRoutes')

//middlewere
app.use((req,res,next) => {
    console.log(req.path)
    next()
})

app.use(express.json())

app.use('/api/notes', NoteRouter)

//app listen for PORT
app.listen(4000, () => {
    console.log('app is listening to the PORT 4000')
})