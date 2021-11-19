import { SIGN_UP_CHANGE_VALUE, SIGN_UP_CHANGE_CONFIRM_PASS, SIGN_UP_CLEAN } from 'constants/actionTypes'

const INITIAL_STATE = {
    loading: false,
    email: '',
    emailError: '',
    password: '',
    confirmPassword: '',
    passwordError: '',
    name: '',
    nameError: ''
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SIGN_UP_CHANGE_VALUE:
            return {
                ...state,
                [action.property]: action.payload,
                [`${ action.property }Error`]: action.error
            }
        case SIGN_UP_CHANGE_CONFIRM_PASS:
            return {
                ...state,
                confirmPassword: action.payload,
                passwordError: action.error
            }
        case SIGN_UP_CLEAN:
            return INITIAL_STATE
        default: 
            return state
    }
}

export default reducer