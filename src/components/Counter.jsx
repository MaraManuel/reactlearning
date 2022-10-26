import { useState } from "react";


export function Counter(){
    
    function incrementing() { setCounter(counter + 1)}
    
    const [counter, setCounter] = useState(0)

    return (<>

        <h3>Counter</h3>

        <br />

        <h2> {counter} </h2>

        <br />

        <button type="button" onClick={incrementing}  >
             Increment
        </button>
    
    </>)

}