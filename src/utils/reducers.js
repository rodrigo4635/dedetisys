import { combineReducers } from 'redux'

import app from 'components/organisms/App/reducer'
import snackbar from 'components/atoms/Snackbar/reducer'
import signIn from 'containers/Auth/tabs/SignIn/reducer'
import signUp from 'containers/Auth/tabs/SignUp/reducer'
import forgotPassword from 'containers/Auth/tabs/ForgotPassword/reducer'

export default combineReducers({
    app, 
    snackbar,
    auth: combineReducers({
        signIn,
        signUp,
        forgotPassword
    })
})