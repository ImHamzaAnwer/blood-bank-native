import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    SIGNUP_USER_FAIL,
    SIGNUP_USER_SUCCESS,
    SIGNUP,
    RENDER_LOGIN,
    RENDER_SIGNUP
} from '../actions/types';

const INITIAL_STATE = { email: "", password: "", user: "", error: "", loading: false };

export default (state = INITIAL_STATE, action) => {
    console.log(action, "actions in reducer")
    switch (action.type) {
        case RENDER_LOGIN:
            return INITIAL_STATE;

        case RENDER_SIGNUP:
            return INITIAL_STATE;

        case EMAIL_CHANGED:
            return { ...state, email: action.payload }

        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }

        case LOGIN_USER:
            return { ...state, loading: true, error: "" }

        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, error: "", loading: false }

        case LOGIN_USER_FAIL:
            return { ...state, error: "Authentication Failed", password: "", loading: false }

        case SIGNUP:
            return { ...state, loading: true, error: "" }

        case SIGNUP_USER_SUCCESS:
            return { ...state, error: "", loading: false }

        case SIGNUP_USER_FAIL:
            return { ...state, loading: false, error: "Signup Failed" }
        default:
            return state;
    }
}