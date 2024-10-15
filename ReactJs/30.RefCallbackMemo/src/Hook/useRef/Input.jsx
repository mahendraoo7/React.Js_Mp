import React, {useRef} from 'react';
import './input.css'

const Input = () => {

    const inputref =  useRef(null);
    const styleRef = useRef(null);
    const focusInput = () => {
        inputref.current.focus();
        inputref.current.style.color = 'red';   
    };  

     const HandleStyle = () => {
        styleRef.current.style.color = "darkblue";
        styleRef.current.style.display = "block";
        
     }

    return (
        <div>
            <input ref={inputref} />
            <button onClick={focusInput}>Focus Input </button> <br />
            <button className='button' onClick={HandleStyle}>Click</button>
             <div ref={styleRef} style={{display : 'none'}}>
                    <h1>Hello World</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est voluptas odit quisquam quae magnam! Excepturi tempore qui similique maiores nemo molestiae ex asperiores cupiditate vel ea, dolor, eius pariatur illum?</p>
             </div>
        </div>
    )

};

export default Input