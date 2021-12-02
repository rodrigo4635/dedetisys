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
import { deleteClient } from '../../actions'
import { openDetails } from '../AddEdit/actions'
import useStyles from './useStyles'
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
    const classes = useStyles()
    const clients = useSelector(state => state.clients.main.data)
    const loading = useSelector(state => state.clients.main.loading)
    const dispatch = useDispatch()

    const handleClickItem = client => {
        if (!loading.includes(client.id)) dispatch(openDetails(client, false))
    }

    const handleEdit = data => event => {
        event.preventDefault()
        event.stopPropagation()
        dispatch(openDetails(data, true))

    }

    const handleDelete = data => event => {
        event.preventDefault()
        event.stopPropagation()
        dispatch(deleteClient(data, clients))
    }

    if (!clients) return <Loading label='Carregando clientes' />
    return (
        <TableContainer component={ Paper }>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Nome</StyledTableCell>
                        <StyledTableCell>Identidade</StyledTableCell>
                        <StyledTableCell>E-mail</StyledTableCell>
                        <StyledTableCell>Telefone</StyledTableCell>
                        <StyledTableCell>Cidade</StyledTableCell>
                        <StyledTableCell padding='checkbox'>Editar</StyledTableCell>
                        <StyledTableCell padding='checkbox'>Excluir</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { clients.map(client => (
                        <StyledTableRow hover={ !loading.includes(client.id) } key={ client.id } onClick={ () => handleClickItem(client) }
                            style={{ cursor: loading.includes(client.id) ? 'default' : 'pointer' }}
                        >
                            <StyledTableCell component="th" scope="row">{ client.name }</StyledTableCell>
                            <StyledTableCell>{ client.taxvat }</StyledTableCell>
                            <StyledTableCell>{ client.email }</StyledTableCell>
                            <StyledTableCell>{ client.tel_1 }</StyledTableCell>
                            <StyledTableCell>{ client.city }</StyledTableCell>
                            <TableCell padding='checkbox'>
                                <IconButton disabled={ loading.includes(client.id)} onClick={ handleEdit(client) } >
                                    <EditRoundedIcon/>
                                </IconButton>
                            </TableCell>
                            <TableCell padding='checkbox'>
                                <IconButton disabled={ loading.includes(client.id)} onClick={ handleDelete(client) }>
                                    { loading.includes(client.id) ? <CircularProgress size={ 20 }/> : <DeleteRoundedIcon/> }
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