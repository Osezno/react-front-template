import {
    makeStyles
} from '@material-ui/core';
import animations from './constants/animations';

export const useStyles = makeStyles(theme => ({
    ...animations,
    app:{
        textAlign:'center'
    },
    logo:{
        height: '40vmin',
        pointerEvents: 'none',
        animation:`$spin 10s infinite`,
    },
    
    appHeader:{
        backgroundColor: '#282c34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
    },
    appLink:{
        color: '#61dafb',
    }
}));
