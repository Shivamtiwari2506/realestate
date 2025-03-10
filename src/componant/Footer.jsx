import React from 'react'
import logo from "../assets/image/logo(1).png"
import logoone from "../assets/image/SocialMediacard(5).png"
import logotwo from "../assets/image/SocialMediacard(6).png"
import logothree from "../assets/image/SocialMediacard(7).png"
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
        <div className=' max-w-[900px]  mx-auto p-3  mt-10 '>
            <div className='   md:grid-cols-4 grid gap-10 grid-cols-2 md:px-3 px-5'>
                <div className='capitalize flex flex-col gap-2 items-start m-0'>
                    <a href=""><img className='' src={logo} alt="" /></a>
                    <p className='md:text-xl'>contactus</p>
                    <Link to="tel+123456789"  >call:123456789</Link>
                    <p className='lg:w-[10rem] w-[10rem]  text-[0.8rem] font-stretch-50% text-start' >Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis. </p>

                    <p className='text-[0.8rem] font-stretch-50% text-start'><Link href="">Email:exampal@email.com</Link></p>
                </div>
                <div className=' capitalize flex flex-col gap-4 md:pt-0 pt-15 '>
                    <p className=' md:text-xl '>fetures</p>
                    <Link to="/" className='text-[0.8rem] font-stretch-50%'>home</Link>
                    <Link to="/" className='text-[0.8rem] font-stretch-50%'>became a host</Link>
                    <Link to="/" className='text-[0.8rem] font-stretch-50%'>pricing</Link>
                    <Link to="/blog" className='text-[0.8rem] font-stretch-50%'>blog</Link>
                    <Link to="/contacus"  className='text-[0.8rem] font-stretch-50%'>contact</Link>
                 
                </div>
                <div className=' capitalize flex flex-col gap-4 '>
                    <p className=' md:text-xl '>company</p>
                    <Link to="/aboutus" className='text-[0.8rem] font-stretch-50%'>about us</Link>
                    <Link to="/" className='text-[0.8rem] font-stretch-50%'>press</Link>
                    <Link to="/contactus" className='text-[0.8rem] font-stretch-50%'>contact</Link>
                    <Link to="/" className='text-[0.8rem] font-stretch-50%'>careers</Link>
                    <Link to="/blog" className='text-[0.8rem] font-stretch-50%'>blog</Link>
                 
                </div>
                <div className=' capitalize flex flex-col gap-4 '>
                    <p className=' md:text-xl '>teram and police</p>
                    <Link to="/" className='text-[0.8rem] font-stretch-50%'>terms of service</Link>
                    <Link to="/" className='text-[0.8rem] font-stretch-50%'>privacy policy</Link>
                    <Link to="/" className='text-[0.8rem] font-stretch-50%'>securcty</Link>
                 
                </div>
            </div>
            <div className='pt-5  flex justify-center gap-2'>
                <Link to="/"><img src={logoone} alt="" /></Link>
                <Link to="/"><img src={logotwo} alt="" /></Link>
                <Link to="/"><img src={logothree} alt="" /></Link>
            </div>
        

        </div>

    </>
  )
}
