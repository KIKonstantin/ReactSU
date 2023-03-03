import { useState } from "react";

const getTitle = (count) => {
    // eslint-disable-next-line default-case
    switch(count) {
        case 1:
            return 'First Blood';
        case 2:
            return 'Double Kill'; 
        case 3:
            return 'Tripple Kill';
        case 4:
            return 'Multi Kill';   
        case 5:
            return 'Penta Kill';   
        case 6:
            return 'Unstoppable';
            default: return 'Kills';
    }
}

const Counter = (props) => {
    const [counter, setCounter] = useState(0);
    const incrementCounter = (e) => {
        setCounter(oldCounter => oldCounter + 1);
    }

    const dencrementCounter = (e) => {
        setCounter(oldCounter => oldCounter - 1);
    }

    const clearCounter = (e) => {
        setCounter(oldCounter => oldCounter = 0);
    }
    return (
        <div className="counter-container">
            <p style={{
                fontSize: (1.2 + counter/10) + 'rem'
            }}>{counter > 6 ? 'Godlike' : getTitle(counter)}: {counter}</p>
            <div className="buttons kill-buttons">
            {
                counter <= 0
                ?  null
                : <button onClick={dencrementCounter}> - </button>
            }
            {props.canReset && <button onClick={clearCounter}>0</button>}
            {
                counter < 10
                ?  <button onClick={incrementCounter}> + </button>
                : null
            }
           </div>
        </div>
    )
}

export default Counter;