const { Activity } = require('../db')

const createActivitiesController = async (nombre, dificultad, duracion, temporada, country) => {
    const newActivity = await Activity.create({ nombre, dificultad, duracion, temporada })
    newActivity.addCountry(country)
    return newActivity
}

const showActivitiesController = async () => {
    return await Activity.findAll()
}

module.exports = {
    createActivitiesController,
    showActivitiesController
}