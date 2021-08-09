import React from 'react'

const User = (props) => {
    return (
        <div className='people__user'>
            <div className='user__info'>
                <img src='https://placehold.it/50x50/333' alt='user avatar' />
                <div>
                    <p className='user__name'>
                        {props.name}
                    </p>
                    <p className='user__status'>
                        {props.status}
                    </p>
                    <p className='user__info-main'>
                        Возраст: {props.age}, Страна: {props.country}, Город: {props.city}
                    </p>
                </div>
            </div>

            {
                !props.followed ? <button type='button' value={props.userId} onClick={props.toggleFollow} >Подписаться</button> : <button type='button' value={props.userId} onClick={props.toggleFollow}>Отписаться</button>
            }

        </div>
    )
}

export default User
