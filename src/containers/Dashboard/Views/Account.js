
import React, { useState, useEffect } from 'react'
import ContentStyle from '../Content.style'

const useStyles = ContentStyle

const Account = props => {
    const { authUser } = props
    const css = useStyles();


    return (
        <>
            <h2 className={css.title}>Mi cuenta</h2>
         
        </>



    );
}

export default Account;
