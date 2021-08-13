import ActionTypes from "../ActionTypes";

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

export default UsersReducer;