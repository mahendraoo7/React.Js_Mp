import React from 'react'
import styles from './Navbar.module.css'
import { useState } from 'react'

const Navbar = () => {

    let initialState = 0

    const [count , setCount] = useState(initialState)

    const box =
        [
            {
                height: "100px",
                width: "200px"
            },
            {
                height: "100px",
                width: "200px"
            },
            {
                height: "100px",
                width: "200px"
            }
        ]
    return (
        <div>
            <h1 className={box[0]}>This is React Css Module Structure</h1>
           <span> count no:  {count}   </span>
           <button onClick={() => setCount(count+1)}>Increment</button> 
           <button onClick={() => setCount(count-1)}>Decrement</button>
           <button onClick={() => setCount(initialState)} className={styles.reset}>Reset</button>
        </div>
    )
}

export default Navbar



/* Task : - Object Style get Method [style module ] */
/* Google */
/* Link */