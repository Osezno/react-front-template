import { SET_AUTH_USER, SET_NOTIFICATIONS} from '../actions/types';
import { updateObject } from "../utility";


const INITIAL_STATE = { 
    authUser: {id_estatus: null, onboard: null, id_rol: null, token: null, uuid: null},
    notifications:{}
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_AUTH_USER: {
            return updateObject(state, { authUser: action.payload});
        }
        case SET_NOTIFICATIONS: {
            return updateObject(state, { notifications: action.payload });
        }
        // case SET_INIT_SESSION: {
        //     return updateObject(state, { sessionInit: action.payload });
        // }

        default:
            return state;
    }
}

export default reducer;
