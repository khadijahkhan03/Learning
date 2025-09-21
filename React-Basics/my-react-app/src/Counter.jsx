import React, {useState} from 'react'

function Counter() {
    const [num, setNum] = useState(0);

    const increment = () => {
        setNum(num + 1);
    }
    const decrement = () => {
        setNum(num - 1);
    }
    const reset = () => {
        setNum(0);
    }

    return (
        <>
        <div className = 'num-container'>
            <h1 className= 'num-display' >{num}</h1>
            <button className = 'num-button' onClick = {decrement}> Decrement </button>
            <button className = 'num-button' onClick = {reset}> Reset </button>
            <button className = 'num-button' onClick = {increment}> Increment </button> 
        </div>
        </>
    )
}

export default Counter;