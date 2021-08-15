import ActionTypes from "../ActionTypes";
import { checkAuthAPI } from '../../API/Api'
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
                isLogin: true,
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
            dispatch(checkLogin(data.data.login, data.data.id));
        }
    })
}

export default AuthReducer;