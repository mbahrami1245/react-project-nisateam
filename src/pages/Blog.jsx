/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import baner from "../assets/images/breadcrumb-01.jpg";
import blog from "../assets/images/blog-in-01.jpg";
import blog2 from "../assets/images/blog-in-02.jpg";
import blog3 from "../assets/images/blog-in-03.jpg";
import post from "../assets/images/blog-sm-1.jpg";
import post2 from "../assets/images/blog-sm-2.jpg";
import post3 from "../assets/images/blog-sm-3.jpg";
import post4 from "../assets/images/blog-sm-4.jpg";

import { useState } from "react";
import Header from "../components/Header";

const Blog = () => {
  const [active, setActive] = useState(1);

  const leftHandler = () => {
    if (active === 1) {
      setActive(3);
      return;
    }
    setActive(active - 1);
  };

  const rightHandler = () => {
    if (active === 3) {
      setActive(1);
      return;
    }
    setActive(active + 1);
  };
  return (
    <section className="w-full h-full">
      {/* header */}
      <Header />
      {/* head */}
      <div className="w-full h-[460px] relative " style={{ backgroundImage: `url(${baner})` }}>
        <div className="absolute top-0 left-0 w-full h-full bg-blueblack opacity-70"></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start px-20 bg-transparent">
          <span className="font-dayone text-white text-[55px]">BLOG</span>
        </div>
      </div>
      {/* content */}
      <section className="w-full grid mt-20 grid-cols-3 gap-20 px-20">
        {/* main */}
        <div className="col-span-2 flex flex-col gap-16">
          {/* blog 1 */}
          <div className="w-full flex flex-col gap-10">
            {/* img */}
            <div className="w-full aspect-h-1 aspect-w-2 overflow-hidden rounded-md">
              <img className="w-full h-full object-cover object-center" src={blog} alt="" />
            </div>
            {/* detail */}
            <div className="flex items-center gap-16 font-archivo text-sm font-bold">
              <div className="flex gap-1">
                <span className="text-blue flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </span>
                <span className="">ALEXTINA</span>
              </div>
              <div className="flex gap-1">
                <span className="text-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <span>Dec 28, 2022</span>
              </div>
              <div className="flex gap-1">
                <span className="text-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                </span>
                <span>(04)COMENTS</span>
              </div>
              <div className="flex gap-1">
                <span className="text-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <span>1,526 views</span>
              </div>
            </div>
            {/* text head */}
            <div className="font-dayone text-[36px]  text-blueblack">
              <h1 className="hover:text-green transition-all duration-300">
                Lavoratories used for scientic reseach take many froms.
              </h1>
            </div>
            {/* text body */}
            <div className="font-archivo">
              <p>
                Laboratories used for scientific research take many forms because of the differing
                requirements of specialists in the various fields of science and engineering. A
                physics laboratory
              </p>
            </div>
            {/* button */}
            <div className="font-archivo font-bold">
              <button className="bg-blue text-center text-sm rounded-md px-10 py-4 text-white">
                READ MORE
              </button>
            </div>
          </div>
          {/* blog 2 */}
          <div className="w-full flex flex-col gap-10">
            {/* img */}
            <div className="w-full relative overflow-hidden">
              <div
                className={`${active === 2 && "-translate-x-1/3"} ${
                  active === 3 && "-translate-x-2/3"
                } ${
                  active === 4 && "-translate-x-3/3"
                } w-[300%] transition-all duration-700 flex items-center`}
              >
                {/* imag1 */}
                <div className="w-1/3">
                  <div className="w-full aspect-h-1 aspect-w-2 overflow-hidden rounded-md">
                    <img className="w-full h-full object-cover object-center" src={blog} alt="" />
                  </div>
                </div>
                {/* imag1 */}
                <div className="w-1/3">
                  <div className="w-full aspect-h-1 aspect-w-2 overflow-hidden rounded-md">
                    <img className="w-full h-full object-cover object-center" src={blog2} alt="" />
                  </div>
                </div>
                {/* imag1 */}
                <div className="w-1/3">
                  <div className="w-full aspect-h-1 aspect-w-2 overflow-hidden rounded-md">
                    <img className="w-full h-full object-cover object-center" src={blog3} alt="" />
                  </div>
                </div>
              </div>
              {/* img arrow key */}
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
                <span
                  onClick={leftHandler}
                  className="flex items-center cursor-pointer justify-center w-16 h-16 bg-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </span>
                <span
                  onClick={rightHandler}
                  className="flex items-center cursor-pointer justify-center w-16 h-16 bg-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </div>
            </div>
            {/* detail */}
            <div className="flex items-center gap-16 font-archivo text-sm font-bold">
              <div className="flex gap-1">
                <span className="text-blue flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </span>
                <span className="">ALEXTINA</span>
              </div>
              <div className="flex gap-1">
                <span className="text-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <span>Dec 28, 2022</span>
              </div>
              <div className="flex gap-1">
                <span className="text-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                </span>
                <span>(04)COMENTS</span>
              </div>
              <div className="flex gap-1">
                <span className="text-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <span>1,526 views</span>
              </div>
            </div>
            {/* text head */}
            <div className="font-dayone text-[36px]  text-blueblack">
              <h1 className="hover:text-green transition-all duration-300">
                Lavoratories used for scientic reseach take many froms.
              </h1>
            </div>
            {/* text body */}
            <div className="font-archivo">
              <p>
                Laboratories used for scientific research take many forms because of the differing
                requirements of specialists in the various fields of science and engineering. A
                physics laboratory
              </p>
            </div>
            {/* button */}
            <div className="font-archivo font-bold">
              <button className="bg-blue text-center text-sm rounded-md px-10 py-4 text-white">
                READ MORE
              </button>
            </div>
          </div>
          {/* blog 3 */}
          <div className="w-full flex flex-col gap-10">
            {/* img */}
            <div className="w-full aspect-h-1 aspect-w-2 relative overflow-hidden rounded-md">
              <img className="w-full h-full object-cover object-center" src={blog} alt="" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <span className="w-20 h-20  rounded-full bg-white flex items-center justify-center text-green fill-green">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            {/* detail */}
            <div className="flex items-center gap-16 font-archivo text-sm font-bold">
              <div className="flex gap-1">
                <span className="text-blue flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </span>
                <span className="">ALEXTINA</span>
              </div>
              <div className="flex gap-1">
                <span className="text-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <span>Dec 28, 2022</span>
              </div>
              <div className="flex gap-1">
                <span className="text-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                </span>
                <span>(04)COMENTS</span>
              </div>
              <div className="flex gap-1">
                <span className="text-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <span>1,526 views</span>
              </div>
            </div>
            {/* text head */}
            <div className="font-dayone text-[36px]  text-blueblack">
              <h1 className="hover:text-green transition-all duration-300">
                Four Ways to Fullfill Your Task For Makes Parents Happy and Healthy
              </h1>
            </div>
            {/* text body */}
            <div className="font-archivo">
              <p>
                Compellingly exploit B2B vortals with emerging total linkage. Appropriately pursue
                strategic leadership whe intermandated ideas. Proactively revolutionize
                interoperable outside the box thinking with fully researched innovation.
                Dramatically facilitate exceptional architectures and bricks-and-clicks data.
                Progressively genera extensible e-services for.
              </p>
            </div>
            {/* button */}
            <div className="font-archivo font-bold">
              <button className="bg-blue text-center text-sm rounded-md px-10 py-4 text-white">
                READ MORE
              </button>
            </div>
          </div>
          {/* page number */}
          <div className="w-full flex items-center gap-2 p-4">
            <div className="w-12 shadow-sm rounded-md cursor-pointer hover:bg-blueblack hover:text-white transition-all duration-500 h-12 flex text-[#8a879f] items-center justify-center border border-[#F3F6FA]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </div>
            <div className="w-12 shadow-sm rounded-md cursor-pointer bg-blueblack text-white transition-all duration-500 h-12 flex items-center justify-center border border-[#F3F6FA]">
              1
            </div>
            <div className="w-12 shadow-sm rounded-md cursor-pointer hover:bg-blueblack hover:text-white transition-all duration-500 h-12 flex text-[#8a879f] items-center justify-center border border-[#F3F6FA]">
              2
            </div>
            <div className="w-12 shadow-sm rounded-md cursor-pointer hover:bg-blueblack hover:text-white transition-all duration-500 h-12 flex text-[#8a879f] items-center justify-center border border-[#F3F6FA]">
              3
            </div>
            <div className="w-12 shadow-sm rounded-md cursor-pointer hover:bg-blueblack hover:text-white transition-all duration-500 h-12 flex text-[#8a879f] items-center justify-center border border-[#F3F6FA]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
            <div className="w-12 shadow-sm rounded-md cursor-pointer hover:bg-blueblack hover:text-white transition-all duration-500 h-12 flex text-[#8a879f] items-center justify-center border border-[#F3F6FA]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* side */}
        <div className="col-span-1 flex flex-col gap-8">
          {/* search */}
          <div className="shadow-md flex flex-col px-8 py-14 gap-4">
            <h1 className="font-dayone text-blueblack text-[22px]">Search</h1>
            <div className="flex items-center py-2 px-4 rounded-md bg-[#F2F5FA]">
              <input
                className="flex-1 text-sm placeholder:font-archivo placeholder:text-sm focus:ring-0 bg-transparent outline-none border-none"
                type="text"
                placeholder="SEARCH POST"
              />
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>
            </div>
          </div>
          {/* category */}
          <div className="shadow-md flex flex-col px-8 py-14 gap-4">
            <h1 className="font-dayone text-blueblack text-[22px]">Category</h1>
            <div className="w-full flex flex-col text-[#8A879F] gap-4 font-archivo font-semibold text-xs">
              {/* single */}
              <div className="w-full hover:text-blueblack cursor-pointer transition-all duration-300 flex items-center p-4 justify-between border border-[#ECEEF3]">
                <span>CEMISTRY</span>
                <span>03</span>
              </div>
              {/* single */}
              <div className="w-full hover:text-blueblack cursor-pointer transition-all duration-300 flex items-center p-4 justify-between border border-[#ECEEF3]">
                <span>FORENSIC SCIENCE</span>
                <span>07</span>
              </div>
              {/* single */}
              <div className="w-full hover:text-blueblack cursor-pointer transition-all duration-300 flex items-center p-4 justify-between border border-[#ECEEF3]">
                <span>CEMOLOGICAL</span>
                <span>09</span>
              </div>
              {/* single */}
              <div className="w-full hover:text-blueblack cursor-pointer transition-all duration-300 flex items-center p-4 justify-between border border-[#ECEEF3]">
                <span>COVID ANALYSIS</span>
                <span>01</span>
              </div>
              {/* single */}
              <div className="w-full hover:text-blueblack cursor-pointer transition-all duration-300 flex items-center p-4 justify-between border border-[#ECEEF3]">
                <span>BECTERIOLOGY</span>
                <span>00</span>
              </div>
              {/* single */}
              <div className="w-full hover:text-blueblack cursor-pointer transition-all duration-300 flex items-center p-4 justify-between border border-[#ECEEF3]">
                <span>ANGIOSPERM</span>
                <span>26</span>
              </div>
            </div>
          </div>
          {/* recent post */}
          <div className="shadow-md flex flex-col px-8 py-14 gap-4">
            <h1 className="font-dayone text-blueblack text-[22px]">Recent Post</h1>
            <div className="flex flex-col gap-8">
              {/* single post */}
              <div className="w-full flex items-center gap-4 cursor-pointer">
                {/* image */}
                <div className="">
                  <div className="">
                    <img className="" src={post} alt="" />
                  </div>
                </div>
                {/* content */}
                <div className="flex-1 flex flex-col gap-1 font-archivo">
                  <span className="text-[13px] text-[#8A879F] font-semibold">4 March. 2022</span>
                  <span className="font-medium hover:text-green transition-all duration-500">
                    Don't Underestimate Tree for Medicine
                  </span>
                </div>
              </div>
              {/* single post */}
              <div className="w-full flex items-center gap-4 cursor-pointer">
                {/* image */}
                <div className="">
                  <div className="">
                    <img className="" src={post2} alt="" />
                  </div>
                </div>
                {/* content */}
                <div className="flex-1 flex flex-col gap-1 font-archivo">
                  <span className="text-[13px] text-[#8A879F] font-semibold">
                    12 February. 2022
                  </span>
                  <span className="font-medium hover:text-green transition-all duration-500">
                    Equipping Researchers in the Developing World
                  </span>
                </div>
              </div>
              {/* single post */}
              <div className="w-full flex items-center gap-4 cursor-pointer">
                {/* image */}
                <div className="">
                  <div className="">
                    <img className="" src={post3} alt="" />
                  </div>
                </div>
                {/* content */}
                <div className="flex-1 flex flex-col gap-1 font-archivo">
                  <span className="text-[13px] text-[#8A879F] font-semibold">14 January. 2022</span>
                  <span className="font-medium hover:text-green transition-all duration-500">
                    Role of Genetics in treating Heigh-grade glioma
                  </span>
                </div>
              </div>
              {/* single post */}
              <div className="w-full flex items-center gap-4 cursor-pointer">
                {/* image */}
                <div className="">
                  <div className="">
                    <img className="" src={post4} alt="" />
                  </div>
                </div>
                {/* content */}
                <div className="flex-1 flex flex-col gap-1 font-archivo">
                  <span className="text-[13px] text-[#8A879F] font-semibold">18 March. 2021</span>
                  <span className="font-medium hover:text-green transition-all duration-500">
                    Research And Verify of a Covid-19 Virus
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Popular Tag */}
          <div className="shadow-md flex flex-col px-8 py-14 gap-4">
            <h1 className="font-dayone text-blueblack text-[22px]">Popular Tag</h1>
            <div className="font-archivo font-bold text-xs text-[#8A879F] flex flex-wrap gap-2">
              {/* single tag */}
              <span className="hover:bg-green hover:text-white hover:border-green px-5 py-2 border cursor-pointer">
                COVID-19
              </span>
              <span className="hover:bg-green hover:text-white hover:border-green px-5 py-2 border cursor-pointer">
                GENE
              </span>
              <span className="hover:bg-green hover:text-white hover:border-green px-5 py-2 border cursor-pointer">
                TEST
              </span>
              <span className="hover:bg-green hover:text-white hover:border-green px-5 py-2 border cursor-pointer">
                LAB
              </span>
              <span className="hover:bg-green hover:text-white hover:border-green px-5 py-2 border cursor-pointer">
                DATA
              </span>
              <span className="hover:bg-green hover:text-white hover:border-green px-5 py-2 border cursor-pointer">
                VIRUS
              </span>
              <span className="hover:bg-green hover:text-white hover:border-green px-5 py-2 border cursor-pointer">
                PANDEMIC
              </span>
              <span className="hover:bg-green hover:text-white hover:border-green px-5 py-2 border cursor-pointer">
                SYMPTOMS
              </span>
              <span className="hover:bg-green hover:text-white hover:border-green px-5 py-2 border cursor-pointer">
                MEDICINE
              </span>
              <span className="hover:bg-green hover:text-white hover:border-green px-5 py-2 border cursor-pointer">
                BACTERIA
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer className="w-full gap-4 flex flex-col mt-20 bg-blueblack text-white font-archivo">
        {/* up */}
        <div className="w-full flex items-center gap-20 p-20">
          {/* left */}
          <div className="flex-1 flex items-stretch gap-20">
            {/* feel free */}
            <div className="flex-1 flex flex-col justify-between">
              {/* feel free */}
              <div className="flex flex-col gap-4">
                <h1 className="text-[#A9B7D1] text-sm font-bold">FEEL FREE TO CONTACT US</h1>
                <span className="font-dayone text-[36px]">+989199843052</span>
                <span className="font-medium text-lg">noreply@envato.com</span>
              </div>
              {/* career */}
              <div className="flex flex-col gap-4">
                <h1 className="text-[18px] font-semibold">Career</h1>
                <p className="text-[15px] text-[#A9B7D1]">
                  Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla
                  ...Nam eget dui vel quam sodales semper quis porttitor tortor.
                </p>
              </div>
            </div>
            {/* usefull */}
            <div className="flex-1 flex flex-col gap-8">
              {/* usefull links */}
              <div className="flex flex-col gap-4">
                <h1 className="text-[18px] font-semibold">Useful links</h1>
                <div className="flex flex-col gap-2 text-[15px] text-[#A9B7D1]">
                  <NavLink className="">Contact us</NavLink>
                  <NavLink>Help & About us</NavLink>
                  <NavLink>Shipping & Returns</NavLink>
                  <NavLink>Refund Policy</NavLink>
                  <NavLink>About us</NavLink>
                  <NavLink>Services</NavLink>
                </div>
              </div>
              {/* opening */}
              <div className="flex flex-col gap-4">
                <h1 className="text-[18px] font-semibold">Opening Hours</h1>
                <div className="flex flex-col gap-2 text-[15px] text-[#A9B7D1]">
                  <NavLink>Office Hours: 8AM - 11PM</NavLink>
                  <NavLink>Office Hours: 8AM - 11PM</NavLink>
                  <NavLink>Sunday - Wekend Day</NavLink>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="flex-1 flex items-stretch gap-20">
            {/* customer */}
            <div className="flex-1 flex flex-col gap-4">
              <h1 className="text-[18px] font-semibold">Customer Service</h1>
              <div className="flex flex-col gap-2 text-[15px] text-[#A9B7D1]">
                <NavLink>Orders</NavLink>
                <NavLink>Downloads</NavLink>
                <NavLink>Shipping & Returns</NavLink>
                <NavLink>Addresses</NavLink>
                <NavLink>Account details</NavLink>
                <NavLink>Logout</NavLink>
                <NavLink>Lost password</NavLink>
                <NavLink>Privacy</NavLink>
                <NavLink>Policy</NavLink>
                <NavLink>Careers</NavLink>
                <NavLink>Support</NavLink>
              </div>
            </div>
            {/* contact */}
            <div className="flex-1 flex flex-col justify-between">
              {/* contact info */}
              <div className="flex flex-col gap-4">
                <h1 className="text-[18px] font-semibold">Contact Info</h1>
                <div className="flex flex-col gap-2 text-[15px] text-[#A9B7D1]">
                  <NavLink>Ta-134/A, Gulshan Badda Link</NavLink>
                  <NavLink>(+880)155 69569 365</NavLink>
                  <NavLink>support@rstheme.com</NavLink>
                  <NavLink>Office Hours: 8AM - 11PM</NavLink>
                  <NavLink>Sunday - Wekend Day</NavLink>
                </div>
              </div>
              {/* icons */}
              <div className="flex items-center gap-2">
                {/* facebook */}
                <span>
                  <svg className="w-6 h-6" viewBox="0 0 500 1000" fill="currentColor">
                    <path d="M500 206H358c-9.333 0-17.667 5-25 15-7.333 10-11 22.333-11 37v102h178v148H322v442H152V508H0V360h152v-86c0-62.667 19.667-115.667 59-159s88.333-65 147-65h142v156" />
                  </svg>
                </span>
                {/* twitter */}
                <span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0016 3.542a6.658 6.658 0 01-1.889.518 3.301 3.301 0 001.447-1.817 6.533 6.533 0 01-2.087.793A3.286 3.286 0 007.875 6.03a9.325 9.325 0 01-6.767-3.429 3.289 3.289 0 001.018 4.382A3.323 3.323 0 01.64 6.575v.045a3.288 3.288 0 002.632 3.218 3.203 3.203 0 01-.865.115 3.23 3.23 0 01-.614-.057 3.283 3.283 0 003.067 2.277A6.588 6.588 0 01.78 13.58a6.32 6.32 0 01-.78-.045A9.344 9.344 0 005.026 15z" />
                  </svg>
                </span>
                {/* instagram */}
                <span>
                  <svg className="w-6 h-6" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </span>
                {/* dribble */}
                <span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                    <path
                      fillRule="evenodd"
                      d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 011.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 018 1.18zm-2.907.642A43.123 43.123 0 017.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 013.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 01-1.752-4.564zM8 14.837a6.785 6.785 0 01-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 011.457 5.18A6.722 6.722 0 018 14.837zm3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.774 6.774 0 01-2.924 4.573z"
                    />
                  </svg>
                </span>
                {/* youtube */}
                <span>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.593 7.203a2.506 2.506 0 00-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 00-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 001.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="flex items-center justify-between border-t-[0.5px] py-8 px-20 border-[#332E66]">
          <div className="flex items-center font-archivo text-[15px]">
            <span className="font-medium">© Copyright © 2023</span>
            <NavLink>Theme_pure. </NavLink>
            <span className="text-[#8A879F]">All Rights Reserved Copyright</span>
          </div>
          <div className="flex items-center gap-4 font-archivo text-[15px]">
            <NavLink>Terms and conditions</NavLink>
            <NavLink>Privacy policy</NavLink>
            <NavLink>Pricing</NavLink>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Blog;
