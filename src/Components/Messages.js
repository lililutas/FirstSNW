import React from 'react'
import Companion from './Companion'
import { Message } from './Message'

export default function Messages(props) {
    return (
        <div className='messenger'>
            <div className='messenger__companions'>
                <Companion name='Name Surname' id='1' />
                <Companion name='Name Surname' id='2' />
            </div>
            <div className='messenger__dialog'>
                <div className='dialog__header'>
                    <div className='dialog__header-image'>
                        <img src='https://placehold.it/50x50/333' />
                    </div>
                    <div className='dialog__header-info'>
                        Name Surname
                    </div>
                </div>
                <div className='dialog__messages'>
                    {
                        props.state.messages.map((message) => {
                            return <Message text={message.text} author={message.name} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
