import ActionTypes from "../ActionTypes";

const initialState = {
    users: [{
            id: 1,
            followed: false,
            name: 'Дмитрий',
            surname: 'Соловьев',
            age: 20,
            city: 'Город',
            country: 'Страна',
            status: 'Гений)'
        },
        {
            id: 2,
            followed: false,
            name: 'Дмитрий',
            surname: 'Соловьев',
            age: 20,
            city: 'Город',
            country: 'Страна',
            status: 'Гений)'
        },
        {
            id: 3,
            followed: false,
            name: 'Дмитрий',
            surname: 'Соловьев',
            age: 20,
            city: 'Город',
            country: 'Страна',
            status: 'Гений)'
        },
        {
            id: 4,
            followed: false,
            name: 'Дмитрий',
            surname: 'Соловьев',
            age: 20,
            city: 'Город',
            country: 'Страна',
            status: 'Гений)'
        },
        {
            id: 5,
            followed: false,
            name: 'Дмитрий',
            surname: 'Соловьев',
            age: 20,
            city: 'Город',
            country: 'Страна',
            status: 'Гений)'
        },
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
    ],
    searchText: '',

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
                users: [...state.users, ...action.users]
            };
            
        default:
            return state;
    }

}

export default UsersReducer;