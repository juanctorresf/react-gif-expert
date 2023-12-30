import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Prueba en el componente <GifGrid />', () => { 
    
    const category = 'One Punch';
    
    test('Debe mostrar el loading inicialmente', () => { 
        // prueba ficticia de useFetchGifs
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render( <GifGrid category={ category } /> );
        
        expect( screen.getByTestId('loader'));
        expect( screen.queryByText( category ) );
        // screen.debug();
    });

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {   
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
            {
                id: 'AB12',
                title: 'Batman',
                url: 'https://localhost/batman.jpg'
            },
        ];
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render( <GifGrid category={ category } /> );
        expect( screen.getAllByRole('img').length ).toBe(3);
        // screen.debug();
    });
});