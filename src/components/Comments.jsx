import { useState } from "react";
import profile1 from "../assets/images/testi-ava-04.png";
import profile2 from "../assets/images/testi-ava-05.png";
import profile3 from "../assets/images/testi-ava-06.png";
import profile4 from "../assets/images/testi-ava-07.png";
const Comments = () => {
  const [active, setActive] = useState(1);

  const clickHandler = (value) => {
    setActive(value);
  };

  const leftHandler = () => {
    if (active === 1) {
      setActive(4);
      return;
    }
    setActive(active - 1);
  };

  const rightHandler = () => {
    if (active === 4) {
      setActive(1);
      return;
    }
    setActive(active + 1);
  };

  return (
    <div className="w-full mt-20 flex flex-col gap-8 p-4">
      {/* profiles */}
      <div className="w-full flex items-center justify-center gap-2">
        <span
          onClick={() => clickHandler(1)}
          className={`${
            active === 1 ? "ring-blue" : "ring-white"
          } ring-4 cursor-pointer rounded-full overflow-hidden`}
        >
          <img src={profile1} alt="" />
        </span>
        <span
          onClick={() => clickHandler(2)}
          className={`${
            active === 2 ? "ring-blue" : "ring-white"
          } ring-4 cursor-pointer rounded-full overflow-hidden`}
        >
          <img src={profile2} alt="" />
        </span>
        <span
          onClick={() => clickHandler(3)}
          className={`${
            active === 3 ? "ring-blue" : "ring-white"
          } ring-4 cursor-pointer  rounded-full overflow-hidden`}
        >
          <img src={profile3} alt="" />
        </span>
        <span
          onClick={() => clickHandler(4)}
          className={`${
            active === 4 ? "ring-blue" : "ring-white"
          } ring-4 cursor-pointer  rounded-full overflow-hidden`}
        >
          <img src={profile4} alt="" />
        </span>
      </div>
      <div className="w-full flex items-center justify-around">
        {/* arrow */}
        <span
          onClick={leftHandler}
          className="w-10 h-10 flex items-center cursor-pointer justify-center rounded-full text-blueblack ring-2 ring-blueblack"
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
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </span>
        {/* slider container */}
        <div className="w-[70%] overflow-hidden">
          <div
            className={`${active === 2 && "-translate-x-1/4"} ${
              active === 3 && "-translate-x-2/4"
            } ${
              active === 4 && "-translate-x-3/4"
            } w-[400%] transition-all duration-700 flex items-center`}
          >
            {/* 1 */}
            <div className="w-1/4 flex flex-col justify-center font-archivo text-blueblack items-center gap-8 p-2">
              <span className="w-full text-center text-[24px] font-medium">
                “Bioxlab is another theme that is beautiful and professionally constructed by the
                developers. The price for the template is cheap but not the quality of the product.
                What a bargain. This theme works for many types of web sites and seems to be
                durable. Does not break and its easy to work with.
              </span>
              <span className="text-center text-[22px] font-semibold">Darlene Robertson</span>
              <span className="text-center tex-[14px]">Programmer of (FlaxStudio)</span>
            </div>
            {/* 2 */}
            <div className="w-1/4 flex flex-col justify-center font-archivo text-blueblack items-center gap-8 p-2">
              <span className="w-full text-center text-[24px] font-medium">
                “Bioxlab is another theme that is beautiful and professionally constructed by the
                developers. The price for the template is cheap but not the quality of the product.
                What a bargain. This theme works for many types of web sites and seems to be
                durable. Does not break and its easy to work with.
              </span>
              <span className="text-center text-[22px] font-semibold">Darlene Robertson</span>
              <span className="text-center tex-[14px]">Programmer of (FlaxStudio)</span>
            </div>
            {/* 3 */}
            <div className="w-1/4 flex flex-col justify-center font-archivo text-blueblack items-center gap-8 p-2">
              <span className="w-full text-center text-[24px] font-medium">
                “Bioxlab is another theme that is beautiful and professionally constructed by the
                developers. The price for the template is cheap but not the quality of the product.
                What a bargain. This theme works for many types of web sites and seems to be
                durable. Does not break and its easy to work with.
              </span>
              <span className="text-center text-[22px] font-semibold">Darlene Robertson</span>
              <span className="text-center tex-[14px]">Programmer of (FlaxStudio)</span>
            </div>
            {/* 4 */}
            <div className="w-1/4 flex flex-col justify-center font-archivo text-blueblack items-center gap-8 p-2">
              <span className="w-full text-center text-[24px] font-medium">
                “Bioxlab is another theme that is beautiful and professionally constructed by the
                developers. The price for the template is cheap but not the quality of the product.
                What a bargain. This theme works for many types of web sites and seems to be
                durable. Does not break and its easy to work with.
              </span>
              <span className="text-center text-[22px] font-semibold">Darlene Robertson</span>
              <span className="text-center tex-[14px]">Programmer of (FlaxStudio)</span>
            </div>
          </div>
        </div>
        {/* arrow */}
        <span
          onClick={rightHandler}
          className="w-10 h-10 flex items-center cursor-pointer justify-center rounded-full text-blueblack ring-2 ring-blueblack"
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
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Comments;
