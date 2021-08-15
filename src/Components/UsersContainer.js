import { Component } from "react";
import { connect } from "react-redux";
import { searchUserText, setUsers, toggleFetching } from "../Redux/ActionCreators";
import Users from './Users';
import { getUsersThunkCreator, toggleFollowThunkCreator } from "../Redux/Reducers/UsersReducer";
import { compose } from "redux";

class UsersContainer extends Component {

    componentDidMount = () => {
        if (this.props.users.length === 0) {
            this.props.getUsers(this.props.usersPageCount, this.props.usersPage);
        }
    }

    render() {
        return (
            <Users getUsers={this.props.getUsers} users={this.props.users} toggleFollow={this.props.toggleFollow} isFetching={this.props.isFetching} />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        searchText: state.usersPage.searchText,
        isFetching: state.usersPage.isFetching,
        usersPageCount: state.usersPage.usersPageCount,
        usersPage: state.usersPage.usersPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (event) => {
            event.preventDefault();
            dispatch(toggleFollowThunkCreator(event.target.value));
        },
        searchUserText: (event) => {
            dispatch(searchUserText(event.target.value));
        },
        setUsers: (users) => {
            dispatch(setUsers(users));
        },
        toggleFetching: (fetching) => {
            dispatch(toggleFetching(fetching));
        },
        getUsers: (usersPageCount, usersPage) => {
            dispatch(getUsersThunkCreator(usersPageCount, usersPage));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer);
