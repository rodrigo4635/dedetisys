import React, { useEffect } from 'react'
import useStyles from './useStyles'
import { useDispatch, useSelector } from 'react-redux'
import { List } from './components'
import { loadData } from './actions'
import { Grid, Paper, Typography } from '@material-ui/core'

const Main = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { monthlyAmount, weekDone, weekDo } = useSelector(state => state.main)

    useEffect(() => {
        dispatch(loadData())
        // eslint-disable-next-line
    }, [])  

    return (
        <div className={ classes.background }>
            <Grid container spacing={ 2 } className={ classes.grid }>
                <Grid item xs={ 4 }>
                    <Paper variant="outlined" className={ classes.paper }>
                        <Typography style={{ opacity: .7 }}>Valores do mês</Typography>
                        <Typography variant='h5'>{ monthlyAmount >= 0 ? monthlyAmount : 'Carregando' }</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={ 4 }>
                    <Paper variant="outlined" className={ classes.paper }>
                        <Typography style={{ opacity: .7 }}>A fazer</Typography>
                        <Typography variant='h5'>{ weekDo >= 0 ? weekDo : 'Carregando' }</Typography>
                    </Paper>
                </Grid>   
                <Grid item xs={ 4 }>
                    <Paper variant="outlined" className={ classes.paper }>
                        <Typography style={{ opacity: .7 }}>Feitos na semana</Typography>
                        <Typography variant='h5'>{ weekDone >= 0 ? weekDone : 'Carregando' }</Typography>
                    </Paper>
                </Grid>
            </Grid>    
            <List/>
        </div>
    )
}

export default Main