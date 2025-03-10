import React from 'react'
import { useProperty } from '../context/getContext';


const DetailsPage = () => {

   const {selectedProperty}=useProperty();
   
  return (
    <>
    {/* hero section */}
    <div className='grid grid-cols-2'>
         <div>
            
         </div>
         <div>
            
         </div>
    </div>
    </>
  )
}

export default DetailsPage