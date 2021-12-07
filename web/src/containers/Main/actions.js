import { MAIN_CHANGE_VALUE, SNACKBAR_SHOW } from "constants/actionTypes"
import { API_URL, SNACKBAR_VARIANTS } from "constants/general"
import { getReducer } from "utils"

export function changeValue(id, value) {
    return { type: MAIN_CHANGE_VALUE, property: id, payload: value }
}

export function loadData() {
    return dispatch => {
        const userToken = getReducer('app', 'user', 'token')
        console.log('Load services')

        fetch(`${ API_URL }/servicos/semana`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${ userToken }`
            }
        })
        .then(res => res.json())
        .then(json => {
            console.log('Load services week response: ', json)
            dispatch(changeValue('recents', json))
        })
        .catch(error => {
            console.error('Error on load services week: ', error)
            dispatch(changeValue('recents', []))
            dispatch({ type: SNACKBAR_SHOW, message: 'Ocorreu um erro ao carregar os serviços da semana', variant: SNACKBAR_VARIANTS.error })
        })

        fetch(`${ API_URL }/servicos/dashboard`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${ userToken }`
            }
        })
        .then(res => res.json())
        .then(json => {
            console.log('Load services dashboard: ', json)
            dispatch(changeValue('weekDo', json.fazerSemana))
            dispatch(changeValue('weekDone', json.feitosSemana))
            dispatch(changeValue('monthlyAmount', json.valoresMes))
        })
        .catch(error => {
            console.error('Error on load services dashboard: ', error)
            dispatch({ type: SNACKBAR_SHOW, message: 'Ocorreu um erro ao carregar a dashboard', variant: SNACKBAR_VARIANTS.error })
        })
    }
}