import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { buy_fruits, buy_veggies } from '../redux/Action'
import '../index.css'


const Redux_Container = () => {

    const FruitsData = useSelector(state => state.Fruits.numOfFruits)
    const VeggiesData = useSelector(state => state.Veggies.NumOfVeggies)

    console.log(FruitsData);
    console.log(VeggiesData);
    
    const dispatch = useDispatch()

  return (
    <>
    <h1 className='heading'>This is React_redux </h1>
      <div className='align'>
      <h1 className='cen'>Fruits</h1>
      <h1 className='cen'>Veggies</h1>
      </div>
    <div className='head'>
      <div className='btn'>{FruitsData}</div>
      <button className='' onClick={() => dispatch(buy_fruits())}>Buy Fruits</button>
      <div className='btn'>{VeggiesData}</div>
      <button className='' onClick={() => dispatch(buy_veggies())}>Buy Veggies</button>
    </div>
    </>
  )
}

export default Redux_Container