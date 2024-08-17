import React from 'react'

import Home from './Home'
import Shop from './Shop'
import Whishlist from './Whislist'
import AboutUs from './About'
import Cart from './Cart'
import Product from './Product'
import Page404 from './Page404'
import { Navbar } from '../Component/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/aboutus' element={<AboutUs/>}></Route>
                <Route path='/shop' element={<Shop/>}></Route>
                <Route path='/whishlist' element={<Whishlist/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/product' element={<Product/>}></Route>
                <Route path='/*' element={<Page404/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Layout