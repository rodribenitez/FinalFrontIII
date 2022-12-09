import React from 'react';
import { shallow } from 'enzyme';
import Form from '../Components/Form'

describe('MiComponente', () => {

    it('Debe renderizar el componente sin errores', () => {
        const componente = mount(<Form />);
        expect(componente.find('div').length).toBe(1);
    });

    it('Debe tener una prop blSomeProp igual a true', () => {
        const componente = mount(<Form blSomeProp={true} />);
        expect(componente.instance().props.blSomeProp).toBe(true);
    });

    it('Debe tener una función llamada myFunc que retorne un string', () => {
        const componente = mount(<Form />);
        expect(typeof componente.instance().myFunc()).toBe("string");
    });

});