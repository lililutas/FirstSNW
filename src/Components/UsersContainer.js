import { connect } from "react-redux";
import { searchUserText, setUsers, toggleFollow } from "../Redux/ActionCreators";
import Users from "./Users";



const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        searchText: state.usersPage.searchText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (event) =>{
            event.preventDefault();
            dispatch(toggleFollow(event.target.value));
        },
        searchUserText: (event) => {
            dispatch(searchUserText(event.target.value));
        },
        setUsers: (users) => {
            dispatch(setUsers(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);