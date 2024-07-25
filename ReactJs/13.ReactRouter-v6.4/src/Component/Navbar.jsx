import React from 'react'
import Weblogo from '../assets/react.svg'
import { NavLink, Outlet } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
    return (
        <>
        <div className='bg-gray-500'>
            <div className='container'>
                <div className='flex items-center justify-between py-3'>
                    <div className='animate-spin'>
                        <NavLink to="/">
                            <img  src={Weblogo}  alt="" className='size-14' />    
                        </NavLink>
                    </div>
                    <ul className='flex text-white text-lg font-black space-x-20'>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/about">AboutUs</NavLink></li>
                        <li><NavLink to="/contact">ContactUs</NavLink></li>
                        <li><NavLink to="/shop">Shop</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
        <Outlet/>
        </>
    )
}

export default Navbar