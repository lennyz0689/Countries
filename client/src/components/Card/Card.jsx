import Style from './Card.module.css'

const Card = ({nombre, bandera, continente}) => {

    return(
        <div className={Style.container}>
            <div className={Style.card}>
            <h1>{nombre}</h1>
            <img className={Style.bandera} src={bandera} alt={nombre}/>
            <p>{continente}</p>
            </div>
        </div>
    )
}

export default Card