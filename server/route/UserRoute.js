const express = require('express')
const {addPoints,getAllUser,addUser} = require('../controller/UserController')

const UserRouter = express.Router()


UserRouter.route('/add-points/:id').post(addPoints)
UserRouter.route('/getalluser').get(getAllUser)
UserRouter.route('/add').post(addUser)
module.exports = UserRouter 