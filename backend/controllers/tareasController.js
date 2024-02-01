// todas las funciones que se encargaran de interactuar con la base de datos
const asyncHandler = require('express-async-handler') //para que funcione hay que envolver todas las funciones
const Tarea = require('../models/tareasModels')


const getTareas = asyncHandler( async (req,res) => {

    const Tareas = await Tarea.find()
    res.status(200).json(Tareas)
})

const createTareas = asyncHandler( async (req,res) => {
    //console.log(req.body)
    if(!req.body.descripcion){
        res.status(400)
        throw new Error('Por favor escriba una descripcion')
    }

    const Tareas = await Tarea.create({
        descripcion: req.body.descripcion
    })  
    res.status(201).json(Tareas)
})

const updateTareas = asyncHandler( async (req,res) => {
    const tarea = await Tarea.findById(req.params.id) //verifico que la tarea existe

    if(!tarea) {
        res.status(400)
        throw new Error('esa tarea no existe')
    }
    const tareaUpdated = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(tareaUpdated)
})


const deleteTareas = asyncHandler( async (req,res) => {
    const tarea = await Tarea.findById(req.params.id) //verifico que la tarea existe

    if(!tarea) {
        res.status(400)
        throw new Error('esa tarea no existe')
    }
    await Tarea.deleteOne(tarea)
    res.status(200).json({id: req.params.id})
})


module.exports = {
    getTareas,
    createTareas,
    updateTareas,
    deleteTareas
}