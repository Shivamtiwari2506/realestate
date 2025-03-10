import React, { useState, useRef, useEffect } from "react";
import imgone from "../assets/image/Rectangle11.png";
import imgtwo from "../assets/image/Rectangle12.png";
import imgthree from "../assets/image/Rectangle13.png";
import imgfour from "../assets/image/Rectangle14.png";
import imgfive from "../assets/image/Rectangle11.png";
import sell from "../assets/image/Home1.png";
import rent from "../assets/image/Home2.png";
import buy from "../assets/image/Home3.png";
import free from "../assets/image/Home4.png";
import { groupImages } from "../utils/groupImages.js";
import bottom from "../assets/image/Calltoaction.png";
import NewCard from "./NewCard";
import { NavLink } from "react-router-dom";
import Searchdata from "./Searchdata";

export default function Home() {
  
  const cardImages = Searchdata;
  
  const [chooseLocation, setChooseLocation] = useState("");
  const [chooseRent, setChooseRent] = useState("");
  
  const [filteredCards,setFilteredCards] = useState(cardImages) 

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 300;
    }
  };

  const filterHandler = ()=>{
    const filtered = cardImages
    .filter((card) => chooseLocation === "" || card.location === chooseLocation)
    .filter((card) => chooseRent === "" || card.rent === chooseRent);

    setFilteredCards(filtered)
    
  }
  const [flag, setFlag] = useState(false);

  

  return (
    <>
      <div className="px-2 max-w-[1200px]  mx-auto ">
        <div className={`max-w-[1200px] mx-auto`}>
          <div className=" lg:flex lg:max-w-[800px] relative -z-50 sm:z-auto text-center items-center lg:gap-5   lg:rounded-xl bg-white md:absolute md:top-[27rem] justify-items-center  lg:left-1/2 transform lg:-translate-x-1/2">
            <div className="grid md:gap-1 m-3 p-2 ">
              <label htmlFor="location" className="text-center ">
                Location
              </label>
              <select
                onChange={(e) => {
                  const selectedCity = e.target.value;
                  setChooseLocation(selectedCity);
                }}
                id="location"
              >
                <option value="" className="text-[0.9rem] font-stretch-50%">
                  Select your city
                </option>
                {cardImages.map((city, index) => (
                  <option
                    key={index}
                    value={city.location}
                    className="text-[0.9rem] font-stretch-50%"
                  >
                    {city.location}{" "}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid md:gap-1 m-3 p-2">
              <label htmlFor="rent" className="text-center ">
                Rent Range
              </label>
              <select
                onChange={(e) => {
                  const selectedRent = e.target.value;
                  setChooseRent(selectedRent);
                }}
                id="rent"
              >
                <option value="" className="text-[0.9rem] font-stretch-50%">
                  Select your rent range
                </option>
                {cardImages.map((city, index)=>(
                  <option
                    key={index}
                    value={city.rent}
                    className="text-[0.9rem] font-stretch-50%"
                  >
                    {city.rent}
                  </option>
                ))}
              </select>
            </div>
            <div className="m-3 p-2">
              <button
                onClick={filterHandler}
                className="border  bg-[#4A60A1] text-white cursor-pointer rounded-xl md:px-4 md:py-2 px-6 py-1"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="lg:mt-20 md:mt-10 mt-10">
          <div className="text-center">
            <h2 className="font-bold text-xl">Propertice by Are</h2>
            <p className="md:w-xl justify-self-center pt-5 text-[0.9rem] font-stretch-50%">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </p>
          </div>

          {/* <-----------------------------New Card----------------------------> */}
          <div className="py-5 w-auto h-auto">
            <div className="md:grid md:grid-cols-4 w-auto h-auto">
              { filteredCards.length > 0 && (
                 filteredCards
                  .slice(0, 4)
                  .map((card,index) => (
                    <NewCard property = {card} key= {index}/>
                  ))
              )
              }
              
            </div>
            

            <div className="text-center mt-3 mb-3">
              <NavLink to="/gallery">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Explore Properties
                </button>
              </NavLink>
            </div>
          </div>

          {/* old code */}

          {/* <div className=' pt-5 '>
                    <div className='md:flex justify-items-center  '>
                        <div className=''>
                            <img className='w-[90%] justify-self-center' src={fame} alt="" />
                        </div>
                        <div>
                            <img className='w-[90%] justify-self-center' src={fameTwo} alt="" />
                        </div>
                        <div>
                           <img className='w-[90%] justify-self-center' src={fameThree} alt="" />
                        </div>
                    </div>

                    <div className='md:flex justify-items-center'>
                      <div>
                         <img className='w-[90%] justify-self-center' src={fameFour} alt="" />
                      </div>
                      <div>
                         <img className='w-[90%] justify-self-center' src={fameFive} alt="" />
                      </div>
                      <div>
                         <img className='w-[90%] justify-self-center' src={fameSix} alt="" />
                      </div>
                    </div>

                    <div className='md:flex justify-items-center'>
                      <div>
                        <img className='w-[90%] justify-self-center' src={fameFour} alt="" />
                      </div>
                      <div>
                        <img className='w-[90%] justify-self-center' src={fameFive} alt="" />
                      </div>
                      <div>
                        <img className='w-[90%] justify-self-center' src={fameSix} alt="" />
                      </div>
                    </div>
            </div> */}
        </div>
      </div>

      <div className=" bg-[#EDEFF6]">
        <div className=" pt-5 px-2 max-w-[1200px]  mx-auto pb-10">
          <div className="text-center">
            <h3 className="font-bold text-xl">Propertice by Are</h3>
            <p className="md:w-xl justify-self-center pt-2 text-[0.9rem] font-stretch-50%  ">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </p>
          </div>
          <div className="grid lg:grid-cols-4  md:grid-cols-2 text-center md:gap-10 md:pt-5 ">
            <div className="lg:justify-items-start justify-items-center pt-7">
              <img className="w-[50px] " src={sell} alt="" />
              <p className="font-bold pt-3">Sell your home</p>
              <p className="md:text-start w-50  pt-3 text-[0.9rem] font-stretch-50% ">
                We do a free evaluation to be sure you want to start selling.
              </p>
              <ul className="pt-4 text-[0.9rem] font-stretch-50%">
                <li>
                  <a href="">Learn more</a>
                </li>
              </ul>
            </div>
            <div className="lg:justify-items-start justify-items-center pt-7">
              <img className="w-[50px] " src={rent} alt="" />
              <p className="font-bold pt-3">Rent your home</p>
              <p className="md:text-start w-50  pt-3 text-[0.9rem] font-stretch-50%">
                We do a free evaluation to be sure you want to start selling.
              </p>
              <ul className="pt-4 text-[0.9rem] font-stretch-50%">
                <li>
                  <a href="">Learn more</a>
                </li>
              </ul>
            </div>
            <div className="lg:justify-items-start justify-items-center pt-7">
              <img className="w-[50px] " src={buy} alt="" />
              <p className="font-bold pt-3">Buy a home</p>
              <p className="md:text-start w-50 pt-3 text-[0.9rem] font-stretch-50% ">
                We do a free evaluation to be sure you want to start selling.
              </p>
              <ul className="pt-4 text-[0.9rem] font-stretch-50%">
                <li>
                  <a href="">Learn more</a>
                </li>
              </ul>
            </div>
            <div className="lg:justify-items-start justify-items-center pt-7">
              <img className="w-[50px] " src={free} alt="" />
              <p className="font-bold pt-3">Free marketing</p>
              <p className="md:text-start w-50 pt-3 text-[0.9rem] font-stretch-50%">
                We do a free evaluation to be sure you want to start selling.
              </p>
              <ul className="pt-4 text-[0.9rem] font-stretch-50%">
                <li>
                  <a href="">Learn more</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="px-2 max-w-[1200px]  mx-auto">
        <div className="pt-10 ">
          <div className="text-center">
            <h4 className="font-bold text-xl">Propertice by Are</h4>
            <p className="md:w-xl justify-self-center pt-2 text-[0.9rem] font-stretch-50%">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </p>
          </div>
          {/* Cards should be here */}

          <div className="grid md:grid-cols-3 justify-items-center mt-10 gap-5  grid-cols-1">
            <div>
              <img src={imgtwo} alt="img" />
            </div>
            <div>
              <img src={imgone} alt="img" />
            </div>
            <div>
              <img src={imgthree} alt="img" />
            </div>
            <div className="md:col-span-2 md:w-[110%] hidden md:block ">
              <img
                className="items-center justify-self-center -mt-6"
                src={imgfour}
                alt="img"
              />
            </div>
            <div className="md:w-full pb-8">
              <img src={imgfive} alt="img" />
            </div>
          </div>
        </div>
      </div>

      <div className="px-2 max-w-[1200px]  mx-auto">
        <div className="pb-10 ">
          <div className="text-center">
            <h5 className="font-bold text-xl">Propertice by Are</h5>
            <p className="md:w-xl justify-self-center pt-2 text-[0.9rem] font-stretch-50%">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat
            </p>
          </div>

          <div>
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto flex space-x-2 py-3 no-scrollbar scroll-smooth"
            >
              {groupImages.map((img, index) => (
                <img
                  key={index}
                  className="w-screen rounded-md"
                  src={img}
                  alt="image"
                />
              ))}
            </div>
            <div className="flex justify-center md:gap-3 gap-2">
              <button
                onClick={scrollLeft}
                className="w-8 h-8 rounded bg-sky-500 opacity-50 hover:opacity-100 text-lg font-bold text-white content-center pb-1"
              >
                &lt;
              </button>

              <button
                onClick={scrollRight}
                className="w-8 h-8 rounded bg-sky-500 opacity-50 hover:opacity-100  text-lg font-bold text-white content-center pb-1"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <NavLink to="/contactus">
          <img src={bottom} alt="" />
        </NavLink>
      </div>
    </>
  );
}
