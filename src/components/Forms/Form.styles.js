import {
    makeStyles
} from '@material-ui/core';

const box= {
    width: '100%',
    padding: '7px',
    borderRadius: '4px'
}

export const useStyles = makeStyles(theme => ({
    modal:{
        background:"#fff"
    },
    form:{
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10px',
    },
    form2: {
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10px',
        margin:'0 auto'
    },
    inputs: {
        margin: 4,
        width: '100%',
    },
    success: {
        backgroundColor: theme.color.success,
        ...box
    },
    error: {
        backgroundColor: theme.color.error,
        ...box
    },
    pictureWrap:{
        width: '100px',
        height:'100px',
        position:'relative',
        backgroundSize:'cover',
        borderRadius: '50px'
      //  borderRadius:'50%',
    },
    picture:{
        width: '100px',
        height:'100px',
       
      //  borderRadius:'50%',
    },
    belowDivIcon:{
        position:'absolute',
        bottom:'0px',
        right:'0px',
    }
}));
