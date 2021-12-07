import { combineReducers } from 'redux'

import app from 'components/organisms/App/reducer'
import snackbar from 'components/organisms/Snackbar/reducer'
import signIn from 'containers/Auth/tabs/SignIn/reducer'
import signUp from 'containers/Auth/tabs/SignUp/reducer'
import clientsMain from 'containers/Clients/reducer'
import clientsAddEdit from 'containers/Clients/components/AddEdit/reducer'
import servicesMain from 'containers/Services/reducer'
import servicesAddEdit from 'containers/Services/components/AddEdit/reducer'
import main from 'containers/Main/reducer'

export default combineReducers({
    app, 
    snackbar,
    main,
    auth: combineReducers({
        signIn,
        signUp
    }),
    clients: combineReducers({
        main: clientsMain,
        addEdit: clientsAddEdit
    }),
    services: combineReducers({
        main: servicesMain,
        addEdit: servicesAddEdit
    })
})