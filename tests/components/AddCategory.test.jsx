import { render, screen, fireEvent } from "@testing-library/react";
const { AddCategory } = require("../../src/components")


describe('Pruebas en <AddCategory />', () => { 
    test('Debe cambiar el valor de la caja de texto', () => { 
    
        render( <AddCategory onNewCategory={ () => {} }/>);
        const input = screen.getByRole('textbox');

        // Dispara un evento input en la caja de texto
        fireEvent.input( input, { target: { value: 'Saitama' } } );
        expect( input.value ).toBe('Saitama');

        // screen.debug();
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => { 
        const inputValue    = 'Saitama';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory }/>);
        
        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        // screen.debug();
        expect ( input.value ).toBe('');
        // Comprueba si la función onNewCategory se ha llamado
        expect( onNewCategory ).toHaveBeenCalled();
        // Comprueba si la función onNewCategory se ha llamado una sola vez
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        // Comprueba si la función onNewCategory se ha llamado con el valor correcto
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);
    });

    test('No debe de llamar onNewCategory si el input esta vacio', () => {  
        const onNewCategory = jest.fn();
        
        render( <AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');

        fireEvent.submit( form );

        expect( input.value ).toBe('');
        expect( onNewCategory ).not.toHaveBeenCalled();
        expect( onNewCategory ).not.toHaveBeenCalledTimes(1);

        // screen.debug();
    });
});