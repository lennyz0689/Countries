const { countriesShowController, countrieById, countriesShowControllerName } = require("../controllers/countries")

const showCountries = async (req, res) => {
    const { name } = req.query
    try {
        if (name === undefined) {
            const result = await countriesShowController()
            res.status(200).json(result)
        } else {
            const result = await countriesShowControllerName(name)
            res.status(200).json(result)
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}


const detailCountrie = async (req, res) => {
    const { idPais } = req.params
    try {
        const result = await countrieById(idPais)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    showCountries,
    detailCountrie
}