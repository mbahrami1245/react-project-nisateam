import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useState } from "react";

const Header = () => {
  const [submenuShow, setSubmenuShow] = useState(null);

  //
  const hoverHandler = (value) => {
    setSubmenuShow(value);
  };
  //
  const leaveHandler = async () => {
    setSubmenuShow(null);
  };

  return (
    <section className="w-full h-[130px] z-50 bg-white shadow-md grid grid-cols-5 grid-rows-1 sticky top-0">
      {/* left */}
      <div className="col-span-1 flex items-center justify-center p-10">
        <div className="w-full aspect-h-1 aspect-w-5">
          <img className="w-full h-full object-cover object-center" src={logo} alt="" />
        </div>
      </div>
      {/* right */}
      <div className="col-span-4 w-full flex flex-col border-l-[0.5px] border-[#ECEEF3]">
        {/* up */}
        <div className="flex items-center justify-between flex-1 px-10">
          {/* help desk */}
          <div className="flex items-center">
            <span className="text-blue ">
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
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                />
              </svg>
            </span>
            <span className="font-archivo font-bold text-[#8A87AB] text-[15px]">HELPDESK:</span>
            <span className="font-archivo font-bold text-blueblack text-[15px]">+989199843052</span>
          </div>
          {/* time */}
          <div className="flex items-center gap-1 font-archivo text-[#8A87AB] font-semibold">
            <span>
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
            <span className="text-xs">MONDAY - FRIDAY 09:00 AM - 05:00 PM</span>
          </div>
        </div>
        {/* down */}
        <div className="flex items-center flex-1 gap-4 border-t-[0.5px] border-[#ECEEF3]">
          <div className="flex items-center justify-between px-10 flex-1 h-full">
            {/* nav */}
            <div className="flex items-center text-[#8A87AB] h-full font-bold font-archivo text-xs gap-6">
              <NavLink
                className={`border-b-[3px] hover:text-blueblack hover:border-green border-white transition-all duration-300 py-6`}
                to="/"
              >
                HOME
              </NavLink>
              <div
                onMouseEnter={() => hoverHandler("pages")}
                onMouseLeave={leaveHandler}
                className="relative"
              >
                <NavLink
                  className={`border-b-[3px] hover:text-blueblack hover:border-green border-white transition-all duration-300 py-6`}
                  to="/"
                >
                  PAGE+
                </NavLink>
                {/* submenu */}
                <div
                  className={`${
                    submenuShow === "pages" ? "flex" : "hidden"
                  } absolute flex-col text-sm w-[180px] bg-blueblack p-4 text-white font-medium left-0 top-10`}
                >
                  <NavLink to="/" className="p-1 hover:text-green">
                    About
                  </NavLink>
                  <NavLink to="/" className="p-1 hover:text-green">
                    Team 01
                  </NavLink>
                  <NavLink to="/" className="p-1 hover:text-green">
                    Team 02
                  </NavLink>
                  <NavLink to="/" className="p-1 hover:text-green">
                    Team Details
                  </NavLink>
                  <NavLink to="/" className="p-1 hover:text-green">
                    Pricing Plan
                  </NavLink>
                  <NavLink to="/" className="p-1 hover:text-green">
                    Shop
                  </NavLink>
                  <NavLink to="/" className="p-1 hover:text-green">
                    Product Details
                  </NavLink>
                  <NavLink to="/" className="p-1 hover:text-green">
                    Cart
                  </NavLink>
                  <NavLink to="/" className="p-1 hover:text-green">
                    Checkout
                  </NavLink>
                  <NavLink to="/" className="p-1 hover:text-green">
                    Project Details
                  </NavLink>
                  <NavLink to="/" className="p-1 hover:text-green">
                    FAQ's
                  </NavLink>
                </div>
              </div>
              <div
                onMouseEnter={() => hoverHandler("service")}
                onMouseLeave={leaveHandler}
                className="relative"
              >
                <NavLink
                  className={`border-b-[3px] hover:text-blueblack hover:border-green border-white transition-all duration-300 py-6`}
                  to="/"
                >
                  SERVICE+
                </NavLink>
                {/* submenu */}
                <div
                  className={`${
                    submenuShow === "service" ? "flex" : "hidden"
                  } absolute flex-col text-sm w-[180px] bg-blueblack p-4 text-white font-medium left-0 top-10`}
                >
                  <NavLink to="/" className="p-1 hover:text-green">
                    Service 1
                  </NavLink>
                  <NavLink to="/" className="p-1 hover:text-green">
                    Service 2
                  </NavLink>
                  <NavLink to="/" className="p-1 hover:text-green">
                    Service 3
                  </NavLink>
                  <NavLink to="/" className="p-1 hover:text-green">
                    Service Details
                  </NavLink>
                </div>
              </div>
              <NavLink
                className={`border-b-[3px] hover:text-blueblack hover:border-green border-white transition-all duration-300 py-6`}
                to="/"
              >
                RESEARCH
              </NavLink>
              <div
                onMouseEnter={() => hoverHandler("blog")}
                onMouseLeave={leaveHandler}
                className="relative"
              >
                <NavLink
                  className={`border-b-[3px] hover:text-blueblack hover:border-green border-white transition-all duration-300 py-6`}
                  to="/"
                >
                  BLOG+
                </NavLink>
                {/* submenu */}
                <div
                  className={`${
                    submenuShow === "blog" ? "flex" : "hidden"
                  } absolute flex-col text-sm w-[180px] bg-blueblack p-4 text-white font-medium left-0 top-10`}
                >
                  <NavLink to="/blog" className="p-1 hover:text-green">
                    Blog
                  </NavLink>
                  <NavLink to="/blogdetail" className="p-1 hover:text-green">
                    Blog Details
                  </NavLink>
                </div>
              </div>
              <NavLink
                className={`border-b-[3px] hover:text-blueblack hover:border-green border-white transition-all duration-300 py-6`}
                to="/"
              >
                CONTACT
              </NavLink>
            </div>
            {/* icon */}
            <div className="flex items-center gap-4">
              <span className="cursor-pointer">
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
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </span>
              <span className="cursor-pointer">
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
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="h-full">
            <button className="bg-blue text-[15px] font-bold text-white h-full px-10 font-archivo">
              BOOKAPPOINTMENT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
