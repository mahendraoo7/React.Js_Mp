import React, { useCallback, useRef } from "react";
import './btn.css'

 const Button = () => {

    const styleref = useRef(null);

    const HandleClick = useCallback(() => {
        alert('Hello world');
    })


    const HandleStyle = () => {
        styleref.current.style.display = 'flex'
    }


     return (

        <div>
            <button className="btn" onClick={HandleClick}>Click Here</button>

            <button className="btn" onClick={HandleStyle}>Input Data</button>

             <form ref={styleref} action="" className="form"  style={{display : 'none'}}>
                <label > Name :  
                     <input type="text" /></label>
                <label > Mobile No :
                     <input type="number" name="" id="" />
                </label>
                <label > Email :
                     <input type="email" name="" id="" />
                </label>
                <button className="btn" type="submit">Submit</button>
             </form>
             
     </div>
    )
 }


 export default Button