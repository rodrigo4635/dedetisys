import { SIGN_IN_CHANGE_VALUE } from 'constants/actionTypes'
import { validateInput } from 'utils'

/**
 * Change a value in the reducer, validating it before dispatch
 * 
 * ---
 * 
 * @param { string } id - The new value
 * @param { * } value - Sign In reducer object property to change
 * @returns { object } The dispatch content
 */
 export function changeInput(id, value) {
    switch(id) {
        case 'email': return { type: SIGN_IN_CHANGE_VALUE, property: id, payload: value, error: validateInput.email(value) }
        case 'password': return { type: SIGN_IN_CHANGE_VALUE, property: id, payload: value, error: validateInput.password(value) }
        default: return { type: SIGN_IN_CHANGE_VALUE, property: id, payload: value, error: '' }
    }
}

/**
 * Validate the inputs and, if correct, try loging user
 * 
 * ---
 * 
 * @param { string } email
 * @param { string } emailError - If there is an error already identified in the input
 * @param {*} password 
 * @param {*} passwordError - If there is an error already identified in the input
 */
 export function signIn(email, emailError, password, passwordError) {
    return dispatch => {
        const isValid = validateInput.sign(dispatch, true, email, password)
        
        if (!Boolean(emailError) && !Boolean(passwordError) && isValid) {
            //dispatch({ type: SIGN_IN_CHANGE_VALUE, payload: true, property: 'loading' })

            //Make login
        }
    }
}