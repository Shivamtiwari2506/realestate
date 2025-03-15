import React, { useState } from "react";
import { useProperty } from "../context/getContext";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { toast } from "react-toastify";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const NewCard = ({ property }) => {
  const [liked, setLiked] = useState(false);
  const [isShare, setIsShare] = useState(false);
  const handleShare = () => {
    setIsShare(!isShare);
  };

  const handleClick = () => {
    setLiked(!liked);
    toast.success(liked ? "Removed from Wishlist" : "Added to Wishlist");
  };

  const { setSelectedProperty } = useProperty();
  const navigate = useNavigate();

  const handleProperty = () => {
    setSelectedProperty(property);
    navigate("/details");
  };

  return (
    <div className=" hover: rounded-lg w-auto h-auto m-3 overflow-hidden shadow-lg bg-white ">
      {/* Image Section */}
      <div>
        <img
          className="w-auto h-auto object-cover"
          src={property.imageUrl}
          alt={`image property`}
        />
      </div>

      {/* Content Section */}
      <div className="p-3">
        {/* Address */}
        <h2 className="text-lg font-semibold text-gray-800">
          {property.location}
        </h2>
        {/* Price */}
        <p className="text-lg font-bold text-blue-600 mb-1">{property.rent}</p>

        {/* Features */}
        <div className="flex items-center space-x-3 text-gray-600 mb-2">
          <span className="flex items-center text-sm">
            <svg className="w-5 h-5 " fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a7 7 0 00-14 0c0 .34.024.673.07 1h13.86z" />
            </svg>
            {property.type}
          </span>
          <span className="flex items-center text-sm">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zM7 7a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H8a1 1 0 01-1-1V7z"
                clipRule="evenodd"
              />
            </svg>
            {property.sqft} sq ft
          </span>
        </div>

        {/* Agent Section */}
        <div className="flex items-center justify-between">
          <img
            className="w-9 h-9 rounded-full mr-0.5"
            src={property.agentImage}
            alt={`agent's profile`}
          />
          <span className="text-sm text-gray-800 font-normal">
            {property.agentName}
          </span>

          <div className=" px-2 py-1 flex flex-wrap justify-end space-x-2">
            <div className="relative flex flex-col justify-center">
              <button
                onClick={handleShare}
                className="text-blue-500 cursor-pointer hover:text-blue-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
              </button>
              <div
                className={`absolute bottom-10 left-0 flex space-x-2 p-2 bg-white shadow-lg rounded-md transition-opacity duration-200 ${
                  isShare ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
            <div>
              
              <button
                onClick={handleClick}
                className={`cursor-pointer p-2 rounded-full transition-colors duration-300 ${
                  liked ? "text-red-500" : "text-gray-500"
                }`}
              >
                <Heart fill={liked ? "red" : "white"} size={22} />
              </button>
            </div>
            <button
              onClick={handleProperty}
              className="text-gray-500 cursor-pointer hover:text-gray-700"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
    </div>
  );
};

export default NewCard;
