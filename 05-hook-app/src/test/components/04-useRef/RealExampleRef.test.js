import { shallow } from "enzyme"
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";


describe('Pruebas en <RealExampleRef />', () => {

    const wrapper = shallow(<RealExampleRef />);
    
    test('debe de mostrarse correctamente', () => {
             
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHook').exists() ).toBe(false);
    })

    test('debe de mostrar el componente <MultipleCustomHooks />', () => {
            
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHook').exists() ).toBe(true);

        
    })
    
})
