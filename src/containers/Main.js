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
import ChangePassword from './Account/ChangePassword';
import catalogs from '../constants/catalogs';
//import NoAccess from 'containers/Content/NoAccess';
//import Pagination from '../../containers/Controls/Pagination'


const useStyles = LayoutStyle

const Main = props => {
    const { authUser, signOut } = props
    const { uuid, token, id_estatus } = authUser
    const [toggle, setToggle] = useState(true);
    const css = useStyles();
    // views para diferentes roles
    const handleToggle = () => {
        setToggle(!toggle)
    }
   
    const accountUnavailable = () => {
        let body = <div className={css.unavailable}>
            <div className={css.letrero}>
                <h1 className={css.title}>{`TU CUENTA ESTA`}</h1>
                <h1 className={css.title}>{`DESACTIVADA`}</h1>
                <h2 className={css.subtitle}>{`Su estatus es "${catalogs.estatus[id_estatus]}"...`}</h2>
            </div>
        </div>;

        return body
    }

    const checkEstatus = () => {
        if (id_estatus === "2") return <Dashboard toggle={toggle} />;
        else return accountUnavailable();
    }

    return (

        <div className={css.root}>
            <Router>
                <Header
                    toggle={toggle}
                    handleToggle={() => handleToggle()}
                    signOut={() => signOut()}
                    authUser={authUser} />
                {
                    (token && uuid) ? checkEstatus()
                        :

                        <Switch>
                            <Route exact path={ROUTES.SIGN_IN} render={(props) => <SignIn />} />
                            <Route exact path={ROUTES.PASSWORD_FORGET} render={(props) => <ResetPassword />} />
                            <Route exact path={ROUTES.CHANGE_PASSWORD} render={(props) => <ChangePassword />} />
                            <Redirect to={ROUTES.SIGN_IN} />
                        </Switch>

                }
                <Footer authUser={authUser} />
            </Router>
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
