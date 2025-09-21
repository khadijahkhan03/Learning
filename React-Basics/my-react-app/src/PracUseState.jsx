import React,  {useState} from 'react'

function PracUseState() {
    const [name, setName] = useState('Guest');
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        //using setter of a stateful variable, automatically triggers a re-render
        setName('Patrick');
    }

    const updateAge = () => {
        setAge(age + 1)
    }

    const toggleIsEmployed = () => {
        setIsEmployed(!isEmployed)
    }

    return  ( 
        <div>
            <p>Name: {name} </p>
            <button onClick = {updateName}> Set Name </button>

            <p>Age: {age} </p>
            <button onClick = {updateAge}> Increment Age</button>

            <p>Employed? {isEmployed ? 'Yes' : 'No' } </p>
            <button onClick = {toggleIsEmployed}>Toggle Employment Status</button>
        </div>
    )
}

export default PracUseState