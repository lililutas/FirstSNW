import ActionTypes from "../ActionTypes";

const initialState = {
    posts: [
        { ownerId: 12, holderId: 12, likes: 26, content: 'Мой первый пост' },
        { ownerId: 12, holderId: 12, likes: 26, content: 'Мой первый пост' },
        { ownerId: 12, holderId: 12, likes: 26, content: 'Мой первый пост' },
        { ownerId: 12, holderId: 12, likes: 26, content: 'Мой первый пост' },
        { ownerId: 12, holderId: 12, likes: 26, content: 'Мой первый пост' },
        

    ],
    newPost: '',

};

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.addPost:
            state.posts.push({
                ownerId: action.ownerId,
                holderId: action.holderId,
                likes: 0,
                content: state.newPost
            });
            state.newPost = '';
            break;
        case ActionTypes.updateText:
            state.newPost = action.text;
            break;
    }
    return state;
}

export default ProfileReducer;