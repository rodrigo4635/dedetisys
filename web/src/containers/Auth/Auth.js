import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import { SignIn, SignUp } from './tabs'
import useStyles from './useStyles'
import { Tabs } from 'components/molecules'
import Typography from '@material-ui/core/Typography'

const AuthContainer = () => {
    const [tab, setTab] = useState(0)
    const classes = useStyles()

    return (
        <div className={ classes.root }>
            <Paper className={ classes.paper } elevation={ 0 }>
                <Typography align='center' variant='h4' className={ classes.logo }>Dedetisys</Typography>
                <div style={{ position: 'relative', height: '100%' }}>
                    <Tabs value={ tab } onChange={ val => setTab(val) } items={ ['Login', 'Cadastro'] }/>
                    <div className={ classes.tabsArea }>
                        { tab === 0 ? <SignIn/> : <SignUp/> }
                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default AuthContainer