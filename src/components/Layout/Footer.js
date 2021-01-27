import React from 'react';
import LayoutStyle from './Layout.style'

import colors from '../../constants/colors';
import catalogs from '../../constants/catalogs';
import Text from '../../components/Text/Text'

const useStyles = LayoutStyle

const Footer = props => {
   // const { authUser } = props
    const css = useStyles();
    //const littleIcons = [colors.primaryLight, colors.tertiary, colors.success]



    return (
        <div className={css.footer}>
            <p className={css.footerLink}></p>
            <p className={css.footerLink}></p>
            <p className={css.footerLink}></p>
            <p className={css.footerLink}></p>
            <p className={css.footerLink}></p>
            <p className={css.footerLink}></p>
            <Text color={colors.lightest} type="small">
             {catalogs.pageInfo.footerMessage}
            </Text>
        </div>
    );
}

export default Footer;