import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
const [formState, setFormState] = useState(
    {
        matricula: 'A0XXXXXXX',
        nombre: 'nombre',
        apellido: 'apellido(s)',
        edad: 'edad',
        universidad: 'universidad',
        carrera: 'carrera',
});
    const { matricula, nombre, appellido, edad, universidad, carrera } = formState;
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({...formState, [ name ]: value
        });
    }
    const [control, setControl] = useState(0);
    return (
        <>
       
            <h1>Formulario Simple</h1><hr />
            <input type="text" className="form-control" placeholder="Matricula" name="matricula" value={ matricula } onChange={ onInputChange } />

            <input type="text" className="form-control mt-2" placeholder="Nombre" name="nombre" value={ nombre } onChange={ onInputChange } />
            <input type="text" className="form-control mt-2" placeholder="Apellido" name="apellido" value={ appellido } onChange={ onInputChange } />
            <input type= "text" className='form-control mt-2' placeholder="Edad" name="edad" value={ edad } onChange={ onInputChange } />
            <input type="text" className="form-control mt-2" placeholder="Universidad" name="universidad" value={ universidad } onChange={ onInputChange } />
            <input type="text" className="form-control mt-2" placeholder="Carrera" name="carrera" value={ carrera } onChange={ onInputChange } />
           
           
   
            <button className="btn btn-primary mt-2" onClick={ () =>  setControl(control + 1 ) }>Enviar</button>

            
            <div className="mt-3">
            <h3>{control > 0 ? "Estado del Formulario" :""}</h3>
            <p>{ control > 0 ? `Matrícula: ${formState.matricula}, Nombre: ${formState.nombre}, Apellido: ${formState.apellido}, Edad: ${formState.edad}, Universidad: ${formState.universidad}, Carrera: ${formState.carrera}` : ''}</p>
            </div>
               
        </>
    )
}

