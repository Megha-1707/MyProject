import React from "react";
import { FiArrowDownRight } from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";

function Page1() {
  let cards = [
    {
      link : "src/ip1.png",
      value: "65+",
      name: "Frame-building specialists",
    },
    {
      link : "src/ip2.png",
      value: "7+",
      name: "Years of home construction experience",
    },
    {
      link : "src/ip3.png",
      value: "180+",
      name: "Homes were built since 2013",
    },
  ];

  return (
    <>
      <div className="bg-white h-[100vh] w-[100%] p-10 flex gap-2 ">
        <div className="bg-gray-300 h-170 w-200 rounded-2xl">
          <div className=" h-20 w-180 mt-10 ml-10 rounded-2xl flex gap-30 ">
            <div className="flex gap[20px] font-bold text-md  ">
              <img
                src="src\ip2.png"
                alt="logo"
                className="w-[50px] h-[50px] rounded-full"
              />
              <h4 className="pl-5 text-gray-900">
                EcoFrame <br />
                Houses
              </h4>
            </div>
            <div className="flex gap-8 mt-3 border-2 rounded-2xl h-10 w-100 pl-5 pt-1 font-bold transform transition-all hover:translate-x-5 hover:bg-gray-400 hover:text-gray-950">
              <div>Our Projects</div>
              <div>Payment Methods</div>
              <div>Contacts</div>
            </div>
          </div>

          <div className=" h-40 w-180 mt-6 ml-10 rounded-2xl">
            <div className="text-3xl font-bold pl-2">
              A Turnkey Frame House from 100 m² in Just <br />2 Months
            </div>
            <div className="pt-5 pl-2">
              We build environmentally friendly frame houses with high thermal
              insulation — ideal
              <br /> for your comfortable family life.
            </div>
          </div>
          <div className="bg-gray-900 text-white h-12 w-50 ml-25 mt-1 shadow-black rounded-3xl flex transform transition duration-300 hover:scale-110 hover:bg-white hover:text-gray-900 hover:border-4 shadow-2xl">
            <button className="text-md pl-3  pt-1 font-bold font-serif">
              Get a Free Quote
            </button>
            <div className="pl-3 pt-3">
              <FiArrowDownRight size={30} />
            </div>
          </div>

          <div className="flex ">
            {cards.map((e) => {
              return (
                <div className="w-80 h-60 rounded-2xl  bg-white ml-10 mt-15 mr-5 transform transition-all hover:scale-110 ">
                  <div className="flex font-bold text-md  ">
                    <img src={e.link} alt="logo" className="w-[50px] h-[50px] -translate-y-5 ml-8 rounded-full"/>
                  </div>
                  <div className="text-3xl font-medium pl-6 pt-10">{e.value}</div>
                  <div className="text-md font-medium pl-6 pt-7">{e.name}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="h-170 w-180 transform transition-all hover:opacity-[50%] rounded-2xl bg-center bg-[url(i1.jpg)]">
          <div className="flex">
            <button className="bg-white h-10 w-45 ml-20 mt-15 font-bold text-md rounded-3xl transform transition duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-white hover:text-white hover:bg-gray-900">
              Request a Quote
            </button>
            <button className="bg-white h-10 w-45 ml-10 mt-15 rounded-3xl flex transform transition duration-300 hover:scale-110 shadow-2xl hover:text-white hover:bg-gray-900">
              <div className="pl-4 pt-3">
                <FaPhone size={20} />
              </div>
              <div className="pt-2 pl-2 font-bold">+91 8310396504</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page1;
