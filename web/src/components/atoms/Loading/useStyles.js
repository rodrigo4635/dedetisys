import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(() => ({
    background: {
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    progress: {
        marginBottom: 10
    }
}))
export default useStyles