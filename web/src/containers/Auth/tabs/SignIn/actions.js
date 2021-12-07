import { APP_CHANGE_VALUE, SIGN_IN_CHANGE_VALUE, SNACKBAR_SHOW } from 'constants/actionTypes'
import { API_URL, SNACKBAR_VARIANTS } from 'constants/general'
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
        
        if (Boolean(emailError) || Boolean(passwordError) || !isValid) {
            return
        }

        dispatch({ type: SIGN_IN_CHANGE_VALUE, property: 'loading', payload: true })

        fetch(`${ API_URL }/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            dispatch({ type: SIGN_IN_CHANGE_VALUE, property: 'loading', payload: false })

            if (json.success) {
                dispatch({ type: APP_CHANGE_VALUE, property: 'user', payload: { ...json.usuario, token: json.token } })
                localStorage.setItem('@dedetisys/auth', JSON.stringify(json))
            } else throw new Error(json.error)
        })
        .catch(error => {
            console.error(error)
            dispatch({ type: SIGN_IN_CHANGE_VALUE, property: 'loading', payload: false })
            dispatch({ type: SNACKBAR_SHOW, message: 'Ocorreu um erro ao fazer login: ' + error, variant: SNACKBAR_VARIANTS.error })
        })
    }
}