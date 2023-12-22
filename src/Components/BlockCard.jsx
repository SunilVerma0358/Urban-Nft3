import React from "react";
import card from "../assets/image/newBlock14.webp";
import slogo from "../assets/image/slogo.webp";
import NftSecond from "../assets/image/NftSecond.webp";
import NftThree from "../assets/image/NftThree.webp";
const BlockCard = () => {
  const block = [
    {
      sre: card,
      pharaOne: "Metroverse Genesis",
      headingOne: "Block #1460",
      headingTwo: (
        <>
          Owned by <span className=" text-orange-300 font-bold"> BabyKee</span>
        </>
      ),
      src2: slogo,
    },
    {
      sre: NftSecond,
      pharaOne: "Metroverse Genesis",
      headingOne: "Block #1460",
      headingTwo: (
        <>
          Owned by <span className=" text-orange-300 font-bold"> BabyKee</span>
        </>
      ),
      src2: slogo,
    },
    {
      sre: NftThree,
      pharaOne: "Metroverse Genesis",
      headingOne: "Block #1460",
      headingTwo: (
        <>
          Owned by <span className=" text-orange-300 font-bold"> BabyKee</span>
        </>
      ),
      src2: slogo,
    },
  ];
  const ThreeBlock = block.map((s) => {
    return (
      <div className="group transition-all ease-linear duration-300 w-full xl:w-[328px] 2xl:w-full xl:h-[100px] bg-white rounded-[18px] p-[9px] mt-[11px] flex flex-col sm:flex-row gap-3 cursor-pointer ">
        <div className="overflow-hidden rounded-[10px] ">
          {" "}
          <img
            className="group-hover:scale-105 transition-all ease-linear duration-300  rounded-[10px] h-full w-full"
            src={s.sre}
            alt="hero"
          />
        </div>
        <div className="w-full ps-[11px] pe-[25px] pt-4 sm:pt-0">
          <p className="text-neutral-500 text-[7px] font-medium font-Inter leading-[8.12px]">
            {s.pharaOne}
          </p>
          <h3 className="text-zinc-700 text-sm font-bold font-Inter leading-none pt-2 ">
            {s.headingOne}
          </h3>
          <h3
            className={`text-neutral-500 text-[7px] font-medium font-Inter leading-[8.12px] pt-2`}
          >
            {s.headingTwo}
          </h3>
          <div className="flex items-center justify-between pt-[14px]">
            <p className="flex items-center">
              <span className="flex items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Iconly/Light/Heart">
                    <g id="Heart">
                      <path
                        id="Stroke 1"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.9149 7.73221C1.19957 5.49888 2.03557 2.94621 4.38024 2.19088C5.61357 1.79288 6.9749 2.02755 8.00024 2.79888C8.97024 2.04888 10.3816 1.79555 11.6136 2.19088C13.9582 2.94621 14.7996 5.49888 14.0849 7.73221C12.9716 11.2722 8.00024 13.9989 8.00024 13.9989C8.00024 13.9989 3.06557 11.3135 1.9149 7.73221Z"
                        stroke="#130F26"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Stroke 3"
                        d="M10.667 4.4668C11.3803 4.69746 11.8843 5.33413 11.945 6.08146"
                        stroke="#130F26"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </g>
                </svg>
              </span>
              1K
            </p>
            <p className="flex items-center">
              <span>
                <img src={s.src2} alt="logo" />
              </span>
              21
            </p>
          </div>
        </div>
      </div>
    );
  });
  return <div className="pb-3">{ThreeBlock}</div>;
};

export default BlockCard;
