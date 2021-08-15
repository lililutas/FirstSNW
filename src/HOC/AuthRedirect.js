import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';



export const authRedirect = (Component) => {
    class RedirectComponent extends React.Component{
        render() {
            if (this.props.isLogin) {
                return (
                    <Component {...this.props} />
                )
            }
            else {
                return (
                    <Redirect to='/login' />
                )
            };
        }
    }

    const mapStateToProps = (state) =>({
        isLogin: state.auth.isLogin,
    })

    return connect(mapStateToProps)(RedirectComponent);
}