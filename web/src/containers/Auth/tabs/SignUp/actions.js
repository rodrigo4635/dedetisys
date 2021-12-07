import { SIGN_UP_CHANGE_VALUE, SIGN_UP_CHANGE_CONFIRM_PASS, SNACKBAR_SHOW } from 'constants/actionTypes'
import { API_URL, SNACKBAR_VARIANTS } from 'constants/general'
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
export function signUp(name, nameError, email, emailError, password, confirmPassword, passwordError, type) {
    return dispatch => {
        const isValid = validateInput.sign(dispatch, false, email, password, name, confirmPassword)

        if (Boolean(nameError + emailError + passwordError) || !isValid) {
            return
        }

        dispatch({ type: SIGN_UP_CHANGE_VALUE, payload: true, property: 'loading' })

        fetch(`${ API_URL }/usuarios`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password, name, type })
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            dispatch({ type: SIGN_UP_CHANGE_VALUE, payload: false, property: 'loading' })
            dispatch({ type: SNACKBAR_SHOW, message: 'Usuário cadastrado com sucesso' })
        })
        .catch(error => {
            console.error(error)
            dispatch({ type: SIGN_UP_CHANGE_VALUE, payload: false, property: 'loading' })
            dispatch({ type: SNACKBAR_SHOW, message: 'Ocorreu um erro ao se cadastrar', variant: SNACKBAR_VARIANTS.error })
        })
    }
}