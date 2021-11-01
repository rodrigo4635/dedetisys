import { FORGOT_PASSWORD_CHANGE_VALUE } from 'constants/actionTypes'
import { LENGTH, REGEX } from 'constants/inputs'

/**
 * Validate and change email input
 * 
 * ---
 * 
 * @param { string } value - Email
 * @returns { object } Dispatch content
 */
 export function changeEmail(value) {
    const error = (value.length < LENGTH.email.min || !value.match(REGEX.email)) ? 'Preencha um e-mail válido' : ''

    return { type: FORGOT_PASSWORD_CHANGE_VALUE, property: 'email', payload: value, error }
}

/**
 * Validate the email input and, if correct, send a password reset email
 * 
 * ---
 * 
 * @param { string } email 
 * @param { string } emailError - If there is an error already identified in the input
 */
 export function sendEmail(email, emailError) {
    return dispatch => {
        if (Boolean(emailError)) return
        if (!email.replace(/ /g, '') === '') {
            dispatch({ type: FORGOT_PASSWORD_CHANGE_VALUE, property: 'email', payload: email, error: 'Não esqueça de preencher o e-mail' })
            return
        }

        /*
        dispatch({ type: FORGOT_PASSWORD_CHANGE_VALUE, property: 'loading', payload: true })

        .then(() => {
            dispatch({ type: SNACKBAR_SHOW, message: 'Mensagem enviada, verifique seu e-mail e a caixa de spam!' })
            dispatch({ type: FORGOT_PASSWORD_CLEAN })
        })
        .catch(error => {
            dispatch({ type: FORGOT_PASSWORD_CHANGE_VALUE, property: 'loading', payload: false })
            dispatch({ type: SNACKBAR_SHOW, message: `Não foi possível enviar o e-mail: ${ error.message }`, variant: 'error' })
        })*/
    }
}