import React from "react";


function Card(props) {
  return (
    <>
      <div className="bg-white w-[100%] h-[100%] ">
        <div className="bg-blue-300 h-100 w-150 content-center justify-items-center rounded-2xl ml-20 mt-20 transform transition delay-100 duration-300 hover:scale-110 shadow-2xl:">
          <div className="bg-[#19376D] shadow-lg font text-white text-center font-serif content-center w-100 h-20 font-black text-5xl rounded-2xl hover:shadow-white">
            {props.name}
          </div>

          <div className=" h-50 w-125 grid grid-cols-2 grid-rows-2 gap-5 mt-10">
            <div className="bg-[#4477CE] content-center text-center font-bold rounded-2xl  shadow-red-600 transform transition-all hover:bg-blue-950 hover:text-white hover:text-2xl shadow-lg hover:2xl">
              {props.president}
            </div>

            <div className="bg-[#4477CE] content-center text-center font-bold rounded-2xl  shadow-red-600 transform transition-all hover:bg-blue-950 hover:text-white hover:text-2xl shadow-lg hover:2xl">
              {props.national_food}
            </div>

            <div className="bg-[#4477CE] content-center text-center font-bold rounded-2xl  shadow-red-600 transform transition-all hover:bg-blue-950 hover:text-white hover:text-2xl shadow-lg hover:2xl">
              {props.phone_code}
            </div>

            <div className="bg-[#4477CE] content-center text-center font-bold rounded-2xl  shadow-red-600 transform transition-all hover:bg-blue-950 hover:text-white hover:text-2xl shadow-lg hover:2xl">
              {props.symbol}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Card;
