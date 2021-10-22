import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SNACKBAR_CHANGE_VALUE } from 'constants/actionTypes'
import MuiSnackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Snackbar = () =>  {
    const { visible, message, variant } = useSelector(state => state.snackbar)
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch({ type: SNACKBAR_CHANGE_VALUE, id: 'visible', payload: false })
    }

    return (
        <MuiSnackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={ visible } autoHideDuration={ 5000 } onClose={ handleClose }>
            <MuiAlert onClose={ handleClose } severity={ variant } elevation={ 6 }>
                { message }
            </MuiAlert>
        </MuiSnackbar>
    )
}

export default Snackbar