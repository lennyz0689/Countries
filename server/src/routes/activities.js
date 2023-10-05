const { Router } = require("express")
const { createActivities, showActivities } = require("../handlers/activities")

const activities = Router()

activities.post('/', createActivities)

activities.get('/', showActivities)

module.exports = { activities }