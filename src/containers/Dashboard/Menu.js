import React from 'react'
import ContentStyle from './Content.style'
import { MenuItem } from '@material-ui/core'
import { useHistory, useLocation } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import catalogs from '../../constants/catalogs';

const useStyles = ContentStyle
const { pages, rol } = catalogs

const Menu = props => {

    let location = useLocation()
    const { id_rol } = props
    const css = useStyles();
    const history = useHistory();
    // const {location} = history
    const {pathname} = location

    const navigateTo = (route) => {
        history.push(route);
        window.scrollTo(0, 0);
    }
   



    return (
        <div className={css.menu}>
            <MenuItem className={(pathname === ROUTES.ACCOUNT) ? css.mItemActive : css.mItem} onClick={() => navigateTo(ROUTES.ACCOUNT)}>{pages.account}</MenuItem>
            <MenuItem className={(pathname === ROUTES.DASHBOARD) ? css.mItemActive : css.mItem} onClick={() => navigateTo(ROUTES.DASHBOARD)}>{pages.dashboard}</MenuItem>
            <MenuItem className={(pathname === ROUTES.PROFILE) ? css.mItemActive : css.mItem} onClick={() => navigateTo(ROUTES.PROFILE)}>{pages.profile}</MenuItem>
            {(rol[id_rol] === "Admin" || rol[id_rol] === "Manager") ? <MenuItem className={(pathname === ROUTES.USERS) ? css.mItemActive : css.mItem} onClick={() => navigateTo(ROUTES.USERS)}>{pages.users}</MenuItem> : null}
            {(rol[id_rol] === "Admin" || rol[id_rol] === "Manager") ? <MenuItem className={(pathname === ROUTES.REPORTS) ? css.mItemActive : css.mItem} onClick={() => navigateTo(ROUTES.REPORTS)}>{pages.reports}</MenuItem> : null}
            {(rol[id_rol] === "Admin" || rol[id_rol] === "Manager") ? <MenuItem className={(pathname === ROUTES.COTIZACION) ? css.mItemActive : css.mItem} onClick={() => navigateTo(ROUTES.COTIZACION)}>{pages.cotizacion}</MenuItem> : null}
        </div>

    );
}

export default Menu;