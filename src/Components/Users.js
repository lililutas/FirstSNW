import React from 'react';
import { Preloader } from './Preloader';
import User from './User';


const Users = (props) => {

    if(props.users.length === 0){
        return <Preloader />
    }
    return (
        <div className='users'>
                <div className='people'>
                    <div className='people__search'>
                        <p>Пользователи количество</p>
                        <form>
                            <input type='text' placeholder='Кого вы ищите?' />
                            <button type='button' onClick={props.getUsers}>Найти</button>
                        </form>
                    </div>
                    <div className='people__result'>
                        {
                            props.users.map((user) => {
                                return <User name={user.name + ' ' + user.surname} age={user.age} country={user.country} city={user.city} followed={user.followed} userId={user.id} key={user.id} toggleFollow={props.toggleFollow} />
                            })
                        }
                    </div>
                    <button type='button' className='btn-showMore' onClick={props.getUsers}>Показать больше</button>
                    { props.isFetching && <Preloader />}
                </div>
                <div className='users__sidebar'>
                    asdasdasdasd
                </div>
            </div>
    )
}


export default Users;