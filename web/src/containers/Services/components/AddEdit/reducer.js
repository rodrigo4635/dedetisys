import { SERVICES_ADD_EDIT_CHANGE_VALUE, SERVICES_ADD_EDIT_SET, SERVICES_ADD_EDIT_CHANGE_ERROR, SERVICES_ADD_EDIT_CHANGE_CHILD_VALUE, SERVICES_ADD_EDIT_CLEAN } from 'constants/actionTypes'

const INITIAL_STATE = {
    visible: false, // If dialog is visible
    editable: true, // If the inputs are editable
    creating: true, // If user is creating a register or editing one,
    loading: false,
    error: [],
    inputs: {
        id: '',
        description: '',
        contactName: '',
        price: '',
        amountPaid: '',
        duration: '',
        done: '0',
        observations: '',
        date: '',
        expirationDate: ''
    }
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SERVICES_ADD_EDIT_CHANGE_VALUE:
            return {
                ...state,
                [action.property]: action.payload
            }
        case SERVICES_ADD_EDIT_CHANGE_CHILD_VALUE:
            return {
                ...state,
                [action.parent]: {
                    ...state[action.parent],
                    [action.property]: action.payload
                }
            }
        case SERVICES_ADD_EDIT_CHANGE_ERROR:
            return {
                ...state,
                error: action.add ? [action.payload, ...state.error] : state.error.filter(el => el !== action.payload)
            }
        case SERVICES_ADD_EDIT_SET:
            return {
                ...state,
                ...action.payload
            }
        case SERVICES_ADD_EDIT_CLEAN:
            return INITIAL_STATE
        default: 
            return state
    }
}

export default reducer