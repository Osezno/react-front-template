import React from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useStyles } from './Account.styles';
import catalogs from '../../constants/catalogs';
import * as ROUTES from '../../constants/routes';
import colors from '../../constants/colors';
import Text from '../../components/Text/Text'
import ResetPasswordForm from '../../components/Forms/ResetPasswordForm';

import {
    Card,
    Link
} from '@material-ui/core'



import * as ACTIONS from '../../store/actions';

import Info from './accountComponents/Info';
import View from './accountComponents/View';


const ResetPassword = (props) => {
    
    const { pageInfo } = catalogs
    const classes = useStyles();


    return (
        <>
            <Card className={classes.signInRoot}>
                <div className={classes.content}>

                    <Info title={"lorem Ipsum"} highlight={"dolor amet"} message={pageInfo.welcomeMessage} /> 
                    <ResetPasswordForm />
                    <div className={classes.linkContainer}>
                        <Link
                            variant="subtitle2"
                            color="primary"
                            component={RouterLink}
                            to={ROUTES.SIGN_IN}
                        >

                            <Text color={colors.primary} type="small">
                               Regresar a inicio de sesión
                            </Text>
                        </Link>
                    </div>
                </div>
                <View className={classes.cover}  />
            </Card>
          <footer />
        </>
    )
}

const mapStateToProps = state => {
    return {
        error: state.sessionState.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: (email, password) => dispatch(ACTIONS.signIn(email, password))
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ResetPassword);
