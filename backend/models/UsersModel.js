const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        requied: [true, "Por favor teclea tu nombre"]
    },
    email: {
        type: String,
        requied: [true, "Por favor teclea tu email"],
        unique: true
    },
    password: {
        type: String,
        requied: [true, "Por favor teclea tu password"]
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
   
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)