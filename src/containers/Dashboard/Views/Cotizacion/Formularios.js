
import React from 'react'
import { connect } from 'react-redux';
//import { Switch, Route, withRouter } from 'react-router-dom';
import ContentStyle from '../../Content.style'
import catalogs from 'constants/catalogs';
import CotizacionesTable from 'components/Tables/CotizacionesTable';
import * as ACTIONS from 'store/actions';
import {
    IconButton
} from '@material-ui/core'
import NoteAdd from '@material-ui/icons/NoteAdd';
const useStyles = ContentStyle

const Formularios = props => {
    const { authUser, changeView, addToast } = props
    const { pages } = catalogs
    const css = useStyles();


    return (
        <>
            <div className={css.titleWrapper}>
                <h1 className={css.title}>Tus Formularios</h1>
                <IconButton
                    aria-label="Regresar"
                    onClick={() => { changeView(2) }}
                >
                    <NoteAdd />
                </IconButton>
            </div>
            <CotizacionesTable authUser={authUser} />
            {/* steppers ¿hacerla por pasos? */}

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
        addToast: (toast) => dispatch(ACTIONS.addToast(toast))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Formularios);

