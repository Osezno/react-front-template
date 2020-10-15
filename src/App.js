
import React, { useEffect } from 'react';
import logo from './logo.svg';
import { useStyles } from './App.styles';
import { connect } from 'react-redux';


import Preloader from './components/Utils/Preloader';


import * as ACTIONS from './store/actions';
import Layout from './components/Layout/Layout';
// import SignUp from 'containers/Account/SignUp';
// 


const App = (props) => {
  const classes = useStyles();
  const { authUser } = props;

  useEffect(() => {
    props.fetchAuthUser();
  }, [])

  return (
    <>
      {authUser ? <Layout authUser={authUser} /> : <Preloader />}
    </>

    // <div className={classes.app}>
    //   <header className={classes.appHeader}>
    //     <img src={logo} className={classes.logo} alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    // </p>

    //   </header>
    // </div>

  );
}
const mapStateToProps = state => {
  return {
    authUser: state.sessionState.authUser,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAuthUser: () => dispatch(ACTIONS.fetchAuthUser()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;
