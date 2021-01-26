
import React, { useState, useEffect } from 'react'
import ContentStyle from '../../Content.style'
import { connect } from 'react-redux';
import catalogs from '../../../../constants/catalogs';
import {
    IconButton,
} from '@material-ui/core'
import PersonAdd from '@material-ui/icons/PersonAdd';
import UsersTable from '../../../../components/Tables/UsersTable';
const {rol} = catalogs
const useStyles = ContentStyle

const Users = props => {
    const { authUser, changeView } = props
    const { id_rol } = authUser
    const { pages } = catalogs
    const css = useStyles();
    // check if manager or admin
    //if admin get and return all users
    //if Manager get and return only the same unit users
    // maybe first it should get all buisness units and make posible to filter user by   that model

    // create table
    //  function for edit user
    // function for erase user

    return (
        <>
            <div className={css.titleWrapper}>
                <h1 className={css.title}>{pages.users}</h1>
                {rol[id_rol] === "Admin" ?
                    <IconButton
                        aria-label="Regresar"
                        onClick={() => { changeView(2) }}
                    >
                        <PersonAdd />
                    </IconButton>
                    : null}
            </div>
            <UsersTable authUser={authUser}/>
        </>
    );
}
const mapStateToProps = state => {
    return {
        authUser: state.sessionState.authUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

