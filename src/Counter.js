import React, {useState} from 'react'

function Counter(){
    const [number, setNumber]= useState(0);
    const onIncrease= () =>{
        setNumber(prevNumber => prevNumber +1);
    }
    const onDecreate = () =>{
        setNumber(prevNumber => prevNumber -1);
    }
    return(
        <div>
            <h1>{number}</h1>
            <button onClick = {onIncrease}>+1</button>
            <button onClick = {onDecreate}>-1</button>
        </div>
    )
}

export default Counter;