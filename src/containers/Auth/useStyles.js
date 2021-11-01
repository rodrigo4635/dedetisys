import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(theme => ({
    root: {
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paper: {
        overflow: 'hidden',
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        width: '35%',
        borderRadius: 10,
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            borderRadius: 0,
            height: '100vh',
        },
        padding: theme.spacing(3.5),
    },
    logo: {
        width: theme.spacing(10),
        marginBottom: 20,
        height: 'auto'
    },
    tabsArea: {
        height: '100%',
        paddingTop: 20
    }
}))