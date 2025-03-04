import React from 'react'
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const SearchApp = () => {
    const [ categories, setCategories ] = useState(['transfomers']);
    
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }
        
    return (
        <>
            <h1>Listado de Gif</h1>
            <AddCategory onNewCategory={ (value) => onAddCategory(value) }/>
            {
                categories.map( (category) => (
                    <GifGrid key={category} category={category}/>
                ))
            }
        </>
    )
}
