import React from 'react'

const Info = ({id, nombre, bandera, continente, capital, poblacion, activities}) => {
  return (
    <div>
      <h1>Este es el detail</h1>
        <p>Nombre :{id}</p>
        <p>{nombre}</p>
        <p>{bandera}</p>
        <p>{continente}</p>
        <p>{capital}</p>
        <p>{poblacion}</p>
        <p>{activities}</p>
    </div>
  )
}

export default Info