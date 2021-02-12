
import React from 'react'
import { connect } from 'react-redux';
//import { Switch, Route, withRouter } from 'react-router-dom';
import ContentStyle from '../../Content.style'
import catalogs from 'constants/catalogs';
//import NewUserForm from 'components/Forms/NewUserForm';
//import CotizacionesTable from 'components/Tablas/CotizacionesTable';
//tabla

const useStyles = ContentStyle

const Index = props => {
    
    const { pages } = catalogs
    const css = useStyles();


    return (
        <>
            <h1 className={css.title}>{pages.cotizacion}</h1>
            <h2 className={css.subtitle}> Describe tu solicitud</h2>
            {/*  <CotizacionesTable /> */}
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

