import React, { useState, useEffect, useRef } from 'react';
import { useStyles } from './Form.styles';
import {  nullInObj, checkEmail, checkLength, checkNumber, checkPassword, checkEquality } from './validations';
import catalogs from '../../constants/catalogs';
import api from '../../constants/api';
import axios from 'axios';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


import {
    IconButton,
    InputAdornment,
    FormControl,
    MenuItem,
    InputLabel,
    Select as MuiSelect,
    Snackbar,
    TextField,
    Button,
    Typography,
} from '@material-ui/core'
//import * as ACTIONS from '../../store/actions';
const { errors, vertical, horizontal, rol, estatus, inputStr } = catalogs



const NewUserForm = (props) => {
    const { authUser } = props
    const { uuid, token } = authUser


    const classes = useStyles();

    const [error, setError] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    //snackbar
    const [open, setOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState({});
    const [loading, setLoading] = useState(false);
    const [previewImg, setPreviewImg] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const [formData, setFormData] = useState({
        uuid: uuid,
        email: undefined,
        password: undefined,
        password2: undefined,
        id_estatus: undefined,
        id_rol: undefined,
        nombre: undefined,
        telefono: undefined,
    });

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };


    const { email,  password, password2, id_estatus, id_rol, nombre, telefono } = formData;
  

    //GENERAL FUNCTIONS
    const validate = (data) => {
        const { email, nombre, telefono, password, password2 } = data;

        let a = nullInObj(data)

        if (a.length) {
            console.log(a)
            setError(true)
            setErrorMessage(errors.default)
            return false
        }
        if (checkEmail(email)) {
            setError(true)
            setErrorMessage(errors.mail)
            return false
        }
        if (checkLength(nombre, 2, 35)) {
            setError(true)
            setErrorMessage(errors.invalidName)
            return false
        }
        if (checkNumber(telefono, 8, 14)) {
            setError(true)
            setErrorMessage(errors.invalidNumber)
            return false
        }
        if (checkNumber(telefono, 8, 14)) {
            setError(true)
            setErrorMessage(errors.invalidNumber)
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
        console.log(formData, event, event.target.name, event.target.value)
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };


    const createProfile = (event) => {
        event.preventDefault();
        let url = api.usuarios.nuevoUsuario;
        let options = api.headersConfig(token)

        setLoading(true)
        axios.post(url, formData, {
            headers: {
                ...options,
            }
        }).then((res) => {
            setToastMessage(res.data.message)
            if (res.data.success) {
                // reload page
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


    //USEEFFECTS

    useEffect(() => {
        validate(formData)
    }, [formData])


    return (

        <form onSubmit={createProfile} className={classes.form}>
            <TextField
                className={classes.inputs}
                label={inputStr.name}
                type="text"
                size="small"
                name="nombre"
                value={nombre || ''}
                onChange={handleChange}
                focus="true"
            />
            <TextField
                className={classes.inputs}
                type="text"
                label={inputStr.tel}
                name="telefono"
                value={telefono || ''}
                onChange={handleChange}
            />
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
            <TextField
                className={classes.inputs}
                type={showPassword ? 'text' : 'password'}
                label={inputStr.confirmPassword}
                name="password2"
                value={password2 || ''}
                onChange={handleChange}

            />
            <FormControl>
                <InputLabel id="rol">{inputStr.rol}</InputLabel>
                <MuiSelect
                    name="id_rol"
                    labelId="rol"
                    label={inputStr.rol}
                    value={id_rol}
                    onChange={handleChange}
                >
                    {Object.keys(rol).map(key =>
                        <MenuItem key={key} value={key}>{rol[key]}</MenuItem>)
                    }
                </MuiSelect>
            </FormControl>
            <FormControl >
                <InputLabel id="estatus">{inputStr.status}</InputLabel>
                <MuiSelect
                    name="id_estatus"
                    labelId="estatus"
                    label={inputStr.status}
                    value={id_estatus}
                    onChange={handleChange}
                >
                    {Object.keys(estatus).map(key =>
                        <MenuItem key={key} value={key}>{estatus[key]}</MenuItem>)
                    }
                </MuiSelect>
            </FormControl>
            {error && <Typography variant="subtitle2" color="error">{errorMessage}</Typography>}
            <Button
                // className={classes.inputs}
                variant="contained"
                color="primary"
                type="submit"
                disabled={error || loading}
                style={{ textTransform: 'none', marginTop: 10 }}
            >
                {loading ? inputStr.load : inputStr.update}
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





export default NewUserForm;
