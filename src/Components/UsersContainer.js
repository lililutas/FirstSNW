import { Component } from "react";
import { connect } from "react-redux";
import { searchUserText, setUsers, toggleFollow, toggleFetching } from "../Redux/ActionCreators";
import Users from './Users';
import * as axios from 'axios';

class UsersAPI extends Component {

    componentDidMount = () => {
        if(this.props.users.length === 0){
            this.getUsers();
        }
       
    }

    toggleFollow = (event) => {
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/follow/${event.target.value}`, {
            withCredentials: true
        })
            .then((response) => {
                if (!response.data) {
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${event.target.value}`, {}, {
                        withCredentials: true,
                        headers: {
                            'API-KEY': '449239c2-9e17-4da1-8175-11b81b35487a'
                        }
                    })
                        .then((response) => {
                            if (response.data.resultCode === 0) {
                                this.props.toggleFollow(event);
                            }
                        })
                }
                else {
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${event.target.value}`, {
                        withCredentials: true,
                        headers: {
                            'API-KEY': '449239c2-9e17-4da1-8175-11b81b35487a'
                        }
                    })
                        .then((response) => {
                            if (response.data.resultCode === 0) {
                                this.props.toggleFollow(event);
                            }
                        })
                }
            })

    }

    getUsers = () => {
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPageCount}&page=${this.props.usersPage}`, {
            withCredentials: true,
        })
            .then((response) => {
                this.props.setUsers(response.data.items);
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