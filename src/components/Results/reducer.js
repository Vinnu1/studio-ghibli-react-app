import { DATA_RECIEVED, ADD } from '../../actions/index'

const initialState = () => {
    return {
        favourites: []
    }
}
const ResultPage = (state = initialState(), action) => {
    switch (action.type) {
        case DATA_RECIEVED:
            return { ...state, details: action.details }
        case ADD: {
            let favourites = []
            if (state.favourites.length > 0) {
                favourites = state.favourites
                favourites.push(action.favourites)
            }
            else {
                favourites.push(action.favourites)
            }
            return {
                ...state, favourites: favourites
            }
        }
        default:
            return state
    }
}
export default ResultPage