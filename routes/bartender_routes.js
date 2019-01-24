const express = require('express')
const router = express.Router()
const queries = require('../queries/bartender_queries')

router.get('/', (req, res) => {
    queries.readAllBartenders().then(bartenders => res.status(200).send({ bartenders }))
})

router.get('/:id', (req, res) => {
    if(!parseInt(req.params.id))res.send('not valid integer')
    queries.readBartenderById(req.params.id).then(bartender => res.status(200).send({ bartender }))
})

router.post('/', (req, res) => {
    queries.createBartender(req.body).then(newBartender => res.status(201).send(newBartender))
}) 

router.put('/:id', (req, res) => {
    queries.updateBartender(req.params.id, req.body).then
    (updatedBartender => res.status(200).send(updatedBartender))
})

router.delete('/:id', (req, res) => {
    queries.deleteBartender(req.params.id).then(() => res.sendStatus(204))
})

module.exports = router