import axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login } from '../Redux/ActionCreators';
import Header from './Header';


class HeaderContainer extends Component {
    
    componentDidMount = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true,
        })
            .then((response) => {
                
                if (response.data.resultCode === 0) {
                    this.props.login({login: response.data.data.login, userId: response.data.data.id});
                }
            })

  



        
    }
    
    render() {
        return (
            <Header isLogin={this.props.isLogin}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.auth.isLogin,

});

const mapDispatchToProps = (dispatch) => ({
    login: (data) => {
        dispatch(login(data.login, data.userId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
