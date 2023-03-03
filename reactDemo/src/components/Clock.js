
import React, { useState } from "react";



export default function Timer(props){

    const [seconds, setSeconds] = useState(props.start);
    console.log('SECONDS -> ',seconds);

    setTimeout(() => {
        setSeconds((oldSeconds) => oldSeconds + 1  );
    }, 1000)
    return(
        <div>
            TIME: {seconds}s
        </div>
    )
}