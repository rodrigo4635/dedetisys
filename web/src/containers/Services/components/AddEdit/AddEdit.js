import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import { INPUTS } from 'constants/services'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { changeInput, changeValue, saveService } from './actions'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'

const AddEdit = () => {
    const state = useSelector(state => state.services.addEdit)
    const services = useSelector(state => state.services.main.data)
    const { visible, error, creating, editable, loading, inputs } = state
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(changeValue('visible', false))
    }

    const handleChangeInput = id => event => {
        dispatch(changeInput(id, event))
    }

    const handleSave = () => {
        dispatch(saveService(state, services))
    }

    return (
        <Dialog open={ visible } onClose={ handleClose }>
            <DialogTitle>{ creating ? 'Adicionar serviço' : 'Detalhes do serviço' }</DialogTitle>
            <DialogContent>
            <Grid container spacing={ 2 }>
                { INPUTS.map(input => (
                    <Grid item xs={ 12 } md={ input.size } key={ input.id }>
                        <TextField { ...input.props } error={ error.includes(input.id) } helperText={ error.includes(input.id) ? 'Verifique o campo' : '' }
                            onChange={ handleChangeInput(input.id) } value={ inputs[input.id] } disabled={ !editable }
                        >
                            { input.elements ?
                                input.elements.map((option) => (
                                    <MenuItem key={ option.value } value={ option.value }>
                                        { option.label }
                                    </MenuItem>
                                )) : undefined
                            }
                        </TextField>
                    </Grid>
                ))}
            </Grid>
            </DialogContent>
            <DialogActions>
                <Button disabled={ loading } onClick={ handleClose } color="primary">
                    Fechar
                </Button>
                { creating || editable ?
                    <Button disabled={ loading } onClick={ handleSave } variant='contained' color="primary">
                        { loading ? 'Salvando' : 'Salvar' }
                    </Button> : null
                }
            </DialogActions>
        </Dialog>
    )
}

export default AddEdit