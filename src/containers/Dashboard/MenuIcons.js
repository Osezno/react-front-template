import React, { useState, useEffect } from 'react'
import ContentStyle from './Content.style'



const useStyles = ContentStyle

const MenuIcons = props => {
    
    const css = useStyles();
   
    
    

    return (
        <div className={css.menu}>
           
        </div>

    );
}

export default MenuIcons;