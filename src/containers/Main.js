import React, { useState } from 'react';
import * as ROUTES from '../constants/routes';
import { connect } from 'react-redux';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
//content
import LayoutStyle from '../components/Layout/Layout.style'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import Dashboard from './Dashboard/Dashboard'
import * as ACTIONS from '../store/actions';
//account
import SignIn from './Account/SignIn';
import ResetPassword from './Account/ResetPassword';
//import ChangePassword from 'containers/Account/ChangePassword';
//import NoAccess from 'containers/Content/NoAccess';
//import Pagination from '../../containers/Controls/Pagination'


const useStyles = LayoutStyle

const Main = props => {
    const { authUser, signOut } = props
    const {uuid, token} = authUser
    const classes = useStyles();
   

    return (
        <div className={classes.root}>
            <Header signOut={() => signOut()} authUser={authUser}  />
            {
                (token && uuid) ?
                    <Dashboard />
                    :
                    <Router>
                        <>
                            <Switch>
                                <Route exact path={ROUTES.SIGN_IN} render={(props) => <SignIn />} />
                                <Route exact path={ROUTES.PASSWORD_FORGET} render={(props) => <ResetPassword />} />
                                {/* //<Route exact path={ROUTES.CHANGE_PASSWORD} render={(props) => <ChangePassword />} /> */}
                                <Redirect to={ROUTES.SIGN_IN} />
                            </Switch>
                        </>
                    </Router>
            }
            <Footer authUser={authUser} />
        </div>
    );
}

const mapStateToProps = state => {
    return {
      
    }
}

const mapDispatchToProps = dispatch => {
    return {
      signOut: () => dispatch(ACTIONS.signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
