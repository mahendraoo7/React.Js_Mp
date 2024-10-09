import React from 'react';
// import Goal from './Task/IfElse/Goal';
// import Missed from './Task/IfElse/Missed' 
// import CemeraOff from './Task/Ternary/CemeraOff';
// import CemeraOn from './Task/Ternary/CemeraOn';
import Garage from './Task/Logical/Garage';

function App(props) {

  // const goal = props.goal;
  
  // if(goal) {
  //     return (<Goal/>)
  // }
  //  return ( 
  //   <Missed/>
  // 

// const camera = props.camera;

//    return (
//      <>
//         {camera ?<CemeraOn/> : <CemeraOff/>} 
//      </>
//    )
 
    //  logical Operator

    const cars = ['Ford','BMW','Audi'];

    return(
      <Garage cars ={cars}/>
    )
}

export default App
