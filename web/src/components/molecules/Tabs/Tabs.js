import React from 'react'
import MuiTabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import useStyles from './useStyles'
import clsx from 'clsx'
import PropTypes from 'prop-types'

const Tabs = props => {
    const { value, onChange, variant='fullWidth', className, items, indicatorColor='primary', textColor='primary' } = props
    const itemsArr = Object.values(items)
    const classes = useStyles({ countTabs: itemsArr.length })

    return (
        <div className={ clsx(classes.background, className) }>
            <MuiTabs value={ value } onChange={ (e, val) => onChange(val, e) } variant={ variant } indicatorColor={ indicatorColor } textColor={ textColor } classes={{ indicator: classes.indicator }}>
                { itemsArr.map((item, index) => {
                    const tabData = typeof item === 'string' ? { label: item } : item
                    return (
                        <Tab label={ tabData.label } key={ index.toString() } icon={ tabData.icon } disabled={ tabData.disabled }
                            classes={{ root: classes.label }}
                        /> 
                    )
                })}
            </MuiTabs>
        </div>
    )
}

Tabs.propTypes = {
    /**Current tab value */
    value: PropTypes.number.isRequired,
    /**Called when user click in a tab, pass the new tab and event as params (tab, event) =>  */
    onChange: PropTypes.func,
    /**Tab variant (Default to `fullwidth`) */
    variant: PropTypes.string,
    /**Custom classes to container */
    className: PropTypes.string,
    /**Array or object with tabs to render, each item need to be a string with the name of the tab or a object with the props: label, icon and disabled */
    items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
    /**Color of the indicator, one of ('primary' | 'secondary') (Default to `primary`) */
    indicatorColor: PropTypes.oneOf(['primary', 'secondary']),
    /**Color of the indicator, one of ('primary' | 'secondary' | 'inherit') (Default to `primary`) */
    textColor: PropTypes.oneOf(['primary', 'secondary', 'inherit'])
}

export default Tabs