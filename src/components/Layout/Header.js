import React, { useState } from 'react';
import LayoutStyle from './Layout.style'
import Logo from './Logo'
import CircleIcon from '../Icons/CircleIcon'
import colors from '../../constants/colors';
import Text from '../Text/Text'

const useStyles = LayoutStyle

const Header = props => {
    const { authUser } = props
    const classes = useStyles();
    const littleIcons = [colors.primaryLight, colors.tertiary, colors.success]



    return (
        <div className={classes.header}>
            <Logo color />
            {/* <Text color={colors.dark} type="title" style={{marginLeft: '10px'}}>
                
                AppName
            </Text>  */}
        </div>
    );
}

export default Header;