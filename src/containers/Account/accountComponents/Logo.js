import React from 'react';
import PropTypes from 'prop-types';


import { useStyles } from '../Account.styles';


const Logo = ({ icon }) => {
  const classes = useStyles();

  return (
    <div className={classes.blur}>
      <div className={classes.after}></div>
      <img className={classes.logo} src={icon} alt="logo"></img>
    </div>
  )
}

Logo.propTypes = {
  icon: PropTypes.string
}

export default Logo
