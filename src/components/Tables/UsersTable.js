import React, { useState, useEffect, useRef } from 'react';
import { useStyles } from './Tables.styles';
import catalogs from '../../constants/catalogs';
import EditUserForm from '../Forms/EditUserForm';
import api from '../../constants/api';
import axios from 'axios';
import {
    IconButton,
} from '@material-ui/core'
import Edit from '@material-ui/icons/Edit';

import {
    Snackbar,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Modal,
    Paper
} from '@material-ui/core'
//import * as ACTIONS from '../../store/actions';
const { errors, vertical, horizontal, rol, estatus, inputStr } = catalogs



const UsersTable = (props) => {
    const { authUser } = props
    const { uuid, token } = authUser
    const css = useStyles();
    //handle this with redux?
    const [error, setError] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    //snackbar
    const [open, setOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState({});
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState({});
    const [userIndex, setUserIndex] = useState(0);
    const [openModal, setOpenModal] = React.useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setEditUser({})
        setUserIndex(0)
        setOpenModal(false);
    };
    //GENERAL FUNCTIONS
    const handleCloseToast = () => {
        setOpen(false);
    };

    //MAIN FUNCTIONS
    // const handleChange = event => {
    //     setFormData({ ...formData, [event.target.name]: event.target.value });
    // };

    const getUsers = () => {
        let body = { uuid: uuid }
        let options = api.headersConfig(token)
        setLoading(true)
        axios.post(api.usuarios.verUsuarios, body, {
            headers: {
                ...options,
            }
        }).then((res) => {
            setToastMessage(res.data.message)
            if (res.data.success) {
                console.log(res.data.data)
                setUsers(res.data.data)
                setToastType(css.success)
            }
            else setToastType(css.error)
            setOpen(true)
            setLoading(false)
        }).catch(err => {
            setToastMessage(errors.serverError)
            setToastType(css.error)
            setOpen(true)
            setLoading(false)
        })
    }
    const renderImage = (url) => {
        return <img alt="foto" className={css.profile} src={url} />;
    }

    const renderButton = (user, index) => {
        return <IconButton
            aria-label="Editar"
            onClick={() => { editar(user,index) }}
        >
            <Edit />
        </IconButton>;
    }

    const editar = (user, i) => {
        console.log(i)
        setUserIndex(i)
        setEditUser(user)
        handleOpenModal()
    }

    const handleUserChanged = (UserChanged)=> {
        console.log(UserChanged)
        let newUsersArray = [...users];
        newUsersArray[userIndex] = UserChanged;
        setUsers(newUsersArray);
    }

    //USEEFFECTS
    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
         if (users.length) console.log(users)
     }, [users])



    return (
        <>
            <TableContainer component={Paper}>
                <Table className={css.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell >Fotográfia</TableCell>
                            <TableCell >Nombre</TableCell>
                            <TableCell >Email</TableCell>
                            <TableCell >Teléfono</TableCell>
                            <TableCell >Estatus</TableCell>
                            <TableCell >Rol</TableCell>
                            <TableCell >Editar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user,index) => (
                            <TableRow key={user.uuid}>
                                <TableCell component="th" >
                                    {renderImage(user.fotografia)}
                                </TableCell>
                                <TableCell >{user.nombre}</TableCell>
                                <TableCell >{user.email}</TableCell>
                                <TableCell >{user.telefono}</TableCell>
                                <TableCell >{estatus[user.id_estatus]}</TableCell>
                                <TableCell >{rol[user.id_rol]}</TableCell>
                                <TableCell > {renderButton(user,index)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal
                className={css.modal}
                open={openModal}
                onClose={handleCloseModal}
            >
                <div className={css.modalWrap} >
                    <EditUserForm editUser={editUser} authUser={authUser} handleUserChanged={handleUserChanged} />
                </div>
            </Modal>
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
        </>
    )
}





export default UsersTable;
