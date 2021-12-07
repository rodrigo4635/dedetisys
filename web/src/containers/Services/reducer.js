import { SERVICES_CHANGE_LOADING, SERVICES_CHANGE_VALUE } from 'constants/actionTypes'

const INITIAL_STATE = {
    loading: [],
    data: null,
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SERVICES_CHANGE_VALUE:
            return {
                ...state,
                [action.property]: action.payload
            }
        case SERVICES_CHANGE_LOADING:
            return {
                ...state,
                loading: action.add ? [action.payload, ...state.loading] : state.loading.filter(el => el !== action.payload)
            }
        default: 
            return state
    }
}

export default reducer