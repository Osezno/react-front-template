import { combineReducers } from 'redux';
import { CLEARSTORE } from '../actions/types';


import session from './session';
// import user from './user';
// import admin from './admin';
/*
export default combineReducers({
    clientState: client,
    sessionState: session,
    userState: user,
    instructorState: instructor,
    courseState: course,
    pathState: learningPath,
    programState: programs,
    utilsState: utils,
    lessonState: lesson,
});
*/
 const appReducer = combineReducers({
    sessionState: session,
});

const rootReducer = (state, action) => {

  if (action.type === CLEARSTORE ) {
    const { clientState } = state;
    state = { clientState};
    // state = undefined;
  }

  return appReducer(state, action);
};

export default  rootReducer
