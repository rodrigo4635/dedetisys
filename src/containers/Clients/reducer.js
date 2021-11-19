import { CLIENTS_CHANGE_VALUE } from 'constants/actionTypes'

const INITIAL_STATE = {
    data: null,
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CLIENTS_CHANGE_VALUE:
            return {
                ...state,
                [action.property]: action.payload
            }
        default: 
            return state
    }
}

export default reducer