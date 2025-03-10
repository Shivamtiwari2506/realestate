import React from 'react'
import bgimage from "../assets/image/Rectangle6.png"
import socialone from "../assets/image/SocialMediacard(1).png"
import socialtwo from "../assets/image/SocialMediacard(2).png"
import socialthree from "../assets/image/SocialMediacard(3).png"
import socialfour from "../assets/image/SocialMediacard(4).png"
import logomain from '../assets/image/logo.png'
import logotop from "../assets/image/logo(1).png"
import line from "../assets/image/Line(1).png"
import rent from "../assets/image/Group17(1).png"
import sell from "../assets/image/Frame82(1).png"
import { NavLink } from "react-router-dom";
import { useState } from 'react'






export default function HeaderTop() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);


    
  function handleMenuToggle(){
    setIsMenuOpen(!isMenuOpen)

  };


 
  
  
 
  
 
  return (
    <>
      <div className="p-2 relative lg:text-white overflow-hidden" style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} >
        <div className=' pt-3 justify-between flex items-center max-w-[1200px]  mx-auto text-white pb-2 '>
          <a href="" className='items-center text-[0.8rem] font-stretch-50%'>Email us at : exaple@email.com</a>

          <div className='flex md:gap-10 gap-1 items-center'>
            <a href="#" > <img src={socialone} alt="social" /></a>
            <a href="#"><img src={socialtwo} alt="social" /></a>
            <a href="#"><img src={socialthree} alt="social" /></a>
            <a href="#"><img src={socialfour} alt="social" /></a>
            
          </div>

        </div>
        <div>
          < img src={line} alt="line" />
        </div>
        <div className='pt-2 justify-between flex max-w-[1200px]  mx-auto '>
          <div >
            <a  href=""><img className='w-15 md:w-20' src={logomain} alt="logo" /></a>
          </div>
          <div className='hidden lg:flex lg:gap-5 items-center capitalize'>
            <NavLink to="/">home</NavLink>
            <NavLink to="/aboutus">about us</NavLink>
            {/* <NavLink to="/ouragent">our agents</NavLink> */}
            <NavLink to="/gallery">gallery</NavLink>
            <NavLink to="/blog">blog</NavLink>
            <NavLink to="/contactus">contact us</NavLink>
            {/* <NavLink to="/">serach</NavLink>
            <NavLink to="/"><button type='button' className='border border-white px-4 py-1 rounded-lg capitalize '>addlisting</button></NavLink> */}
          </div>
          <button className='lg:hidden  ' onClick={handleMenuToggle}>
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className={`lg:hidden fixed h-full bg-white inset-0 px-3 transition-transform duration-300 ${isMenuOpen? "translate-x-0" : "-translate-x-full"}  `}  >
            <div className='flex justify-between pt-3 '>
            <a className='w-15' href=""><img src={logotop} alt="logotop" /></a>
              <button className='lg:hidden ' type='button' onClick={handleMenuToggle} id='hide-button'>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div >
              <ul className='pt-7  text-center capitalize'>
                <li className='m-3 p-3 hover:bg-amber-200 rounded-xl'><NavLink  to="/">home</NavLink></li>
                <li className='m-3 p-3 hover:bg-amber-200 rounded-xl'><NavLink to="/aboutus">about us</NavLink></li>
                {/* <li className='m-3 p-3 hover:bg-amber-200 rounded-xl'><NavLink to="/ouragent">our agents</NavLink></li> */}
                <li className='m-3 p-3 hover:bg-amber-200 rounded-xl'><NavLink to="/gallery">gallery</NavLink></li>
                <li className='m-3 p-3 hover:bg-amber-200 rounded-xl'><NavLink to="/blog">blog</NavLink></li>
                <li className='m-3 p-3 hover:bg-amber-200 rounded-xl'><NavLink to="/contactus">contact us</NavLink></li>
                {/* <li className='m-3 p-3 hover:bg-amber-200 rounded-xl'><NavLink to="/">serach</NavLink></li>
                <li className='m-3 p-3 hover:bg-amber-200 rounded-xl capitalize '><NavLink to="/"><button type='button'>addlisting</button></NavLink></li> */}
              </ul>
            </div>
          </div>


        </div>
        <div className=' lg:pt-25 items-center pt-10 max-w-[1200px] mx-auto text-white '>
          <h1 className='justify-self-center text-2xl font-bold'> Find Your Dream Home </h1>
          <p className='justify-self-center pt-3 md:w-xl text-center text-[0.9rem] font-stretch-50%'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.</p>
        </div>

        <div className=' flex gap-1 pt-9 lg:pt-20 pb-2 lg:pb-10 max-w-[1200px] mx-auto items-center justify-center'>
          <img className='w-[50px] h-[40px] md:w-[70px] md:h-[50px]' src={rent} alt="" />
          <img className='pb-2 w-[50px] h-[40px] md:w-[70px] md:h-[50px]' src={sell} alt="" />
        </div>
        


      </div>

      {/* <div  className={`max-w-[1200px]  mx-auto ${isMenuOpen? "hidden" : "show"}`} >
        <div className=' lg:flex lg:max-w-[800px]  text-center items-center lg:gap-5   lg:rounded-xl bg-white  lg:absolute md:top-[27rem] justify-items-center lg:left-1/2 transform lg:-translate-x-1/2' >
          <div className='grid md:gap-1 m-3 p-2  '>
            <label htmlFor="location" className='text-center '>Location</label>
            <select id="location">
              <option value="location " className='text-[0.9rem] font-stretch-50%'>Select your city </option>
              {Searchdata.map((city,index)=>(
                <option key = {index} value={city.location} className='text-[0.9rem] font-stretch-50%'>{city.location} </option>
              ))}
            </select>
          </div>
          <div className='grid md:gap-1 m-3 p-2'>
            <label htmlFor="Property" className='text-center '>Property Type</label>
            <select id="property">
              <option value="property" className='text-[0.5rem] font-stretch-50%' >Select your property </option>
            </select>
          </div>
          <div className='grid md:gap-1 m-3 p-2'>
            <label htmlFor="rent" className='text-center '>Rent Range</label>
            <select id="rent">
              <option value="rent" className='text-[0.9rem] font-stretch-50%'>Select your rent range </option>
            </select>
          </div>
          <div className='m-3 p-2'>
            <button type='button ' className='border  bg-[#4A60A1] text-white cursor-pointer rounded-xl md:px-4 md:py-2 px-6 py-1'>Search</button>
          </div>

        </div>
      </div> */}

      
    </>
    

  )
}
