import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    background: {
        width: '100%',
        minHeight: '80vh',
        padding: theme.spacing(10, 10)
    },
    fab: {
        zIndex: theme.zIndex.drawer + 1,
        position: 'fixed',
        right: 25,
        bottom: 25
    }
}))
export default useStyles