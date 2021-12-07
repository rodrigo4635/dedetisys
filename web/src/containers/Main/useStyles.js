import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    background: {
        width: '100%',
        minHeight: '80vh',
        padding: theme.spacing(10, 10)
    },
    grid: {
        marginTop: 30,
        marginBottom: 30
    },
    paper: {
        padding: 20
    }
}))
export default useStyles