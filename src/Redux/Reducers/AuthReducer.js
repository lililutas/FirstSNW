import ActionTypes from "../ActionTypes";
import { checkAuthAPI, loginAPI, logoutAPI } from '../../API/Api'
import { login as checkLogin} from '../ActionCreators';
const initialState = {
    isLogin: false,
    login: null,
    userId: null
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.login:
            return {
                ...state,
                isLogin: action.isLogin,
                login: action.login,
                userId: action.userId
            };

        default:
            return state;
    }
}

export const checkAuthThunkCreator = () => (dispatch) => {
    checkAuthAPI().then((data) => {
        if (data.resultCode === 0) {
            dispatch(checkLogin(true, data.data.login, data.data.id));
        }
        else{
            dispatch(checkLogin(false, null, null))
        }
    })
}

export const loginThunkCreator = (email, password, rememberMe) => (dispatch) => {
    loginAPI(email, password, rememberMe).then((data) => {
        if (data.resultCode === 0) {
            dispatch(checkAuthThunkCreator());
        };
    })
}

export const logoutThunkCreator = () => (dispatch) => {
    logoutAPI().then((data) => {
        if (data.resultCode === 0) {
            dispatch(checkAuthThunkCreator());
        };
    })
}

export default AuthReducer;