import React, { useState, useEffect } from 'react'
import { Link as RouterLink, withRouter } from 'react-router-dom';
import ContentStyle from '../Content.style'
import catalogs from '../../../constants/catalogs';
import * as ROUTES from '../../../constants/routes';


const useStyles = ContentStyle

const Panel = props => {
    //const {} = props
    const css = useStyles();
    const { pages } = catalogs


    return (
        <div>
            <h2 className={css.title}>{pages.dashboard}</h2>  
        </div>

    );
}

export default withRouter(Panel);