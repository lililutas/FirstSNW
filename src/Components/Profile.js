import React from 'react'
import Post from './Post'
import { Preloader } from './Preloader'
export default function Profile(props) {
    debugger
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
                    <div className='profile__about'>{props.user.aboutMe}</div>
                </div>
            </div>
            <div className='profile__posts'>
                <div className='posts__header'>
                    <form method='GET'>
                        <textarea placeholder='Напишите что-нибудь...' value={props.newPost} onChange={props.newPostArea} />
                        <button onClick={props.addPost}>Опубликовать</button>
                    </form>
                </div>
                <div className='posts__items'>
                    {
                        props.posts.map(post => {
                            return <Post name={post.name} content={post.content} likes={post.likes} />
                        }).reverse()
                    }
                </div>
            </div>
        </div>
    )


}


