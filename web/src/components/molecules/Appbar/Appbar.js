import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import useStyles from './useStyles'
import { signOut } from 'components/organisms/App/actions'
import { useDispatch } from 'react-redux'
import { ROUTES } from 'constants/general'
import { Link } from 'react-router-dom'
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded'

const Appbar = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const handleSignOut = () => {
        dispatch(signOut())
    }

    return (
        <div className={ classes.root }>
            <AppBar position="fixed" className={ classes.background }>
                <Toolbar>
                    <Link to='/' className={ classes.link }>
                        <Typography variant="h5" className={ classes.logo }>
                            Dedetisys
                        </Typography>
                    </Link>
                    <div className={ classes.buttons }>
                        { ROUTES.map(route => (
                            <Link key={ route.path } to={ route.path } className={ classes.link }>
                                <Button>{ route.name }</Button>
                            </Link>
                        ))}
                    </div>
                    <Button onClick={ handleSignOut } endIcon={ <ExitToAppRoundedIcon/> }>Sair</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Appbar