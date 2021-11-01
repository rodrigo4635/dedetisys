import { SIGN_IN_CHANGE_VALUE, SIGN_UP_CHANGE_VALUE } from "constants/actionTypes"
import { LENGTH, REGEX } from "constants/inputs"

/**
 * Validates a email input, checking its size and regex
 * 
 * ---
 * 
 * @param { string } value - Email
 * @param { boolean } acceptEmpty - If the input can be empty (Default to `false`)
 * @returns { string } Returns a error message, if exists
*/
function email(value, acceptEmpty) {
    const valTrim = value.replace(/ /g, '')

    if (acceptEmpty && value === '') return ''
    if (valTrim.length < LENGTH.email.min || !valTrim.match(REGEX.email)) return 'Preencha um e-mail válido'
    return ''
}

/**
 * Validates a phone input, checking its size and regex
 * 
 * ---
 * 
 * @param { string } value - Phone
 * @param { boolean } acceptEmpty - If the input can be empty (Default to `false`)
 * @returns { string } Returns a error message, if exists
*/
function phone(value, acceptEmpty) {
    if (!value) {
        return acceptEmpty ? '' : 'Preencha o telefone'
    }

    const valTrim = value.replace(/\D/g, '')

    if (acceptEmpty && valTrim === '') return ''
    if (valTrim.length < LENGTH.phone.min || !valTrim.match(REGEX.phone)) return 'Preencha um telefone válido'
    return ''
}

/**
 * Validate a name, check if it is less than 2 characters
 * 
 * ---
 * 
 * @param { string } value - Name
 * @param { boolean } acceptEmpty - If the input can be empty (Default to `false`)
 * @returns { string } Returns a error message, if exists
*/
function fullname(value, acceptEmpty) {
    if (acceptEmpty && value === '') return ''
    if (value.trim().length < LENGTH.fullname.min) return 'O nome é muito curto'
    return ''
}

/**
 * Validate a password, check if it is less than the password min length
 * 
 * ---
 * 
 * @param { string } value - Name
 * @returns { string } Returns a error message, if exists
*/
function password(value) {
    if (value.length < LENGTH.password.min) return 'A senha é muito curta'
    return ''
}

/**
 * Validates all sign in or sign up inputs
 * 
 * ---
 * 
 * @param { Dispatch } dispatch - Dispatch that changes the error messages in the login and registration reducers
 * @param { boolean } isLogin - If the authentication performed is login
 * @param { string } email - E-mail
 * @param { string } password - Password
 * @param { string } name - Full name
 * @param { string } confirmPass - Repeated Password
 * @param { ('pf'|'pj'|'employee') } accountType - Account Type 
 * @param { string } identity - CPF or CNPJ
 * @returns { boolean } Returns true if the values are correct
*/
function sign(dispatch, isLogin, email, password, fullname, confirmPass) {
    let isValid = true
    if (email.replace(/ /g, '') === '') {
        isValid = false
        dispatch ({ type: isLogin ? SIGN_IN_CHANGE_VALUE : SIGN_UP_CHANGE_VALUE, property: 'email', payload: email, error: 'Preencha o e-mail' })
    }
    if (password === '') {
        isValid = false
        dispatch ({ type: isLogin ? SIGN_IN_CHANGE_VALUE : SIGN_UP_CHANGE_VALUE, property: 'password', payload: password, error: 'Preencha a senha' })
    }
    if (!isLogin) {
        if (fullname.replace(/ /g, '') === '') {
            isValid = false
            dispatch ({ type: SIGN_UP_CHANGE_VALUE, payload: fullname, error: 'Preencha o nome', property: 'fullname' })
        }
        if (password !== confirmPass) {
            isValid = false
            dispatch ({ type: SIGN_UP_CHANGE_VALUE, payload: password, error: 'As senhas não coincidem', property: 'password' })
        }
    }
    return isValid
}

const validateInput = {
    phone,
    email,
    password,
    sign,
    fullname
}

export default validateInput