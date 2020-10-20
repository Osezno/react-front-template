import React, { useState } from 'react';
import LayoutStyle from './Layout.style'
import Logo from './Logo'
import { IconButton, Menu, MenuItem, Snackbar, } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import catalogs from '../../constants/catalogs';
import api from '../../constants/api';
import axios from 'axios';
let vertical = 'bottom';
let horizontal = 'center';

const useStyles = LayoutStyle

const Header = props => {
    const { authUser, signOut } = props
    const {uuid, token} = authUser
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState({});
    const [loading, setLoading] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleCloseToast = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        handleClose()
        setLoading(true)


        let options = api.headersConfig(token)
        let body = { uuid: uuid }
        
        axios.post(api.signOut,  body, { headers: {
            ...options,
          }}).then((res) => {
                
                setToastMessage(res.data.message)
                setOpen(true)
                if (res.data.success) {
                    signOut()
                    setToastType(classes.success)
                }
                else setToastType(classes.error)
                setLoading(false)
            }).catch(err => {
                setLoading(false)
            })
        }

        const classes = useStyles();
        // const littleIcons = [colors.primaryLight, colors.tertiary, colors.success]

        const logout = <div className={classes.logout}>
            <IconButton
                aria-label="more"
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </div>;

        return (
            <div className={classes.header}>
                <Logo color />
                {(token && uuid && !loading) ? logout : null}
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
                {/* <Text color={colors.dark} type="title" style={{marginLeft: '10px'}}>
                
                AppName
            </Text>  */}
            </div>
        );
    }

    export default Header;