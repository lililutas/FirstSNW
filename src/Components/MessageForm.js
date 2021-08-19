import { Field, reduxForm } from 'redux-form'

import React from 'react'
import { RenderForm } from '../Utils/CustomForms'


const NewMessageForm = reduxForm({
    form: 'newMessage'
})(
    (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <Field placeholder='Напишите что-нибудь...' component={RenderForm} errorVisible={false} name='message'><textarea /></Field>
                <button>Отправить</button>
            </form>
        )
    }
)

const MessageForm = (props) => {
    const onSubmit = (formData) => {
        props.sendMessage(formData.message)
    }
    return (
        <NewMessageForm onSubmit={onSubmit} />
    )
} 

export default MessageForm;