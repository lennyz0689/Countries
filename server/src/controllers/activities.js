const { Activity } = require('../db')

const createActivitiesController = async (nombre, dificultad, duracion, temporada) => {
    return await Activity.create({ nombre, dificultad, duracion, temporada })
}

module.exports = {
    createActivitiesController
}