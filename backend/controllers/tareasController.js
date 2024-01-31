// todas las funciones que se encargaran de interactuar con la base de datos
const asyncHandler = require('express-async-handler') //para que funcione hay que envolver todas las funciones

const getTareas = asyncHandler( async (req,res) => {
    res.status(200).json({mensaje: "Get tareas"})
})

const createTareas = asyncHandler( async (req,res) => {
    //console.log(req.body)
    if(!req.body.descripcion){
        res.status(400)
        throw new Error('Por favor escriba una descripcion')
    }

    res.status(201).json({mensaje: "Post tareas" })
})

const updateTareas = asyncHandler( async (req,res) => {
    res.status(200).json({mensaje: `modificar la tarea con id ${req.params.id}`})
})

const deleteTareas = asyncHandler( async (req,res) => {
    res.status(200).json({id: req.params.id})
})


module.exports = {
    getTareas,
    createTareas,
    updateTareas,
    deleteTareas
}