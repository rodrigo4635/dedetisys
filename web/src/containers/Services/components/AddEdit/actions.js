import {
    SERVICES_ADD_EDIT_CHANGE_ERROR, SERVICES_ADD_EDIT_CHANGE_VALUE, SERVICES_CHANGE_VALUE, SERVICES_ADD_EDIT_CHANGE_CHILD_VALUE, SERVICES_ADD_EDIT_SET,
    SERVICES_ADD_EDIT_CLEAN, SNACKBAR_SHOW
} from "constants/actionTypes"
import { INPUTS } from "constants/services"
import { API_URL, SNACKBAR_VARIANTS } from "constants/general"
import { LENGTH } from "constants/inputs"
import { getReducer } from "utils"
import dayjs from "dayjs"

export function openDetails(service, editable) {
    const formatted = {
        ...service,
        date: dayjs(service.date).format('YYYY-MM-DD'),
        expirationDate: dayjs(service.expirationDate).format('YYYY-MM-DD'),
        done: String(service.done),
        price: String(service.price),
        duration: String(service.duration),
        amountPaid: String(service.amountPaid),
    }
    return { type: SERVICES_ADD_EDIT_SET, payload: { visible: true, creating: false, editable, inputs: formatted, loading: false, error: [] } }
}

export function changeValue(id, value, parent) {
    return { type: parent ? SERVICES_ADD_EDIT_CHANGE_CHILD_VALUE : SERVICES_ADD_EDIT_CHANGE_VALUE, parent, property: id, payload: value }
}

export function changeInput(id, event) {
    return dispatch => {
        const formattedId = id.split('_')[0]
        const inputData = INPUTS.find(el => el.id === id)
        const value = event.target.value
        let error = false
    
        if (inputData.props?.required && !inputData.elements && value.length < (LENGTH[formattedId]?.min || 1 )) {
            error = true
        }

        dispatch({ type: SERVICES_ADD_EDIT_CHANGE_ERROR, add: error, payload: id })
        dispatch(changeValue(id, value, 'inputs'))
    }
}

export function saveService(state, services) {
    return dispatch => {
        const { creating, inputs } = state
        const valid = validateInputs(inputs, dispatch)
        
        if (valid) {
            dispatch(changeValue('loading', true))
            
            const userToken = getReducer('app', 'user', 'token')
            const urlFetch = `${ API_URL }/servicos${ creating ? '' : `/${ inputs.id }` }` 

            const setData = {
                ...JSON.parse(JSON.stringify(inputs)),
                done: parseInt(inputs.done, 10),
                price: parseFloat(inputs.price.replace(/\./g, '').replace(',', '.')),
                duration: parseFloat(inputs.duration.replace(/\./g, '').replace(',', '.')),
                amountPaid: parseFloat(inputs.amountPaid.replace(/\./g, '').replace(',', '.')),
                date: dayjs(inputs.date).format('YYYY-MM-DD HH:mm'),
                expirationDate: dayjs(inputs.expirationDate).format('YYYY-MM-DD HH:mm'),
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
                console.log(json)
                const update = creating ? [...services, json] : services.map(el => el.id === inputs.id ? { ...el, ...setData, id: el.id } : el)
                dispatch({ type: SERVICES_CHANGE_VALUE, property: 'data', payload: update })
                dispatch({ type: SERVICES_ADD_EDIT_CLEAN })
                dispatch({ type: SNACKBAR_SHOW, message: 'Cadastro salvo' })
            })
            .catch(error => {
                console.error(error)
                dispatch(changeValue('loading', false))
                dispatch({ type: SNACKBAR_SHOW, message: 'Ocorreu um erro ao salvar o serviço', variant: SNACKBAR_VARIANTS.error })
            })
        }
    }
}

function validateInputs(inputs, dispatch) {
    let valid = true

    INPUTS.forEach(input => {
        if (!input.elements && !inputs[input.id]) {
            valid = false
            dispatch({ type: SERVICES_ADD_EDIT_CHANGE_ERROR, add: true, payload: input.id })
        }
    })

    return valid
}