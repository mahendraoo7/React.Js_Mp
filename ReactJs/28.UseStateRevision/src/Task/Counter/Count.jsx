import { divIcon } from "leaflet";
import React, { useState } from "react";
import './counter.css'

const Counter2 = () => {

    const [count , setCount] = useState(0);
    
    const Increment = () => {
       setCount((prev) => {
          return prev +1 ;
       })
    }

     const Decrement = () => {
        setCount((prev) => {
            return Math.max(0 , prev - 1);
        })
     }

     const Reset = () => {
        setCount((prev) => {
            return prev = 0;
        })
     }

    return (
        <div className="count">
            <h1>You have Click {count} time</h1>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}


export default Counter2