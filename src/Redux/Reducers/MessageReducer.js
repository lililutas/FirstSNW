import ActionTypes from "../ActionTypes";

const initialState = {
    messages: [{
            ownerId: 1,
            dialogId: 1,
            content: 'Мое первое сообщение'
        },
        {
            ownerId: 1,
            dialogId: 1,
            content: 'Мое первое сообщение'
        },
        {
            ownerId: 1,
            dialogId: 1,
            content: 'Мое первое сообщение'
        },
        {
            ownerId: 1,
            dialogId: 1,
            content: 'Мое первое сообщение'
        },
        {
            ownerId: 1,
            dialogId: 1,
            content: 'Мое первое сообщение'
        },
        {
            ownerId: 1,
            dialogId: 1,
            content: 'Мое первое сообщение'
        },
    ]
}

const MessageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.sendMessage:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        dialogId: action.dialogId,
                        content: action.newMessage
                    }
                ]
            };
        default:
            return state;
    }

}

export default MessageReducer;