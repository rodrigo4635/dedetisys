import { combineReducers } from 'redux'

import app from 'components/organisms/App/reducer'
import snackbar from 'components/atoms/Snackbar/reducer'

export default combineReducers({
    app, 
    snackbar
})