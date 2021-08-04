import ActionTypes from "../ActionTypes";

const initialState = {
    messages: [
        { ownerId: 1, dialogId: 1, content: 'Мое первое сообщение' },
        { ownerId: 1, dialogId: 1, content: 'Мое первое сообщение' },
        { ownerId: 1, dialogId: 1, content: 'Мое первое сообщение' },
        { ownerId: 1, dialogId: 1, content: 'Мое первое сообщение' },
        { ownerId: 1, dialogId: 1, content: 'Мое первое сообщение' },
        { ownerId: 1, dialogId: 1, content: 'Мое первое сообщение' },
    ],
    newMessage: '',
}

const MessageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.sendMessage:
            state.messages.push({
                ownerId: action.ownerId,
                dialogId: action.dialogId,
                content: action.content
            });
            state.newMessage = '';
            break;
        case ActionTypes.updateContent:
            state.newMessage = action.content;
            break;
    }
    return state;
}

export default MessageReducer;