import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { buy_fruits, buy_veggies } from '../redux/Action'


const Redux_Container = () => {

    const FruitsData = useSelector(state => state.Fruits.numOfFruits)
    const VeggiesData = useSelector(state => state.Veggies.NumOfVeggies)

    console.log(FruitsData);
    console.log(VeggiesData);
    
    const dispatch = useDispatch()

  return (
    <div>
      <h1 className='heading'>This is React_redux </h1>
      <div className='btn'>{FruitsData}</div>
      <button className='btn' onClick={() => dispatch(buy_fruits())}>Buy Fruits</button>
      <div className='btn'>{VeggiesData}</div>
      <button className='btn' onClick={() => dispatch(buy_veggies())}>Buy Veggies</button>
    </div>
  )
}

export default Redux_Container