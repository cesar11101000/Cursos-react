import React from 'react';
import { shallow } from "enzyme"
import '@testing-library/jest-dom';
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demosTodos } from "../../fixtures/demoTodos"

describe('Pruebas en <TodoListItem />', () => {
    
     const handleToggle = jest.fn();
     const handleDelete = jest.fn();
     
     const wrapper = shallow(
     <TodoListItem
        todo={demosTodos[0]}
        index = {0}
        handleDelete = {handleDelete}
        handleToggle = {handleToggle}
     />
     );
     

    test('debe de mostrarse correctamente ', () => {
        
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de llamar la funcion handleDelete', () => {
        //jest.fn()???
        //toHaveBeenCalledWith
        wrapper.find('button').simulate('click');

        expect( handleDelete ).toHaveBeenCalledWith( demosTodos[0].id );
    })

    test('debe de llamar la funcion handleToggle', () => {
        wrapper.find('p').simulate('click');

        expect( handleToggle ).toHaveBeenCalledWith( demosTodos[0].id );
    })

    test('debe de mostrar el texto correctamente', () => {
        //contenido del parrafo
        const p = wrapper.find('p');
        expect( p.text() ).toBe(`${ 0 + 1 }. ${demosTodos[0].desc.trim()}`);
    })
    
    test('debe de tener la class complete si el TODO.done=true', () => {
        
        const todo = demosTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem
               todo={ todo }
            />
        );

        expect(wrapper.find('p').hasClass('complete')).toBe(true);

    })
    
    
    
    
})
