import { CLIENTS_ADD_EDIT_CHANGE_ERROR, CLIENTS_ADD_EDIT_CHANGE_VALUE, CLIENTS_CHANGE_VALUE, CLIENTS_ADD_EDIT_CHANGE_CHILD_VALUE, CLIENTS_ADD_EDIT_SET, CLIENTS_ADD_EDIT_CLEAN, SNACKBAR_SHOW } from "constants/actionTypes"
import { INPUTS } from "constants/clients"
import { LENGTH } from "constants/inputs"
import dayjs from "dayjs"

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
        const valid = validateInputs(state.inputs, dispatch)

        if (valid) {
            dispatch(changeValue('loading', true))

            setTimeout(() => {
                const setData = {
                    ...state.inputs,
                    type: parseInt(state.inputs.type, 10),
                    id: state.creating ? dayjs().unix() : state.inputs.id
                }

                dispatch({ type: CLIENTS_CHANGE_VALUE, property: 'data', payload: state.creating ? [...clients, setData] : clients.map(el => el.id === state.inputs.id ? setData : el) })
                dispatch({ type: CLIENTS_ADD_EDIT_CLEAN })
                dispatch({ type: SNACKBAR_SHOW, message: 'Cadastro salvo' })
            }, 2000)
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