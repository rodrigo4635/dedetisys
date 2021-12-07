import { CLIENTS_ADD_EDIT_CHANGE_ERROR, CLIENTS_ADD_EDIT_CHANGE_VALUE, CLIENTS_CHANGE_VALUE, CLIENTS_ADD_EDIT_CHANGE_CHILD_VALUE, CLIENTS_ADD_EDIT_SET, CLIENTS_ADD_EDIT_CLEAN, SNACKBAR_SHOW } from "constants/actionTypes"
import { INPUTS } from "constants/clients"
import { API_URL, SNACKBAR_VARIANTS } from "constants/general"
import { LENGTH } from "constants/inputs"
import { getReducer } from "utils"

export function openDetails(client, editable) {
    return { type: CLIENTS_ADD_EDIT_SET, payload: { visible: true, creating: false, editable, inputs: client, loading: false, error: [] } }
}

export function changeValue(id, value, parent) {
    return { type: parent ? CLIENTS_ADD_EDIT_CHANGE_CHILD_VALUE : CLIENTS_ADD_EDIT_CHANGE_VALUE, parent, property: id, payload: value }
}

export function changeInput(id, event) {
    return dispatch => {
        const formattedId = id.split('_')[0]
        const inputData = INPUTS.find(el => el.id === id)
        const value = event.target.value
        let error = false
    
        if (inputData.props?.required && !inputData.elements && value.length < LENGTH[formattedId].min) {
            error = true
        }

        dispatch({ type: CLIENTS_ADD_EDIT_CHANGE_ERROR, add: error, payload: id })
        dispatch(changeValue(id, value, 'inputs'))
    }
}

export function saveClient(state, clients) {
    return dispatch => {
        const { creating, inputs } = state
        const valid = validateInputs(inputs, dispatch)
        
        if (valid) {
            dispatch(changeValue('loading', true))
            
            const userToken = getReducer('app', 'user', 'token')
            const urlFetch = `${ API_URL }/clientes${ creating ? '' : `/${ inputs.id }` }` 
            
            const setData = {
                ...JSON.parse(JSON.stringify(inputs)),
                type: parseInt(inputs.type, 10),
                number: parseInt(inputs.number, 10),
                id: undefined
            }

            fetch(urlFetch, {
                method: creating ? 'POST' : 'PUT',
                headers: {
                    "Authorization": `Bearer ${ userToken }`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(setData)
            })
            .then(res => res.json())
            .then(json => {
                const update = creating ? [...clients, json] : clients.map(el => el.id === inputs.id ? { ...el, ...setData, id: el.id } : el)
                dispatch({ type: CLIENTS_CHANGE_VALUE, property: 'data', payload: update })
                dispatch({ type: CLIENTS_ADD_EDIT_CLEAN })
                dispatch({ type: SNACKBAR_SHOW, message: 'Cadastro salvo' })
            })
            .catch(error => {
                console.error(error)
                dispatch(changeValue('loading', false))
                dispatch({ type: SNACKBAR_SHOW, message: 'Ocorreu um erro ao salvar o cliente', variant: SNACKBAR_VARIANTS.error })
            })
        }
    }
}

function validateInputs(inputs, dispatch) {
    let valid = true

    INPUTS.forEach(input => {
        if (!input.elements && !inputs[input.id]) {
            valid = false
            dispatch({ type: CLIENTS_ADD_EDIT_CHANGE_ERROR, add: true, payload: input.id })
        }
    })

    return valid
}