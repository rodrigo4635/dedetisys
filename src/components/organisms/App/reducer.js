import { APP_CHANGE_VALUE } from 'constants/actionTypes'

const INITIAL_STATE = {
    user: null // if it is null, the system is loading, if it is an empty object, the user is not logged in
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case APP_CHANGE_VALUE:
            return { 
                ...state,
                [action.property]: action.payload
            }
        default: 
            return state
    }
}

export default reducer