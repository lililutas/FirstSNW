import {
    applyMiddleware,
    combineReducers,
    createStore
} from "redux";
import ProfileReducer from './Reducers/ProfileReducer';
import MessageReducer from './Reducers/MessageReducer';
import UsersReducer from "./Reducers/UsersReducer";
import AuthReducer from "./Reducers/AuthReducer";
import thunkMiddleWare from "redux-thunk";

const reducers = combineReducers({
    profilePage: ProfileReducer,
    messangerPage: MessageReducer,
    usersPage: UsersReducer,
    auth: AuthReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));



export default store;