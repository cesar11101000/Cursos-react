import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../actions/users';
import Swal from 'sweetalert2';

export const UsersEntry = ({index, name, age, email}) => {
    
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch( deleteUser(index) );
        Swal.fire(
            'User was deleted successfully!',
            'Great job!',
            'success'
        );
    }

    return (
            <div className="user-box">
            
                <div className="user-info">
                    <h3>Name: {name}</h3>
                    <span> Age: {age}</span>
                    <span><small>Email: {email}</small></span>   
                </div>

                <div 
                    className="btn-delete"
                    onClick={handleDelete}
                >
                  <img src="../../assets/eliminar.png"/>
                </div>

            </div>
    )
}
