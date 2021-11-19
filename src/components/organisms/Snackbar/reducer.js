import { SNACKBAR_SHOW, SNACKBAR_CHANGE_VALUE } from 'constants/actionTypes'
import { SNACKBAR_VARIANTS } from 'constants/general'

const INITIAL_STATE = {
    visible: false,
    message: '',
    variant: ''
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SNACKBAR_SHOW: {
            return {
                ...state,
                visible: true,
                message: action.message,
                variant: action.variant || SNACKBAR_VARIANTS.success
            }
        }
        case SNACKBAR_CHANGE_VALUE:
            return {
                ...state,
                [action.property]: action.payload
            }
        default: 
            return state
    }
}

export default reducer