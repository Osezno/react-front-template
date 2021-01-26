import {
    makeStyles
} from '@material-ui/core';

const box = {
    width: '100%',
    padding: '7px',
    borderRadius: '4px'
}

export const useStyles = makeStyles(theme => ({
    profile: {
        borderRadius: '30px',
        maxWidth: '50px'
    },
    modalWrap: {
        background: '#fff',
        width: '70%',
        margin: '0 auto',
        marginTop: '10px',
        padding: '9px',
        overflow: 'scroll',
    },
    success: {
        backgroundColor: theme.color.success,
        ...box
    },
    error: {
        backgroundColor: theme.color.error,
        ...box
    }
}));
