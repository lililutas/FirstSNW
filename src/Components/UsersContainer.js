import { Component } from "react";
import { connect } from "react-redux";
import { searchUserText, setUsers, toggleFollow, toggleFetching } from "../Redux/ActionCreators";
import Users from './Users';
import * as axios from 'axios';

class UsersAPI extends Component {

    componentDidMount = () => {
        this.getUsers();
    }

    getUsers = () => {
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPageCount}&page=${this.props.usersPage}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.toggleFetching(false);
            })
    }

    render() {
        return (
            <Users getUsers={this.getUsers} users={this.props.users} toggleFollow={this.props.toggleFollow} isFetching={this.props.isFetching} />
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
        toggleFollow: (event) =>{
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