const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')


require('dotenv').config()
app.use(cors())
app.use(express.json()) 
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

const usersController = require('./Controllers/User_controller.js')
app.use('/api', usersController)

const AuthController = require('./Controllers/auth_Controller.js')
app.use('/auth', AuthController)

app.listen(4005, () => {
    console.log(`Listening on 4005`)
})
