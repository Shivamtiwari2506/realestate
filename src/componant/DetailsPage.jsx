import React, { useEffect } from 'react';
import { useProperty } from '../context/getContext';
import { FaBed, FaBath, FaMapMarkerAlt, FaHome, FaBuilding } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const DetailsPage = () => {
    const { selectedProperty } = useProperty();
    
    const navigate = useNavigate();
    
    return (
        <div className='container mx-auto p-4 sm:p-6'>
            <div className="flex ml-2">
                <button onClick={() => navigate("/gallery")} className="text-blue-500 mb-4 rounded shadow-black shadow-2xs">
                    &lt; Back
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 shadow-md rounded-lg overflow-hidden bg-white p-4'>
                <div className='rounded-lg overflow-hidden'>
                    <img src={selectedProperty.imageUrl} alt="Property" className='w-full h-64 sm:h-96 object-cover' />
                </div>
                <div className='flex flex-col justify-between p-4'>
                    <h1 className='text-2xl sm:text-3xl font-bold mb-2'>Antelia</h1>
                    <h3 className='text-gray-600 flex items-center'><FaMapMarkerAlt className='text-red-500 mr-2' /> {selectedProperty.location}</h3>
                    <p className='text-lg font-semibold text-green-600 mt-2'>{selectedProperty.rent}</p>
                    <div className='flex flex-wrap gap-4 mt-4'>
                        <p className='flex items-center'><FaBuilding className='text-blue-500 mr-2'/> {selectedProperty.type} </p>
                        <p className='flex items-center'><FaBed className='text-blue-500 mr-2' /> 4 Beds</p>
                        <p className='flex items-center'><FaBath className='text-blue-500 mr-2' /> 2 Baths</p>
                        <p className='flex items-center'><FaHome className='text-blue-500 mr-2' /> {selectedProperty.sqft}</p>
                    </div>
                    <p className='mt-4 text-gray-700 text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eligendi excepturi deserunt distinctio minima.</p>
                </div>
            </div>
            <div className='bg-white shadow-md p-4 sm:p-6 mt-6 rounded-lg'>
                <h2 className='text-xl sm:text-2xl font-bold mb-4'>Property Details</h2>
                <ul className='list-disc list-inside text-gray-700 text-sm sm:text-base'>
                    <li>Type: {selectedProperty.type}</li>
                    <li>Year Built: 2022</li>
                    <li>Parking: yes</li>
                    <li>Neighborhood: Indian</li>
                </ul>
            </div>
        </div>
    );
}

export default DetailsPage;