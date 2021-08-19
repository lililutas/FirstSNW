import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { checkAuthThunkCreator, logoutThunkCreator } from '../Redux/Reducers/AuthReducer';
import Header from './Header';


class HeaderContainer extends Component {

    componentDidMount = () => {
        this.props.checkAuth();
    }

    render() {
        return (
            <Header isLogin={this.props.isLogin} logout={this.props.logout} />
        )
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.auth.isLogin,

});

const mapDispatchToProps = (dispatch) => ({
    logout: () => {
        dispatch(logoutThunkCreator());
    },
    checkAuth: () => {
        dispatch(checkAuthThunkCreator());
    }
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(HeaderContainer);