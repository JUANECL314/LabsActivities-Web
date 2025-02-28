import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';
import { LoadingMessage } from './Loading';
import { Card } from './Card';

export const CustomHook = () => { 
    const { counter, increment, decrement } = useCounter(1);
    const { data, hasError,isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

    return (
        <>
            <h1>Pokemon seleccionado</h1>
            <hr/>
            <h2>{data?.name}</h2>
            {
                isLoading ? <LoadingMessage/>
                            :(<Card id={counter} name={data.name}
                                sprite={[
                                    data.sprites.front_default,
                                    data.sprites.shiny,
                                    data.sprites.back_default,
                                    data.sprites.back_shiny,
                                ]} />)}
                <button className='btn btn-primary' onClick={() => decrement()}>Anterior</button>
                <button className='btn btn-primary' onClick={() => increment()}>Siguiente</button>

                
            
        </>
    )
}