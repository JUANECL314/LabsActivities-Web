import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";

import {Fruit} from './Fruit';

export const OnePieceHook = () => {
    const {counter, increment, decrement} = useCounter(1);
    const {data, hasError, isLoading} = useFetch(`https://api.api-onepiece.com/v2/fruits/en/${counter}`);
    return (
        <>
            
            <div>
                <h1>One piece: Biblia de las frutas de diablo</h1>
                <hr/>
                {
                    isLoading ? <h2>Cargando...</h2>
                    : (<Fruit id = {counter} name={data.name} type={data.type} description={data.description} image={
                        data.filename}
                    />)}
            </div>
            <div>
                <button className='btn btn-primary' onClick={() => decrement()}>Anterior</button>
                <button className='btn btn-primary' onClick={() => increment()}>Siguiente</button>    
            </div>
            
        </>
        
       
    )
}