import { SET_AUTH_USER, SET_SESSION_ERROR, SET_INIT_SESSION } from '../actions/types';
import { updateObject } from "../utility";


const INITIAL_STATE = {
    sessionInit: null,
    authUser: null,
    error: null
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_AUTH_USER: {
            return updateObject(state, { authUser: action.payload, error: null });
        }
        case SET_SESSION_ERROR: {
            return updateObject(state, { error: action.payload });
        }
        case SET_INIT_SESSION: {
            return updateObject(state, { sessionInit: action.payload });
        }

        default:
            return state;
    }
}

export default reducer;
