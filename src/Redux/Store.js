import {
    combineReducers,
    createStore
} from "redux";
import ProfileReducer from './Reducers/ProfileReducer';
import MessageReducer from './Reducers/MessageReducer';
import UsersReducer from "./Reducers/UsersReducer";
import AuthReducer from "./Reducers/AuthReducer";

const reducers = combineReducers({
    profilePage: ProfileReducer,
    messangerPage: MessageReducer,
    usersPage: UsersReducer,
    auth: AuthReducer
});

let store = createStore(reducers);



export default store;