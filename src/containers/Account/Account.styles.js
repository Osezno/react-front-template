import {
    makeStyles
} from '@material-ui/core';
import animations from '../../constants/animations';

export const useStyles = makeStyles(theme => ({
    ...animations,
    fade:{
        animation:`$fadeDown ease-in  3s `
    },
    contentWrapper:{
        
    },
    infoRoot: {
        width: '70%',
        margin: theme.spacing(1),
        marginBottom: theme.spacing(2)
    },
    title: {
        fontWeight: '700 !important',
        letterSpacing: 1
    },
    highligth: {
        weigth:600,
        display: 'inline !important',
        color: theme.color.primary
    },
    //info
    logo: {
        position: 'absolute',
        maxWidth: '90%',
        maxHeight: '90%',
        minWidth: '40%',
        borderRadius: '15px'
    },
    //
    signInRoot: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        borderRadius: 0,
    },
    content: {
        minWidth: '40%',
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    linkContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
        marginBottom:'10px'
    },
    viewRoot:{
        position: 'relative',
        backgroundColor: theme.color.secondary,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBox:{
        width: '40%',
        height: 'auto',
        borderRadius: '10px',
        background: '#ffffff3d',
    },
    textContainer:{
        width: '70%',
        height: 'auto',
      
    },
    cover: {
        
    }
}));
