const axios = require('axios')
const { Country, Activity } = require('../db')

const cleanApi = async () => {
    const ejecuted = await Country.count() > 0 ? true : false  
    if (!ejecuted) {
        const api = (await axios.get(`http://localhost:5000/countries`)).data

        const database = api.map(Element => ({
            id: Element.cca3,
            nombre: Element.translations.spa.common,
            bandera: Element.flags.png,
            continente: Element.region,
            capital: Element.capital === undefined ? 'No tiene Capital' : Element.capital[0],
            poblacion: Element.population
        }))

        return await Country.bulkCreate(database)
    } else {
        return
    }
}

const countriesShowController = async () => {
    return await Country.findAll()
}

const countrieById = async (idPais) => {
    return await Country.findByPk(idPais, {
        include:{
            model: Activity
        }
    })
}

module.exports = {
    cleanApi,
    countriesShowController,
    countrieById
}