const { createActivitiesController, showActivitiesController } = require('../controllers/activities')

const createActivities = async (req, res) => {
    try {
        const { nombre, dificultad, duracion, temporada, country } = req.body
        const newActivity = await createActivitiesController(nombre, dificultad, duracion, temporada, country)
        res.status(201).json(newActivity)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const showActivities = async (req, res) => {
    try {
        const result = await showActivitiesController()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createActivities,
    showActivities
}