import React from 'react';
import Post from './Post';
import { Field, reduxForm } from 'redux-form';
import { RenderForm } from '../Utils/CustomForms';
import { requiredField } from '../Utils/Validators';
 


const AddPostForm = reduxForm({
    form: 'addPost'
})(
    (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <Field placeholder='Напишите что-нибудь...' component={RenderForm} name='newPostArea' errorVisible={false} validate={[requiredField]}><textarea/></Field>
                <button type='submit'>Опубликовать</button>
            </form>
        )
    }
)



const ProfilePosts = (props) => {
    const onSubmit = (formData) => {
        props.addPost(formData.newPostArea);
    }    
    return (
        <div className='profile__posts'>
            <div className='posts__header'>
                <AddPostForm onSubmit={onSubmit} />
            </div>
            <div className='posts__items'>
                {
                    props.posts.map(post => {
                        return <Post name={post.name} content={post.content} likes={post.likes} />
                    }).reverse()
                }
            </div>
        </div>
    )
}




export default ProfilePosts;