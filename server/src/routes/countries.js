const { Router } = require("express")

const countries = Router()

countries.get('/', (req, res) => {
    res.status(200).send('NIY: mostrar todos los countries')
})

countries.get('/:idPais', (req, res) => {
    res.status(200).send('NIY: mostrar detalle del countrie con el id')
}
)

// countries.get('/name?=""',(req,res)=>{
//     res.status(200).send('NIY: ')
// })

module.exports = { countries }