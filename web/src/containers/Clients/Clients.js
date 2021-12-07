import { Fab } from '@material-ui/core'
import React, { useEffect } from 'react'
import useStyles from './useStyles'
import AddIcon from '@material-ui/icons/Add'
import { useDispatch } from 'react-redux'
import { CLIENTS_ADD_EDIT_CHANGE_VALUE, CLIENTS_ADD_EDIT_CLEAN } from 'constants/actionTypes'
import { AddEdit, List } from './components'
import { loadData } from './actions'

const Clients = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadData())
        // eslint-disable-next-line
    }, [])  

    const handleAdd = () => {
        dispatch({ type: CLIENTS_ADD_EDIT_CLEAN })
        dispatch({ type: CLIENTS_ADD_EDIT_CHANGE_VALUE, property: 'visible', payload: true })
    }

    return (
        <div className={ classes.background }>
            <List/>
            <AddEdit/>
            <Fab color='primary' onClick={ handleAdd } className={ classes.fab }>
                <AddIcon/>
            </Fab>
        </div>
    )
}

export default Clients