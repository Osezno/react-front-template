
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import ContentStyle from '../../Content.style'
import catalogs from '../../../../constants/catalogs';

const useStyles = ContentStyle

const Index = props => {
    const { authUser } = props
    const { pages } = catalogs
    const css = useStyles();


    return (
        <>
            <h1 className={css.title}>{pages.reports}</h1>
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

