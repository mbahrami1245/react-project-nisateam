import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/sidebar-logo.png";
import { useState } from "react";
const Navbar = () => {
  const [submenuShow, setSubmenuShow] = useState(null);
  const location = useLocation();
  const path = location.pathname;

  //
  const hoverHandler = (value) => {
    setSubmenuShow(value);
  };
  //
  const leaveHandler = async () => {
    setSubmenuShow(null);
  };

  return (
    <section className="w-full h-full py-10 bg-blueblack">
      <div className="flex flex-col justify-center w-full h-full">
        {/* logo */}
        <div className="w-full px-5">
          <div className="w-2/3 aspect-h-1 aspect-w-7">
            <img src={logo} className="w-full h-full object-center object-cover" alt="logo" />
          </div>
        </div>
        {/* nav */}
        <div className="w-full mt-20">
          <div className="w-full flex flex-col pl-10 text-sm gap-8 text-white font-archivo font-bold">
            <NavLink
              to="/"
              className={`${
                path === "/" && "text-green border-l-green"
              } hover:text-green w-full py-2 px-5 border-l-blueblack border-l-2 hover:border-l-green`}
            >
              HOME
            </NavLink>
            <div
              onMouseEnter={() => hoverHandler("pages")}
              onMouseLeave={leaveHandler}
              className="w-full relative hover:text-green  border-l-blueblack border-l-2 hover:border-l-green"
            >
              <NavLink className="w-full py-2 px-5 block" to="/">
                PAGES+
              </NavLink>
              <div
                className={`${
                  submenuShow === "pages" ? "flex" : "hidden"
                } absolute -right-[174px] gap-1 text-white py-4 px-8 z-30 bg-[#29226a] transition-all duration-700 top-0 flex-col`}
              >
                <NavLink to="/" className="p-1 hover:text-green">About</NavLink>
                <NavLink to="/" className="p-1 hover:text-green">Team 01</NavLink>
                <NavLink to="/" className="p-1 hover:text-green">Team 02</NavLink>
                <NavLink to="/" className="p-1 hover:text-green">Team Details</NavLink>
                <NavLink to="/" className="p-1 hover:text-green">Pricing Plan</NavLink>
                <NavLink to="/" className="p-1 hover:text-green">Shop</NavLink>
                <NavLink to="/" className="p-1 hover:text-green">Product Details</NavLink>
                <NavLink to="/" className="p-1 hover:text-green">Cart</NavLink>
                <NavLink to="/" className="p-1 hover:text-green">Checkout</NavLink>
                <NavLink to="/" className="p-1 hover:text-green">Project Details</NavLink>
                <NavLink to="/" className="p-1 hover:text-green">FAQ's</NavLink>
              </div>
            </div>
            <div
              onMouseEnter={() => hoverHandler("service")}
              onMouseLeave={leaveHandler}
              className="w-full relative hover:text-green  border-l-blueblack border-l-2 hover:border-l-green"
            >
              <NavLink className="w-full py-2 px-5 block" to="/service">
                SERVICE+
              </NavLink>
              <div
                className={`${
                  submenuShow === "service" ? "flex" : "hidden"
                } absolute -right-[172px] gap-1 text-white py-4 px-8 z-30 bg-[#29226a] transition-all duration-700 top-0 flex-col`}
              >
                <NavLink to="/" className="p-1 hover:text-green">Service 1</NavLink>
                <NavLink to="/" className="p-1 hover:text-green">Service 2</NavLink>
                <NavLink to="/" className="p-1 hover:text-green">Service 3</NavLink>
                <NavLink to="/" className="p-1 hover:text-green">Service Details</NavLink>
              </div>
            </div>
            <NavLink
              to="/research"
              className={` hover:text-green py-1 px-5 border-l-blueblack border-l-2 hover:border-l-green`}
            >
              RESEARCH
            </NavLink>
            <div
              onMouseEnter={() => hoverHandler("blog")}
              onMouseLeave={leaveHandler}
              className="w-full relative hover:text-green  border-l-blueblack border-l-2 hover:border-l-green"
            >
              <NavLink className="w-full py-2 px-5 block" to="/">
                BLOG+
              </NavLink>
              <div
                className={`${
                  submenuShow === "blog" ? "flex" : "hidden"
                } absolute -right-[152px] gap-1 text-white py-4 px-8 z-30 bg-[#29226a] transition-all duration-700 top-0 flex-col`}
              >
                <NavLink to="/blog" className="p-1 hover:text-green">Blog</NavLink>
                <NavLink to="/blogdetail" className="p-1 hover:text-green">Blog Details</NavLink>
              </div>
            </div>
            <NavLink
              to="/contact"
              className={` hover:text-green py-1 px-5 border-l-blueblack border-l-2 hover:border-l-green`}
            >
              CONTACT
            </NavLink>
          </div>
        </div>
        {/* contact us */}
        <div className="w-full mt-24 flex gap-2 items-center flex-col">
          <span className="text-green font-bold">MAKE A CALL</span>
          <span className="font-dayone text-white text-2xl">+989199843052</span>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
