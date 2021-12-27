import React from 'react'
import { useSelector } from 'react-redux'
import { UsersEntry } from './UsersEntry';

export const UsersEntries = () => {

    const users = useSelector(state => state.users);

    return (
        <div className="users-box">
            {
                users.map( user => 
                    <UsersEntry 
                        key={user.index}
                        {...user}
                    />  
                )
            }
        </div>
    )
}
