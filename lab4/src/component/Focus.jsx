import {useRef} from 'react';

export const Focus = () => {
    const inputRef = useRef();
    const onClick = () => {
        document.querySelector('input').select();
        //inputRef.current.focus();
    }

    return (
        <div>
            <h1>Focus</h1>
            <hr></hr>
            <input type = "text" placeholde="Nombre" className="form-control"></input>
            <input ref = {inputRef} type = "text" placeholde="Apellido" className="form-control"></input>
            <input type = "text" placeholde="Edad" className="form-control"></input>
            <button className="btn btn-primary mt2" onClick={onClick} >Set Focus </button>
        </div>
    )
}
