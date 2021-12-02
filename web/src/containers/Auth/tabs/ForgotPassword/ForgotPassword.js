import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Grow from '@material-ui/core/Grow'
import useStyles from './useStyles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { sendEmail, changeEmail } from './actions'
import { FORGOT_PASSWORD_CHANGE_VALUE } from 'constants/actionTypes'
import { DEF_PROPS } from 'constants/inputs'

const ForgotPasswordTab = () => {
    const { visible, email, emailError, loading } = useSelector(state => state.auth.forgotPassword)
    const classes = useStyles()
    const dispatch = useDispatch()

    const handleChangeInput = event => {
        dispatch(changeEmail(event.target.value))
    }

    const handleKeyPress = ({ key }) => {
        if (key === 'Enter') handleSend()
    }
    
    const handleSend = () => {
        dispatch(sendEmail(email, emailError))
    }

    const handleBack = () => {
        dispatch({ type: FORGOT_PASSWORD_CHANGE_VALUE, payload: false, property: 'visible' })
    }

    return (
        <div style={ visible ? {} : { pointerEvents: 'none' }} className={ classes.background }>
            <Grow in={ visible } { ...(visible ? { timeout: 300 } : {}) }>
                <div className={ classes.container }>
                    <Typography gutterBottom variant='h5' className={ classes.title }>
                        Não se preocupe
                    </Typography>
                    <Typography>
                        Digite o e-mail associado a sua conta, que iremos enviar uma mensagem com instruções de redefinição de senha
                    </Typography>
                    <div className={ classes.div }/>
                    <TextField { ...DEF_PROPS.email } value={ email } onChange={ handleChangeInput } error={ Boolean(emailError) } 
                        onKeyPress={ handleKeyPress } helperText={ emailError } disabled={ loading }
                    />
                    <div className={ classes.buttons }>
                        <Button disabled={ loading } size='large' color="primary" onClick={ handleBack } >
                            Voltar
                        </Button>
                        <Button disabled={ loading || Boolean(emailError) } size='large' variant="contained" disableElevation color="primary" onClick={ handleSend }>
                            { loading ? 'Carregando' : 'Enviar' }
                        </Button>
                    </div>
                </div>
            </Grow>
        </div>
    )
}
export default ForgotPasswordTab