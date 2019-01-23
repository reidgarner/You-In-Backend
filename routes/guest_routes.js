const express = require('express')
const router = express.Router()
const queries = require('../queries/guests_queries')

router.get('/', (req, res) => {
    queries.readAllGuests().then(guests => res.status(200).send({ guests }))
})

router.get('/:id', (req, res) => {
    if(!parseInt(req.params.id))res.send('not valid integer')
    queries.readGuestById(req.params.id).then(guest => res.status(200).send({ guest }))
})

router.post('/', (req, res) => {
    queries.createGuest(req.body).then(newGuest => res.status(201).send(newGuest))
}) 

router.put('/:id', (req, res) => {
    queries.updateGuest(req.params.id, req.body).then
    (updatedGuest => res.status(200).send(updatedGuest))
})

router.delete('/:id', (req, res) => {
    queries.deleteGuest(req.params.id).then(() => res.sendStatus(204))
})

module.exports = router