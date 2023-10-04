const { Router } = require("express")

const activities = Router()

activities.post('/', (req, res) => {
    res.status(201).send('NIY: crear una actividad turistica')
})

activities.get('/', (req, res) => {
    res.status(201).send('NIY: muestra las actividades turisticas')
})

module.exports = { activities }