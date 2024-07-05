import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

const Template = (props) => {
  return (

     <div className='rounded-xl shadow-lg m-5 hover:scale-110 hover:shadow-xl transition duration-500 w-80'>
        <img src={props.image} alt="" className='object-cover w-80 h-80 rounded-t-xl' />
        <div className='px-4 py-3 w-80 flex flex-col items-start'>
            <p className='text-xs text-gray-400 mr-3 uppercase'>Brand</p>
            <p className='font-bold text-lg truncate'>Product Name</p>
            <div className='flex items-center'>
               <p className='my-3 text-lg font-semibold '>{props.curPrice}</p>
               <del className='text-sm ml-2 font-semibold text-gray-600'>{props.delPrice}</del>      
               <i className='ml-[200px]'><FontAwesomeIcon icon={faBagShopping} /></i>
         
            </div>
        </div>
     </div>
  )
}

export default Template ;