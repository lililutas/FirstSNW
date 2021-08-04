import React from "react";
import Profile from "./Profile";
import {addPostAction, newPostAreaAction} from '../Redux/ActionCreators';

export const ProfileContainer = (props) => {
    const newPostArea = (event) => {
        props.dispatch(newPostAreaAction(event.target.value));
    };
    const addPost = (event) => {
        event.preventDefault();
        props.dispatch(addPostAction(1,1));
    }
    
    return(
        <Profile state={props.state} newPostArea={newPostArea} addPost={addPost}/>
    );
}
