import React from "react";
import { useSelector, useDispatch } from 'react-redux'  
import { Increment,Decrement, RESET , ADD5} from "../Redux/Slice";
import './toolkit.css'

const ReduxContainer = () => {

    const sliceData = useSelector(state => state.count.Device);

    const dispatch = useDispatch()

  return (
    <div>
      <h1>This is React_redux-toolkit </h1>
      <div className="show">{sliceData}</div>
      <button className='btn' onClick={() => dispatch(Increment())}>Increment</button>
      <button className='btn' onClick={() => dispatch(Decrement())}>Decrement</button>
      <button className="btn" onClick={() => dispatch(RESET())}> RESET</button>
      <button className="btn" onClick={() => dispatch(ADD5())}>Add 5</button>
    </div>
  )
}

export default ReduxContainer
