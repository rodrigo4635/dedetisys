import { APP_CHANGE_VALUE, SNACKBAR_SHOW } from "constants/actionTypes";

export function loadUser() {
    return dispatch => {
        const localAuth = localStorage.getItem('@dedetisys/auth')
        if (localAuth) {
            const data = JSON.parse(localAuth)
            dispatch({ type: APP_CHANGE_VALUE, property: 'user', payload: { ...data.usuario, token: data.token } })
            dispatch({ type: SNACKBAR_SHOW, message: 'Autenticado com sucesso' })
        }
    }
}

export function signOut() {
    localStorage.removeItem('@dedetisys/auth')
    return { type: APP_CHANGE_VALUE, property: 'user', payload: {} }
}