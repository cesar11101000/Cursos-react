import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {
    
    test('debe de retornar un objeto con uid y name', () => {
        
        const initState = {};

        const action = {
            type: types.login,
            payload: {
                uid:'abc',
                displayName:'Cesar'
            }
        }

        const state = authReducer( initState, action);

        expect( state ).toEqual({
            uid:'abc',
            name:'Cesar'
        });
    })

    test('debe de retornar un objeto vacio', () => {
      
        const initState = {
            uid:'abc',
            displayName:'Cesar'
        };

        const action = {
            type: types.logout,
            payload: {
                uid: 'abc',
                name: 'Cesar'
            }
        }

        const state = authReducer( initState, action);

        expect( state ).toEqual({});
    })

    test('debe de retornar el estado inicial', () => {
        const initState = {
            uid:'abc',
            displayName:'Cesar'
        };

        const action = {
            type: 'asasdde'
        }

        const state = authReducer( initState, action);

        expect( state ).toEqual(initState);
    })
    
    
    
})
