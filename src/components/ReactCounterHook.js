import React, {useState} from 'react'

export default function ReactCounterHook() {
    const [count, setCount] = useState(0)

    const onIncrement = () =>{
        setCount(count + 1)
    }

    const onDecrement = () =>{
        setCount(count - 1)
    }

    const Reset = () =>{
        setCount(0)
    }

    return (
        <div>
            {count} <br/>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={count > 0 ? onDecrement : null}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}