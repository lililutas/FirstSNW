export const addPostAction = (ownerId, holderId) => {
    return {
        type: 'addPost',
        ownerId,
        holderId,
    };
}

export const newPostAreaAction = (text) => {
    return {
        type: 'updateText',
        text
    }
}