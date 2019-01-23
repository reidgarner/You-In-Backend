const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3003
const guests = require('./routes/guest_routes')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/guests', guests)

app.listen(port, () => {
    console.log(`running on port: ${port}`)
})