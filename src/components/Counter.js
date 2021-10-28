import React from 'react';
import counter, { increase, decrease } from '../modules/counter';


const Counter = ({ number }) => {
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <button onClick={increase}>+1</button>
                <button onClick={decrease}>-1</button>
            </div>
        </div>
    )
}


export default Counter;