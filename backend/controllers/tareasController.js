const getTareas = (req,res) => {
    res.status(200).json({mensaje: "Get tareas"})
}

const createTareas = (req,res) => {
    res.status(201).json({mensaje: "Post tareas" })
}

const updateTareas = (req,res) => {
    res.status(200).json({mensaje: `modificar la tarea con id ${req.params.id}`})
}

const deleteTareas = (req,res) => {
    res.status(200).json({id: req.params.id})
}


module.exports = {
    getTareas,
    createTareas,
    updateTareas,
    deleteTareas
}