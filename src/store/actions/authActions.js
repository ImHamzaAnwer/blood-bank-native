import firebase from 'firebase';
import { RENDER_LOGIN, 
        EMAIL_CHANGED, 
        PASSWORD_CHANGED, 
        LOGIN_USER, 
        LOGIN_USER_SUCCESS, 
        LOGIN_USER_FAIL, 
        SIGNUP_USER_SUCCESS, 
        SIGNUP,
        SIGNUP_USER_FAIL,
        RENDER_SIGNUP } from './types'
import { Actions } from 'react-native-router-flux';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const signup = ({ email, password }) => {
    return (dispatch) => {
        dispatch({type : SIGNUP})
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => { Actions.login({ type: 'reset' }); })
            .catch(() => signupFail(dispatch))
    }
}

export const login = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => { loginUserFail(dispatch) })
    }
}

export const renderSignup = () =>{
    return {type: RENDER_SIGNUP}
}
export const renderLogin = () =>{
    return {type: RENDER_LOGIN}
}

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    })
    Actions.donors();
};

const signupSuccess = (dispatch) =>{
    dispatch({type: SIGNUP_USER_SUCCESS})
    Actions.login();
}

const signupFail = (dispatch) => {
    dispatch({
        type: SIGNUP_USER_FAIL
    })
}