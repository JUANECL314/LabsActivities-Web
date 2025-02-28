import {useState} from 'react';

export const AppCounter = () => {


    const [counter, setCounter] = useState(1);
    return (
        <>
        <div>
            <h1>Counter: {counter}</h1>
            <button  onClick={() => setCounter(counter + 1)}>+1</button>
            <button  onClick={() => setCounter(1)}>Reset</button>
            <button  onClick={() => setCounter(counter - 1)}>-1</button>
        </div>
        </>
    )
}

/*export const AppCounter = () => {


    const [counter, setCounter] = useState(1);
    return (
        <>
        <div>
            <h1>Counter: {counter}</h1>
            <button  onClick={() => setCounter(counter + 1)}>+1</button>
            <button  onClick={() => setCounter(1)}>Reset</button>
            <button  onClick={() => setCounter(counter - 1)}>-1</button>
        </div>
        </>
    )
}*/

