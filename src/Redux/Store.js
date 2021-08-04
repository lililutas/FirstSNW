import { combineReducers, createStore } from "redux";
import ProfileReducer from './Reducers/ProfileReducer';
import MessageReducer from './Reducers/MessageReducer';

const reducers = combineReducers({
    profilePage: ProfileReducer,
    messangerPage: MessageReducer,
});

let store = createStore(reducers);



export default store;