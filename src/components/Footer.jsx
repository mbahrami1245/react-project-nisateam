import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-blueblack text-white gap-14 flex flex-col p-16">
      {/* col 1 */}
      <div className="flex items-center justify-between">
        {/* left */}
        <div className="flex flex-col">
          <span className="font-dayone text-2xl">Subscribe Newslatter</span>
          <span className="text-[#A9B7C9] font-archivo">
            Exerci tation ullamcorper suscipit lobortis nisl aliquip
          </span>
        </div>
        {/* right */}
        <div className="flex items-center">
          <input
            type="text"
            className="outline-none focus:border-white focus:ring-0  p-4 w-[400px] rounded-md placeholder:font-archivo bg-transparent"
            placeholder="Enter Mail"
          />
          <span className="w-14 h-14 bg-[#10D0A1] rounded-sm text-blueblack flex items-center justify-center">
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
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </span>
        </div>
      </div>
      {/* col 2 */}
      <div className="w-full flex items-center justify-between">
        {/* single cart */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[#161963] text-blue flex items-center justify-center">
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
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span>Ta-134/A, Gulshan Badda Link Rd,</span>
            <span>Nya 10982 USA</span>
          </div>
        </div>
        {/* single cart */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[#2E1355] text-red-500 flex items-center justify-center">
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
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span>Ta-134/A, Gulshan Badda Link Rd,</span>
            <span>Nya 10982 USA</span>
          </div>
        </div>
        {/* single cart */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[#172459] text-green flex items-center justify-center">
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
          </div>
          <div className="flex flex-col">
            <span>Ta-134/A, Gulshan Badda Link Rd,</span>
            <span>Nya 10982 USA</span>
          </div>
        </div>
      </div>
      {/* col 3 */}
      <div className="w-full flex items-center justify-between">
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
    </div>
  );
};

export default Footer;
