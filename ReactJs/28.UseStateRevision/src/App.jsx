import React from 'react';
import Status from './Task/SwitchCase/Status';
import Goal from './Task/IfElse/Goal';
import Missed from './Task/IfElse/Missed' 
import CemeraOff from './Task/Ternary/CemeraOff';
import CemeraOn from './Task/Ternary/CemeraOn';
import Garage from './Task/Logical/Garage';
import ParentComponent from './Task/NestedCom.jsx/Parentcom';
// import Form from './Task/Form/form';
import FruitList from './Task/ListRendering/List';
import UserForm from './Task/Multiple/StateMultiple';
import ToggleButton from './Task/ToogleState/Button';
import Counter from './Task/ObjectState/Counter';
import ItemList from './Task/StateArray/array';
import Counter2 from './Task/Counter/count';

function App(props) {

  // const goal = props.goal;
  
  // if(goal) {

  //     return (<Goal/>)
  // }
  //  return ( 
  //   <Missed/>
  //  )

     const camera = props.camera;
     const cars = ['Ford','BMW','Audi'];
     const currentStatus = 'success';
                                       
    return (

            <>
            {/* <div>
            {camera ?<CemeraOn/> : <CemeraOff/>} 
            <Garage cars ={cars}/>

            <h1>Status:</h1>
            <Status status={currentStatus} />
            </div>
            <ParentComponent/>
            <Form/>
            <FruitList/>
            <UserForm/>
            <Counter/>
            <ToggleButton/>
            <ItemList/> */}
            <Counter2/>

            </>
          )
          
}
export default App
