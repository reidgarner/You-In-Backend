const express = require('express')
const router = express.Router()
const queries = require('../queries/guests_queries')

router.get('/', (req, res) => {
    queries.readAllGuests().then(guests => res.status(200).send({ guests }))
}) 

module.exports = router