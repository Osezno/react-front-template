import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

const Preloader = (props) => {
    const { style } = props;
    const root = {
        display: style && style.display ? style.display : 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: style && style.height ? style.height : '100vh',
        width: style && style.width ? style.width : '100vw',
        position: style && style.position ? style.position : 'fixed',
        top: 0,
        left: style && style.left ? style.left : 0,
    }
    return (
        <div style={root}>
            <CircularProgress color="primary" /> 
        </div>
    )
}

export default Preloader
