
import React, { useState, useEffect } from 'react'
import ContentStyle from '../Content.style'
import EditProfileForm from '../../../components/Forms/EditProfileForm';
import { connect } from 'react-redux';

const useStyles = ContentStyle

const Profile = props => {
    const { authUser } = props
    const css = useStyles();
    //getUserInfo

    // let dashboard = [css.container, css.dashboard].join(' ')
    // let dashboardClosed = [css.container, css.dashboard2].join(' ')


    return (
        <>
            <h2 className={css.title}>Perfíl</h2>
            {/* <h3>Aqui es para editar mi propio perfil... revisar dependiendo del rol del usuario mas menus donde pueda ver a los de mas usuarios y editarlos</h3> */}
            <EditProfileForm authUser={authUser} />
            {/* campos a ver o editar   */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

