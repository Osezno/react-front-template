import React from 'react'
import PropTypes from 'prop-types'
import { useStyles } from '../Account.styles';
//import Logo from './Logo'
import Info from './Info';

const View = props => {
    const { title, highlight , message, cover} = props
    const classes = useStyles();

    const view = {
        backgroundImage: `url(${cover})`
    };

    return (
        <div className={classes.viewRoot} style={view}>
            <div className={cover ? classes.textBox : classes.textWrapper} >
            {(title || highlight || message) ? <Info highlight={highlight} title={title} message={message} /> : null}
            </div>
        </div>
    )
}

View.propTypes = {
    cover: PropTypes.string,
    icon: PropTypes.string
}

export default View
