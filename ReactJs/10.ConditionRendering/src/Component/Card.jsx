import React from 'react'


export const Delete =(Delete , Name) => {

    

}


const Card = () => {
  return (
      
     <div className='flex items-center h-[500px]'>
     <div className='h-[400px] w-[1200px] ring-2 ring-blue-400 ml-10'>

      <h1 className='flex justify-center font-bold mt-6 text-2xl'>GUNS LIST</h1>
      
      <delete delete={true} name="MP5" >
       <h1 className='font-bold ml-3 mt-5'>1.MP5</h1>
       <p className='opacity-70 ml-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quis aperiam exercitationem quos iure quia omnis quibusdam blanditiis eos qui.</p>
    </delete>
      <delete delete={true} name="MP40" >
       <h1 className='font-bold ml-3 mt-5'>2.MP40</h1>
       <p className='opacity-70 ml-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quis aperiam exercitationem quos iure quia omnis quibusdam blanditiis eos qui.</p>
    </delete>
      <delete delete={true} name="AK47" >
       <h1 className='font-bold ml-3 mt-5'>3.AK47</h1>
       <p className='opacity-70 ml-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quis aperiam exercitationem quos iure quia omnis quibusdam blanditiis eos qui.</p>
    </delete>
      <delete delete={true} name="SCAR" >
       <h1 className='font-bold ml-3 mt-5'>4.SCAR</h1>
       <p className='opacity-70 ml-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quis aperiam exercitationem quos iure quia omnis quibusdam blanditiis eos qui.</p>
    </delete>

    </div>
    </div>
  )
}

export default Card
