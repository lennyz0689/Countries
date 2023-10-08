const { createActivitiesController } = require('../controllers/activities')

const createActivities = async (req, res) => {
    try {
        const { nombre, dificultad, duracion, temporada, country } = req.body
        const newActivity = await createActivitiesController(nombre, dificultad, duracion, temporada, country)
        res.status(201).json(newActivity)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const showActivities = (req, res) => {
    res.status(201).send('NIY: muestra las actividades turisticas')
}

module.exports = {
    createActivities,
    showActivities
}