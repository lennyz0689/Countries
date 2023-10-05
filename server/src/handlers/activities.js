const createActivities = (req, res) => {
    res.status(201).send('NIY: crear una actividad turistica')
}

const showActivities = (req, res) => {
    res.status(201).send('NIY: muestra las actividades turisticas')
}

module.exports = {
    createActivities,
    showActivities
}