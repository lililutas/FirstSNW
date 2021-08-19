import Messages from "./Messages";
import { sendMessageAction, newMessageAreaAction } from '../Redux/ActionCreators';
import { connect } from "react-redux";

import { authRedirect } from '../HOC/AuthRedirect';
import React, { Component } from 'react';
import { compose } from "redux";

class MessagesContainer extends Component {


    render() {
        return (
            <Messages {...this.props} />
        )
    }
}


const mapStateToProps = (state) => ({
    state: state.messangerPage,
    isLogin: state.auth.isLogin
});

const mapDispatchToProps = (dispatch) => ({
    sendMessage: (message) => {
        dispatch(sendMessageAction(1, message));
    }
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    authRedirect
)(MessagesContainer);