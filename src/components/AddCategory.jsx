import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue( target.value )
    };

    const onSubmit = ( e ) => {
        e.preventDefault();
        let newInputValue = inputValue.trim();
        if( newInputValue.length <= 1 ) return;

        onNewCategory( newInputValue );
        setInputValue('');
    };

    return (
        <form onSubmit={ onSubmit } >
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
    
            />
        </form>
    )
};