import React from 'react'
import ProfilePosts from './ProfilePosts'
import { Preloader } from './Preloader'
import ProfileStatus from './ProfileStatus'
export default function Profile(props) {

    if (!props.user) {
        return <Preloader />
    }
    return (
        <div className='profile'>
            <div className='profile__header'>
                <div className='profile__image'>
                    {props.user.photos.large != null ? <img src={props.user.photos.large} className='profile__image-img' alt='User avatar' /> : <img src='https://placehold.it/100x100/333' className='profile__image-img' alt='User avatar' />}

                </div>
                <div className='profile__info'>
                    <div className='profile__name'>{props.user.fullName}</div>
                    <div className='profile__about'>
                        <ProfileStatus status={props.status} saveStatus={props.saveStatus}/>    
                    </div>
                </div>
            </div>
            <ProfilePosts posts={props.posts} addPost={props.addPost}/>
        </div>
    )


}


