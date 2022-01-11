import React from 'react'
import {shallow} from 'enzyme';

import CounterApp from '../CounterApp';


describe('Pruebas en CounterApp,',()=>{
    let wrapper = shallow(<CounterApp />);
    
    beforeEach(()=>{
        wrapper = shallow(<CounterApp />);
    });

    test('debe mostrar <CounterApp /> correctamente', () => {
        expect(wrapper).toMatchSnapshot(); 
    })

    test('debe mostrar el valor por defecto de 100', () => {
        const valor = 100;
        const wrapper = shallow(<CounterApp value={valor}/>);
        expect(wrapper.find('h2').text().trim()).toBe(`${100}`);
    });
    test('debe incrementar con el botón +1', () => {
        wrapper.find('button').at(0).simulate('click');
        expect(wrapper.find('h2').text().trim()).toBe("11");
    })
    
    test('debe decrementar con el botón -1', () => {
        wrapper.find('button').at(2).simulate('click');
        expect(wrapper.find('h2').text().trim()).toBe("9"); //Cuidado, guarda el valor en el estado
    })
    test('debe hacer reset el boton "reset"', () => {
        const wrapper = shallow(<CounterApp value={105}/>);
        wrapper.find('button').at(0).simulate('click'); //+1
        wrapper.find('button').at(0).simulate('click'); //+1
        wrapper.find('button').at(1).simulate('click');// reset
        expect(wrapper.find('h2').text().trim()).toBe("105");
    })
     
});