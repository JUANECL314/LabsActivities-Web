import React from 'react'
import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {
    const [counter, setCounter] = useState(10);
    /*const incrementP = () => {
        setCounter(counter + 1);
        console.log('CallBack Hook');
    }*/
    const incrementP = useCallback( () => {
        console.log('CallBack Hook');
        setCounter((value) => value + 1);
    })
    return (
        <>
            <h1>CallBack Hook: {counter}</h1>
            <hr></hr>
            <ShowIncrement increment={incrementP} />
        </>
    )
}
