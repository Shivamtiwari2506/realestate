import React from 'react'
import imgbg from "../assets/image/Rectangle25.png"
import contact from "../assets/image/Calltoaction.png"
import mackgroup from "../assets/image/MaskGroup.png"
import group from "../assets/image/Group.png"
import groupone from "../assets/image/Group(1).png"
import lllustration from "../assets/image/Illustration(1).png"
import illustration from "../assets/image/MaskGroup(3).png"
import iconone from "../assets/image/Icon.png"
import icontwo from "../assets/image/Icon(1).png"
import iconthree from "../assets/image/Icon(2).png"
import iconfour from "../assets/image/Icon(3).png"


export default function About() {
  return (
    <div>
      <div style={{
        backgroundImage: `URL(${imgbg})`,

      }} >
        <div className='justify-self-center pt-10 pb-10'>
          <h1 className=' text-white text-2xl'> About Us</h1>
          <p className='text-white'>Home / Properties</p>

        </div>

      </div>

      <div className='max-w-[1000px] mx-auto p-2  pb-[5rem]'>
        <div className=' md:grid md:grid-cols-2  gap-30 pt-[5rem]  items-center  w-full'>
          <div className=' relative justify-items-center'>
            <div className='absolute'>
              <img src={group} alt="" className='tp-0 -ml-30' />
            </div>
            <div className=''>
               <img src={mackgroup} alt=""  className='object-cover'/>
            </div>
            
            <div className='absolute justify-items-center '>
              <img src={groupone} alt=""  className='-mt-30 '/>
            </div>
          </div>
          <div className=' items-center pt-[5rem] '>
            <h2 className='text-2xl font-bold leading-8 '>We make it easy for tenants and landlords</h2>
            <br />
            <p className='text-[0.8rem] leading-5 '>Whether it’s selling your current home, getting financing, or buying a new home, we make it easy  and efficient. The best part? you’ll save a bunch of money and time with our services. Whether it’s selling your current home, getting financing, or buying a new home, we make it easy  and efficient. The best part? you’ll save a bunch of money and time with our services.</p>
            <br />
            <p className='text-[0.8rem] leading-5 '>Whether it’s selling your current home, getting financing, or buying a new home, we make it easy  and efficient. The best part? you’ll save a bunch of money and time with our services.</p>
            <br />
            <p className='text-[0.8rem] leading-5 '>Whether it’s selling your current home, getting financing, or buying a new home, we make it easy  and efficient. The best part? you’ll save a bunch of money and time with our services</p>
          </div>

        </div>
        <div className='pt-[5rem]'>
          <div>
            <img src={lllustration} alt="" />
          </div>

        </div>
        <div className='lg:grid lg:grid-cols-2  gap-30 pt-[5rem]  items-center '>
          <div  className='relative justify-items-center bg-cover justify-self-center'>
            <div className='absolute  md:pt-10 pl-10 pr-20 pt-5 '>
              <h3 className='text-2xl  text-balance '>The new way to find your new home</h3>
              <br />
              <p className='text-[0.8rem] text-balance'>Find your dream place to live in with more than 10k+ properties listed.</p>
              <br />
              <button className='border rounded p-2 bg-[#100A55] text-white '>Browse Properties</button>
            </div>
            <div className= ' w-full'>
              <img src={illustration} alt="" />
            </div>
          </div>
          <div  className='md:grid md:grid-cols-2 md:gap-10 justify-self-center items-center  '>
            <div className='justify-items-center lg:justify-items-start lg:pt-0 pt-6'>
              <img src={iconone} alt="" className='object-cover items-center'/>
              <h4 className='text-xl font-bold  text-balance pt-4 '>Property Insurance</h4>
              <p className='text-[0.8rem] text-balance  pt-4 lg:text-start text-center'>We offer our customer property protection of liability coverage and insurance for their better life.</p>
            </div>
            <div className='justify-items-center lg:justify-items-start lg:pt-0 pt-6 '>
              <img src={icontwo} alt="" />
              <h4 className='text-xl font-bold  text-balance pt-4'>Property Insurance</h4>
              <p className='text-[0.8rem] text-balance pt-4 lg:text-start text-center'>We offer our customer property protection of liability coverage and insurance for their better life.</p>
            </div>
            <div className='justify-items-center lg:justify-items-start lg:pt-0 pt-6'>
              <img src={iconthree} alt="" />
              <h4 className='text-xl font-bold  text-balance pt-4'>Property Insurance</h4>
              <p className='text-[0.8rem] text-balance pt-4 lg:text-start text-center'>We offer our customer property protection of liability coverage and insurance for their better life.</p>
            </div>
            <div className='justify-items-center lg:justify-items-start lg:pt-0  pt-6'>
              <img src={iconfour} alt="" />
              <h4 className='text-xl font-bold  text-balance  pt-4'>Property Insurance</h4>
              <p className='text-[0.8rem] text-balance pt-4 lg:text-start text-center '>We offer our customer property protection of liability coverage and insurance for their better life.</p>
            </div>
          </div>

        </div>
         
      </div>
      <div>
        <img src={contact} alt="" />
      </div>
    </div>
  )
}
