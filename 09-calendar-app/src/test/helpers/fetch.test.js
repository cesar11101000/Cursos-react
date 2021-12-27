import { fetchConToken, fetchSinToken } from "../../helpers/fetch"

describe('Pruebas en el helper fetch', () => {
    
    let token = '';

    test('fetchSinToken debe de funcionar', async() => {
        
        const resp = await fetchSinToken('auth', { email: 'cesar@gmail.com', password: '123456'}, 'POST');

        expect( resp instanceof Response ).toBe( true );

        const body = await resp.json();
        expect( body.ok ).toBe( true );

        token = body.token;
    })

    test('fetchConToken debe de funcionar', async() => {
        
       localStorage.setItem('token', token);

       const resp = await fetchConToken('events/6164a9b2fcc2c6f014390010', {}, 'DELETE');
       const body = await resp.json();

       expect( body.msg ).toBe("Evento no existe por ese id");

    })

    
    
})
