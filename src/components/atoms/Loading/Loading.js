import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
import useStyles from './useStyles'

/**Circular progress bar with a label bellow */
const Loading = props => {
    const { label='Carregando', circleSize=24, className, labelProps={} } = props
    const classes = useStyles()

    return (
        <div className={ clsx(classes.background, className) } >
            <CircularProgress size={ circleSize } className={ classes.progress }/>
            <Typography { ...labelProps }>{ label }</Typography>
        </div>
    )
}

export default Loading