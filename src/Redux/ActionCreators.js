import ActionTypes from "./ActionTypes";

export const addPostAction = (holderId, newPostText) => {
    return {
        type: ActionTypes.addPost,
        holderId,
        newPostText
    };
}

export const sendMessageAction = (dialogId, newMessage) => {
    return {
        type: ActionTypes.sendMessage,
        dialogId,
        newMessage
    };
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

export const login = (isLogin, login, userId) => {
    return {
        type: ActionTypes.login,
        login,
        userId,
        isLogin
    }
}

export const setStatus = (status) => {
    return {
        type: ActionTypes.setStatus,
        status
    }
}