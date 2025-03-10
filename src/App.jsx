import { useState } from 'react'
import HeaderTop from './componant/HeaderTop';
import Header from './componant/Header';
import Footer from './componant/Footer';
import Home from './componant/Home';
import Gallery from './componant/Gallery';
import Blog from './componant/Blog';
import About from "./componant/About";
import Contactus from './componant/Contactus';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailsPage from './componant/DetailsPage';
import { PropertyProvider } from './context/getContext';
import { ToastContainer } from 'react-toastify';



const router = createBrowserRouter([

  {
    path:"/",
    element:
    <div>
      <HeaderTop/>
      <Home/>
      <Footer/>
    </div>
  },
  {
    path:"/gallery",
    element: 
    <div>
      <Header/>
      <Gallery/>
      <Footer/>
    </div>
  },
  {
    path:"/blog",
    element:
    <div>
      <Header/>
      <Blog/>
      <Footer/>
    </div>
  },
  {
    path:"/aboutus",
    element:
    <div>
      <Header/>
      <About/>
      <Footer/>
    </div>
  },
  {
    path:"/contactus",
    element:
    <div>
      <Header/>
      <Contactus/>
      <Footer/>
    </div>
  },
  {
    path:"/details",
    element:
    <div>
      <Header/>
      <DetailsPage/>
      <Footer/>
    </div>
  }
]);

function App() {
  return (

    <div>
      <PropertyProvider>
        <ToastContainer/>
      <RouterProvider router={router}/>
    
      </PropertyProvider>
    </div>

  

  
  )
}

export default App
