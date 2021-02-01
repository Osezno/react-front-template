import {
    makeStyles
} from '@material-ui/core';

const box= {
    width: '100%',
    padding: '7px',
    borderRadius: '4px'
}

export const useStyles = makeStyles(theme => ({
   
    success: {
        backgroundColor: theme.color.success,
        ...box
    },
    error: {
        backgroundColor: theme.color.error,
        ...box
    },
   
    belowDivIcon:{
        position:'absolute',
        bottom:'0px',
        right:'0px',
    }
}));
