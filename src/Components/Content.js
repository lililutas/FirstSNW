import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import ProfileContainer from './ProfileContainer';
import MessagesContainer from './MessagesContainer';
import UsersContainer from './UsersContainer';
import LoginContainer from './LoginContainer';
import { connect } from 'react-redux';

function Content(props) {
    return (
        <div className='content'>
            <Switch>
                <Route path='/profile/id=:userId'>
                    <ProfileContainer/>
                </Route>
                <Route path='/profile'>
                    <Redirect to={`/profile/id=${props.myId}`}/>
                </Route>
                <Route path='/messages'>
                    <MessagesContainer/>
                </Route>
                <Route path='/users'>
                    <UsersContainer/>
                </Route>
                <Route path='/login'>
                    <LoginContainer/>
                </Route>
            </Switch>
        </div>
    )
}

export default connect((state) => ({myId: state.auth.userId}))(Content)
