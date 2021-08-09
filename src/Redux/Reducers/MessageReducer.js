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
    ],
    newMessage: '',
}

const MessageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.sendMessage:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        ownerId: action.ownerId,
                        dialogId: action.dialogId,
                        content: state.newMessage
                    }
                ],
                newMessage: ''
            };
        case ActionTypes.updateContent:
            return {
                ...state,
                newMessage: action.content
            };
        default:
            return state;
    }

}

export default MessageReducer;