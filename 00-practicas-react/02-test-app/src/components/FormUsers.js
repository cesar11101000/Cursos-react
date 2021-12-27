import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isEmail } from 'validator';
import Swal from 'sweetalert2';
import { addUserToList } from '../actions/users';
import { useForm } from '../hooks/useForm';
import { UsersEntries } from './UsersEntries';

export const FormUsers = () => {

    const user = {
        name: "",
        age: "",
        email: ""
    }

    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    const [formValues, handleInputChange, reset] = useForm(user);
    const {name, age, email} = formValues;

    const handleSubmit = (e) =>{
        e.preventDefault();

        if( validator(formValues) ){
            dispatch( addUserToList(users.length, formValues) );
            reset();
            Swal.fire(
                'User was added successfully!',
                'Great job!',
                'success'
            );
    }}

    const validator = ({name, age, email}) => {

        if( name.trim().length === 0 ){
            Swal.fire({
                icon: 'error',
                title: 'Name not valid'
            });
            return false;
        }
        else if( parseInt(age) === 0 || age.trim().length === 0){
            Swal.fire({
                icon: 'error',
                title: 'Age not valid'
            });
            return false;
        }
        else if( !isEmail(email) ){
            Swal.fire({
                icon: 'error',
                title: 'Email not valid'
            });
            return false;
        }
        else{
            return true;
        }
        
    }

    return (
        <div className="boxes">
            
            <div className="form">

            <h2>Fill in the fields</h2>
            
             <form 
                onSubmit={handleSubmit}
             >
                <input
                    name="name"
                    autoComplete="off"
                    placeholder="Name"
                    value={name}
                    onChange={handleInputChange}
                />

                <input
                    name="age"
                    autoComplete="off"
                    placeholder="Age"
                    value={age}
                    onChange={handleInputChange}
                />

                <input
                    name="email"
                    autoComplete="off"
                    placeholder="Email" 
                    value={email}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                >
                    Add
                </button>
            </form>  
        </div>
           
            <div className="form-2">
                <h2>Users</h2>
                <UsersEntries/>
            </div>
        </div>
    )
}
