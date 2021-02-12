
import React from 'react'
import ContentStyle from '../../Content.style'
import { connect } from 'react-redux';
import catalogs from 'constants/catalogs';
import {
    IconButton,
} from '@material-ui/core'
import PersonAdd from '@material-ui/icons/PersonAdd';
import UsersTable from 'components/Tables/UsersTable';
import * as ACTIONS from 'store/actions';
const {rol} = catalogs
const useStyles = ContentStyle

const Users = props => {
    const { authUser, changeView,addToast } = props
    const { id_rol } = authUser
    const { pages } = catalogs
    const css = useStyles();

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
            <UsersTable authUser={authUser} addToast={(toast) => addToast(toast)}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Users);

