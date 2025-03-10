import React from 'react'
import firstone from "../assets/image/Rectangle26.png"
import two from "../assets/image/Rectangle27.png"
import three from "../assets/image/Rectangle28.png"
import imgbg from "../assets/image/Rectangle25.png"
import butt from "../assets/image/Frame135.png"
import icon from "../assets/image/Frame124.png"
import text from "../assets/image/Frame98(1).png"


export default function Blog() {
  return (
    <>
        <div>
            <div style={{
                backgroundImage: `URL(${imgbg})`,

              }}>
                <div className='justify-self-center pt-10 pb-10'>
                    <h2 className=' text-white text-2xl'> Propertice</h2>
                    <p className='text-white'>Home / Properties</p>

                </div>

            </div>
            <div className=' max-w-[1200px] mx-auto'>
                <div className='md:flex md:justify-between items-center pt-3 '>
                    <div className='flex gap-3 justify-self-center'>
                        <div>
                            <img src={icon} alt="" />
                        </div>
                        <div>
                            <p>short by image </p>
                        </div>
                    </div>
                    <div className='flex gap-5 justify-self-center pt-5'>
                        <p>All Properties</p>
                        <p>For Buy</p>
                        <p>For Sale</p>
                        <p>For Rent</p>
                    </div>
                </div>
            </div>
            <div className='px-2 max-w-[1200px]  mx-auto  '>
                <div className='md:flex md:justify-between gap-5  pt-8'>
                    <div className=''>
                        <img className='pt-15' src={text} alt="" /> 
                        <h3 className='font-bold text-xl text-[#4A60A1]'>92 ALLIUM PLACE, ORLANDO FL 32827</h3>
                        <p className='text-[0.9rem] font-stretch-50% pt-5 md:justify-items-start content  justify-items-center '>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.</p>
                        <p className='text-[0.9rem] font-stretch-50% pt-3 md:justify-items-start justify-items-center '>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit... readmore.</p>
                        <p className='pt-5'>$ 590,693</p>
                    </div>
                    <div>
                        <img className='md:w-[130rem] pt-8' src={firstone} alt="" />

                    </div>
                </div>
                <div  className='md:flex md:justify-between gap-5  pt-8 col-reverse'>
                    <div className=''>
                        <img className='md:w-[130rem] ' src={two} alt="" />

                    </div>
                    <div className=''>
                        <img className='pt-10' src={text} alt="" />
                        <h4 className='font-bold text-xl text-[#4A60A1]'>92 ALLIUM PLACE, ORLANDO FL 32827</h4>
                        <p className='text-[0.9rem] font-stretch-50% pt-5 md:justify-items-end justify-items-center'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat</p>
                        <p className='text-[0.9rem] font-stretch-50% pt-5 md:justify-items-end justify-items-center'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit... readmore</p>
                        <p className='pt-5'>$ 590,693</p>
                    </div>
                </div>
                <div className='md:flex md:justify-between gap-5 justify-items-center pt-8 '>
                    
                    <div>
                        <img className='pt-15' src={text} alt="" />
                        <h5 className='font-bold text-xl text-[#4A60A1] pt-8'>92 ALLIUM PLACE, ORLANDO FL 32827</h5>
                        <p className='text-[0.9rem] font-stretch-50% pt-5 md:justify-items-start justify-items-center'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.</p>
                        <p className='text-[0.9rem] font-stretch-50% pt-5 md:justify-items-start justify-items-center'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit... readmore.</p>
                        <p className='pt-5'>$ 590,693</p>
                    </div>
                    <div>
                        <img className='md:w-[130rem] w-[40rem] pt-8 ' src={three} alt="" />
                    </div>
                </div>
            </div>
            <div className='justify-self-center  pt-10'><button><img className=' md:w-[20rem] w-[15rem]' src={butt} alt="" /></button></div>

        </div>
      
    </>
  )
}
