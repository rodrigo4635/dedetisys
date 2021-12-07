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
    const services = useSelector(state => state.main.recents)

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
                        <StyledTableCell>Pago</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { services.map(service => (
                        <StyledTableRow hover key={ service.id }>
                            <StyledTableCell>{ service.id }</StyledTableCell>
                            <StyledTableCell component="th" scope="row">{ service.description }</StyledTableCell>
                            <StyledTableCell>{ service.contactName }</StyledTableCell>
                            <StyledTableCell>{ service.price }</StyledTableCell>
                            <StyledTableCell>{ service.amountPaid }</StyledTableCell>
                            <StyledTableCell>{ service.duration }</StyledTableCell>
                            <StyledTableCell>{ service.done ? 'Sim' : 'Não' }</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default List