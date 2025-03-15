import React from 'react'
import contact from "../assets/image/Calltoaction.png"
import { useForm } from "react-hook-form"
import { GoogleMap, useJsApiLoader,LoadScript, Marker, } from "@react-google-maps/api";
import Map from 'ol/Map';
import MapComponent from './MapComponent';

export default function Contactus() {


    const {handleSubmit,  formState: { errors } } = useForm();

    const onSubmit = data => console.log(data)
        
    

    const containerStyle = {
        width: "100%",
        height: "350px",
      };
      
      const center = {
        lat: 28.7041, 
        lng: 77.1025,
      };

    
    


    return (
        <div>
            <div >
                <img src={contact} alt="" />
            </div>
            <div  className='max-w-[1200px] h-auto mx-auto pt-5  lg:grid lg:grid-cols-2 items-center px-3 gap-5'>
                <div className='mt-7'>
                    
                    <MapComponent/>
                </div>
                <div className='items-center  pt-5'>
                    <h2 className='font-bold text-xl'>Contact Us</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <div >
                        <input type="text" placeholder='Your Name' className=' w-full rounded border mt-5 px-2 ' />
                        </div>
                        <div >
                        <input type="email" placeholder='Your Email' className='w-full rounded border mt-5 px-2'/>
                        </div>
                        <div >
                        <input type="text"  placeholder='Your Contact' className='w-full rounded-sm border mt-5 px-2'/>
                        </div>
                        <div>
                        <textarea name="massage" rows={4} placeholder='text your massage' className='w-full rounded border mt-5 px-2'></textarea>
                        </div>
                        
                        <div>
                        <input type="submit" className='w-full rounded-xl bg-amber-500 mt-5 pt-1 pb-1' />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
