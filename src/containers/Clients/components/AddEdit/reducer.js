import { CLIENTS_ADD_EDIT_CHANGE_VALUE, CLIENTS_ADD_EDIT_SET } from 'constants/actionTypes'

const INITIAL_STATE = {
    visible: false,
    editable: true,
    creating: true,
    error: [],
    name: '',
    type: 0,
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

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CLIENTS_ADD_EDIT_CHANGE_VALUE:
            return {
                ...state,
                [action.property]: action.payload
            }
        case CLIENTS_ADD_EDIT_SET:
            return {
                ...state,
                ...action.payload
            }
        default: 
            return state
    }
}

export default reducer