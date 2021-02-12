import React from 'react'
import * as ROUTES from '../../constants/routes';

import {
  // withRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import ContentStyle from './Content.style'
import MenuB from './Menu'
import MenuIcons from './MenuIcons'
import Panel from './Views/Panel'
import Profile from './Views/Profile'
import Account from './Views/Account'
import Users from './Views/Users/Index'
import Reports from './Views/Reports/Index'
import Onboard from './Views/Onboard/Index'
import Cotizacion from './Views/Cotizacion/Index'

const useStyles = ContentStyle

const Index = props => {
  const { toggle, onboard, id_rol } = props
  const css = useStyles();
  let dashboard = [css.container, css.dashboard].join(' ')
  let dashboardClosed = [css.container, css.dashboard2].join(' ')



  return (
    <div className={toggle ? dashboard : dashboardClosed}>
      {toggle ? <MenuB id_rol={id_rol} /> : <MenuIcons id_rol={id_rol} />}
      <div className={css.wrapper}>
        {onboard !== "false" ?
          <Switch>
            <Route exact path={ROUTES.DASHBOARD} render={(props) => <Panel />} />
            <Route exact path={ROUTES.PROFILE} render={(props) => <Profile />} />
            <Route exact path={ROUTES.ACCOUNT} render={(props) => <Account />} />
            <Route exact path={ROUTES.USERS} render={(props) => <Users />} />
            <Route exact path={ROUTES.REPORTS} render={(props) => <Reports />} />
            <Route exact path={ROUTES.COTIZACION} render={(props) => <Cotizacion />} />
            <Redirect to={ROUTES.DASHBOARD} />
          </Switch> :
          <Onboard />
        }
      </div>
    </div>
  );
}

export default Index;