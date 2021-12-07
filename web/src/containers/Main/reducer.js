import { MAIN_CHANGE_VALUE } from 'constants/actionTypes'

const INITIAL_STATE = {
    recents: null,
    weekDo: -1,
    weekDone: -1,
    monthlyAmount: -1 
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case MAIN_CHANGE_VALUE:
            return {
                ...state,
                [action.property]: action.payload
            }
        default: 
            return state
    }
}

export default reducer