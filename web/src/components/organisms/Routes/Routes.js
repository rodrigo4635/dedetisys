import React from 'react'
import { Appbar } from 'components/molecules'
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import useStyles from './useStyles'
import { ROUTES } from 'constants/general'

const Routes = () => {
    const classes = useStyles()

    return (
        <Router>
        <Appbar/>
            <Switch>
                { ROUTES.map(route => (
                    <Route key={ route.path } exact path={ route.path }>
                        <route.comp/>
                    </Route>
                ))}
                <Route>
                    <div className={ classes.notFound }>
                        <Typography variant='h5'>Ops 404</Typography>
                        <Typography>Página não encontrada</Typography>
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes