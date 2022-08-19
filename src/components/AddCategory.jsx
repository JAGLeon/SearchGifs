import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmitForm = ( e ) => {
        e.preventDefault();

        const inputValueT = inputValue.trim();

        if (inputValueT.length <= 0) return; 
        onNewCategory( inputValueT );
        setInputValue('');
    };

    return (
        <form onSubmit = { onSubmitForm }>
            <input 
                type="text" 
                placeholder='Buscar gifs'
                value = { inputValue }
                onChange = { onInputChange }
            />
        </form>
    );
};
