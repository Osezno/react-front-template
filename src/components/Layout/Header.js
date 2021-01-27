import React, { useState } from 'react';
import LayoutStyle from './Layout.style'
import Logo from './Logo'
import { useHistory } from 'react-router-dom';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import { IconButton, Menu, MenuItem, Snackbar } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import catalogs from '../../constants/catalogs';
import api from '../../constants/api';
import * as ROUTES from '../../constants/routes';
import axios from 'axios';
import Notifications from '@material-ui/icons/Notifications';

const { errors, vertical, horizontal,pages,rol } = catalogs
const useStyles = LayoutStyle

const Header = props => {
    const css = useStyles();
    const { authUser, signOut, handleToggle, toggle } = props
    const history = useHistory();
  
    const { uuid, token, id_rol } = authUser
    const [anchorEl, setAnchorEl] = React.useState(null);
    //snackbar
    const [open, setOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState({});
    const [loading, setLoading] = useState(false);


    //GENERAL FUNCTIONS  
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleCloseToast = () => {
        setOpen(false);
    };
    // MAIN FUNCTIONS
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleNotifications = (event) => {

    }

    const handleLogout = () => {
        handleClose()
        setLoading(true)


        let options = api.headersConfig(token)
        let body = { uuid: uuid }

        axios.post(api.signOut, body, {
            headers: {
                ...options,
            }
        }).then((res) => {

            setToastMessage(res.data.message)
            setOpen(true)
            if (res.data.success) {
                signOut()
                setToastType(css.success)
            }
            else setToastType(css.error)
            setLoading(false)
        }).catch(err => {
            // no esta funcionando
            console.log(err)
            setToastMessage(errors.serverError)
            setToastType(css.error)
            setOpen(true)
            setLoading(false)
        })
    }

    const navigateTo = (route) => {
        history.push(route);
        window.scrollTo(0, 0);
    }



    // const littleIcons = [colors.primaryLight, colors.tertiary, colors.success]
    const menuToggle = <div className={css.toggle}>
        <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleToggle}
        >
            <MoreVertIcon />
        </IconButton>
    </div>;

    const rigthWrap = <div className={css.logout}>
        <IconButton
            aria-label="Notificaciones"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleNotifications}
        >
            <Notifications />
        </IconButton>
        <IconButton
            aria-label="vér mas"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
        >
            <MoreVertIcon />
        </IconButton>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem className={css.mItem} onClick={() => navigateTo(ROUTES.ACCOUNT)}>{pages.account}</MenuItem>
            <MenuItem  className={css.mItem} onClick={() => navigateTo(ROUTES.DASHBOARD)}>{pages.dashboard}</MenuItem>
            <MenuItem  className={css.mItem} onClick={() => navigateTo(ROUTES.PROFILE)}>{pages.profile}</MenuItem>
            {(rol[id_rol] === "Admin" || rol[id_rol] === "Manager") ? <MenuItem  className={css.mItem} onClick={() => navigateTo(ROUTES.USERS)}>{pages.users}</MenuItem> : null}
            {(rol[id_rol] === "Admin" || rol[id_rol] === "Manager") ? <MenuItem   className={css.mItem} onClick={() => navigateTo(ROUTES.REPORTS)}>{pages.reports}</MenuItem> : null}
            <MenuItem  className={css.mItem} onClick={handleLogout}>Logout</MenuItem>
        </Menu>
    </div>;

    return (
        <div className={css.header}>
            {toggle ? <Logo color /> : <Logo color onlyIcon />}
            {(token && uuid && !loading) ? menuToggle : null}

            {(token && uuid && !loading) ? rigthWrap : null}
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                autoHideDuration={3000}
                onClose={handleCloseToast}
                message={
                    <div className={toastType}>
                        {toastMessage}
                    </div>
                }
                key={vertical + horizontal}
            />

        </div>
    );
}

export default withRouter(Header);