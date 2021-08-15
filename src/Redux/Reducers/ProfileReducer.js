import ActionTypes from "../ActionTypes";
import { getUserPageAPI } from '../../API/Api';
import { setUser } from '../ActionCreators';
const initialState = {
    posts: [{
            ownerId: 12,
            holderId: 12,
            likes: 26,
            content: 'Мой первый пост'
        },
        {
            ownerId: 12,
            holderId: 12,
            likes: 26,
            content: 'Мой первый пост'
        },
        {
            ownerId: 12,
            holderId: 12,
            likes: 26,
            content: 'Мой первый пост'
        },
        {
            ownerId: 12,
            holderId: 12,
            likes: 26,
            content: 'Мой первый пост'
        },
        {
            ownerId: 12,
            holderId: 12,
            likes: 26,
            content: 'Мой первый пост'
        },


    ],
    user: null,
    newPost: '',

};

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.addPost:
            return {
                ...state,
                posts: [
                        ...state.posts,
                        {
                            ownerId: action.ownerId,
                            holderId: action.holderId,
                            likes: 0,
                            content: state.newPost
                        }
                    ],
                    newPost: ''
            };
        case ActionTypes.updateText:
            return {
                ...state,
                newPost: action.text
            };
        case ActionTypes.setUser:
        
            return {
                ...state,
                user: {
                    ...action.user
                }
            };
        default:
            return state;
    }

}

export const getUserPageThunkCreator = (userId) => (dispatch) => {
    getUserPageAPI(userId).then((data) => {
        dispatch(setUser(data));
    })
}


export default ProfileReducer;