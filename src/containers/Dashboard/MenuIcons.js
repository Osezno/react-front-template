import React from 'react'
import ContentStyle from './Content.style'
import { IconButton, MenuItem } from '@material-ui/core'
import { useHistory, useLocation } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import catalogs from '../../constants/catalogs';
//import article from '@material-ui/icons/article';
import Face from '@material-ui/icons/Face';
import Assessment from '@material-ui/icons/Assessment';
import AccountBox from '@material-ui/icons/AccountBox';
import AccountBalance from '@material-ui/icons/AccountBalance';
import ViewQuilt from '@material-ui/icons/ViewQuilt';

const useStyles = ContentStyle
const {  rol } = catalogs

const MenuIcons = props => {
    let location = useLocation()
    const { id_rol } = props
    const css = useStyles();
    const history = useHistory();
    const { pathname } = location

    const navigateTo = (route) => {
        history.push(route);
        window.scrollTo(0, 0);
    }




    return (
        <div id={"menu"} className={css.menu}>
            <MenuItem className={(pathname === ROUTES.ACCOUNT) ? css.mItemActive : css.mItem} onClick={() => navigateTo(ROUTES.ACCOUNT)}>
                <IconButton>
                    <AccountBalance />
                </IconButton>
            </MenuItem>
            <MenuItem className={(pathname === ROUTES.DASHBOARD) ? css.mItemActive : css.mItem} onClick={() => navigateTo(ROUTES.DASHBOARD)}>
                <IconButton>
                    <ViewQuilt />
                </IconButton>
            </MenuItem>
            <MenuItem className={(pathname === ROUTES.PROFILE) ? css.mItemActive : css.mItem} onClick={() => navigateTo(ROUTES.PROFILE)}>
                <IconButton>
                    <AccountBox />
                </IconButton>
            </MenuItem>
            {(rol[id_rol] === "Admin" || rol[id_rol] === "Manager") ? <MenuItem className={(pathname === ROUTES.USERS) ? css.mItemActive : css.mItem} onClick={() => navigateTo(ROUTES.USERS)}>
                <IconButton>
                    <Face />
                </IconButton>
            </MenuItem> : null}
            {(rol[id_rol] === "Admin" || rol[id_rol] === "Manager") ? <MenuItem className={(pathname === ROUTES.REPORTS) ? css.mItemActive : css.mItem} onClick={() => navigateTo(ROUTES.REPORTS)}>
                <IconButton>
                    <Assessment />
                </IconButton>
            </MenuItem> : null}
        </div>

    );
}

export default MenuIcons;