import React, { useState, useEffect } from 'react';
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
const { errors, toast, rol, estatus } = catalogs



const UsersTable = (props) => {
    const { authUser, addToast } = props
    const { uuid, token } = authUser
    const css = useStyles();
    //snackbar
    // const [loading, setLoading] = useState(false);
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
 
    //MAIN FUNCTIONS
    // const handleChange = event => {
    //     setFormData({ ...formData, [event.target.name]: event.target.value });
    // };

    const getUsers = () => {
        let body = { uuid: uuid }
        let options = api.headersConfig(token)
        // setLoading(true)
        axios.post(api.usuarios.verUsuarios, body, {
            headers: {
                ...options,
            }
        }).then((res) => {
            toast['message']= res.data.message 
            if (res.data.success) {
                setUsers(res.data.data)
                toast['success'] = true
            }
        }).catch(err => {
            toast['message'] = errors.serverError
        }).finally(()=>{
            addToast(toast)
       
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
        setUserIndex(i)
        setEditUser(user)
        handleOpenModal()
    }

    const handleUserChanged = (UserChanged)=> {
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
                    <EditUserForm  addToast={(toast)=>addToast(toast)} editUser={editUser} authUser={authUser} handleUserChanged={handleUserChanged} />
                </div>
            </Modal>
        </>
    )
}





export default UsersTable;
