import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    indicator: {
        height: '7%',
        maxWidth: props => `${ 100 / (props.countTabs * 1.5) }%`,
        marginLeft: props => `${ 100 / (props.countTabs * 6.2) }%`,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    background: {
        borderBottom: '0px solid #ddd'
    },
    label: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 10
        },
    }
}))
export default useStyles