import { Loading } from 'components/atoms'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import { deleteService } from '../../actions'
import { openDetails } from '../AddEdit/actions'
import EditRoundedIcon from '@material-ui/icons/EditRounded'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded'
import { IconButton } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'

const StyledTableRow = withStyles(() => ({
    root: {
        backgroundColor: '#121212',
        '&:nth-of-type(odd)': {
            backgroundColor: '#0d0d0d',
        },
    },
}))(TableRow)

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell)

const List = () => {
    const services = useSelector(state => state.services.main.data)
    const loading = useSelector(state => state.services.main.loading)
    const dispatch = useDispatch()

    const handleClickItem = service => {
        if (!loading.includes(service.id)) dispatch(openDetails(service, false))
    }

    const handleEdit = data => event => {
        event.preventDefault()
        event.stopPropagation()
        dispatch(openDetails(data, true))

    }

    const handleDelete = data => event => {
        event.preventDefault()
        event.stopPropagation()
        dispatch(deleteService(data.id, services))
    }

    if (!services) return <Loading label='Carregando serviços' />
    return (
        <TableContainer component={ Paper }>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell>Descrição</StyledTableCell>
                        <StyledTableCell>Nome</StyledTableCell>
                        <StyledTableCell>Preço</StyledTableCell>
                        <StyledTableCell>Pago</StyledTableCell>
                        <StyledTableCell>Duração</StyledTableCell>
                        <StyledTableCell>Finalizado</StyledTableCell>
                        <StyledTableCell padding='checkbox'>Editar</StyledTableCell>
                        <StyledTableCell padding='checkbox'>Excluir</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { services.map(service => (
                        <StyledTableRow hover={ !loading.includes(service.id) } key={ service.id } onClick={ () => handleClickItem(service) }
                            style={{ cursor: loading.includes(service.id) ? 'default' : 'pointer' }}
                        >
                            <StyledTableCell>{ service.id }</StyledTableCell>
                            <StyledTableCell component="th" scope="row">{ service.description }</StyledTableCell>
                            <StyledTableCell>{ service.contactName }</StyledTableCell>
                            <StyledTableCell>{ service.price }</StyledTableCell>
                            <StyledTableCell>{ service.amountPaid }</StyledTableCell>
                            <StyledTableCell>{ service.duration }</StyledTableCell>
                            <StyledTableCell>{ service.done ? 'Sim' : 'Não' }</StyledTableCell>
                            <TableCell padding='checkbox'>
                                <IconButton disabled={ loading.includes(service.id)} onClick={ handleEdit(service) } >
                                    <EditRoundedIcon/>
                                </IconButton>
                            </TableCell>
                            <TableCell padding='checkbox'>
                                <IconButton disabled={ loading.includes(service.id)} onClick={ handleDelete(service) }>
                                    { loading.includes(service.id) ? <CircularProgress size={ 20 }/> : <DeleteRoundedIcon/> }
                                </IconButton>
                            </TableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default List