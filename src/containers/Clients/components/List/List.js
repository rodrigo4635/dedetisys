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
import { deleteClient, openDetails } from '../../actions'
import useStyles from './useStyles'
import EditRoundedIcon from '@material-ui/icons/EditRounded'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded'
import { IconButton } from '@material-ui/core'

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
    const dispatch = useDispatch()

    const handleClickItem = data => {
        dispatch(openDetails(data, false))
    }

    const handleEdit = data => event => {
        event.preventDefault()
        event.stopPropagation()
        dispatch(openDetails(data, true))

    }

    const handleDelete = data => () => {
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
                        <StyledTableRow hover key={ client.id } onClick={ () => handleClickItem(client) } className={ classes.tableRow }>
                            <StyledTableCell component="th" scope="row">{ client.name }</StyledTableCell>
                            <StyledTableCell>{ client.taxvat }</StyledTableCell>
                            <StyledTableCell>{ client.email }</StyledTableCell>
                            <StyledTableCell>{ client.tel_1 }</StyledTableCell>
                            <StyledTableCell>{ client.city }</StyledTableCell>
                            <TableCell padding='checkbox'><IconButton onClick={ handleEdit(client) }><EditRoundedIcon/></IconButton></TableCell>
                            <TableCell padding='checkbox'><IconButton onClick={ handleDelete(client) }><DeleteRoundedIcon/></IconButton></TableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default List