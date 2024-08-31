import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Image from './Box'

const Axios = () => {

    const data = {
        fname:'',
        lname:''
    }

    const [inputData , setInputData] = useState(data)

    const handleChange = (e) => {
        setInputData({...inputData , [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/ecoproduct' , inputData)
        .then((res) => {
            console.log(res);
        })
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/ecoproduct/1' , inputData)
        .then((res) => {
            console.log(res);
        })
    }


    const handleDelete = (e) => {
        e.preventDefault()
        axios.delete('http://localhost:3000/ecoproduct/1' , inputData)
        .then((res) => {
            console.log(res);
        })
    }




  return (
    <div>
      <h1 className='bg-purple-600 p-4 text-white text-4xl text-center'>React Axios Post , Put And Delete API</h1>
      <div className='flex justify-center items-center h-lvh'>
        <div>
        <input className='border-2 border-black block' type="text" name="fname" id="" value={inputData.fname} onChange={handleChange} />
        <input className='border-2 border-black block my-4' type="text" name="lname" id="" value={inputData.lname} onChange={handleChange} />
        <button className='py-1 px-3 bg-red-400 text-white' onClick={handleSubmit}>POST</button>
        <button className='py-1 px-3 bg-red-400 text-white mx-4' onClick={handleUpdate}>PUT</button>
        <button className='py-1 px-3 bg-red-400 text-white' onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <Image/>
    </div>
  )
}

export default Axios