import Profile from "./Profile";
import { addPostAction, newPostAreaAction, setUser } from '../Redux/ActionCreators';
import { connect } from "react-redux";
import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { getUserPageThunkCreator, saveStatusThunkCreator } from "../Redux/Reducers/ProfileReducer";
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
    isLogin: state.auth.isLogin,
    myId: state.auth.userId,
    status: state.profilePage.status
});

const mapDispatchToProps = (dispatch) => ({
    addPost: (newPostText) => {
        dispatch(addPostAction(1, newPostText));
    },
    setUser: (user) => {
        dispatch(setUser(user));
    },
    getUserPage: (userId) => {
        dispatch(getUserPageThunkCreator(userId));
    },
    saveStatus: (status) => {
        dispatch(saveStatusThunkCreator(status));
    }
});


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    
    withRouter
)(ProfileContainer);
