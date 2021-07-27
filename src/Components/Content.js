import React from 'react'
import Profile from './Profile'
import Messages from './Messages';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Content() {
    return (
        <div className='content'>
            <Switch>
                <Route path='/profile'>
                    <Profile />
                </Route>
                <Route path='/messages'>
                    <Messages />
                </Route>
            </Switch>
        </div>
    )
}
