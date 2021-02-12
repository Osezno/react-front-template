import React, { useState, useEffect } from 'react';
import { useStyles } from './Tables.styles';
import catalogs from 'constants/catalogs';

import api from 'constants/api';
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
    Paper
} from '@material-ui/core'

const { errors, toast, rol, estatus } = catalogs



const CotizacionesTable = (props) => {
    const { authUser, addToast } = props
    const { uuid, token } = authUser
    const css = useStyles();

    const [forms, setForms] = useState([]);


    const getForms = () => {
        let body = { uuid: uuid }
        let options = api.headersConfig(token)
        // setLoading(true)
        axios.post(api.usuarios.verUsuarios, body, {
            headers: {
                ...options,
            }
        }).then((res) => {
            toast['message'] = res.data.message
            if (res.data.success) {
                setForms(res.data.data)
                toast['success'] = true
            }
        }).catch(err => {
            toast['message'] = errors.serverError
        }).finally(() => {
            addToast(toast)
        })
    }


    const renderButton = (user, index) => {
        return <IconButton
            aria-label="Editar"
            onClick={() => { console.log("popo") }}
        >
            <Edit />
        </IconButton>;
    }



    //USEEFFECTS
    useEffect(() => {
       // getForms()
    }, [])




    return (
        <div>{
            forms.length ?
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
                            {forms.map((form, index) => (
                                <TableRow key={form.uuid}>
                                    {/* <TableCell component="th" >
                                 {renderImage(user.fotografia)}
                             </TableCell> */}
                                    <TableCell >{form.nombre}</TableCell>
                                    <TableCell >{form.email}</TableCell>
                                    <TableCell >{form.telefono}</TableCell>

                                    <TableCell > {renderButton(form, index)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                : <h2>No hay formularios</h2>
        }</div>

    )
}





export default CotizacionesTable;
