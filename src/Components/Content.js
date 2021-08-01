import React from 'react'
import Profile from './Profile'
import Messages from './Messages';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Content(props) {
    return (
        <div className='content'>
            <Switch>
                <Route path='/profile'>
                    <Profile state={props.state.profilePage} addPost={props.addPost}/>
                </Route>
                <Route path='/messages'>
                    <Messages state={props.state.messangerPage}/>
                </Route>
            </Switch>
        </div>
    )
}
