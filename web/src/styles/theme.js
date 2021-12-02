import { createTheme } from '@material-ui/core/styles'
import colors from './colors'

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: colors.primary,
        },
        secondary: {
            main: colors.secondary
        },
        background: {
            default: colors.background,
            paper: colors.paper
        },
        text: {
            primary: colors.textPrimary,
            secondary: colors.textSecondary
        },

    }
})

export default theme