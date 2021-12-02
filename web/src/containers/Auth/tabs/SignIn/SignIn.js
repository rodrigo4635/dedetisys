import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { changeInput, signIn } from './actions'
import { useSelector, useDispatch } from 'react-redux' 
import { FORGOT_PASSWORD_CHANGE_VALUE } from 'constants/actionTypes'
import { DEF_PROPS } from 'constants/inputs'
import useStyles from './useStyles'

const SignInTab = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { email, emailError, loading, password, passwordError } = useSelector(state => state.auth.signIn)
    const btnDisabled = loading || !email || emailError || !password || passwordError

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            handleSignIn()
        }
    }

    const handleChangeValue = id => event => {
        dispatch(changeInput(id, event.target.value.replace(/ /g, '')))
    }

    const handleSignIn = () => {
        dispatch(signIn(email, emailError, password, passwordError))
    }

    const handleForgotPass = () => {
        dispatch({ type: FORGOT_PASSWORD_CHANGE_VALUE, payload: true, property: 'visible' })
    }

    return (
        <div>
            <TextField { ...DEF_PROPS.email } margin='normal' value={ email } onChange={ handleChangeValue('email') } error={ Boolean(emailError) }
                onKeyPress={ handleKeyPress } helperText={ emailError } disabled={ loading }
            />
            <TextField { ...DEF_PROPS.password } margin='normal' value={ password } onChange={ handleChangeValue('password') }
                onKeyPress={ handleKeyPress } helperText={ passwordError } error={ Boolean(passwordError) } disabled={ loading }
            />
            <Button disabled={ btnDisabled } fullWidth variant="contained" size='large' color="primary"
                onClick={ handleSignIn } disableElevation className={ classes.button }
            >
                { loading ? 'Carregando' : 'Entrar' }
            </Button>
            <Button size='small' onClick={ handleForgotPass } color='primary'>
                Esqueceu a senha?
            </Button>
        </div>
    )
}

export default SignInTab