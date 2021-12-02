import { FORGOT_PASSWORD_CHANGE_VALUE, FORGOT_PASSWORD_CLEAN } from 'constants/actionTypes'

const INITIAL_STATE = {
    visible: false,
    email: '',
    emailError: '',
    loading: false,
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FORGOT_PASSWORD_CHANGE_VALUE: 
            return {
                ...state,
                [action.property]: action.payload,
                [`${ action.property }Error`]: action.error
            }
        case FORGOT_PASSWORD_CLEAN:
            return INITIAL_STATE
        default: 
            return state
    }
}

export default reducer