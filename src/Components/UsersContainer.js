import { Component } from "react";
import { connect } from "react-redux";
import { searchUserText, setUsers, toggleFollow, toggleFetching } from "../Redux/ActionCreators";
import Users from './Users';
import { checkFollowAPI, followAPI, getUsersAPI, unfollowAPI } from '../API/Api';

class UsersAPI extends Component {

    componentDidMount = () => {
        if (this.props.users.length === 0) {
            this.getUsers();
        }
    }

    toggleFollow = (event) => {
        checkFollowAPI(event.target.value).then((data) => {
            if (!data) {
                followAPI(event.target.value).then((data) => {
                    if (data.resultCode === 0) {
                        this.props.toggleFollow(event);
                    }
                })
            }
            else {
                unfollowAPI(event.target.value).then((data) => {
                    if (data.resultCode === 0) {
                        this.props.toggleFollow(event);
                    }
                })
            }
        })
    }

    getUsers = () => {
        this.props.toggleFetching(true);
        getUsersAPI(this.props.usersPageCount, this.props.usersPage).then((data) => {
            this.props.setUsers(data.items);
            this.props.toggleFetching(false);
        })
    }

    render() {
        return (
            <Users getUsers={this.getUsers} users={this.props.users} toggleFollow={this.toggleFollow} isFetching={this.props.isFetching} />
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
            dispatch(toggleFollow(event.target.value));
        },
        searchUserText: (event) => {
            dispatch(searchUserText(event.target.value));
        },
        setUsers: (users) => {
            dispatch(setUsers(users));
        },
        toggleFetching: (fetching) => {
            dispatch(toggleFetching(fetching));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI);