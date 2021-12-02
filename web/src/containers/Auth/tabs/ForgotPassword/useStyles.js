import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(theme => ({
    background: {
        position: 'absolute',
        display: 'flex',
        top: 0,
        left: -2,
        right: -2,
        bottom: 0,
    },
    container: {
        flexGrow: 1,
        paddingTop: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
        zIndex: 20
    },
    title: {
        fontWeight: 'bold'
    },
    div: {
        height: theme.spacing(3)
    },
    buttons: {
        marginTop: theme.spacing(3),
        display: 'flex',
        justifyContent: 'space-between'
    }
}))