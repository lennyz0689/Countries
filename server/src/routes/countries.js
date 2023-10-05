const { Router } = require("express")
const { showCountries, detailCountrie } = require("../handlers/countries")

const countries = Router()

countries.get('/', showCountries)

countries.get('/:idPais', detailCountrie)

module.exports = { countries }