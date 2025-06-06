import {useState} from 'react';

export const AddCategory = ({onNewCategory}) => {
  
    const [inputValue, setInputValue] = useState('');
    //Guarda lo que escribamos en la caja de texto
    const onInputChange = ({target}) => 
        {setInputValue(target.value);}

    const onSubmit = (event)=> {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return ;
        //setCategories(categories => [ inputValue, ...categories ]);
        setInputValue('');
        onNewCategory(inputValue.trim());
    }
    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <label>Input:</label>
            <input type = "text" placeholder="Buscar images" value = {inputValue} onChange={onInputChange}/>
        </form>
  )
}
