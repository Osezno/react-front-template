import React from 'react';
import PropTypes from 'prop-types';


import LayoutStyle from './Layout.style';
import catalogs from '../../constants/catalogs';
const useStyles = LayoutStyle


const Logo = props => {
    const { color, onlyIcon } = props
    const { pageInfo } = catalogs
    
    const classes = useStyles();
    let logo;
  

    if (color && onlyIcon) {
        logo = <img className={classes.logo} src={pageInfo.icon} alt="logo"/>
    }
    else if (color && !onlyIcon) {
        logo = <img className={classes.logo} src={ pageInfo.logo} alt="logo"/>
    }
    else if (!color && onlyIcon) {
        logo = <img className={classes.whitelogo} src={pageInfo.icon} alt="logo"/>
    }
    else {
        logo = <img className={classes.whitelogo} src={ pageInfo.logo} alt="logo"/>
    }

    return (
       <div className={classes.logoContainer}>
           {logo}
       </div>
    )
}

Logo.propTypes = {
    icon: PropTypes.string
}

export default Logo
