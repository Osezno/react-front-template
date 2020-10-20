import React from 'react'
import PropTypes from 'prop-types'
import shadows from '../../constants/shadows';
import borders from '../../constants/borders';
import {
    makeStyles,
} from '@material-ui/core'

const CircleIcon = (props) => {
    const { type, onClick, size, borderColor, color, invert } = props

    const useStyles = makeStyles(theme => ({
        iconPrimary: {
            backgroundColor: invert ? '#fff' : color,
            minWidth: size,
            minHeight: size,
            width: size,
            height: size,
            borderRadius: borders.circle,
            color: invert ? color : '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            fontSize: Math.floor(size / 2.5),
            cursor: onClick ? 'pointer' : 'default',

        },

        primary: {
            backgroundColor: invert ? '#fff' : color,
            minWidth: size,
            border: `solid ${borderColor ? borderColor : color}`,
            minHeight: size,
            width: size,
            height: size,
            margin: '2px',
            boxShadow: shadows.secoundary,
            borderRadius: borders.circle,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            cursor: onClick ? 'pointer' : 'default',
            '&>svg': {
                width: Math.floor(size / 2),
                height: Math.floor(size / 2),
                '& path': {
                    fill: invert ? color : '#fff',
                },
                '& g': {
                    fill: invert ? color : '#fff',
                },
            },
        },

    }))

    const classes = useStyles()

    let svg

    switch (type) {
        case 'back':
            svg = <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8.401" viewBox="0 0 12 8.401">
                <g transform="translate(0 -0.599)">
                    <path d="M12,4.2a.6.6,0,0,1-.6.6H1.884L4.062,7.417a.6.6,0,0,1-.924.768l-3-3.6a.714.714,0,0,1-.054-.09.1.1,0,0,0-.042-.078.576.576,0,0,1,0-.432.076.076,0,0,1,.042-.078.714.714,0,0,1,.054-.09l3-3.6a.6.6,0,1,1,.924.768L1.884,3.6H11.4A.6.6,0,0,1,12,4.2Z" transform="translate(0 0.599)" fill="#ccc" />
                </g>
            </svg>
            break
        case 'next':
            svg = <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.11043 10.1168C7.78863 9.79971 7.78863 9.28566 8.11043 8.96853L11.1439 5.98044H1.80723C1.35197 5.98044 0.98291 5.61685 0.98291 5.16835C0.98291 4.71984 1.35197 4.35625 1.80723 4.35625H11.0924L8.11043 1.41851C7.90221 1.21331 7.82094 0.91427 7.89721 0.63403C7.97349 0.353789 8.19573 0.134924 8.48022 0.05988C8.7647 -0.0151643 9.06822 0.0650128 9.27643 0.270209L14.1453 5.19393L9.27561 10.1168C9.12101 10.2692 8.91129 10.3548 8.69261 10.3548C8.47392 10.3548 8.2642 10.2692 8.1096 10.1168H8.11043Z" fill="#ccc" />
            </svg>
            break
        case 'circle':
            svg = <svg height="50" width="50">
                <circle cx="7" cy="7" r="4" fill="transparent" />

            </svg>
            break
        default:
            svg = <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8.401" viewBox="0 0 12 8.401">
                <g transform="translate(0 -0.599)">
                    <path d="M12,4.2a.6.6,0,0,1-.6.6H1.884L4.062,7.417a.6.6,0,0,1-.924.768l-3-3.6a.714.714,0,0,1-.054-.09.1.1,0,0,0-.042-.078.576.576,0,0,1,0-.432.076.076,0,0,1,.042-.078.714.714,0,0,1,.054-.09l3-3.6a.6.6,0,1,1,.924.768L1.884,3.6H11.4A.6.6,0,0,1,12,4.2Z" transform="translate(0 0.599)" fill="#ccc" />
                </g>
            </svg>
            break
    }

    let contentRendered = <i className={classes.iconPrimary} onClick={onClick}></i>
    if (svg) {
        contentRendered = <i className={classes.primary} onClick={onClick}>
            {svg}
        </i>
    }



    return contentRendered
}

CircleIcon.defaultProps = {
    size: 20,
    tooltip: 'top'
}

CircleIcon.propTypes = {
    type: PropTypes.string.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
    size: PropTypes.number,
    disabled: PropTypes.bool
}

export default CircleIcon
