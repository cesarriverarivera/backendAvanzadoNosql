const express = require("express")
const colors = require('colors')
const connectDB = require('./config/db')
const dotenv = require("dotenv").config()
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000 //puerto de escucha del backend "process.env.PORT asi se pone para leer las variables en entorno (env)"

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false})) //se coloca extended: false para que se ponga en consola como objeto
app.use("/api/tareas", require("./routes/tareasRoutes"))

app.use(errorHandler) //con esto le digo a la app que usare un manejador de errores

app.listen(port, () => console.log(`servidor inciado en el puerto ${port}`))