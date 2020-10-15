import React, { useState, useEffect } from 'react';
import * as ROUTES from '../../constants/routes';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
//content
import LayoutStyle from './Layout.style'
import Header from './Header'
import Footer from './Footer'
import Main from '../../containers/Dashboard/Main'
//account
import SignIn from '../../containers/Account/SignIn';
import ResetPassword from '../../containers/Account/ResetPassword';
//import ChangePassword from 'containers/Account/ChangePassword';
//import NoAccess from 'containers/Content/NoAccess';
//import Pagination from '../../containers/Controls/Pagination'


const useStyles = LayoutStyle

const Layout = props => {
    const { authUser } = props
    const classes = useStyles();
    const [search, setSearch] = useState(false);
    const [loading, setloadig] = useState(false);


    const handleLoading = () => {
        setloadig(true)
        setTimeout(() => {
            setloadig(false)
        }, 3000);
    }


    return (
        <div className={classes.root}>
            <Header authUser={authUser}  />
            {
                (authUser.token && authUser.uuid) ?
                    <Main loading={loading} searchUrl={search} handleLoading={handleLoading} />
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

export default Layout;