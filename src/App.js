
import React, { useEffect } from 'react';

import { connect } from 'react-redux';


import Preloader from './components/Utils/Preloader';


import * as ACTIONS from './store/actions';
//import Layout from './components/Layout/Layout';
import Main from './containers/Main';
// import SignUp from 'containers/Account/SignUp';
// 


const App = (props) => {
  const { authUser } = props;
  
  useEffect(() => {
    props.fetchAuthUser();
  }, [])

  return (
    <>
      {authUser ? <Main authUser={authUser} /> : <Preloader />}
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
    fetchAuthUser: () => dispatch(ACTIONS.fetchAuthUser()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;
