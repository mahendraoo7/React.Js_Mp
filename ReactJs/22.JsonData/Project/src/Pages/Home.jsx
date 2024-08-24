import React from 'react'
import { useSelector  , useDispatch } from 'react-redux'
import { add_cart , remove_cart  , empty_cart } from '../redux/reduxCart/CartAction'

const Home = () => {


  // async function ecodata(){
  //   await kcskzkznc
  // }


  // const data = async() => {
  //   let ecodata = await fetch('http://localhost:3000/ecoproduct')
  //   .then(ecodata => ecodata.json())
  //   .then(ecodata => console.log(ecodata)
  //   )
  // }


  const data = async() => {
    try{   
      let ecodata = await fetch('http://localhost:3000/ecoproduct')
      .then(ecodata => ecodata.json())
      .then(ecodata => console.log(ecodata))
      console.log(ecodata);
      
    }
    catch(error){
      console.log(error);
    }
  }

  data()

  console.log('Home Data' , data);
  

  return (
    <div>
      <h1>This is Home Page</h1>
      {/* <button className='btn' onClick={() => dispatch(add_cart(product))}>addToCart</button>
      <button className='btn' onClick={() => dispatch(remove_cart(product))}>removeToCart</button>
      <button className='btn' onClick={() => dispatch(empty_cart())}>emptyCart</button> */}
    </div>
  )
}

export default Home
