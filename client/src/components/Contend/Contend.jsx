import { useSelector } from 'react-redux'
import Info from '../Info/Info'

const Contend = () => {

    const countriesById = useSelector(state => state.countrieById)

    return (
        <div>
            {countriesById.map(pais => {
                return <Info
                id={pais.id}
                nombre={pais.nombre}
                bandera={pais.bandera}
                continente={pais.continente}
                capital={pais.capital}
                poblacion={pais.poblacion}
                activities={pais.activities}
            />
            })}
            
        </div>
    )
}

export default Contend