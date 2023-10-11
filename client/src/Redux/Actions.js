import axios from 'axios'

export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_COUNTRIES_ID = 'GET_COUNTRIES_ID'

export const getCountries = () => {
    return async function(dispatch){
        const apiData = await axios.get('http://localhost:3001/countries')
        const countries = apiData.data
        dispatch({type: GET_COUNTRIES, payload: countries})
    }
}

export const getCountrieById = (id) =>{
    return async function(dispatch){
        const apiData = await axios.get(`http://localhost:3001/countries/${id}`)
        const country = apiData.data
        dispatch({type: GET_COUNTRIES_ID, payload: [country]})
    }
}