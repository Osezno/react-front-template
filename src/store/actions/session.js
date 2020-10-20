import { SET_AUTH_USER, SET_SESSION_ERROR, SET_INIT_SESSION } from './types';
import { CLEARSTORE } from './types';
// import Firebase from 'config/Firebase';

//import * as ACTIONS from '../../store/actions';



export const setAuthUser = user => {
    return {
        type: SET_AUTH_USER,
        payload: user
    }
}



export const clearStore = () => {
    return {
        type: CLEARSTORE,
    }
}


export const fetchAuthUser = () => async dispatch => {
    try {
        if (localStorage.length) {
            let session = {}
            session['id_estatus'] = localStorage.getItem('id_estatus');
            session['onboard'] = localStorage.getItem('onboard');
            session['id_rol'] = localStorage.getItem('id_rol');
            session['token'] = localStorage.getItem('token');
            session['uuid'] = localStorage.getItem('uuid');
            dispatch(setAuthUser(session));
        }
    } catch {
        console.log("error")
        // ignore write errors
    }

}


export const signIn = (session) => async dispatch => {
    try {

        localStorage.setItem('id_estatus', session.id_estatus);
        localStorage.setItem('onboard', session.onboard);
        localStorage.setItem('id_rol', session.id_rol);
        localStorage.setItem('token', session.token);
        localStorage.setItem('uuid', session.uuid);
    } catch {
        console.log("error")
        // ignore write errors
    }
    dispatch(setAuthUser(session));
}

export const signUp = (email, password, user) => async (dispatch, getState) => {
    // Firebase.auth.createUserWithEmailAndPassword(email, password)
    //     .then(authUser => {
    //         user.clientId = getState().clientState.subdomain;
    //         const uid = authUser.user.uid;
    //         Firebase.userFS().doc(uid).set(user);
    //     })
    //     .catch(error => {
    //         switch (error.code) {
    //             case 'auth/weak-password':
    //                 error.mensaje = 'La contraseña debe contener mínimo 6 caracteres.'
    //                 break;
    //             case 'auth/invalid-email':
    //                 error.mensaje = 'El correo es inválido.'
    //                 break;
    //             case 'auth/email-already-in-use':
    //                 error.mensaje = 'El correo ya está ligado a una cuenta.'
    //                 break;
    //             default:
    //                 error.mensaje = 'Hubo un error al registrar la cuenta.'
    //         }
    //         dispatch(setSessionError(error))
    //     });;
}

export const signOut = () => async dispatch => {
    // Firebase.auth.signOut();
    localStorage.clear();
    dispatch(clearStore());
    //dispatch(setAuthUser({ token: null, uuid: null }));
}
