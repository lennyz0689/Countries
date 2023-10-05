const showCountries = (req, res) => {
    const { name } = req.query
    if (name === undefined) {
        res.status(200).send('NIY: mostrar todos los countries')
    } else {
        res.status(200).send(`NIY: countrie con el nombre ${name}`)
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