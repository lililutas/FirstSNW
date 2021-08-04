import React from 'react'
import Messages from './Messages';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { ProfileContainer } from './ProfileContainer';

export default function Content(props) {
    return (
        <div className='content'>
            <Switch>
                <Route path='/profile'>
                    <ProfileContainer state={props.state.profilePage} dispatch={props.dispatch}/>
                </Route>
                <Route path='/messages'>
                    <Messages state={props.state.messangerPage} dispatch={props.dispatch}/>
                </Route>
            </Switch>
        </div>
    )
}


