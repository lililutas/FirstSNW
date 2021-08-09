import Profile from "./Profile";
import { addPostAction, newPostAreaAction } from '../Redux/ActionCreators';
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    state: state.profilePage
});

const mapDispatchToProps = (dispatch) => ({
    newPostArea: (event) => {
        dispatch(newPostAreaAction(event.target.value));
    },
    addPost: (event) => {
        event.preventDefault();
        dispatch(addPostAction(1, 1));
    }
});

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;