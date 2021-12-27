import {todoReducer} from '../../../components/08-useReducer/todoReducer'
import { demosTodos } from '../../fixtures/demoTodos'


describe('Pruebas en todoReducer', () => {
  
    test('debe de retornar el estado por defecto ', () => {
        
        const state = todoReducer(demosTodos, {});
        expect( state ).toEqual( demosTodos );
    })

    test('debe agregar un TODO ', () => {
        
        const newTodo = {
            id: 3,
            desc: 'Aprender a cocinar',
            done: false
        }

        const state = todoReducer(demosTodos, {
            type: 'add',
            payload: newTodo
        });

        expect( state ).toEqual( [...demosTodos, newTodo] );
        expect( state.length ).toBe(3);
    })

    test('debe de borrar un TODO', () => {
        //action.payload = ID TODO

        const id = 1;
        const state = todoReducer(demosTodos, {
            type: 'delete',
            payload: id
        });

        expect( state.length ).toBe(1);
        expect( state ).toEqual( [demosTodos[1]] );
        
    })

    test('debe de hacer el toggle del TODO', () => {
        //action.payload = ID TODO

        const id = 1;
        const state = todoReducer(demosTodos, {
            type: 'toggle',
            payload: id
        });

        expect( state[1] ).toEqual( demosTodos[1] );
        expect( state[0].done ).toBe( true );
        
    })
    
    
})
