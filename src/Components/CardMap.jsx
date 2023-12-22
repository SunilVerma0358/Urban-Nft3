import React from "react";
import bgImageCard from "../assets/image/topCollection.webp";
import MetaImg from "../assets/image/game.webp";
import bgImageCard2 from "../assets/image/phanton-658139d1542f5.webp";
import SmallImg from "../assets/image/cardSmallImf.webp";
import Ghost from "../assets/image/Ghost.webp";
import Rannagor from "../assets/image/Rannagor.webp";

const CardMap = () => {
  const Array = [
    {
      bgImage: bgImageCard,
      sre: SmallImg,
      heading: "Jozo Gators",
      phara: "1.1K",
    },
    {
      bgImage: bgImageCard2,
      sre: Ghost,
      heading: "PXN: Ghost Division",
      phara: "10K",
    },
    {
      bgImage: MetaImg,
      sre: Rannagor,
      heading: "Ragnarok Meta",
      phara: "7.8K",
    },
  ];
  const ThreeCard = Array.map((p) => {
    return (
      <div className="md:w-4/12 sm:w-6/12 w-full px-3  mb-4 md:mb-0">
        <div className="overflow-hidden rounded-[18px] cursor-pointer">
          <div
            style={{
              backgroundImage: `url(${p.bgImage})`,
            }}
            className="hover:scale-105 transition-all ease-linear duration-300  rounded-[18px] bg-no-repeat bg-cover w-full flex justify-center items-end relative"
          >
            <div className="text-center relative z-20">
              <span className="flex justify-center pt-[60px] rounded-md">
                <img
                  className="p-[2px] bg-white rounded-md"
                  src={p.sre}
                  alt="imall"
                />
              </span>
              <h2 className="text-center text-white text-base font-semibold font-Inter pt-[6px]">
                {p.heading}
              </h2>
              <p className="text-white text-[11px] font-normal text-center pt-[7px] pb-2">
                {p.phara}
              </p>
            </div>
            <span className=" w-[100%]  min-h-[69px] bg-neutral-500  bg-opacity-70 backdrop-blur-sm rounded-bl-[18px] rounded-br-[18px] z-10 absolute bottom-0"></span>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="flex flex-row flex-wrap -mx-3 pt-[17px] justify-center">
      {ThreeCard}
    </div>
  );
};

export default CardMap;