import Messages from "./Messages";
import { sendMessageAction, newMessageAreaAction } from '../Redux/ActionCreators';
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    state: state.messangerPage
});

const mapDispatchToProps = (dispatch) => ({
    newMessageArea: (event) => {
        dispatch(newMessageAreaAction(event.target.value));
    },
    sendMessage: (event) => {
        event.preventDefault();
        dispatch(sendMessageAction(1, 1));
    }
});

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;