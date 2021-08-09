import React from 'react'

export default function Post(props) {
    return (
        <div className='post'>
            <div className='post__header'>
                <div className='post__image'>
                    <img src='https://placehold.it/50x50/333' alt='owner avatar'/>
                </div>
                <div className='post__info'>
                    {props.name}
                </div>
            </div>
            <div className='post__content'>
                {props.content}
            </div>
        </div>
    )
}
