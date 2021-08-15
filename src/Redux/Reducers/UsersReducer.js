import ActionTypes from "../ActionTypes";
import { toggleFetching, setUsers, toggleFollow } from '../ActionCreators';
import { getUsersAPI, checkFollowAPI, followAPI, unfollowAPI } from '../../API/Api';
/* example 
        {
            id: 6,
            followed: false,
            name: 'Дмитрий',
            surname: 'Соловьев',
            age: 20,
            city: 'Город',
            country: 'Страна',
            status: 'Гений)'
        },
 */

const initialState = {
    users: [],
    searchText: '',
    isFetching: false,
    usersPageCount: 10,
    usersPage: 1
};

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.searchUserText:
            return {
                ...state,
                searchText: action.text
            };
        case ActionTypes.searchUser:
            return state;
        case ActionTypes.toggleFollow:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id == action.userId) {
                        return {...user, followed: !user.followed};
                    } 
                    else {
                        return user;
                    }

                }),
            };
        case ActionTypes.setUsers:
            return {
                ...state,
                users: [...state.users, ...action.users],
                usersPage: state.usersPage + 1
            };
        case ActionTypes.toggleFetching:
            return{
                ...state,
                isFetching: action.fetching
            };
        default:
            return state;
    }

}

export const getUsersThunkCreator = (usersPageCount, usersPage) => (dispatch) => {
    dispatch(toggleFetching(true));
    getUsersAPI(usersPageCount, usersPage).then((data) => {
        dispatch(setUsers(data.items));
        dispatch(toggleFetching(false));
    })
}

export const toggleFollowThunkCreator = (userId) => (dispatch) => {
    checkFollowAPI(userId).then((data) => {
        if (!data) {
            followAPI(userId).then((data) => {
                if (data.resultCode === 0) {
                    dispatch(toggleFollow(userId));
                }
            })
        }
        else {
            unfollowAPI(userId).then((data) => {
                if (data.resultCode === 0) {
                    dispatch(toggleFollow(userId));
                }
            })
        }
    })
}

export default UsersReducer;