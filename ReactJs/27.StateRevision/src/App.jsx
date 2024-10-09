import Goal from './Task/IfElse/Goal';
import Missed from './Task/IfElse/Missed' 

function App(props) {

  const goal = props.goal;
  
  if(goal) {

      return (

      <Goal/>
    )
  }

   return (
    
    <Missed/>
  )
}

export default App
