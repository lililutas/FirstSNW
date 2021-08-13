import ActionTypes from "./ActionTypes";

export const addPostAction = (ownerId, holderId) => {
    return {
        type: ActionTypes.addPost,
        ownerId,
        holderId,
    };
}

export const newPostAreaAction = (text) => {
    return {
        type: ActionTypes.updateText,
        text
    }
}

export const sendMessageAction = (ownerId, dialogId) => {
    return {
        type: ActionTypes.sendMessage,
        ownerId,
        dialogId,
    };
}

export const newMessageAreaAction = (content) => {
    return {
        type: ActionTypes.updateContent,
        content
    }
}

export const toggleFollow = (userId) => {
    return {
        type: ActionTypes.toggleFollow,
        userId
    }
}

export const searchUserText = (text) => {
    return {
        type: ActionTypes.searchUserText,
        text
    }
}

export const setUsers = (users) => {
    return {
        type: ActionTypes.setUsers,
        users
    }
}

export const toggleFetching = (fetching) => {
    return {
        type: ActionTypes.toggleFetching,
        fetching
    }
}

export const setUser = (user) => {
    return {
        type: ActionTypes.setUser,
        user
    }
}

export const login = (login, userId) => {
    return {
        type: ActionTypes.login,
        login,
        userId
    }
}