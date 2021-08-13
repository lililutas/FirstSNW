import ActionTypes from "../ActionTypes";

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

export default AuthReducer;