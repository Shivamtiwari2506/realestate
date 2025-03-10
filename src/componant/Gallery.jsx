import React from 'react'
import butt from "../assets/image/Frame135.png"
import imgbg from "../assets/image/Rectangle25.png"
import icon from "../assets/image/Frame124.png"
import NewCard from './NewCard'
import Searchdata from './Searchdata'


export default function Gallery() {

    const cardImages = Searchdata;

  return (
    <>

          
        
        <div style={{
            backgroundImage: `URL(${imgbg})`,

            }} >
            <div className='justify-self-center pt-10 pb-10'>
                <h2 className=' text-white text-2xl'> Properties</h2>
                <p className='text-white'>Home / Properties</p>

            </div>

        </div>

        <div className=' max-w-[1200px] mx-auto'>
            <div className='md:flex md:justify-between items-center pt-3  '>
                <div className='flex gap-3  justify-self-center pt-5'>
                    <div>
                        <img src={icon} alt="" />
                    </div>
                    <div>
                        <p>short by image </p>
                    </div>
                </div>
                <div className='flex gap-5 justify-self-center pt-5 '>
                    <p>All Properties</p>
                    <p>For Buy</p>
                    <p>For Sale</p>
                    <p>For Rent</p>
                </div>
            </div>
        </div>

        <div className='  max-w-[1200px] mx-auto'>
        <div className='md:grid md:grid-cols-4 w-auto h-auto  justify-center items-center mb-2'>
        { cardImages.map((card)=>(
             <NewCard property = {card} key= {card.id}/>
           ))}
        </div>

            <div className='justify-self-center '><button><img className=' md:w-[20rem] w-[15rem]' src={butt} alt="" /></button></div>
        </div>




    </>
  )
}
