import PropTypes from 'prop-types';

import { Fragment } from 'react';



export const FifthComp = ({title,subtitle}) => { 
    //Ejemplo de prototype
    // String y es obligatorio
    FifthComp.PropTypes = {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.number.isRequired
    }
    return (
        <>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </>

    )
}