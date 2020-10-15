import React, { useState, useEffect } from 'react';
import { useStyles } from './Form.styles';
import { checkEmail, checkPasswordLogin } from './validations';
import catalogs from '../../constants/catalogs';

import {
    TextField,
    Button,
    InputAdornment,
    IconButton,
    Typography,
} from '@material-ui/core'

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import * as ACTIONS from '../../store/actions';




const SignInForm = (props) => {
    
    const classes = useStyles();
    const { errors } = catalogs
    const [error, setError] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

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
            setErrorMessage(errors.default )
            return false
        }
        if (checkPasswordLogin(password)) {
            setError(true)
            setErrorMessage(errors.passwordReq )
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



    //MAIN FUNCTIONS
    const handleChange = event => {

        setFormData({ ...formData, [event.target.name]: event.target.value });
    };



    const handleSignIn = (event) => {
       
        const { email, password } = formData;
        console.log(email, password)
        // signIn(email, password);
        event.preventDefault();
    }


    useEffect(() => {
        if(typeof email !== 'undefined') validate(formData)
    }, [formData])


    return (

        <form onSubmit={handleSignIn} className={classes.form}>
            <TextField
                className={classes.inputs}
                label="Correo"
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
                label="Contraseña"
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
                disabled={error}
                style={{ textTransform: 'none', marginTop: 10 }}
            >
                Iniciar sesión
           </Button>
        </form>

    )
}





export default SignInForm;
