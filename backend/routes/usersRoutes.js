const express = require('express')
const router = express.Router()
const {createUser, loginUser, datosUser} = require('../controllers/usersControllers')

router.post('/', createUser)
router.post('/login', loginUser)
router.get('/datos', datosUser)

module.exports = router
