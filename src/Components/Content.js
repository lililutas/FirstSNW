import React from 'react'
import {
    Switch,
    Route
} from "react-router-dom";
import ProfileContainer from './ProfileContainer';
import MessagesContainer from './MessagesContainer';
import UsersContainer from './UsersContainer';

export default function Content(props) {
    return (
        <div className='content'>
            <Switch>
                <Route path='/profile/id=:userId'>
                    <ProfileContainer/>
                </Route>
                <Route path='/messages'>
                    <MessagesContainer/>
                </Route>
                <Route path='/users'>
                    <UsersContainer/>
                </Route>
            </Switch>
        </div>
    )
}


