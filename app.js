const express = require('express')
const app = express
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3003

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.listen(port, () => {
    console.log(`running on port: ${port}`)
})