import React, { useState, useEffect } from 'react';
import { useStyles } from './Form.styles';
import { checkEmail } from './validations';
import catalogs from '../../constants/catalogs';
import api from '../../constants/api';
import axios from 'axios';


import {
    Snackbar,
    TextField,
    Button,
   
    Typography,
} from '@material-ui/core'





const { errors, vertical, horizontal, inputStr } = catalogs

const ResetPasswordForm = (props) => {

    const classes = useStyles();
    const [error, setError] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
     //Snackbar
    const [open, setOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState({});
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: undefined,
    });

    const { email } = formData;

    //GENERAL FUNCTIONS
    const validate = (data) => {
        const { email } = data;
        if (!email) {
            setError(true)
            setErrorMessage(errors.default)
            return false
        }

        if (checkEmail(email)) {
            setError(true)
            setErrorMessage(errors.mail)
            return false
        }

        setError(false)
        setErrorMessage('')
    }
    const handleCloseToast = () => {
        setOpen(false);
    };

    //MAIN FUNCTIONS
    const handleChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };



    const handleResetPassword = (event) => {
        //default
        event.preventDefault();
        setLoading(true)
        //config
        let options = api.headersConfig(' ')
        let body = { email: email }

        axios.post(api.forgot, body, { headers: {
            ...options,
          }}).then((res) => {
            console.log(res)
            setToastMessage(res.data.message)
            if (res.data.success) {
                setToastType(classes.success)
            }
            else setToastType(classes.error)
            setOpen(true)
            setLoading(false)
        }).catch(err => {
            setToastMessage(errors.serverError)
            setToastType(classes.error)
            setOpen(true)
            setLoading(false)
        })
    }


    useEffect(() => {
        if (typeof email !== 'undefined') validate(formData)
    }, [formData])


    return (

        <form onSubmit={handleResetPassword} className={classes.form}>
            <TextField
                className={classes.inputs}
                label={inputStr.email}
                type="email"
                size="small"
                name="email"
                value={email || ''}
                onChange={handleChange}
                focus="true"
            />

            {error && <Typography variant="subtitle2" color="error">{errorMessage}</Typography>}
            <Button
                // className={classes.inputs}
                variant="contained"
                color="primary"
                type="submit"
                disabled={error || loading}
                style={{ textTransform: 'none', marginTop: 10 }}
            >
                {inputStr.updatePassword}
           </Button>
           <Snackbar
                anchorOrigin={{vertical, horizontal }}
                open={open}
                autoHideDuration={3000}
                onClose={handleCloseToast}
                message={
                    <div className={toastType}>
                        {toastMessage}
                    </div>
                }
                key={vertical + horizontal}
            />
        </form>

    )
}





export default ResetPasswordForm;
