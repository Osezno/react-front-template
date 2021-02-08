import React, { useState, useEffect } from 'react';
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
import Firebase from '../../config/Firebase/index';

const { errors, vertical, horizontal, pages, rol } = catalogs
const useStyles = LayoutStyle

const Header = props => {
    const css = useStyles();
    const { authUser, signOut, handleToggle, toggle, notifications, seenNotifications } = props
    const history = useHistory();

    const { uuid, token, id_rol } = authUser
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorNot, setAnchorNot] = React.useState(null);
    //snackbar
    const [open, setOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState({});
    const [loading, setLoading] = useState(false);
    const [newNotifications, setNewNotifications] = useState(false);

    //GENERAL FUNCTIONS  
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleCloseNot = () => {
        setAnchorNot(null);
    };
    const handleCloseToast = () => {
        setOpen(false);
    };
    // MAIN FUNCTIONS
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleNotifications = (event) => {
        setAnchorNot(event.currentTarget);
        let seenNotifications =[...notifications]
        Promise.all(seenNotifications.map((n)=> n.visto = true)).then(()=>{
            Firebase.seenNotifications(uuid,seenNotifications)
        })
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
            if (res.data.success) {
                signOut()
                setToastType(css.success)
            }
        }).catch(err => {
            setToastMessage(errors.serverError)
        }).finally(() => {
            setOpen(true)
            setLoading(false)
        })
    }

    const navigateTo = (route) => {
        history.push(route);
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        if (notifications.length) {
            let noLeidas = []
            notifications.forEach((n) => {
                if (!n.visto) noLeidas.push(n)
            })
            if (noLeidas.length) setNewNotifications(true)
        }
    }, [notifications])




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
            <Notifications className={newNotifications ? css.alert : null} />
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
            anchorEl={anchorNot}
            keepMounted
            open={Boolean(anchorNot)}
            onClose={handleCloseNot}
        >
            {notifications.length ? notifications.map((n, i) => <MenuItem key={i} className={css.mItem} onClick={() => navigateTo(n.url)}>{n.mensaje}</MenuItem>) : "No hay notificaciones"}
        </Menu>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem className={css.mItem} onClick={() => navigateTo(ROUTES.ACCOUNT)}>{pages.account}</MenuItem>
            <MenuItem className={css.mItem} onClick={() => navigateTo(ROUTES.DASHBOARD)}>{pages.dashboard}</MenuItem>
            <MenuItem className={css.mItem} onClick={() => navigateTo(ROUTES.PROFILE)}>{pages.profile}</MenuItem>
            {(rol[id_rol] === "Admin" || rol[id_rol] === "Manager") ? <MenuItem className={css.mItem} onClick={() => navigateTo(ROUTES.USERS)}>{pages.users}</MenuItem> : null}
            {(rol[id_rol] === "Admin" || rol[id_rol] === "Manager") ? <MenuItem className={css.mItem} onClick={() => navigateTo(ROUTES.REPORTS)}>{pages.reports}</MenuItem> : null}
            <MenuItem className={css.mItem} onClick={handleLogout}>Logout</MenuItem>
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