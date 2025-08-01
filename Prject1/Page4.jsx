import React from "react";

function Page4() {
  let img = [
    {
      headline: "C1",
      num: 1,
    },
    {
      headline: "C2",
      num: 2,
    },
    {
      headline: "C3",
      num: 3,
    },
    {
      headline: "C4",
      num: 4,
    },
  ];
  let ele = [
    {
      headline: "C1",
      num: 1,
    },
    {
      headline: "C2",
      num: 2,
    },
    {
      headline: "C3",
      num: 3,
    },
   
  ];
  return (
    <>
      <div className="bg-purple-400 h-[150vh] w-[100%] p-5 ">
        <div className="bg-blue-500 h-30 w-350 rounded-2xl flex gap-60 ml-10"></div>

        <div className="bg-red-300 h-90 w-350 rounded-2xl mt-8 ml-10">
          <div className="flex">
            {img.map((e) => {
              return (
                <div className="w-60 h-70 rounded-lg border-4 border-purple-500 mt-10 ml-22">
                  <div className="text-2xl font-medium p-2">{e.headline}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-blue-500 h-25 w-300 rounded-2xl flex gap-60 ml-30 mt-8"></div>
        <div className="bg-red-300 h-90 w-350 rounded-2xl mt-8 ml-10 pl-30">
          <div className="flex">
            {ele.map((e) => {
              return (
                <div className="w-80 h-70 rounded-lg border-4 border-purple-500 mt-10 ml-13">
                  <div className="text-2xl font-medium p-2">{e.headline}</div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </>
  );
}

export default Page4;
