import React from 'react'
import img from '../Assets/Screenshot_30-7-2024_15422_.jpeg'

const Aadhar = () => {
  return (
    <div className='flex justify-center items-center h-[1500px]'>
      <img src={img} alt="not found" />
      <h1 className='absolute h-[50px] w-[360px] mt-[320px] bg-white ml-[70px] font-bold text-[40px] text-center'>7164 4234 8527</h1>
      <h1 className='absolute h-[250px] w-[30px] bg-white ml-[650px] -mt-[50px]'></h1>
      <h1 className='absolute h-[270px] w-[30px] bg-white mr-[670px] -mt-[50px]'></h1>
      <h1 className='absolute h-[3px] w-[755px] bg-black -mt-[480px]'></h1>
      <h1 className='absolute h-[100px] w-[120px] bg-white -mt-[375px] ml-[620px]'></h1>
      
    </div>
  )
}

export default Aadhar
