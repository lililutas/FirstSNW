import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Login from './Login'
import {loginThunkCreator} from '../Redux/Reducers/AuthReducer';

class LoginContainer extends Component {
    render() {
        return (
            <Login {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.auth.isLogin,
})

const mapDispatchToProps = (dispatch) => ({
    login: (email, password, rememberMe) => {
        dispatch(loginThunkCreator(email, password, rememberMe));
    }
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(LoginContainer)