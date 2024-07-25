import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import AboutUs from './About'
import Contact from './Contact'
import Shop from './Shop'
import Navbar from '../Component/Navbar'
import React from 'react'

const PageRouter = createBrowserRouter([

     {
      path:'/',
      element:<Navbar/>,
      children: [
        {
           path:"/home",
           element:<Home/>
        },
        {
           path:"/about",
           element:<AboutUs/>
        },
        {
           path:"/contact",
           element:<Contact/>
        },
        {
           path:"/shop",
           element:<Shop/>
        },
        
      ]

    }
] )

const Layout = () => {
  return (
    <div>
    <RouterProvider router={PageRouter}>

    </RouterProvider>
    </div>
  )
}

export default Layout