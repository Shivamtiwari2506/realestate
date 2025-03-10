import React from 'react'
import fame from "../assets/image/Frame94.png"
import fametwo from "../assets/image/Frame95.png"
import fameThree from "../assets/image/Frame96.png"
import famefour from "../assets/image/Frame97.png"
import famefive from "../assets/image/Frame98.png"
import famesix from "../assets/image/Frame99.png"
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
                <h2 className=' text-white text-2xl'> Propertice</h2>
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
        { cardImages.map((card,index)=>(
             <NewCard
             key={index}
             imageUrl="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/14/cb/3b/ca.jpg" // Replace with actual image URL
             address={card.location}
             price={card.rent}
             bedrooms={4}
             bathrooms={4}
             squareFeet={2096}
             agentName="Jenny Wilson"
             agentImage="https://cdn.lucidpic.com/cdn-cgi/image/w=600,format=auto,metadata=none/66c4384702f8f.png"
             />
           ))}
        </div>
           

            {/* <div className='md:flex justify-items-center'>
                <div>
                    <img className='w-[90%] justify-self-center' src={fame} alt="" />
                </div>
                <div>
                    <img className='w-[90%] justify-self-center' src={fametwo} alt="" />
                </div>
                <div>
                    <img className='w-[90%] justify-self-center' src={fameThree} alt="" />
                </div>
            </div>
            <div className='md:flex justify-items-center'>
                <div>
                    <img className='w-[90%] justify-self-center' src={famefour} alt="" />
                </div>
                <div>
                    <img className='w-[90%] justify-self-center' src={famefive} alt="" />
                </div>
                <div>
                    <img className='w-[90%] justify-self-center' src={famesix} alt="" />
                </div>
            </div>
            <div className='md:flex justify-items-center'>
                <div>
                    <img className='w-[90%] justify-self-center' src={famefour} alt="" />
                </div>
                <div>
                    <img className='w-[90%] justify-self-center' src={famefive} alt="" />
                </div>
                <div>
                    <img className='w-[90%] justify-self-center' src={famesix} alt="" />
                </div>
            </div> */}

            <div className='justify-self-center '><button><img className=' md:w-[20rem] w-[15rem]' src={butt} alt="" /></button></div>
        </div>




    </>
  )
}
