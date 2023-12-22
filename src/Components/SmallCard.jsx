import React from "react";
import BlockCard from "./BlockCard";
import History from "./History";

const SmallCard = () => {
  return (
    <div className="xl:w-4/12 w-full pt-6 md:pt-8 xl:pt-0  sm:pe-3  sm:ps-6 sm:flex xl:block flex-row  xl:mx-0">
      <div className="xl:w-full md:w-6/12 w-full sm:px-3 xl:px-0">
        <h2 className="text-neutral-600 text-base font-semibold font-Inter leading-tigh">
          New NFTs
        </h2>
        <div>
          <BlockCard />
        </div>
      </div>
      <div className=" bg-white rounded-[18px] shadow pb-[17px] xl:pb-[27px] pt-[17px] w-full md:w-6/12 xl:w-[328px] 2xl:w-full xl:px-[15px] px-3 xl:mt-[45px] ">
        <div className="flex justify-between px-2 pb-4 sm:pb-9 ">
          <h3 className="text-neutral-600 text-base font-medium font-Inter leading-tight">
            History
          </h3>
          <select
            id="Last Month"
            className="rounded border text-neutral-600
border-neutral-400 outline-none"
          >
            <option
              value="volvo"
              className="text-white text-xs font-normal font-Inter leading-tight bg-black"
            >
              Last Month
            </option>
            <option
              value="saab"
              className="text-white text-xs font-normal font-Inter leading-tight bg-black"
            >
              Saab
            </option>
            <option
              value="opel"
              className="text-white text-xs font-normal font-Inter leading-tight bg-black"
            >
              Opel
            </option>
            <option
              value="audi"
              className="text-white text-xs font-normal font-Inter leading-tight bg-black"
            >
              Audi
            </option>
          </select>
        </div>
        <div className="xl:pb-[73px] pb-[30px]  ">
          <History />
        </div>
        <div className="flex justify-center">
          <button className="hover:bg-HoverButton transition-all duration-300 mx-auto xl:w-[290px] w-full h-[51px] px-4 py-2 bg-gradient-to-br from-orange-300 to-amber-600 rounded-[22px] shadow-buttonBottom justify-center items-center gap-1 inline-flex text-white text-sm font-medium font-Inter leading-tight ">
            Explorer Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default SmallCard;
