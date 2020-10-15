import { SET_AUTH_USER, SET_SESSION_ERROR, SET_INIT_SESSION } from './types';
import { CLEARSTORE } from './types';
// import Firebase from 'config/Firebase';

import * as ACTIONS from '../../store/actions';



export const setAuthUser = user => {
    return {
        type: SET_AUTH_USER,
        payload: user
    }
}

export const setInitSession = session => {
    return {
        type: SET_INIT_SESSION,
        payload: session
    }
}

export const clearStore = () => {
    return {
        type: CLEARSTORE,
    }
}


export const fetchAuthUser = () => async dispatch => {
    dispatch(setAuthUser({token:null,uuid:null}));
    // Firebase.auth.onAuthStateChanged(user => {
    //     dispatch(setAuthUser(user));
    //     if (user) dispatch(ACTIONS.fetchUser(user.uid));
    // });
}


export const setSessionError = error => {
    return {
        type: SET_SESSION_ERROR,
        payload: error
    }
}

export const signIn = (email, password) => async dispatch => {
    // Firebase.auth.signInWithEmailAndPassword(email, password)
    //     .catch(error => {
    //         switch (error.code) {
    //             case 'auth/wrong-password':
    //                 error.mensaje = 'La contraseña es incorrecta.'
    //                 break;
    //             case 'auth/invalid-email':
    //                 error.mensaje = 'El correo es inválido.'
    //                 break;
    //             case 'auth/user-not-found':
    //                 error.mensaje = 'El correo no se encuentra registrado aún.'
    //                 break;
    //             default:
    //                 error.mensaje = 'Hubo un error al iniciar sesión.'
    //         }
    //         dispatch(setSessionError(error))
    //     });;
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
    dispatch(clearStore());
}
