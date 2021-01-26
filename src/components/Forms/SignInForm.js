import React, { useState, useEffect } from 'react';
import { useStyles } from './Form.styles';
import { checkEmail, checkPasswordLogin } from './validations';
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
const { errors,vertical, horizontal, inputStr } = catalogs



const SignInForm = (props) => {
    const {addAuthUser} = props
    const classes = useStyles();
   
    const [error, setError] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    //snackbar
    const [open, setOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState({});
    const [loading, setLoading] = useState(false);
    
    

    const [formData, setFormData] = useState({
        email: undefined,
        password: undefined,
        showPassword: false
    });

    const { email, password, showPassword } = formData;

    //GENERAL FUNCTIONS
    const handleClickShowPassword = () => {
        setFormData({ ...formData, showPassword: !formData.showPassword });
    };

    const validate = (data) => {
        const { password, email } = data;
        if (!email || !password) {
            setError(true)
            setErrorMessage(errors.default)
            return false
        }
        if (checkPasswordLogin(password)) {
            setError(true)
            setErrorMessage(errors.passwordReq)
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

    const handleSignIn = (event) => {
        event.preventDefault();
        setLoading(true)
       
        axios.post(api.signIn, {
            headers: api.headerConfig,
            ...formData
        }).then((res) => {
            setToastMessage(res.data.message)
            if(res.data.success){
                addAuthUser(res.data.data)
                // add authUser to redux session
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
    }, [formData, email])


    return (

        <form onSubmit={handleSignIn} className={classes.form}>
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
            {error && <Typography variant="subtitle2" color="error">{errorMessage}</Typography>}
            <Button
                // className={classes.inputs}
                variant="contained"
                color="primary"
                type="submit"
                disabled={error || loading}
                style={{ textTransform: 'none', marginTop: 10 }}
            >
                {loading ? inputStr.load : inputStr.login}
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
