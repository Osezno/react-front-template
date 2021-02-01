
import React from 'react'
import ContentStyle from '../Content.style'
import EditProfileForm from '../../../components/Forms/EditProfileForm';
import { connect } from 'react-redux';

import * as ACTIONS from '../../../store/actions';

const useStyles = ContentStyle

const Profile = props => {
    const { authUser,addToast } = props
    const css = useStyles();

    return (
        <>
            <h2 className={css.title}>Perfíl</h2>
            <EditProfileForm authUser={authUser} addToast={(toast) => addToast(toast)} />
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
        addToast:(toast)=>dispatch(ACTIONS.addToast(toast))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

