import React from 'react'
import Post from './Post'
export default function Profile(props) {

    let newPostArea = React.createRef();
    const addPost = (event) => {
        event.preventDefault();
        props.addPost(newPostArea.current.value);
    }

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
                        <textarea placeholder='Напишите что-нибудь...' ref={newPostArea}/>
                        <button onClick={addPost}>Опубликовать</button>
                    </form>
                </div>
                <div className='posts__items'>
                    {
                        
                        props.state.posts.map(post => {
                            console.log(2);
                            return <Post name={post.name} content={post.text} likes={post.likes} />  
                        })
                    }
                </div>
            </div>
        </div>
    )
}
