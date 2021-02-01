
import React  from 'react'
import ContentStyle from '../../Content.style'
import NewUserForm from '../../../../components/Forms/NewUserForm';
import { connect } from 'react-redux';
import catalogs from '../../../../constants/catalogs';

import * as ACTIONS from '../../../../store/actions';

import {
    IconButton,
} from '@material-ui/core'
import ArrowBack from '@material-ui/icons/ArrowBack';

const useStyles = ContentStyle

const NewUser = props => {
    const { authUser, changeView, addToast } = props
    const { pages } = catalogs
    const css = useStyles();



    return (
        <>
            <div className={css.titleWrapper}>
                <IconButton
                    aria-label="Regresar"
                    onClick={() => { changeView(1) }}
                >
                    <ArrowBack />
                </IconButton>
                <h1 className={css.title}>{pages.newUser}</h1>
            </div>
            <NewUserForm authUser={authUser} addToast={(toast) => addToast(toast)} />
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

export default connect(mapStateToProps, mapDispatchToProps)(NewUser);

