

const initialState = {
    cities:[],
    extra:[],
    filterCities:[],
    city: {},
    
}

const citiesReducer = (state = initialState, action)=>{

    switch(action.type){
        case 'fetch':
            return {
                ...state,
                cities: action.payload,
                filterCities: action.payload,
            }
        case 'fetchOne':
            return {
                ...state,
                city: action.payload,
                
            }
        case 'delete':
            return {
                ...state,
                cities: action.payload
            }
        case 'chargeCities':
            let cities= [...state.cities]
            cities.push(action.payload)
            return{
                ...state,
                cities,
                extra: [...cities]
            }
        case 'filtro':
            const filtrado = action.payload.cities.filter((city => city.name.toLowerCase().startsWith(action.payload.value.toLowerCase().trim())))

            return {
                ...state,
                filterCities: filtrado
            }
        default:
            return state
    }
}
export default citiesReducer;
