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
        minHeight: '70vh',
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
        marginBottom: 20
    },
    tabsArea: {
        height: '100%',
        paddingTop: 20
    }
}))