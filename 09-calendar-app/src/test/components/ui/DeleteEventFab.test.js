import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { DeleteEventFab } from '../../../components/ui/DeleteEventFab';

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = {};
let store = mockStore( initState );
store.dispatch = jest.fn();


const wrapper = mount(
    <Provider store={ store }>
        <DeleteEventFab />
    </Provider>
);

describe('Pruebas en el <DeleteEventFab />', () => {
    
    test('debe de mostrarse correctamente ', () => {
        expect( wrapper ).toMatchSnapshot(); 
    })

    test('debe de llamar el eventStartDElete al hacer click', () => {
        wrapper.find('button').prop('onclick')();
    })
    
    
})
