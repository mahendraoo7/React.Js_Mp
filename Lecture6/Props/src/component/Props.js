import React from 'react'

const Card = (props) => {
  return (
    <div>
    <h1 style={{color:"red"}}>card Name is {props.name}</h1>
    <h2>card price is {props.price}</h2>
    
    </div>
  )
}

export default Card ;
