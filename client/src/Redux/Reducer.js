import { GET_COUNTRIES, GET_COUNTRIES_ID } from "./Actions"

const initialState = {
    allCountries: [],
    countrieById: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return { ...state, allCountries: action.payload }
        case GET_COUNTRIES_ID:
            return { ...state, countrieById: [action.payload] }
        default:
            return { ...state }
    }
}

export default rootReducer