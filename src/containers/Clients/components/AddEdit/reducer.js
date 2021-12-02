import { CLIENTS_ADD_EDIT_CHANGE_VALUE, CLIENTS_ADD_EDIT_SET, CLIENTS_ADD_EDIT_CHANGE_ERROR, CLIENTS_ADD_EDIT_CHANGE_CHILD_VALUE, CLIENTS_ADD_EDIT_CLEAN } from 'constants/actionTypes'

const INITIAL_STATE = {
    visible: false, // If dialog is visible
    editable: true, // If the inputs are editable
    creating: true, // If user is creating a register
    loading: false,
    error: [],
    inputs: {
        name: '',
        type: '0',
        taxvat: '',
        email: '',
        tel_1: '',
        tel_2: '',
        address: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        state: '',
        latitude: -28.928563,
        longitude: -49.675969
    }
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CLIENTS_ADD_EDIT_CHANGE_VALUE:
            return {
                ...state,
                [action.property]: action.payload
            }
        case CLIENTS_ADD_EDIT_CHANGE_CHILD_VALUE:
            return {
                ...state,
                [action.parent]: {
                    ...state[action.parent],
                    [action.property]: action.payload
                }
            }
        case CLIENTS_ADD_EDIT_CHANGE_ERROR:
            return {
                ...state,
                error: action.add ? [action.payload, ...state.error] : state.error.filter(el => el !== action.payload)
            }
        case CLIENTS_ADD_EDIT_SET:
            return {
                ...state,
                ...action.payload
            }
        case CLIENTS_ADD_EDIT_CLEAN:
            return INITIAL_STATE
        default: 
            return state
    }
}

export default reducer