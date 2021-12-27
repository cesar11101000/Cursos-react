import { types } from "../types/types";



export const addUserToList = (index, {name, age, email}) => ({
    type: types.addUser,
    payload: {
        index,
        name,
        age,
        email
    }
})

export const deleteUser = (index) => ({
    type: types.deleteUser,
    payload: {
        index
    }
})

