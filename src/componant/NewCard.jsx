import React from 'react'
import { useProperty } from '../context/getContext';
import { useNavigate } from 'react-router-dom';

const NewCard = ({ id, imageUrl, address, price, bedrooms, bathrooms, squareFeet, agentName, agentImage }) => {

        const {setSelectedProperty} = useProperty();
        const navigate  = useNavigate();

        const handleProperty = ()=>{
          setSelectedProperty({ id, imageUrl, address, price, bedrooms, bathrooms, squareFeet, agentName, agentImage })
          navigate("/details");
        }

   return (
      <div onClick={handleProperty} className=" hover: rounded-lg w-auto h-auto m-3 overflow-hidden shadow-lg bg-white ">
        {/* Image Section */}
        <div>
          <img 
            className="w-auto h-auto object-cover" 
            src={imageUrl} 
            alt={`${address} property`}
          />
        </div>
  
        {/* Content Section */}
        <div className="p-3">
          {/* Address */}
          <h2 className="text-lg font-semibold text-gray-800">
            {address}
          </h2>
          {/* Price */}
          <p className="text-lg font-bold text-blue-600 mb-1">
            {price}
          </p>
  
          {/* Features */}
          <div className="flex items-center space-x-3 text-gray-600 mb-2">
            <span className="flex items-center text-center text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM7 7a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H8a1 1 0 01-1-1V7z"/>
              </svg>
              {bedrooms} Beds
            </span>
            <span className="flex items-center text-sm">
              <svg className="w-5 h-5 " fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a7 7 0 00-14 0c0 .34.024.673.07 1h13.86z"/>
              </svg>
              {bathrooms} Baths
            </span>
            <span className="flex items-center text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM7 7a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H8a1 1 0 01-1-1V7z" clipRule="evenodd"/>
              </svg>
              {squareFeet} sq ft
            </span>
          </div>
  
          {/* Agent Section */}
          <div className="flex items-center justify-between">
            <img 
              className="w-9 h-9 rounded-full mr-2"
              src={agentImage} 
              alt={`${agentName}'s profile`}
            />
            <span className="text-gray-800 font-normal">{agentName}</span>

          <div className="px-4 py-1 flex justify-end space-x-2">
          <button className="text-blue-500 cursor-pointer hover:text-blue-700">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
            </svg>
          </button>
          <button className="text-red-500 cursor-pointer hover:text-red-700">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
            </svg>
          </button>
          <button className="text-gray-500 cursor-pointer hover:text-gray-700">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
            </svg>
          </button>
              </div>
          </div>
        </div>
  
        {/* Action Buttons */}
        
        
      </div>
    );
}

export default NewCard