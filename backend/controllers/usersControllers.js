const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/UsersModel')

const createUser = asyncHandler( async (req, res) => {

    const {name, email, password} = req.body //con esto desestructuro el body

    if(!name || !email || !password) { //verificamos que nos pasen todos los datos
        res.status(400)
        throw new  Error ('Faltan datos')
    }
    //verificar que ese usuario no exista a traves de su email
    const userExist = await User.findOne({email})
    if (userExist) {
        res.status(400)
        throw new Error('ese usuario ya existe en la base de datos')
    }

    //hacemos el hash al password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Crear el usuario
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('no se pudo crear los datos del usuario')
    }

    // res.status(201).json({message: 'crear usuario'})
})



const loginUser = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'login del usuario'})
})



const datosUser = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'datos del usuario'})
})

module.exports = {
    createUser,
    loginUser,
    datosUser
}