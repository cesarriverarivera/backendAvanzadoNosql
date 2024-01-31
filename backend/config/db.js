//para conectar el backend con la base de datos con mongoose
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

module.exports = connectDB
