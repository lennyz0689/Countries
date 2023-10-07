const axios = require('axios')
const { Country } = require('../db')

const cleanApi = async () => {
    const api = (await axios.get(`http://localhost:5000/countries`)).data

    const database = api.map(Element=>({
        id: Element.cca3,
        nombre: Element.translations.spa.common,
        bandera: Element.flags.png,
        continente: Element.region,
        capital: Element.capital === undefined ? 'No tiene Capital' : Element.capital[0],
        poblacion: Element.population
    }))

    return await Country.bulkCreate(database)
}

const countriesShowController = async () => {
    return await Country.findAll()
}

module.exports = {
    cleanApi,
    countriesShowController
}