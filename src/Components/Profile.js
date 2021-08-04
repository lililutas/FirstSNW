import React from 'react'
import Post from './Post'
export default function Profile(props) {
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
                    <form method='GET'>
                        <textarea placeholder='Напишите что-нибудь...' value={props.state.newPost} onChange={props.newPostArea} />
                        <button onClick={props.addPost}>Опубликовать</button>
                    </form>
                </div>
                <div className='posts__items'>
                    {
                        props.state.posts.map(post => {
                            return <Post name={post.name} content={post.content} likes={post.likes} />
                        }).reverse()
                    }
                </div>
            </div>
        </div>
    )
}


