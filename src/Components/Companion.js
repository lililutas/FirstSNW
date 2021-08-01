import React from 'react'
import { Link } from 'react-router-dom'

export default function Companion(props) {
    return (
        <Link to={'?comp=' + props.id}>
            <div className='messenger__companion'>
                <div className='companion__photo'>
                    <img src='https://placehold.it/50x50/333' />
                </div>
                <div className='companion__content'>
                    {props.name}
                </div>
            </div>
        </Link>
    )
}
