const { countriesShowController } = require("../controllers/countries")

const showCountries = async (req, res) => {
    const { name } = req.query
    try {
        if (name === undefined) {
            const prueba = await countriesShowController()
            res.status(200).json(prueba)
        } else {
            res.status(200).send(`NIY: countrie con el nombre ${name}`)
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}


const detailCountrie = (req, res) => {
    const { idPais } = req.params
    res.status(200).send(`NIY: detalle del countrie ${idPais}`)
}

module.exports = {
    showCountries,
    detailCountrie
}