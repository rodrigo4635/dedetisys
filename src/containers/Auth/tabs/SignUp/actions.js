import { SIGN_UP_CHANGE_VALUE, SIGN_UP_CHANGE_CONFIRM_PASS, SIGN_UP_CLEAN, APP_CHANGE_VALUE } from 'constants/actionTypes'
import { validateInput } from 'utils'

/**
 * Change a value in the reducer, validating it before dispatch
 * 
 * ---
 * 
 * @param { * } value - New value to reducer
 * @param { string } id - Sign up reducer object property, like email or accountType
 * @param { string } password - When changing the password, this value is passed to verify that the user has entered the correct password twice
 * @returns { object } The dispatch content
 */
 export function changeValue(id, value, password) {
    switch(id) {
        case 'name': return { type: SIGN_UP_CHANGE_VALUE, property: id, payload: value, error: validateInput.name(value) }
        case 'email': return { type: SIGN_UP_CHANGE_VALUE, property: id, payload: value, error: validateInput.email(value) }
        case 'password': return { type: SIGN_UP_CHANGE_VALUE, property: id, payload: value, error: validateInput.password(value) }
        case 'confirmPassword': return { type: SIGN_UP_CHANGE_CONFIRM_PASS, payload: value, error: password !== value ? 'As senhas não coincidem' : '' }
        default: return { type: SIGN_UP_CHANGE_VALUE, id, payload: value }
    }
}


/**
 * Validate inputs and, if all correct, creates the user account
 * 
 * ---
 * 
 * @param { object } data - Sign up reducer data
 */
export function signUp(name, nameError, email, emailError, password, confirmPassword, passwordError) {
    return dispatch => {
        const isValid = validateInput.sign(dispatch, false, email, password, name, confirmPassword)

        if (Boolean(nameError + emailError + passwordError) || !isValid) {
            return
        }

        dispatch({ type: SIGN_UP_CHANGE_VALUE, payload: true, property: 'loading' })

        setTimeout(() => {
            dispatch({ type: SIGN_UP_CLEAN })
            dispatch({ type: APP_CHANGE_VALUE, property: 'user', payload: { 
                uid: 'userID',
                name: 'João da silva'
            }})
        }, 1000)
    }
}