import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import useStyles from './useStyles'

const SplashScreen = () => {
    const classes = useStyles()
    
    return (
        <Dialog disableBackdropClick disableEscapeKeyDown open fullScreen>
            <div className={ classes.background }>
                <img alt="Logo" height='70vh' />
            </div>
        </Dialog>
    )
}
export default SplashScreen