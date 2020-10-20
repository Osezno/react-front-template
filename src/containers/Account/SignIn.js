import React from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useStyles } from './Account.styles';
import catalogs from '../../constants/catalogs';
import * as ROUTES from '../../constants/routes';
import colors from '../../constants/colors';
import Text from '../../components/Text/Text'
import * as ACTIONS from '../../store/actions';
import { Card, Link } from '@material-ui/core'
//componentes
import Info from './accountComponents/Info';
import View from './accountComponents/View';
import SignInForm from '../../components/Forms/SignInForm';

const SignIn = (props) => {
    const { signIn} = props
    const { pageInfo } = catalogs
    const classes = useStyles();

    const addAuthUser = (session) => {
        signIn(session)
    }

    return (
        <>
            <Card className={classes.signInRoot}>
                <View className={classes.cover} cover={pageInfo.cover} />
                <div className={classes.content}>
                    <Info title={"lorem Ipsum"} highlight={"dolor amet"} message={pageInfo.welcomeMessage} />
                    <SignInForm addAuthUser={(session) => addAuthUser(session)} />
                    <div className={classes.linkContainer}>
                        <Text color={colors.dark} type="small">
                            ¿Olvidaste tu contraseña?&nbsp;
                        </Text>
                        <Link

                            variant="subtitle2"
                            color="primary"
                            component={RouterLink}
                            to={ROUTES.PASSWORD_FORGET}
                        >

                            <Text color={colors.primary} type="small">
                                Recuperar mi contraseña
                            </Text>
                        </Link>
                    </div>
                </div>
            </Card>
        </>
    )
}

const mapStateToProps = state => {
    return {
      
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: (session) => dispatch(ACTIONS.signIn(session))
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(SignIn);
