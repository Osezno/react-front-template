import React, { useState, useEffect } from 'react'
import * as ROUTES from '../../constants/routes';

import {
  withRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import ContentStyle from './Content.style'
import Menu from './Menu'
import MenuIcons from './MenuIcons'
import Panel from './Views/Panel'
import Profile from './Views/Profile'
import Account from './Views/Account'
import Users from './Views/Users/Index'
import Reports from './Views/Reports/Index'


const useStyles = ContentStyle

const Dashboard = props => {
  const { toggle, view } = props
  const css = useStyles();
  let dashboard = [css.container, css.dashboard].join(' ')
  let dashboardClosed = [css.container, css.dashboard2].join(' ')



  return (
    <div className={toggle ? dashboard : dashboardClosed}>
      {toggle ? <Menu /> : <MenuIcons />}
      <div className={css.wrapper}>
        <Switch>
          <Route exact path={ROUTES.DASHBOARD} render={(props) => <Panel />} />
          <Route exact path={ROUTES.PROFILE} render={(props) => <Profile />} />
          <Route exact path={ROUTES.ACCOUNT} render={(props) => <Account />} />
          <Route exact path={ROUTES.USERS} render={(props) => <Users />} />
          <Route exact path={ROUTES.REPORTS} render={(props) => <Reports />} />
          <Redirect to={ROUTES.DASHBOARD} />
        </Switch>
      </div>
    </div>
  );
}

export default Dashboard;