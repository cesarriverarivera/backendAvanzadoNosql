//ESTO ES EL MANEJADOR DE ERRORES ( ES UNA FUNCION QUE OBTIENE LOS ERRORES Y DEVUELVE ALGO)
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

module.exports = {
    errorHandler
}