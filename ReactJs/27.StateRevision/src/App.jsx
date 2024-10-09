import React from 'react';
import Goal from './Task/IfElse/Goal';
import Missed from './Task/IfElse/Missed' 
import CemeraOff from './Task/Ternary/CemeraOff';
import CemeraOn from './Task/Ternary/CemeraOn';

function App(props) {

  // const goal = props.goal;
  
  // if(goal) {
  //     return (<Goal/>)
  // }
  //  return ( 
  //   <Missed/>
  // )
    
  const camera = props.camera;

   return camera ?<CemeraOn/> : <CemeraOff/> ;

}

export default App