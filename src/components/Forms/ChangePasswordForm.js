import React, { useState, useEffect } from 'react';
import { useStyles } from './Form.styles';
import { checkEmail, checkPassword, checkEquality } from './validations';
import catalogs from '../../constants/catalogs';
import api from '../../constants/api';
import axios from 'axios';

import {
    Snackbar,
    TextField,
    Button,
    InputAdornment,
    IconButton,
    Typography,
} from '@material-ui/core'

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

//import * as ACTIONS from '../../store/actions';
const { errors, vertical, horizontal, inputStr } = catalogs



const SignInForm = (props) => {
    const { uuid, token } = props
    const classes = useStyles();

    const [error, setError] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    //snackbar
    const [open, setOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState({});
    const [loading, setLoading] = useState(false);



    const [formData, setFormData] = useState({
        password: undefined,
        password2: undefined,
        showPassword: false
    });

    const { password2, password, showPassword } = formData;

    //GENERAL FUNCTIONS
    const handleClickShowPassword = () => {
        setFormData({ ...formData, showPassword: !formData.showPassword });
    };

    const validate = (data) => {
        const { password, password2 } = data;
        if (!password2 || !password) {
            setError(true)
            setErrorMessage(errors.default)
            return false
        }
        if (checkPassword(password)) {
            setError(true)
            setErrorMessage(errors.passwordReq)
            return false
        }
        if (checkEquality(password, password2)) {
            setError(true)
            setErrorMessage(errors.passwordEq)
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

    const handleSignIn = (event) => {
        event.preventDefault();
        setLoading(true)
        let data = {
            uuid: uuid,
            token: token,
            password: formData.password
        }
        axios.post(api.change, data).then((res) => {
            setToastMessage(res.data.message)
            if (res.data.success) {
                //redux change
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
        if (typeof password !== 'undefined') validate(formData)
    }, [formData, password])


    return (

        <form onSubmit={handleSignIn} className={classes.form}>
            <TextField
                className={classes.inputs}
                type={showPassword ? 'text' : 'password'}
                label={inputStr.password}
                name="password"
                value={password || ''}
                onChange={handleChange}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="Mostrar/Ocultar contraseña"
                                onClick={() => { handleClickShowPassword() }}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
            <TextField
                className={classes.inputs}
                type={showPassword ? 'text' : 'password'}
                label={inputStr.confirmPassword}
                name="password2"
                value={password2 || ''}
                onChange={handleChange}

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
                {loading ? inputStr.load  : inputStr.changePassword }
            </Button>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
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





export default SignInForm;
