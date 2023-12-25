import React from "react";
import logo from "../assets/image/logo.webp";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const Location = useLocation();
  return (
    <div className="overflow-y-scroll fixed bottom-0 left-0 top-0 xl:w-[305px] overflow-x-hidden h-full bg-[#FFFDFF] shadow-sidebarShadow ">
      <div className="xl:w-[305px] bg-[url('./assets/image/bgImgEllipse.webp')] bg-no-repeat bg-start h-[100%] bg-[#FFFDFF] px-1 sm:px-6   ">
        <div className="flex justify-center pt-[31px] pb-[31px] md:pb-0">
          <img src={logo} alt="logo" />
        </div>
        <h2 className="hidden md:block bg-yellowGradiant bg-clip-text text-transparent font-Inter font-bold text-base text-center">
          URBAN NFT
        </h2>

        <p className="hidden md:block font-Inter font-medium text-xs pt-[68px] pb-[18px] ps-4">
          MARKETPLACE
        </p>

        <Link
          to="/"
          className={`${
            Location.pathname === "/" ? " bg-yellowGradiant2" : ""
          } rounded-[22.5px] flex items-center gap-4 px-[15px] leading-normal  pt-[13.5px] pb-[14.5px] duration-300 hover: lg:w-[257px]`}
        >
          <span className="flex items-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Iconly/Bulk/Category">
                <g id="Category">
                  <path
                    className={`${
                      Location.pathname === "/"
                        ? "fill-[url('#paint1_linear_33_462')]"
                        : ""
                    }`}
                    id="Fill 1"
                    opacity="0.4"
                    d="M12.0562 1.5H14.5957C15.6474 1.5 16.4996 2.35939 16.4996 3.41997V5.98089C16.4996 7.04148 15.6474 7.90087 14.5957 7.90087H12.0562C11.0045 7.90087 10.1523 7.04148 10.1523 5.98089V3.41997C10.1523 2.35939 11.0045 1.5 12.0562 1.5Z"
                    fill="#A8A8A8"
                  />
                  <path
                    className={`${
                      Location.pathname === "/"
                        ? "fill-[url('#paint1_linear_33_462')]"
                        : ""
                    }`}
                    id="Combined Shape"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.40389 1.5H5.94337C6.99507 1.5 7.84726 2.35939 7.84726 3.41997V5.98089C7.84726 7.04148 6.99507 7.90087 5.94337 7.90087H3.40389C2.35219 7.90087 1.5 7.04148 1.5 5.98089V3.41997C1.5 2.35939 2.35219 1.5 3.40389 1.5ZM3.40389 10.0991H5.94337C6.99507 10.0991 7.84726 10.9585 7.84726 12.0191V14.58C7.84726 15.6399 6.99507 16.5 5.94337 16.5H3.40389C2.35219 16.5 1.5 15.6399 1.5 14.58V12.0191C1.5 10.9585 2.35219 10.0991 3.40389 10.0991ZM14.5961 10.0991H12.0566C11.0049 10.0991 10.1527 10.9585 10.1527 12.0191V14.58C10.1527 15.6399 11.0049 16.5 12.0566 16.5H14.5961C15.6478 16.5 16.5 15.6399 16.5 14.58V12.0191C16.5 10.9585 15.6478 10.0991 14.5961 10.0991Z"
                    fill="#A8A8A8"
                  />
                </g>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_33_462"
                  x1="9.6924"
                  y1="-0.142327"
                  x2="14.9603"
                  y2="9.69608"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC881" />
                  <stop offset="1" stop-color="#DA8517" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_33_462"
                  x1="0.413044"
                  y1="-2.34868"
                  x2="12.7002"
                  y2="20.793"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC881" />
                  <stop offset="1" stop-color="#DA8517" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <p
            className={`${
              Location.pathname === "/"
                ? "text-transparent bg-yellowGradiant"
                : ""
            } first-letter hidden md:block  text-[#7C7C7C]  bg-clip-text duration-300  font-Inter font-semibold`}
          >
            Dashboard
          </p>
        </Link>

        <Link
          to="/Home"
          className={`${
            Location.pathname === "/Home" ? " bg-yellowGradiant2" : ""
          } rounded-[22.5px] flex items-center gap-4 px-[15px] leading-normal  pt-[13.5px] pb-[14.5px] duration-300 hover: lg:w-[257px]`}
        >
          <span className="flex items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={`${
                  Location.pathname === "/Home"
                    ? "fill-[url('#paint1_linear_33_462')]"
                    : ""
                }`}
                opacity="0.4"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.43262 14.4413C3.43262 13.8113 3.94262 13.3013 4.57262 13.3013C5.19512 13.3013 5.70512 13.8113 5.70512 14.4413C5.70512 15.0638 5.19512 15.5738 4.57262 15.5738C3.94262 15.5738 3.43262 15.0638 3.43262 14.4413ZM11.8701 14.4413C11.8701 13.8113 12.3801 13.3013 13.0101 13.3013C13.6326 13.3013 14.1426 13.8113 14.1426 14.4413C14.1426 15.0638 13.6326 15.5738 13.0101 15.5738C12.3801 15.5738 11.8701 15.0638 11.8701 14.4413Z"
                fill="#A8A8A8"
              />
              <path
                className={`${
                  Location.pathname === "/Home"
                    ? "fill-[url('#paint1_linear_33_462')]"
                    : ""
                }`}
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.1431 3.76151C14.6006 3.76151 14.9006 3.91901 15.2006 4.26401C15.5006 4.60901 15.5531 5.10401 15.4856 5.55326L14.7731 10.4733C14.6381 11.419 13.8281 12.1158 12.8756 12.1158H4.69306C3.69556 12.1158 2.87056 11.3508 2.78806 10.3615L2.09806 2.18576L0.965557 1.99076C0.665557 1.93826 0.455557 1.64576 0.508057 1.34576C0.560557 1.03826 0.853057 0.83576 1.16056 0.88076L2.94931 1.15076C3.20431 1.19651 3.39181 1.40576 3.41431 1.66076L3.55681 3.34076C3.57931 3.58151 3.77431 3.76151 4.01431 3.76151H14.1431ZM9.59806 7.66076H11.6756C11.9906 7.66076 12.2381 7.40576 12.2381 7.09826C12.2381 6.78326 11.9906 6.53576 11.6756 6.53576H9.59806C9.28306 6.53576 9.03556 6.78326 9.03556 7.09826C9.03556 7.40576 9.28306 7.66076 9.59806 7.66076Z"
                fill="#A8A8A8"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_33_462"
                  x1="9.6924"
                  y1="-0.142327"
                  x2="14.9603"
                  y2="9.69608"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC881" />
                  <stop offset="1" stop-color="#DA8517" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_33_462"
                  x1="0.413044"
                  y1="-2.34868"
                  x2="12.7002"
                  y2="20.793"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC881" />
                  <stop offset="1" stop-color="#DA8517" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <p
            className={`${
              Location.pathname === "/Home"
                ? "text-transparent bg-yellowGradiant"
                : ""
            } first-letter hidden md:block  text-[#7C7C7C]  bg-clip-text duration-300  font-Inter font-semibold`}
          >
            Market
          </p>
        </Link>

        <Link
          to="/CardMap"
          className={`${
            Location.pathname === "/CardMap" ? " bg-yellowGradiant2" : ""
          } rounded-[22.5px] flex items-center gap-4 px-[15px] leading-normal  pt-[13.5px] pb-[14.5px] duration-300 hover: lg:w-[257px]`}
        >
          <span className="flex items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={`${
                  Location.pathname === "/CardMap"
                    ? "fill-[url('#paint1_linear_33_462')]"
                    : ""
                }`}
                opacity="0.4"
                d="M8.73223 1.33521L10.4021 4.69092C10.5251 4.93404 10.7599 5.10288 11.0307 5.1404L14.7815 5.68667C15.0006 5.71744 15.1994 5.833 15.3336 6.00934C15.4664 6.18343 15.5234 6.40404 15.4912 6.6209C15.4649 6.80099 15.3802 6.96757 15.2504 7.09514L12.5325 9.72973C12.3337 9.91357 12.2437 10.186 12.2917 10.4523L12.9609 14.1562C13.0321 14.6035 12.7358 15.0252 12.2917 15.11C12.1087 15.1392 11.9212 15.1085 11.7561 15.0244L8.41041 13.2813C8.1621 13.156 7.86879 13.156 7.62049 13.2813L4.27477 15.0244C3.86368 15.2428 3.35432 15.0942 3.12552 14.689C3.04075 14.5277 3.01075 14.3438 3.0385 14.1645L3.70765 10.4599C3.75566 10.1942 3.66489 9.92033 3.46685 9.73648L0.749013 7.10339C0.425693 6.79123 0.415941 6.27722 0.727258 5.95381C0.734009 5.94706 0.741511 5.93955 0.749013 5.93205C0.87804 5.80073 1.04758 5.71744 1.23062 5.69568L4.98142 5.14865C5.25148 5.11038 5.48628 4.94305 5.61006 4.69842L7.2199 1.33521C7.36318 1.04706 7.66025 0.867723 7.98282 0.875227H8.08334C8.36315 0.908994 8.60695 1.08233 8.73223 1.33521Z"
                fill="#A8A8A8"
              />
              <path
                className={`${
                  Location.pathname === "/CardMap"
                    ? "fill-[url('#paint1_linear_33_462')]"
                    : ""
                }`}
                d="M7.99401 13.1878C7.84873 13.1923 7.7072 13.2314 7.5799 13.3012L4.25054 15.0404C3.84317 15.2348 3.35567 15.0839 3.12728 14.6943C3.04266 14.5352 3.01195 14.3528 3.04041 14.1741L3.70538 10.4774C3.75031 10.2086 3.66045 9.93542 3.465 9.74627L0.745953 7.11386C0.423201 6.79785 0.417211 6.27917 0.733223 5.95566C0.737716 5.95115 0.74146 5.9474 0.745953 5.94365C0.874754 5.81604 1.041 5.73197 1.21997 5.7057L4.97392 5.15325C5.24575 5.11872 5.48164 4.94908 5.60145 4.70288L7.23318 1.29734C7.3882 1.02261 7.68549 0.858979 8 0.876243C7.99401 1.09918 7.99401 13.0362 7.99401 13.1878Z"
                fill="#A8A8A8"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_33_462"
                  x1="9.6924"
                  y1="-0.142327"
                  x2="14.9603"
                  y2="9.69608"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC881" />
                  <stop offset="1" stop-color="#DA8517" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_33_462"
                  x1="0.413044"
                  y1="-2.34868"
                  x2="12.7002"
                  y2="20.793"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC881" />
                  <stop offset="1" stop-color="#DA8517" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <p
            className={`${
              Location.pathname === "/CardMap"
                ? "text-transparent bg-yellowGradiant"
                : ""
            } first-letter hidden md:block  text-[#7C7C7C]  bg-clip-text duration-300  font-Inter font-semibold`}
          >
            Favorites
          </p>
        </Link>
        <p className="hidden md:block font-Inter font-medium text-xs pt-[55px] xl:pt-[70px] pb-[14px] ps-4 ">
          MY PROFILE
        </p>
        <Link
          to="/History"
          className={`${
            Location.pathname === "/History" ? " bg-yellowGradiant2" : ""
          } rounded-[22.5px] flex items-center gap-4 px-[15px] leading-normal  pt-[13.5px] pb-[14.5px] duration-300 hover: lg:w-[257px]`}
        >
          <span className="flex items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={`${
                  Location.pathname === "/History"
                    ? "fill-[url('#paint1_linear_33_462')]"
                    : ""
                }`}
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.4321 2.55317C10.4321 4.21892 11.7844 5.56927 13.4526 5.56927C13.6363 5.56836 13.8195 5.55073 14 5.51659V11.4961C14 14.0117 12.5161 15.5 9.99682 15.5H4.50977C1.98388 15.5 0.5 14.0117 0.5 11.4961V6.01707C0.5 3.50146 1.98388 2 4.50977 2H10.4849C10.4494 2.18225 10.4317 2.36751 10.4321 2.55317ZM8.86248 10.1724L11.0059 7.40659V7.39341C11.1894 7.14685 11.1425 6.79917 10.9003 6.60976C10.7831 6.51926 10.6342 6.48009 10.4875 6.50119C10.3408 6.52229 10.209 6.60185 10.1221 6.72171L8.3151 9.04634L6.25745 7.42634C6.13997 7.33482 5.99053 7.29441 5.84286 7.31424C5.69519 7.33406 5.56174 7.41245 5.47264 7.53171L3.25672 10.3898C3.17883 10.4868 3.13689 10.6078 3.13801 10.7322C3.12515 10.9836 3.2839 11.212 3.52428 11.2879C3.76466 11.3637 4.02603 11.268 4.16023 11.0549L6.01343 8.6578L8.07108 10.2712C8.18811 10.3656 8.33854 10.4083 8.4878 10.3897C8.63705 10.3711 8.77231 10.2927 8.86248 10.1724Z"
                fill="#A8A8A8"
              />
              <circle
                className={`${
                  Location.pathname === "/History"
                    ? "fill-[url('#paint1_linear_33_462')]"
                    : ""
                }`}
                opacity="0.4"
                cx="13.625"
                cy="2.375"
                r="1.875"
                fill="#A8A8A8"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_33_462"
                  x1="9.6924"
                  y1="-0.142327"
                  x2="14.9603"
                  y2="9.69608"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC881" />
                  <stop offset="1" stop-color="#DA8517" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_33_462"
                  x1="0.413044"
                  y1="-2.34868"
                  x2="12.7002"
                  y2="20.793"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC881" />
                  <stop offset="1" stop-color="#DA8517" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <p
            className={`${
              Location.pathname === "/History"
                ? "text-transparent bg-yellowGradiant"
                : ""
            } first-letter hidden md:block  text-[#7C7C7C]  bg-clip-text duration-300  font-Inter font-semibold`}
          >
            Insight
          </p>
        </Link>
        <Link
          to="/Treading"
          className={`${
            Location.pathname === "/Treading" ? " bg-yellowGradiant2" : ""
          } rounded-[22.5px] flex items-center gap-4 px-[15px] leading-normal  pt-[13.5px] pb-[14.5px] duration-300 hover: lg:w-[257px]`}
        >
          <span className="flex items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={`${
                  Location.pathname === "/Treading"
                    ? "fill-[url('#paint1_linear_33_462')]"
                    : ""
                }`}
                opacity="0.4"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.43262 14.4413C3.43262 13.8113 3.94262 13.3013 4.57262 13.3013C5.19512 13.3013 5.70512 13.8113 5.70512 14.4413C5.70512 15.0638 5.19512 15.5738 4.57262 15.5738C3.94262 15.5738 3.43262 15.0638 3.43262 14.4413ZM11.8701 14.4413C11.8701 13.8113 12.3801 13.3013 13.0101 13.3013C13.6326 13.3013 14.1426 13.8113 14.1426 14.4413C14.1426 15.0638 13.6326 15.5738 13.0101 15.5738C12.3801 15.5738 11.8701 15.0638 11.8701 14.4413Z"
                fill="#A8A8A8"
              />
              <path
                className={`${
                  Location.pathname === "/Treading"
                    ? "fill-[url('#paint1_linear_33_462')]"
                    : ""
                }`}
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.1431 3.76151C14.6006 3.76151 14.9006 3.91901 15.2006 4.26401C15.5006 4.60901 15.5531 5.10401 15.4856 5.55326L14.7731 10.4733C14.6381 11.419 13.8281 12.1158 12.8756 12.1158H4.69306C3.69556 12.1158 2.87056 11.3508 2.78806 10.3615L2.09806 2.18576L0.965557 1.99076C0.665557 1.93826 0.455557 1.64576 0.508057 1.34576C0.560557 1.03826 0.853057 0.83576 1.16056 0.88076L2.94931 1.15076C3.20431 1.19651 3.39181 1.40576 3.41431 1.66076L3.55681 3.34076C3.57931 3.58151 3.77431 3.76151 4.01431 3.76151H14.1431ZM9.59806 7.66076H11.6756C11.9906 7.66076 12.2381 7.40576 12.2381 7.09826C12.2381 6.78326 11.9906 6.53576 11.6756 6.53576H9.59806C9.28306 6.53576 9.03556 6.78326 9.03556 7.09826C9.03556 7.40576 9.28306 7.66076 9.59806 7.66076Z"
                fill="#A8A8A8"
              />{" "}
              <defs>
                <linearGradient
                  id="paint0_linear_33_462"
                  x1="9.6924"
                  y1="-0.142327"
                  x2="14.9603"
                  y2="9.69608"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC881" />
                  <stop offset="1" stop-color="#DA8517" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_33_462"
                  x1="0.413044"
                  y1="-2.34868"
                  x2="12.7002"
                  y2="20.793"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC881" />
                  <stop offset="1" stop-color="#DA8517" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <p
            className={`${
              Location.pathname === "/Treading"
                ? "text-transparent bg-yellowGradiant"
                : ""
            } first-letter hidden md:block  text-[#7C7C7C]  bg-clip-text duration-300  font-Inter font-semibold`}
          >
            Wallet
          </p>
        </Link>
        <Link
          to="/SmallCard"
          className={`${
            Location.pathname === "/SmallCard" ? " bg-yellowGradiant2" : ""
          } rounded-[22.5px] flex items-center gap-4 px-[15px] leading-normal  pt-[13.5px] pb-[14.5px] duration-300 hover: lg:w-[257px]`}
        >
          <span className="flex items-center">
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={`${
                  Location.pathname === "/SmallCard"
                    ? "fill-[url('#paint1_linear_33_462')]"
                    : ""
                }`}
                d="M5.99775 10.3813C2.763 10.3813 0 10.8913 0 12.9313C0 14.9721 2.74575 15.5001 5.99775 15.5001C9.2325 15.5001 11.9955 14.9908 11.9955 12.9501C11.9955 10.9093 9.2505 10.3813 5.99775 10.3813Z"
                fill="#A8A8A8"
              />
              <path
                className={`${
                  Location.pathname === "/SmallCard"
                    ? "fill-[url('#paint1_linear_33_462')]"
                    : ""
                }`}
                opacity="0.4"
                d="M5.99732 8.438C8.20082 8.438 9.96632 6.67175 9.96632 4.469C9.96632 2.26625 8.20082 0.5 5.99732 0.5C3.79457 0.5 2.02832 2.26625 2.02832 4.469C2.02832 6.67175 3.79457 8.438 5.99732 8.438Z"
                fill="#A8A8A8"
              />{" "}
              <defs>
                <linearGradient
                  id="paint0_linear_33_462"
                  x1="9.6924"
                  y1="-0.142327"
                  x2="14.9603"
                  y2="9.69608"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC881" />
                  <stop offset="1" stop-color="#DA8517" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_33_462"
                  x1="0.413044"
                  y1="-2.34868"
                  x2="12.7002"
                  y2="20.793"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC881" />
                  <stop offset="1" stop-color="#DA8517" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <p
            className={`${
              Location.pathname === "/SmallCard"
                ? "text-transparent bg-yellowGradiant"
                : ""
            } first-letter hidden md:block  text-[#7C7C7C]  bg-clip-text duration-300  font-Inter font-semibold`}
          >
            Profile
          </p>
        </Link>
        <Link
          to="/"
          className={`${
            Location.pathname === "/About" ? " bg-yellowGradiant2" : ""
          } rounded-[22.5px] flex items-center gap-4 px-[15px] leading-normal  pt-[13.5px] pb-[14.5px] duration-300 hover: lg:w-[257px]`}
        >
          <span className="flex items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={`${
                  Location.pathname === "/About"
                    ? "fill-[url('#paint1_linear_33_462')]"
                    : ""
                }`}
                d="M8.0088 10.1223C6.80545 10.1223 5.83203 9.18477 5.83203 8.00727C5.83203 6.82977 6.80545 5.88477 8.0088 5.88477C9.21216 5.88477 10.1626 6.82977 10.1626 8.00727C10.1626 9.18477 9.21216 10.1223 8.0088 10.1223Z"
                fill="#A8A8A8"
              />
              <path
                className={`${
                  Location.pathname === "/About"
                    ? "fill-[url('#paint1_linear_33_462')]"
                    : ""
                }`}
                opacity="0.4"
                d="M14.9226 9.7775C14.777 9.5525 14.57 9.3275 14.3018 9.185C14.0871 9.08 13.9492 8.9075 13.8265 8.705C13.4356 8.06 13.6656 7.2125 14.3171 6.83C15.0836 6.4025 15.3288 5.45 14.8843 4.7075L14.3707 3.8225C13.9339 3.08 12.9758 2.8175 12.217 3.2525C11.5425 3.6125 10.6764 3.3725 10.2855 2.735C10.1628 2.525 10.0938 2.3 10.1092 2.075C10.1322 1.7825 10.0402 1.505 9.90223 1.28C9.61864 0.815 9.10511 0.5 8.53792 0.5H7.4572C6.89768 0.515 6.38414 0.815 6.10055 1.28C5.95492 1.505 5.87061 1.7825 5.88594 2.075C5.90127 2.3 5.83229 2.525 5.70965 2.735C5.31875 3.3725 4.45264 3.6125 3.78582 3.2525C3.01935 2.8175 2.06893 3.08 1.62438 3.8225L1.11084 4.7075C0.673957 5.45 0.919227 6.4025 1.67803 6.83C2.32953 7.2125 2.55947 8.06 2.17623 8.705C2.04594 8.9075 1.90797 9.08 1.69336 9.185C1.43276 9.3275 1.20282 9.5525 1.08019 9.7775C0.796592 10.2425 0.811922 10.8275 1.09551 11.315L1.62438 12.215C1.90797 12.695 2.43683 12.995 2.98869 12.995C3.24929 12.995 3.55588 12.92 3.80115 12.77C3.99276 12.6425 4.2227 12.5975 4.47564 12.5975C5.23444 12.5975 5.87061 13.22 5.88594 13.9625C5.88594 14.825 6.59109 15.5 7.48019 15.5H8.52259C9.40403 15.5 10.1092 14.825 10.1092 13.9625C10.1322 13.22 10.7683 12.5975 11.5271 12.5975C11.7724 12.5975 12.0024 12.6425 12.2016 12.77C12.4469 12.92 12.7458 12.995 13.0141 12.995C13.5583 12.995 14.0871 12.695 14.3707 12.215L14.9073 11.315C15.1832 10.8125 15.2062 10.2425 14.9226 9.7775Z"
                fill="#A8A8A8"
              />{" "}
              <defs>
                <linearGradient
                  id="paint0_linear_33_462"
                  x1="9.6924"
                  y1="-0.142327"
                  x2="14.9603"
                  y2="9.69608"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC881" />
                  <stop offset="1" stop-color="#DA8517" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_33_462"
                  x1="0.413044"
                  y1="-2.34868"
                  x2="12.7002"
                  y2="20.793"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC881" />
                  <stop offset="1" stop-color="#DA8517" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <p
            className={`${
              Location.pathname === "/About"
                ? "text-transparent bg-yellowGradiant"
                : ""
            } first-letter hidden md:block  text-[#7C7C7C]  bg-clip-text duration-300  font-Inter font-semibold`}
          >
            Setting
          </p>
        </Link>
        <button className="group rounded-[22.5px] flex items-center gap-4 px-[15px] leading-normal xl:mt-[60px] mt-[100px]  pt-[13.5px] pb-[14.5px] duration-300 hover:bg-yellowGradiant2 lg:w-[257px]">
          <span className="flex items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="group-hover:fill-[url('#paint1_linear_33_462')]"
                opacity="0.4"
                d="M0.5 3.83525C0.5 1.997 2.02268 0.5 3.8934 0.5H7.61423C9.48114 0.5 11 1.9925 11 3.82775V12.1648C11 14.0037 9.47732 15.5 7.60584 15.5H3.88653C2.01886 15.5 0.5 14.0075 0.5 12.1722V11.4672V3.83525Z"
                fill="#A8A8A8"
              />
              <path
                className="group-hover:fill-[url('#paint1_linear_33_462')]"
                d="M15.3339 7.59104L13.1996 5.40929C12.979 5.18429 12.624 5.18429 12.4041 5.41079C12.185 5.63729 12.1857 6.00254 12.4056 6.22754L13.575 7.42229H12.4538H6.16107C5.85063 7.42229 5.59863 7.68104 5.59863 7.99979C5.59863 8.31929 5.85063 8.57729 6.16107 8.57729H13.575L12.4056 9.77204C12.1857 9.99704 12.185 10.3623 12.4041 10.5888C12.5144 10.702 12.6583 10.759 12.803 10.759C12.9461 10.759 13.09 10.702 13.1996 10.5903L15.3339 8.40929C15.4398 8.30054 15.4997 8.15354 15.4997 7.99979C15.4997 7.84679 15.4398 7.69979 15.3339 7.59104Z"
                fill="#A8A8A8"
              />{" "}
              <defs>
                <linearGradient
                  id="paint0_linear_33_462"
                  x1="9.6924"
                  y1="-0.142327"
                  x2="14.9603"
                  y2="9.69608"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC881" />
                  <stop offset="1" stop-color="#DA8517" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_33_462"
                  x1="0.413044"
                  y1="-2.34868"
                  x2="12.7002"
                  y2="20.793"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC881" />
                  <stop offset="1" stop-color="#DA8517" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <p className="hidden md:block group-hover:bg-yellowGradiant text-[#7C7C7C] group-hover:text-transparent bg-clip-text duration-300  font-Inter font-semibold">
            Log out
          </p>
        </button>
      </div>
    </div>
  );
};

export default Header;
