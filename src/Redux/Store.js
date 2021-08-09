import {
    combineReducers,
    createStore
} from "redux";
import ProfileReducer from './Reducers/ProfileReducer';
import MessageReducer from './Reducers/MessageReducer';
import UsersReducer from "./Reducers/UsersReducer";

const reducers = combineReducers({
    profilePage: ProfileReducer,
    messangerPage: MessageReducer,
    usersPage: UsersReducer,
});

let store = createStore(reducers);



export default store;