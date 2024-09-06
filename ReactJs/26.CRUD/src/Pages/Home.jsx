import React ,{useEffect, useState} from 'react';
import axios from 'axios';
import {student} from '../../Student.json'
import { Link } from 'react-router-dom'

const Home = () => {


    const [Student ,setStudent] = useState([])

    const loadStudent = async () => {
      const res = await axios.get('http://localhost:3000/student')
      setStudent(res.Student);

       if (res.Student.length === 0) {
            localStorage.clear()
            console.log('call localStorage');
          }
    }
  
    useEffect(() => {
      loadStudent()
    }, [])
  
    const DeleteStudent = (id) => {
      axios.delete(`http://localhost:3000/student/${id}`)
        .then((res) => {
          loadStudent()
         
        })
        .catch((error) => {
          console.log(error)
        })
    }
  

  return (
    <>
      <section className="w-full max-w-7xl py-4 " >
        <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Students</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all Students. You can add new Students, edit or delete existing
              ones.
            </p>
          </div>
          <div>
           <Link to="/add"> <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new Students
            </button>
            </Link>
          </div>
        </div>
        <div className="mt-6  flex flex-col">
          <div className=" overflow-x-auto">
            <div className="inline-block min-w-full py-2 align-middle ">
              <div className="w-screen border border-gray-200 md:rounded-lg ">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span> Students Name</span>
                      </th>
                     
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center text-sm font-normal text-gray-700"
                      >
                        PhoneNo
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center text-sm font-normal text-gray-700"
                      >
                        Age
                      </th>
                      
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center text-sm font-normal text-gray-700"
                      >
                        Edit 
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Remove 
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" divide-gray-200 bg-white">
              
                    {
                      student.map(students => {
                         return (
                        
                        <tr key={student.id } >
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={students.Image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{students.fullName}</div>
                              <div className="text-sm text-gray-700">{students.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap text-center">
                          <div className="text-sm text-gray-900 ">{students.phoneNo}</div>
                        </td>
                         <td className='text-center'>

                          <div className="text-sm text-gray-700">{students.age}</div>
                        </td>
                        
                        <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-center">
                         <Link to="/edit">  <button className="text-gray-700">
                            Edit
                          </button>
                          </Link>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                         
                         <button className="font-bold text-red-400" onClick={() => DeleteStudent(students.id)}>
                            Remove
                          </button>
                      
                        </td>
                      </tr>
                         )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-6">
          <a href="#" className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900">
            <span className="hidden lg:block">&larr; Previous</span>
            <span className="block lg:hidden">&larr;</span>
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            1
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            2
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            3
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            4
          </a>
          <a href="#" className="mx-2 text-sm font-semibold text-gray-900">
            <span className="hidden lg:block">Next &rarr;</span>
            <span className="block lg:hidden">&rarr;</span>
            
          </a>
        </div>
      </section>

    </>
  )
}

export default Home