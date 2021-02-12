
import React from 'react'
import { connect } from 'react-redux';
//import { Switch, Route, withRouter } from 'react-router-dom';
import ContentStyle from '../../Content.style'
import catalogs from 'constants/catalogs';
import CotizacionForm from 'components/Forms/CotizacionForm';
import {
    IconButton,
} from '@material-ui/core'
import ArrowBack from '@material-ui/icons/ArrowBack';

const useStyles = ContentStyle

const Index = props => {
    const { authUser ,changeView} = props
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
                <h1 className={css.title}>{pages.cotizacion}</h1>
            </div>

            <h2 className={css.subtitle}> Describe tu solicitud</h2>
            <CotizacionForm authUser={authUser} />
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

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);

