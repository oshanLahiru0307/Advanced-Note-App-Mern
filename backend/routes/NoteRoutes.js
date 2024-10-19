const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.json({mssg:'get notes'})
})

router.get('/:id', (req,res) => {
    res.json({mssg:'get a note'})
})

router.post('/', (req,res) => {
    res.json({mssg:'post request'})
})

router.delete('/:id', (req,res) => {
    res.json({mssg:'delete request'})
})

router.patch('/', (res,req) => {
    res.json({mssg:'update request'})
})


module.exports = router