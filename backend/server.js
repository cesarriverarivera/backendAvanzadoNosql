const express = require("express")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000 //puerto de escucha del backend "process.env.PORT asi se pone para leer las variables en entorno (env)"
const app = express()

app.use("/api/tareas", require("./routes/tareasRoutes"))

app.listen(port, () => console.log(`servidor inciado en el puerto ${port}`))