import React from 'react'
import '../App.css'


export default function Header() {
    return (
        <div className='header'>
            <div className='header__logo'>
                <img src='https://placehold.it/50x50/333' alt='logo'/>
            </div>
            <div className='header__name'>
                <p>ДВАЧ</p>
            </div>
        </div>
    )
}
