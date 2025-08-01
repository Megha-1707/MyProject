import React from "react";
import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdHome } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { RiHeadphoneFill } from "react-icons/ri";
import { RiUserCommunityFill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { IoTicket } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";


function Pro1() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }  }

  let array = [
        {
            headline : "Members onsite",
            num : [count],
            icon : <FaUserGroup size={55} />
        },
        {
            headline : "Unpaid Invoices",
            num : [count],
            icon : <MdLibraryBooks size={55} />
        },
        {
            headline : "Unread Messages",
            num : [count],
            icon : <MdMessage size={55}/>
        },
        {
            headline : "Your Tickets",
            num : [count],
            icon : <IoTicket size={55}/>
        }
    ]
  return (
    <>
      <div className="bg-blue-200 flex gap-3 w-full h-20 pt-4 pl-20 ">
        <FaArrowCircleRight size={30} />
        <CiLocationOn size={30} />
        Davanagere
        <RiArrowDropDownLine size={30} />
        <div className="flex gap-4 ml-250">
          <FaCartArrowDown size={30} />
          <IoIosNotifications size={30} />
          <IoPersonCircle size={30} />
          Megha 
          <RiArrowDropDownLine size={30} />
        </div>
      </div>

      <div className="flex">
        <div className="bg-blue-200 w-20 h-164 flex flex-col gap-10 pt-10 pl-4 ">
          <MdHome size={30} />
          <IoMdSunny size={30} />
          <FaCalendarAlt size={30} />
          <RiHeadphoneFill size={30} />
          <RiUserCommunityFill size={30} />
          <IoSettings size={30} />
        </div>

        <div>
          <div className=" w-[100%] flex">
            <div>
              <div className="text-5xl ml-10 mt-10 font-bold">Hello Megha ,</div>
              <div className="text-2xl ml-10 mt-5 ">
                This is what we have got for today
              </div>
            </div>
            <div className=" w-50 ml-150 mt-10 flex items-center gap-6">
              <button onClick={increment} className="bg-blue-200 rounded-2xl border-4 w-20 h-15 text-4xl font-bold">+</button>
              <button onClick={decrement} className="bg-blue-200 rounded-2xl border-4 w-20 h-15 text-4xl font-bold">-</button>
            </div>
          </div>

          <div className="flex">
            {array.map((e) => {
              return (
                <div className="w-3xs h-40 rounded-lg  bg-blue-200 mt-30 ml-20 ">
                  <div className="text-2xl font-medium p-2">{e.headline}</div>
                  <div className="text-5xl font-medium pl-6">{e.num}</div>
                  <div className="pl-40">{e.icon} </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Pro1;
