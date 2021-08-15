import Profile from "./Profile";
import { addPostAction, newPostAreaAction, setUser } from '../Redux/ActionCreators';
import { connect } from "react-redux";
import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { getUserPageThunkCreator } from "../Redux/Reducers/ProfileReducer";
import { authRedirect } from '../HOC/AuthRedirect'
import { compose } from "redux";

class ProfileContainer extends Component {
    componentDidMount = () => {
        this.props.getUserPage(this.props.match.params.userId);
    };
    render() {
        return (
            <Profile {...this.props} />
        )
    }
}



const mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    newPost: state.profilePage.newPost,
    user: state.profilePage.user,
    isLogin: state.auth.isLogin
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
    },
    getUserPage: (userId) => {
        dispatch(getUserPageThunkCreator(userId))
    }
});


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    authRedirect,
    withRouter
)(ProfileContainer);
