import React from 'react'
import {NavLink } from 'react-router-dom'

export default function SideBar() {
    return (
        <div className='sidebar'>
            <nav className='nav'>
                <ul className='nav__list'>
                    <li><NavLink to='/profile' className='nav__item'>Моя страница</NavLink></li>
                    <li><NavLink to='/messages' className='nav__item'>Сообщения</NavLink></li>
                    <li><NavLink to='#' className='nav__item'>Чот-там</NavLink></li>
                    <li><NavLink to='/users' className='nav__item'>Пользователи</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
