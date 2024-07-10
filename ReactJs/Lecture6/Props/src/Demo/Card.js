import React from 'react'

const CardMain = () => {
  return (
    <div className='m-0 p-0 h-screen w-screen bg-gray-400 flex justify-center items-center text-white'>

        <div className='h-[250px] w-[400px] bg-black overflow-hidden'>
        <div class="w-0 h-0 
        border-t-[60px] border-t-transparent
        border-l-[250px] border-l-red-600
        border-b-[200px] border-b-transparent -mt-20"></div>

        <div class="w-0 h-0 absolute
        border-t-[0px] border-t-transparent
        border-l-[160px] border-l-black
        border-b-[125px] border-b-transparent mt-[-180px] ml-[30px]"></div>

        <div className='absolute mt-[-50px] ml-[140px] '>
            <h1 className='text-[20px] font-bold'> MAHINDRA</h1>
        </div>
   
            <div class="w-[10px] h-[10px] absolute">
             <img src="./Assets/20210809125610_Mahindra_Logo_1.jpg" alt="" />
           </div>


        <div class="w-0 h-0 
        border-t-[200px] border-t-transparent
        border-r-[250px] border-r-red-600
        border-b-[60px] border-b-transparent ml-[150px] mt-[-100px] "></div>

        <div class="w-0 h-0 
        border-t-[120px] border-t-transparent
        border-r-[150px] border-r-black
        border-b-[0px] border-b-transparent ml-[220px] mt-[-205px]"></div>
        </div>

        
    </div>
  )
}

export default CardMain
