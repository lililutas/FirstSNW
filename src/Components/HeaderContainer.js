import React, { Component } from 'react'
import { connect } from 'react-redux';
import { checkAuthAPI } from '../API/Api';
import { login } from '../Redux/ActionCreators';
import Header from './Header';


class HeaderContainer extends Component {

    componentDidMount = () => {
        checkAuthAPI().then((data) => {
            if (data.resultCode === 0) {
                this.props.login( data.data.login, data.data.id);
            }
        })
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
    login: (userLogin, userId) => {
        dispatch(login(userLogin, userId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
