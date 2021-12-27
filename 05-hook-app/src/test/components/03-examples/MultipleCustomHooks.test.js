import { shallow } from 'enzyme';
import React from 'react';
import { MultipleCustomHook } from '../../../components/03-examples/MultipleCustomHook'
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Pruebas en <MultipleCustomHooks />', () => {

    
    test('debe hacer match con el snapshot', () => {

        useCounter.mockReturnValue({
            counter: 10, 
            increment: () => {}
        });

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHook />); 
        expect( wrapper ).toMatchSnapshot();   
    })
        

    test('debe de mostrar la informacion', () => {
        
        useCounter.mockReturnValue({
            counter: 10, 
            increment: () => {}
        });

        useFetch.mockReturnValue({
            data: [{
                author: 'Cesar',
                quote: 'Que onda',

            }],
            loading: false,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHook />); 

        expect( wrapper.find('.alert').exists()).toBe( false );
        expect( wrapper.find('.mb-0').text().trim()).toBe( 'Que onda' );
        expect( wrapper.find('footer').text().trim()).toBe( 'Cesar' );
        console.log(wrapper.html());
        
    })
    
})
