import {
    makeStyles
} from '@material-ui/core';

const box= {
    width: '100%',
    padding: '7px',
    borderRadius: '4px'
}

export const useStyles = makeStyles(theme => ({

    form: {
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10px'
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
    }

}));
