import Profile from "./Profile";
import { addPostAction, newPostAreaAction, setUser } from '../Redux/ActionCreators';
import { connect } from "react-redux";
import React, { Component } from 'react'
import axios from "axios";
import { withRouter } from "react-router-dom";


class ProfileAPI extends Component {
    componentDidMount = () => {
        debugger
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + this.props.match.params.userId)
            .then((response) => {
                this.props.setUser(response.data);
            })
            
    };
    
    
    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}



const mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    newPost: state.profilePage.newPost,
    user: state.profilePage.user,
});

const mapDispatchToProps = (dispatch) => ({
    newPostArea: (event) => {
        dispatch(newPostAreaAction(event.target.value));
    },
    addPost: (event) => {
        event.preventDefault();
        dispatch(addPostAction(1, 1));
    },
    setUser: (user) => {
        dispatch(setUser(user));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileAPI));
