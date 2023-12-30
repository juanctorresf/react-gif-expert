import { render, screen, fireEvent } from "@testing-library/react";
import GifExpertApp from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => { 

    
    test('Debe de mostrar una sola categoria', () => { 
        const category = 'One Punch';

        render( <GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input( input, {target: {value: category}} );
        fireEvent.submit( form );

        expect( screen.getAllByText(category).length).not.toBeGreaterThan(1); 

        // screen.debug();
    });

    test('Debe mostrar dos categorias', () => { 
        const category = 'Dragon Ball'

        render( <GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input( input, {target: {value: category}} );
        fireEvent.submit( form );
        
        expect( screen.getAllByRole('heading', { level: 3} ).length).toBeGreaterThan(1); 
        // screen.debug();
    })
});