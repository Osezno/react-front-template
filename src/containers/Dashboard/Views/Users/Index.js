
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import ContentStyle from '../../Content.style'
import * as ROUTES from '../../../../constants/routes'; // simpler form to point?
import NewUser from './NewUser'
import Users from './Users'
const useStyles = ContentStyle

const Index = props => {
    const { authUser } = props
    const { uuid, token, id_rol } = authUser
    const [view, setView] = useState(1);
    const css = useStyles();

    // main functions
    
    const currentView = () => {
        switch (view) {
            case 1:
                return <Users changeView={(view)=> setView(view)}/>;
            case 2:
                return <NewUser changeView={(view)=> setView(view)
                } />;
            default:
                return <Users changeView={(view)=> setView(view)}/>;
        }
    }

    return (
        currentView()
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

