import React from 'react'
import Post from './Post'
export default function Profile() {
    return (
        <div className='profile'>
            <div className='profile__header'>
                <div className='profile__image'>
                    <img src='https://placehold.it/100x100/333' className='profile__image-img' />
                </div>
                
                <div className='profile__info'>
                    <div className='profile__name'>Соловьев Дмитрий</div>
                    <div className='profile__about'>Гений, миллиардер...</div>
                </div>
            </div>
            <div className='profile__posts'>
                <div className='posts__header'>

                </div>
                <div className='posts__items'>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </div>
    )
}
