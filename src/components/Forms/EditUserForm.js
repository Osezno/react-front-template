import React, { useState, useEffect, useRef } from 'react';
import { useStyles } from './Form.styles';
import { resizeImage, nullInObj, checkEmail, checkLength, checkNumber } from './validations';
import catalogs from '../../constants/catalogs';
import api from '../../constants/api';
import axios from 'axios';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

import {
    IconButton,
    Snackbar,
    TextField,
    Button,
    Typography,
} from '@material-ui/core'
//import * as ACTIONS from '../../store/actions';
const { errors, vertical, horizontal, rol, estatus, inputStr } = catalogs



const EditUserForm = (props) => {
    const { authUser, editUser, handleUserChanged } = props
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



    const [formData, setFormData] = useState({
        uuid:uuid,
        userUuid:editUser.uuid,
        email: editUser.email,
        fotografia: editUser.fotografia,
        id_estatus: editUser.id_estatus,
        id_rol: editUser.id_rol,
        nombre: editUser.nombre,
        onboard: editUser.onboard,
        telefono: editUser.telefono,
    });

    const { email, fotografia, id_estatus, id_rol, nombre, telefono } = formData;
    const inputFile = useRef(null)

    //GENERAL FUNCTIONS
    const validate = (data) => {
        const { email, nombre, telefono } = data;

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

    const updateProfile = (newPic) => {
        //  migth be better to handle some picture uploads in client than in server... 
        let url = api.usuarios.updateUser;
        let options;
        options = api.headersConfig(token)
        if (newPic) {
            url = api.usuarios.updateUserPic
            formData['fotografia'] = previewImg
        }
        setLoading(true)
        axios.post(url, formData, {
            headers: {
                ...options,
            }
        }).then((res) => {
            setToastMessage(res.data.message)
            if (res.data.success) {
                setToastType(classes.success)
                handleUserChanged(res.data.data)
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

    const preUpdateProfile = (event) => {
        event.preventDefault();
        if (previewImg !== '') updateProfile(true)
        else updateProfile(false)
    }

    const addNewImage = () => {
        if (inputFile.current.files && inputFile.current.files.length > 0) {
            let blob = inputFile.current.files[0]
            const reader = new FileReader()
            reader.readAsDataURL(blob);
            reader.onload = (e) => {

                setPreviewImg(e.target.result)
                resizeImage(e.target.result, 100, 100).then((compressImage) => {
                    setPreviewImg(compressImage)
                    setFormData({ ...formData, ['fotografia']:compressImage });
                });
            };

        }
    }

    const openImageBrowser = () => {
        inputFile.current.click();
    }

    useEffect(() => {
        validate(formData)
    }, [formData])


    return (

        <form onSubmit={preUpdateProfile} className={classes.form}>
            <div className={classes.pictureWrap} style={{ backgroundImage: `url("${previewImg != "" ? previewImg : fotografia}")` }}>
                <IconButton
                    className={classes.belowDivIcon}
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={openImageBrowser}
                >
                    <AddAPhotoIcon />
                    <input
                        type="file"
                        ref={inputFile}
                        id="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={() => addNewImage()}
                    />
                </IconButton>
            </div>
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
                type="text"
                label={inputStr.rol}
                name="rol"
                value={rol[id_rol] || ''}
                readOnly={true}
            />
            <TextField
                className={classes.inputs}
                label={inputStr.status}
                type="text"
                size="small"
                name="email"
                value={estatus[id_estatus] || ''}
                focus="true"
                readOnly={true}
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





export default EditUserForm;
