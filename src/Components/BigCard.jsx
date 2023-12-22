import React, { useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardMap from "./CardMap";
import Tranding from "./Tranding";
import heroMain from "../assets/image/MertroVerse.webp";

const BigCard = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  return (
    <div className=" xl:w-8/12 w-[100%] px-3 ">
      <div
        className="rounded-[18px] mb-[33px] sm:mb-[66px] sm:h-[351px] bg-white bg-[url('./assets/image/bg-main-img.webp')] ps-[20px] lg:ps-[47px]  pe-[19px] pb-6 sm:pe-[29px] pt-[13px] sm:pt-[26px]
  shadow-cardShadow"
      >
        <div className="flex justify-end gap-4 md:gap-[22px] pe-4">
          <button
            onClick={goToPrev}
            className="group transition-all duration-300"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className=" group-hover:fill-[url(#paint0_linear_33_679)]"
                opacity="0.4"
                d="M16.084 2L7.916 2C4.377 2 2 4.276 2 7.665L2 16.335C2 19.724 4.377 22 7.916 22L16.084 22C19.622 22 22 19.723 22 16.334L22 7.665C22 4.276 19.622 2 16.084 2Z"
                fill="#F5D6AF"
              />
              <path
                className=" group-hover:fill-[url(#paint0_linear_33_679)]"
                d="M11.145 7.72082L7.38003 11.4688C7.09703 11.7508 7.09703 12.2498 7.38003 12.5328L11.145 16.2808C11.439 16.5728 11.914 16.5718 12.206 16.2778C12.498 15.9838 12.498 15.5098 12.204 15.2168L9.72703 12.7498H16.082C16.497 12.7498 16.832 12.4138 16.832 11.9998C16.832 11.5858 16.497 11.2498 16.082 11.2498L9.72703 11.2498L12.204 8.78382C12.351 8.63682 12.424 8.44482 12.424 8.25182C12.424 8.06082 12.351 7.86882 12.206 7.72282C11.914 7.42982 11.439 7.42882 11.145 7.72082Z"
                fill="#F5D6AF"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_33_679"
                  x1="27.1316"
                  y1="0.550725"
                  x2="-3.72395"
                  y2="16.9337"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC881" />
                  <stop offset="1" stop-color="#DA8517" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_33_679"
                  x1="19.3117"
                  y1="6.85051"
                  x2="4.89007"
                  y2="15.076"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC881" />
                  <stop offset="1" stop-color="#DA8517" />
                </linearGradient>
              </defs>
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="group transition-all duration-300"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className=" group-hover:fill-[url(#paint1_linear_11302_136)]"
                opacity="0.4"
                d="M5.916 20H14.084C17.623 20 20 17.724 20 14.335V5.665C20 2.276 17.623 0 14.084 0H5.916C2.378 0 0 2.277 0 5.666L0 14.335C0 17.724 2.378 20 5.916 20Z"
                fill="#F5D6AF"
              />
              <path
                className=" group-hover:fill-[url(#paint1_linear_11302_136)]"
                d="M10.855 14.2792L14.62 10.5312C14.903 10.2492 14.903 9.75018 14.62 9.46718L10.855 5.71918C10.561 5.42718 10.086 5.42818 9.79397 5.72218C9.50197 6.01618 9.50197 6.49018 9.79597 6.78318L12.273 9.25018H5.91797C5.50297 9.25018 5.16797 9.58618 5.16797 10.0002C5.16797 10.4142 5.50297 10.7502 5.91797 10.7502H12.273L9.79597 13.2162C9.64897 13.3632 9.57597 13.5552 9.57597 13.7482C9.57597 13.9392 9.64897 14.1312 9.79397 14.2772C10.086 14.5702 10.561 14.5712 10.855 14.2792Z"
                fill="#F5D6AF"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_11302_136"
                  x1="-5.13158"
                  y1="21.4493"
                  x2="25.724"
                  y2="5.06634"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC881" />
                  <stop offset="1" stop-color="#DA8517" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_11302_136"
                  x1="2.68833"
                  y1="15.1495"
                  x2="17.1099"
                  y2="6.92402"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC881" />
                  <stop offset="1" stop-color="#DA8517" />
                </linearGradient>
              </defs>
            </svg>
          </button>
        </div>
        <div className="flex sm:flex-row flex-wrap flex-col-reverse -mx-3  ">
          <div className="sm:w-6/12 w-full px-3 pt-[15px] sm:pt-[29px]">
            <h2 className="bg-yellowGradiant bg-clip-text text-transparent font-Inter text-base font-medium pb-[15px] sm:pb-[30px] ">
              Create MetroVerse Genesis
            </h2>
            <p className="font-Inter text-xs font-medium pb-[15px] sm:pb-[30px] max-w-[283px] text-neutral-500  leading-none">
              physical claim for issue #1 now live. please check that the token
              is available for claim via website
            </p>
            <button className="hover:bg-HoverButton transition-all duration-300 bg-buttonYellow text-white rounded-[22px] px-4 py-2 sm:w-[140px] sm:h-[40px] shadow-buttonBottom ">
              Explorer Now
            </button>
            <div className="w-full max-w-[299px] mt-[15px] sm:mt-[30px] rounded-[7px] border border-orange-300 flex flex-wrap sm:flex-nowrap justify-center sm:justify-around items-center">
              <div className="sm:border-e pe-4 sm:border-orange-300">
                <h2 className="text-orange-300 text-xs font-bold font-['Inter'] leading-tight text-center pt-3">
                  24.8K
                </h2>
                <p className="text-zinc-500 text-[10px] font-medium font-['Inter'] leading-tight text-center pb-[9px]">
                  Items
                </p>
              </div>
              <div className="sm:border-e pe-4 sm:border-orange-300">
                <h2 className="text-orange-300 text-xs font-bold font-['Inter'] leading-tight text-center pt-3">
                  4,1K
                </h2>
                <p className="text-zinc-500 text-[10px] font-medium font-['Inter'] leading-tight text-center pb-[9px]">
                  Owners
                </p>
              </div>
              <div className="sm:border-e pe-4 sm:border-orange-300">
                <h2 className="text-orange-300 text-xs font-bold font-['Inter'] leading-tight text-center pt-3">
                  0.221
                </h2>
                <p className="text-zinc-500 text-[10px] font-medium font-['Inter'] leading-tight text-center pb-[9px]">
                  Floor Price
                </p>
              </div>
              <div>
                <h2 className="text-orange-300 text-xs font-bold font-['Inter'] leading-tight text-center pt-3">
                  43.1K
                </h2>
                <p className="text-zinc-500 text-[10px] font-medium font-['Inter'] leading-tight text-center pb-[9px]">
                  Volume Traded
                </p>
              </div>
            </div>
          </div>
          <div className=" sm:w-6/12 w-full sm:px-3 pt-3 sm:pt-6 ">
            <Slider ref={sliderRef} {...settings}>
              <div>
                <div className="w-full  rounded-[18px] ">
                  <img
                    className=" xl:w-[327px] w-full  sm:min-h-[307px] sm:max-h-[307px] rounded-[18px]"
                    src={heroMain}
                    alt="main"
                  />
                </div>
              </div>
              <div>
                <div className="w-full  rounded-[18px] ">
                  <img
                    className="  xl:w-[327px] w-full  sm:min-h-[307px] sm:max-h-[307px] rounded-[18px]"
                    src={heroMain}
                    alt="main"
                  />
                </div>
              </div>
              <div>
                <div className="w-full  rounded-[18px] ">
                  <img
                    className="  xl:w-[327px] w-full  sm:min-h-[307px] sm:max-h-[307px] rounded-[18px]"
                    src={heroMain}
                    alt="main"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between ">
          <h2 className="text-neutral-600 text-base font-semibold font-Inter leading-tight">
            Top Collections
          </h2>
          <button className="flex items-center gap-[11px] text-right text-neutral-600 text-xs font-semibold font-Inter leading-tight">
            View All{" "}
            <span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.167 7.81706L3.16699 7.81706"
                  stroke="#130F26"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.13379 3.80083L13.1671 7.81683L9.13379 11.8335"
                  stroke="#130F26"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
        <div>
          <CardMap />
        </div>
        <div className="flex justify-between pt-[31px]">
          <h2 className="text-neutral-600 text-base font-semibold font-Inter leading-tight">
            Trendings NFTs
          </h2>
          <button className="flex items-center gap-[11px] text-right text-neutral-600 text-xs font-semibold font-Inter leading-tight">
            Marketplace{" "}
            <span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.167 7.81706L3.16699 7.81706"
                  stroke="#130F26"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.13379 3.80083L13.1671 7.81683L9.13379 11.8335"
                  stroke="#130F26"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
        <div>
          <Tranding />
        </div>
      </div>
    </div>
  );
};
export default BigCard;
