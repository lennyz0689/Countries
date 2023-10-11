import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import Style from './Cardlist.module.css'
import { Link } from 'react-router-dom'

const Cardlist = () => {

    const countries = useSelector(state => state.allCountries)

    return (
        <div className={Style.container}>
            {countries.map(pais => {
                return <Link to={`/detail/${pais.id}`}> 
                <Card 
                key={pais.id}
                id={pais.id}
                nombre={pais.nombre}
                bandera={pais.bandera}
                continente={pais.continente}
                capital={pais.capital}
                poblacion={pais.poblacion}
                />
                </Link>
            })}
        </div>
    )
}


export default Cardlist