import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import './index.css'

import Home from './Pages/Home/Home.jsx'
import Product from './Pages/Product/Product.jsx'
import Products from './Pages/Products/Products.jsx'
import Cart from './Pages/Cart/Cart.jsx';
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'



const Layout = () => {
  return (
    <div className='app flex flex-col min-h-screen bg-gray-300'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children : [
      {
        path: "/",
        element: <Home/>
      },

      {
        path: "/products/:id",
        element: <Products/>
      },

      {
        path: "/product/:id",
        element: <Product/>
      },
      {
        path: "/product/cart",
        element: <Cart/>
      }
    ]
  }
]);


function App() {
  return (
    <>
      <RouterProvider router={router} >
        <div className='app'>App</div>
      </RouterProvider>
    </>
  )
}

export default App