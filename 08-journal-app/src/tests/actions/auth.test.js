import configureStore from 'redux-mock-store'; 
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { login, logout, startLoginEmailPassword, startLogout } from "../../actions/auth"
import { types } from "../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {}

let store = mockStore(initState);

describe('Pruebas en las acciones de auth', () => {

    beforeEach(() => {
        store = mockStore(initState);
    })

    test('login y logout debe de crear la accion respectiva ', () => {
        
        const actionLogin = login('cesar','abc');
        const actionLogout = logout();

        expect( actionLogin ).toEqual({
            type: types.login,
            payload: {
                uid:'cesar',
                displayName:'abc'
            }
        })

        expect( actionLogout ).toEqual({
            type: types.logout
        })
    })
    
    test('debe de realizar el logout', async() => {
        
        await store.dispatch( startLogout() );

        const actions = store.getActions();
        
        expect( actions[0] ).toEqual({
            type: types.logout
        })

        expect( actions[1] ).toEqual({
            type: types.notesLogoutCleaning
        })

    })

    test('debe de iniciar el startLoginEmailPassword', async() => {
       
        await store.dispatch( startLoginEmailPassword('test@testing.com','123456') );

        const actions = store.getActions();
        console.log( actions )

        expect( actions[1] ).toEqual({
            type: types.login,
            payload: {
                uid: 'FZa1QXQ6qrWp0fzenR8zs6QN92B3',
                displayName: null
            }
        });
    })
    
    
})
