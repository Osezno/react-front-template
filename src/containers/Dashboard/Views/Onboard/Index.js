
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import ContentStyle from '../../Content.style'
import api from 'constants/api';
import axios from 'axios';
import catalogs from 'constants/catalogs';
import * as ACTIONS from 'store/actions';
import {
    Button
} from '@material-ui/core'

const useStyles = ContentStyle
const { errors,pages , toast, inputStr} = catalogs

const Index = props => {
    const { authUser,addToast,updateUserOnLS } = props
    const { uuid, token } = authUser
    const css = useStyles();
    const [loading, setLoading] = useState(false);
    
    const skipOnboard = ()=>{
        let url = api.usuarios.onboard;
        console.log(url)
        let options;
        options = api.headersConfig(token)
     
        setLoading(true)
        axios.post(url, {uuid:uuid}, {
            headers: {
                ...options,
            }
        }).then((res) => {
            toast['message'] = res.data.message
            if (res.data.success){
                toast['success'] = true  
                updateUserOnLS({token:token,uuid:uuid,...res.data.data}) 
            } 
           
            // change the authUser
           
        }).catch(err => {
            toast['message'] = errors.serverError
        }).finally(()=>{         
            addToast(toast)
            setLoading(false)
        })
    }
    

    return (
        <>
            <h1 className={css.title}>{pages.onboard}</h1>
            <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={()=>skipOnboard()}
                disabled={loading}
                style={{ textTransform: 'none', marginTop: 10 }}
            >
                {loading ? inputStr.load : inputStr.skip}
            </Button>
        </>



    );
}

const mapStateToProps = state => {
    return {
        authUser: state.sessionState.authUser,
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToast:(toast)=>dispatch(ACTIONS.addToast(toast)),
        updateUserOnLS:(session)=>dispatch(ACTIONS.updateUserOnLS(session))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);

