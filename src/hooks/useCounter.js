import { useState } from "react"

export const useCounter = ( inicialValue = 10 ) => {

    const [counter, setCounter] = useState(inicialValue);

    const increment = (value = 10) => {
        setCounter(counter + value);
    }

    const decrement = (value = 10) => {
        if(counter >= 1) setCounter(counter - value);
    }

    const reset = () => {
        setCounter(inicialValue);
    }

    return  {
        counter,
        increment,
        decrement,
        reset
    }
}