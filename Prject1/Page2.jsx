import React from "react";

function Page2() {

  let card = [
    {
      img: "src/ip1.png",
      headline: "High Strength",
      desc: "Resistant to cracks and deformations",
    },
    {
      img: "src/ip2.png",
      headline: "Thermal Insulation",
      desc: "Warms up quickly and retains heat for a long time",
    },
    {
      img: "src/ip3.png",
      headline: "No Shrinkage",
      desc: "Move in immediately after finishing",
    },
  ];
  return (
    <>
      <div className="bg--white h-[100vh] w-[100%] p-10 flex gap-15">
        <div className=" h-170 w-200 rounded-2xl ">
          <div className=" h-20 w-180  ml-10 rounded-2xl text-4xl font-bold text-center pt-5 transform transition-all hover:scale-110">
            We Build Using Frame House Technology
          </div>
          <div className=" h-20 w-150 mt-5 ml-25 rounded-2xl text-xl font-semibold border-2 hover:bg-gray-800 hover:text-white pt-2 pl-2">
            Cottages and bathhouses built with frame technology have gained
            popularity worldwide. Some have lasted for centuries.
          </div>
          <div
            id="img" className="h-110 w-200 mt-5 pt-5 font-bold rounded-2xl transform transition-all hover:translate-y-5 bg-[url(im.png)] hover:backdrop-blur-2xl hover:*:opacity-[200]">
            <p className="text-center text-4xl transition">Frame House</p>
          </div>
        </div>

        <div className=" h-170 w-150 rounded-2xl">
          <div className="flex flex-col">
            {card.map((e) => {
              return (
                <div className="w-120 h-40 rounded-2xl border-4 mt-12 ml-15 mr-5  flex transform transition-all hover:scale-110 ">
                  <div className=" w-55 h-38 rounded-2xl p-2 ">
                    <img
                      src={e.img}
                      className="h-[18vh] w-[25vw] rounded-2xl"
                    />
                  </div>
                  <div className="bg-gray-900 w-70 h-38">
                    <div className="text-2xl text-white font-medium p-2">
                      {e.headline}
                    </div>
                    <div className="text-md text-white font-medium pl-3 pt-5">
                      {e.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page2;
