import React, {useState, useEffect} from 'react'

function PracUseEffect() {
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(count + 1);
    }

    return (
        <>
        <p>Count: {count} </p>
        <button onClick={addCount}> Add </button>
        </>
    )
}

export default PracUseEffect