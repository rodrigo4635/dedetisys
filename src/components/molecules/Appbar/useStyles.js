import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    background: {
        backgroundColor: theme.palette.background.paper
    },
    logo: {
        marginRight: 50,
        color: '#fff',
        fontWeight: 'bold'
    },
    buttons: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center'
    },
    link: {
        textDecoration: 'none'
    }
}))
export default useStyles