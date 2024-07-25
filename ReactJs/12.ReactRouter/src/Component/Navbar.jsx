import React from 'react'
import Weblogo from '../assets/react.svg'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
    return (
        <div className='bg-gray-500'>
            <div className='container'>
                <div className='flex items-center justify-between py-6 mr-8'>
                    <div className='animate-spin'>
                        <Link to="/">
                            <img  src={Weblogo}  alt="" className='size-14' />    
                        </Link>
                    </div>
                    <ul className='flex text-white text-lg font-black space-x-20'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">AboutUs</Link></li>
                        <li><Link to="/contact">ContactUs</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar