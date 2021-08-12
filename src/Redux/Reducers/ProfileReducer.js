import ActionTypes from "../ActionTypes";

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
    user: {
        aboutMe: "я круто чувак 1001%",
        contacts: {
            facebook: "facebook.com",
            website: null,
            vk: "vk.com/dimych",
            twitter: "https://twitter.com/@sdf",
            instagram: "instagra.com/sds",
            youtube: null,
            github: "github.com",
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "не ищу, а дурачусь",
        fullName: "samurai dimych",
        userId: 2,
        photos: {
            small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    },
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
            debugger
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

export default ProfileReducer;