import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { checkAuthThunkCreator } from '../Redux/Reducers/AuthReducer';
/* import { login } from '../Redux/ActionCreators'; */
import Header from './Header';


class HeaderContainer extends Component {

    componentDidMount = () => {
        this.props.checkAuth();
    }

    render() {
        return (
            <Header isLogin={this.props.isLogin} />
        )
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.auth.isLogin,

});

const mapDispatchToProps = (dispatch) => ({
   /*  login: (userLogin, userId) => {
        dispatch(login(userLogin, userId));
    }, */
    checkAuth: () => {
        dispatch(checkAuthThunkCreator());
    }
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(HeaderContainer);