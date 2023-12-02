import blogbg1 from "../assets/images/blog-thumb-07.jpg";
import blogbg2 from "../assets/images/blog-thumb-08.jpg";
import blogbg3 from "../assets/images/blog-thumb-09.jpg";
import blogavatar1 from "../assets/images/blog-ava-01.png";
import blogavatar2 from "../assets/images/blog-ava-02.png";
import blogavatar3 from "../assets/images/blog-ava-03.png";
import brand1 from "../assets/images/brand-02.png";
import brand2 from "../assets/images/brand-03.png";
import brand3 from "../assets/images/brand-04.png";
import brand4 from "../assets/images/brand-05.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const RecentBlog = () => {
  const [hover, setHover] = useState(0);

  //   hover handler
  const hoverHandler = (value) => {
    setHover(value);
  };
  //   unhover handler
  const leaveHandler = () => {
    setHover(0);
  };

  return (
    <div className="bg-bg w-full mt-20 flex flex-col gap-10 p-16">
      {/* header */}
      <div className="w-full flex justify-between items-center">
        <div>
          <h1 className="font-archivo text-blue font-bold">BLOG & ARTICLE</h1>
          <h2 className="font-dayone text-[43px]">Recent Blog Post</h2>
        </div>
        <button className="font-archivo font-bold bg-green rounded-md text-white p-6">
          ALL BLOGS
        </button>
      </div>
      {/* carts */}
      <div className="w-full h-[400px] grid grid-cols-3 grid-rows-1 gap-8">
        {/* single cart */}
        <div
          onMouseLeave={leaveHandler}
          onMouseEnter={() => hoverHandler(1)}
          style={{ backgroundImage: `url(${blogbg1})` }}
          className="w-full h-full relative bg-cover rounded-md overflow-hidden"
        >
          <div
            className={`${
              hover === 1 ? "opacity-60 bg-blue" : "opacity-100 bg-white"
            } absolute top-0 left-0 transition-all duration-700  w-full h-full`}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-transparent">
            {/* tittle */}
            <div className="flex items-center justify-between p-5">
              <div className="flex items-center gap-4">
                {/* img */}
                <div className="flex items-center justify-center">
                  <img src={blogavatar1} alt="" />
                </div>
                {/* detail */}
                <div className="flex flex-col gap-1 font-archivo">
                  <span
                    className={`${
                      hover === 1 ? "text-white" : "text-[#8A879F]"
                    } text-xs transition-all duration-700`}
                  >
                    Post by :
                  </span>
                  <span
                    className={`${
                      hover === 1 ? "text-white" : "text-blueblack"
                    } text-sm transition-all duration-700`}
                  >
                    Alextina Rix
                  </span>
                </div>
              </div>
              <div>
                <button
                  className={`${
                    hover === 1 ? "text-white bg-[#387cfb]" : "text-[#0E63FF] bg-[#E7EFFF]"
                  } font-archivo transition-all duration-700 text-xs p-2 rounded-md`}
                >
                  MEDICINE
                </button>
              </div>
            </div>
            {/* body */}
            <div
              className={`${
                hover === 1 ? "translate-y-32" : "translate-y-48"
              } p-5 flex transition-all duration-700 flex-col gap-4 `}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`${
                    hover === 1 ? "text-white" : "text-blueblack"
                  } flex items-center gap-1 font-archivo`}
                >
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
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-bold">Dec 28, 2022</span>
                </div>
                <div
                  className={`${
                    hover === 1 ? "text-white" : "text-blueblack"
                  } flex items-center gap-1 font-archivo transition-all duration-700`}
                >
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
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <span className="font-bold text-sm">1,526 views</span>
                </div>
              </div>
              <div
                className={`${
                  hover === 1 ? "text-white" : "text-blueblack"
                } font-dayone text-lg transition-all duration-700`}
              >
                <span>Coronavirus global health ecorage Design System</span>
              </div>
              <div className="">
                <button className="bg-blueblack font-bold font-archivo p-2 rounded-md text-white">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* single cart */}
        <div
          onMouseLeave={leaveHandler}
          onMouseEnter={() => hoverHandler(2)}
          style={{ backgroundImage: `url(${blogbg2})` }}
          className="w-full h-full relative bg-cover rounded-md overflow-hidden"
        >
          <div
            className={`${
              hover === 2 ? "opacity-60 bg-blue" : "opacity-100 bg-white"
            } absolute top-0 left-0 transition-all duration-700  w-full h-full`}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-transparent">
            {/* tittle */}
            <div className="flex items-center justify-between p-5">
              <div className="flex items-center gap-4">
                {/* img */}
                <div className="flex overflow-hidden rounded-full items-center justify-center">
                  <img src={blogavatar2} alt="" />
                </div>
                {/* detail */}
                <div className="flex flex-col gap-1 font-archivo">
                  <span
                    className={`${
                      hover === 2 ? "text-white" : "text-[#8A879F]"
                    } text-xs transition-all duration-700`}
                  >
                    Post by :
                  </span>
                  <span
                    className={`${
                      hover === 2 ? "text-white" : "text-blueblack"
                    } text-sm transition-all duration-700`}
                  >
                    Alextina Rix
                  </span>
                </div>
              </div>
              <div>
                <button
                  className={`${
                    hover === 2 ? "text-white bg-[#387cfb]" : "text-[#0E63FF] bg-[#E7EFFF]"
                  } font-archivo transition-all duration-700 text-xs p-2 rounded-md`}
                >
                  MEDICINE
                </button>
              </div>
            </div>
            {/* body */}
            <div
              className={`${
                hover === 2 ? "translate-y-32" : "translate-y-48"
              } p-5 flex transition-all duration-700 flex-col gap-4 `}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`${
                    hover === 2 ? "text-white" : "text-blueblack"
                  } flex items-center gap-1 font-archivo`}
                >
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
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-bold">Dec 28, 2022</span>
                </div>
                <div
                  className={`${
                    hover === 2 ? "text-white" : "text-blueblack"
                  } flex items-center gap-1 font-archivo transition-all duration-700`}
                >
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
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <span className="font-bold text-sm">1,526 views</span>
                </div>
              </div>
              <div
                className={`${
                  hover === 2 ? "text-white" : "text-blueblack"
                } font-dayone text-lg transition-all duration-700`}
              >
                <span>Coronavirus global health ecorage Design System</span>
              </div>
              <div className="">
                <button className="bg-blueblack font-bold font-archivo p-2 rounded-md text-white">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* single cart */}
        <div
          onMouseLeave={leaveHandler}
          onMouseEnter={() => hoverHandler(3)}
          style={{ backgroundImage: `url(${blogbg3})` }}
          className="w-full h-full relative bg-cover rounded-md overflow-hidden"
        >
          <div
            className={`${
              hover === 3 ? "opacity-60 bg-blue" : "opacity-100 bg-white"
            } absolute top-0 left-0 transition-all duration-700  w-full h-full`}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-transparent">
            {/* tittle */}
            <div className="flex items-center justify-between p-5">
              <div className="flex items-center gap-4">
                {/* img */}
                <div className="flex items-center justify-center">
                  <img src={blogavatar3} alt="" />
                </div>
                {/* detail */}
                <div className="flex flex-col gap-1 font-archivo">
                  <span
                    className={`${
                      hover === 3 ? "text-white" : "text-[#8A879F]"
                    } text-xs transition-all duration-700`}
                  >
                    Post by :
                  </span>
                  <span
                    className={`${
                      hover === 3 ? "text-white" : "text-blueblack"
                    } text-sm transition-all duration-700`}
                  >
                    Alextina Rix
                  </span>
                </div>
              </div>
              <div>
                <button
                  className={`${
                    hover === 3 ? "text-white bg-[#387cfb]" : "text-[#0E63FF] bg-[#E7EFFF]"
                  } font-archivo transition-all duration-700 text-xs p-2 rounded-md`}
                >
                  MEDICINE
                </button>
              </div>
            </div>
            {/* body */}
            <div
              className={`${
                hover === 3 ? "translate-y-32" : "translate-y-48"
              } p-5 flex transition-all duration-700 flex-col gap-4 `}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`${
                    hover === 3 ? "text-white" : "text-blueblack"
                  } flex items-center gap-1 font-archivo`}
                >
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
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-bold">Dec 28, 2022</span>
                </div>
                <div
                  className={`${
                    hover === 3 ? "text-white" : "text-blueblack"
                  } flex items-center gap-1 font-archivo transition-all duration-700`}
                >
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
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <span className="font-bold text-sm">1,526 views</span>
                </div>
              </div>
              <div
                className={`${
                  hover === 3 ? "text-white" : "text-blueblack"
                } font-dayone text-lg transition-all duration-700`}
              >
                <span>Coronavirus global health ecorage Design System</span>
              </div>
              <div className="">
                <button className="bg-blueblack font-bold font-archivo p-2 rounded-md text-white">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-full py-10 flex justify-evenly items-center">
        <NavLink>
          <img src={brand1} alt="" />
        </NavLink>
        <NavLink>
          <img src={brand2} alt="" />
        </NavLink>
        <NavLink>
          <img src={brand3} alt="" />
        </NavLink>
        <NavLink>
          <img src={brand4} alt="" />
        </NavLink>
        <NavLink>
          <img src={brand3} alt="" />
        </NavLink>
      </div>
    </div>
  );
};

export default RecentBlog;
