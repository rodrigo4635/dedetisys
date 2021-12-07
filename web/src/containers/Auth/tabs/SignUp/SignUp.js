import React from 'react'
import Button from '@material-ui/core/Button'
import { changeValue, signUp } from './actions'
import { useSelector, useDispatch } from 'react-redux' 
import { DEF_PROPS } from 'constants/inputs'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import useStyles from './useStyles'

const SignUpTab = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { loading, name, nameError, email, emailError, password, confirmPassword, passwordError, type } = useSelector(state => state.auth.signUp)
    const btnDisabled = Boolean(loading || !name || nameError || !email || emailError || !password || passwordError)

    const handleChangeInput = id => event => {
        dispatch(changeValue(id, event.target.value, password))
    }
    
    const handleSignUp = () => {
        dispatch(signUp(name, nameError, email, emailError, password, confirmPassword, passwordError, type))
    }

    return (
        <div className={ classes.background }>
            <Grid container spacing={ 2 }>
                <Grid item xs={ 12 }>
                    <TextField { ...DEF_PROPS.name } value={ name } onChange={ handleChangeInput('name') } helperText={ nameError }
                        error={ Boolean(nameError) } disabled={ loading } autoFocus
                    />
                </Grid>
                <Grid item xs={ 12 }>
                    <TextField { ...DEF_PROPS.email } value={ email } onChange={ handleChangeInput('email') }
                        helperText={ emailError } error={ Boolean(emailError) } autoFocus={ false } disabled={ loading }
                    />
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <TextField { ...DEF_PROPS.password } value={ password } onChange={ handleChangeInput('password') }
                        helperText={ passwordError } error={ Boolean(passwordError) } disabled={ loading }
                    /> 
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <TextField { ...DEF_PROPS.password } value={ confirmPassword } onChange={ handleChangeInput('confirmPassword') }
                        error={ Boolean(passwordError) } helperText={ passwordError } label="Confirmar senha" disabled={ loading }
                    />
                </Grid>
            </Grid>
            <Button disabled={ btnDisabled } fullWidth variant="contained" size='large' color="primary" onClick={ handleSignUp }
                disableElevation className={ classes.button }
            >
                { loading ? 'Carregando' : 'Cadastrar' }
            </Button>
        </div>
    )
}

export default SignUpTab