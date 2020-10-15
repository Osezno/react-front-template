import React from 'react'
import PropTypes from 'prop-types'

import {
    makeStyles,
    Typography
} from '@material-ui/core'

import typography from '../../constants/typography'

const Text = props => {
    const { children, type, color, style, onClick} = props

    const useStyles = makeStyles(theme => ({
        text:{
          ...typography[type],
          color:color,
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }
    }))

    const classes = useStyles()

    let component
    switch (type) {
        case 'title':
            component = 'h1'
            break
        case 'subtitle':
            component = 'h2'
            break
        case 'paragraph':
            component = 'p'
            break
        case 'small':
            component = 'small'
            break
        default:
            component = 'span'
    }

    const mergedStyle = {
        ...style
    }

   

    return (
        <Typography className={ classes.text}  style={mergedStyle} component={component} onClick={onClick}>
            {children}
        </Typography>
    )
}

Text.defaultProps = {
    type: 'paragraph',
    color: 'primary'
}

Text.propTypes = {
    children: PropTypes.any,
    type: PropTypes.oneOf(['title', 'subtitle', 'paragraph', 'small', 'button', 'capital']),
    color: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func
}

export default Text
