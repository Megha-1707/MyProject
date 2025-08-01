import React from "react";
import { FiArrowDownRight } from "react-icons/fi";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Page3() {
  let images = [
    {
      img : "src/ip1.png",
      headline: "Frame House, 77 m² Price: from ₽5,800,000",
    },
    {
      img : "src/ip2.png",
      headline: "Frame House, 94 m² Price: from ₽7,200,000",
    },
    {
      img : "src/ip3.png",
      headline: "Frame House, 65 m² Price: from ₽6,000,000",
    },
    {
      img : "public/i1.jpg",
      headline: "Frame House, 60 m² Price: from ₽5,200,000",
    },
  ];
  return (
    <>
      <div className="bg-gray-300 h-[100vh] w-[100%] p-5 ">
        <div className=" h-50 w-350 rounded-2xl flex gap-60 ml-10">
          <div className=" h-40 w-120 mt-5 ml-17 rounded-2xl text-4xl font-bold text-center pt-5 ">Project Catalog (2024) 
            <div className="text-4xl pt-10 transform transition-all hover:scale-110 ">Explore Our 2024 Home Designs</div>
          </div>
          <div className=" h-25 w-120 mt-5 ml-20 rounded-2xl text-2xl font-bold  transform transition-all hover:border-white hover:border-4 text-center pt-5">Frame-built homes remain one of the most popular choices in Russia</div>
        </div>

        <div className="bg-gray-300 h-100 w-350 rounded-2xl mt-10 ml-10">
          <div className="flex">
            {images.map((e) => {
              return (
                <div className="w-52 h-80 rounded-lg  mt-10 ml-30 transform transition-all hover:scale-110">
                  <div className=" w-50 h-38"> 
                    <img src={e.img} className="h-[30vh] w-[40vw] rounded-2xl" />
                  </div>
                  <div className="text-md font-medium pl-5 pt-20">{e.headline}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className=" h-20 rounded-2xl m-5 flex gap-250 ">
          <div className="bg-gray-900 text-white h-12 w-45 ml-25 shadow-black rounded-3xl flex transform transition duration-300 hover:scale-110 hover:border-4 hover:bg-white hover:text-gray-900 shadow-2xl">
                      <button className="text-2xl pl-6 font-bold font-serif ">Click</button>
                      <div className="pl-3 pt-3"><FiArrowDownRight size={30} /></div>
                    </div>
          <div className=" h-15 w-60 rounded-2xl flex gap-10">
            <FaArrowAltCircleLeft size={30}/>
              <FaArrowAltCircleRight size={30} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page3;
