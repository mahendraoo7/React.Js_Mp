import React from 'react'
import './CarsStyle.css'



const Card = () => {
  return (
      
     <div className='flex items-center h-[800px] '>
     <div className=' w-[1200px] h-[620px] ring-2 ring-blue-400 ml-10'>
     <h1 className='flex justify-center font-bold mt-6 text-2xl'>GUNS LIST</h1>
      
      <div id="gun" className='Real ' >

       <h1 className='font-bold ml-3 mt-5'>1.MP5</h1>
       <p className='opacity-70 ml-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quis aperiam exercitationem quos iure quia omnis quibusdam blanditiis eos qui.</p>
       <button onClick={DeleteCLick} className='bg-red-600 ml-3 mt-3 px-3 py-2 text-center rounded-xl text-white'>Delete</button>
       {/* <hr className='bg-red-500 text-red-500 h-[2px] mt-5' /> */}

    </div>

      <div id="gun" className='Real'>

       <h1 className='font-bold ml-3 mt-5'>2.MP40</h1>
       <p className='opacity-70 ml-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quis aperiam exercitationem quos iure quia omnis quibusdam blanditiis eos qui.</p>
       <button onClick={DeleteCLick} className='bg-red-600 ml-3 mt-3 px-3 py-2 text-center rounded-xl text-white'>Delete</button>
       {/* <hr className='bg-red-500 text-red-500 h-[2px] mt-5' /> */}

    </div>
    
       <div id="gun" className='Real' >
       <h1 className='font-bold ml-3 mt-5'>3.AK47</h1>
       <p className='opacity-70 ml-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quis aperiam exercitationem quos iure quia omnis quibusdam blanditiis eos qui.</p>
       <button onClick={DeleteCLick} className='bg-red-600 ml-3 mt-3 px-3 py-2 text-center rounded-xl text-white'>Delete</button>
       {/* <hr className='bg-red-500 text-red-500 h-[2px] mt-5' /> */}

    </div>

      <div id="gun" className='Real'>
       <h1 className='font-bold ml-3 mt-5'>4.SCAR</h1>
       <p className='opacity-70 ml-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quis aperiam exercitationem quos iure quia omnis quibusdam blanditiis eos qui.</p>
       <button onClick={DeleteCLick} className='bg-red-600 ml-3 mt-3 px-3 py-2 text-center rounded-xl text-white'>Delete</button>

    </div>

    </div>
    </div>

  )
}

function DeleteCLick() {
   const element = document.getElementById("gun")
   element.classList.remove("Real")
   console.log('DeleteClick')
}


export default Card
