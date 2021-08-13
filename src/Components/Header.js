import React from 'react'
import '../App.css'


export default function Header(props) {
    return (
        <div className='header'>
            <div className='header__logo'>
                <img src='https://placehold.it/50x50/333' alt='logo'/>
                <p>ДВАЧ</p>
            </div>
            <div className='header__auth'>
                {props.isLogin? 
                <button type='button' className='btn-login' onClick={props.logout}>Выйти</button>
                :<button type='button' className='btn-login' onClick={props.login}>Войти</button>}
                
            </div>
        </div>
    )
}
