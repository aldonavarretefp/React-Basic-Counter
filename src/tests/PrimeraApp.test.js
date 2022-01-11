import React from 'react'
import {shallow} from 'enzyme';
import PrimeraApp from '../PrimeraApp';



describe('Pruebas en primera App',()=>{
    // test('debe mostrar Hola desde index', () => {
    //     const saludo  = 'Hola desde index';
    //     const {getByText} = render(<PrimeraApp saludo={saludo}/>);
    //     // eslint-disable-next-line testing-library/prefer-screen-queries
    //     expect(getByText(saludo)).toBeInTheDocument();
    // })
    
    test('debe mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola desde index!';
        const wrapper = shallow(<PrimeraApp saludo ={saludo}/>);
        expect(wrapper).toMatchSnapshot(); 
    })

    test('debe mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola desde index!';
        const subtitulo = 'Subtitulo desde index';
        const wrapper = shallow(
            <PrimeraApp 
                saludo ={saludo}
                subtitulo = {subtitulo}
            />
        );

        const textoParrafo = wrapper.find('p');
        
        expect(textoParrafo.text()).toMatchSnapshot(subtitulo); 
    })
    
    
})