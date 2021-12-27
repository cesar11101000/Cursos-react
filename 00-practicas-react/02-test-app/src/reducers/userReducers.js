import { types } from "../types/types";

const initialState = {
    users: []
}

export const userReducer = (state = initialState, action) => {

    switch( action.type){

        case types.addUser:
            return{
                users: [ ...state.users, action.payload ]
            }

        case types.deleteUser:
            return {
                users: state.users.filter( user => user.index !== action.payload.index )
            }

        default: 
            return state;
    }
    
}