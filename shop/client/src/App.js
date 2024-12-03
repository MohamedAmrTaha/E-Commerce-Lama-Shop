import React from 'react';
import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar'; 
import Checkout from './pages/Checkout/Checkout';
const Layout = () => {
  return(
    <div className='app'>
       <Navbar/>
       <Outlet/>
       <Footer/>
    </div>
  );
}   
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/Products/:id",
        element:<Products/>
      },
      {
        path: "/Product/:id",
        element:<Product/>
      },
      {
        path: "/Checkout",
        element: <Checkout/>
      }
    ]
  },

]);      

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  
  );
}

export default App;
