import React from 'react';
import Status from './Task/SwitchCase/Status';
// import Goal from './Task/IfElse/Goal';
// import Missed from './Task/IfElse/Missed' 
// import CemeraOff from './Task/Ternary/CemeraOff';
// import CemeraOn from './Task/Ternary/CemeraOn';
// import Garage from './Task/Logical/Garage';
import ParentComponent from './Task/NestedCom.jsx/Parentcom';
import Form from './Task/Form/form';

function App() {

                                       //  IfElse  //

  // const goal = props.goal;
  
  // if(goal) {
  //     return (<Goal/>)
  // }
  //  return ( 
  //   <Missed/>
  // 

                                         // Ternary  //

// const camera = props.camera;

//    return (
//      <>
//         {camera ?<CemeraOn/> : <CemeraOff/>} 
//      </>
//    )
 
                                      //  logical Operator //

    // const cars = ['Ford','BMW','Audi'];

    // return(
    //   <Garage cars ={cars}/>
    // )
        
                                          //  Switch Case //

  //   const currentStatus = 'success'; 

  //   return (
  //   <div>
  //     <h1>Status:</h1>
  //     <Status status={currentStatus} />
  //   </div>
  // );

                                            //    Nested Component   //

  // return(
  //    <ParentComponent/>
  // )                            
                                        //  Handaling Form  //

    return (
      <Form/>
    )

}
export default App
