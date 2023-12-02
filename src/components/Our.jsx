import thumb1 from "../assets/images/tab-thumb-01.jpg";
import thumb2 from "../assets/images/tab-thumb-02.jpg";
import thumb3 from "../assets/images/tab-thumb-03.jpg";
import thumb4 from "../assets/images/tab-thumb-04.jpg";
import { useState } from "react";

const Our = () => {
  const [our, setOur] = useState("mission");

  const clickHandler = (value) => {
    setOur(value);
  };

  return (
    <div className="w-full flex mt-20 flex-col gap-12 p-16">
      <div className="w-full flex bg-[#F2F5FA] items-center">
        <div
          onClick={() => clickHandler("process")}
          className={`${
            our === "process" && "bg-white shadow-md text-green border-green"
          } flex-1 py-6 border-b-4 cursor-pointer flex items-center justify-center`}
        >
          <span className="font-archivo font-bold">OUR PROCESS</span>
        </div>
        <div
          onClick={() => clickHandler("mission")}
          className={`${
            our === "mission" && "bg-white shadow-md text-green border-green"
          } flex-1 border-b-4 py-6 cursor-pointer flex items-center justify-center`}
        >
          <span className="font-archivo font-bold">OUR MISSON</span>
        </div>
        <div
          onClick={() => clickHandler("value")}
          className={`${
            our === "value" && "bg-white shadow-md text-green border-green"
          } flex-1 flex border-b-4 cursor-pointer py-6 items-center justify-center`}
        >
          <span className="font-archivo font-bold">OUR VALUE</span>
        </div>
      </div>
      {/* process */}
      <div className={`${our === "process" ? "flex" : "hidden"} flex flex-col gap-10`}>
        <div className="w-full text-[#8A879F] font-archivo text-lg flex items-center justify-center">
          <h1 className="w-1/2 text-center">
            Your full service lab for clinical trials. Our process is to ensure the generation of
            accurate and precise findings
          </h1>
        </div>
        <div className="w-full grid grid-rows-1 grid-cols-3 gap-4">
          {/* svg */}
          <div className="flex flex-col gap-6 justify-center w-full items-center">
            <span className="flex text-green items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-20 h-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>
            </span>
            <h1 className="font-dayone text-[20px] text-blueblack">Generate Proposal</h1>
            <span className="text-center font-archivo text-[#8A879F] px-8">
              There are many varios passages suffered alten in some
            </span>
          </div>
          {/* svg */}
          <div className="flex flex-col gap-6 justify-center w-full items-center">
            <span className="flex text-green items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-20 h-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                />
              </svg>
            </span>
            <h1 className="font-dayone text-[20px] text-blueblack">Testing Begins</h1>
            <span className="text-center font-archivo text-[#8A879F] px-8">
              There are many varios passages suffered alten in some
            </span>
          </div>
          {/* svg */}
          <div className="flex flex-col gap-6 justify-center w-full items-center">
            <span className="flex text-green items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-20 h-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                />
              </svg>
            </span>
            <h1 className="font-dayone text-[20px] text-blueblack">Reports Delivered</h1>
            <span className="text-center font-archivo text-[#8A879F] px-8">
              There are many varios passages suffered alten in some
            </span>
          </div>
        </div>
      </div>
      {/* mission */}
      <div className={`${our === "mission" ? "flex" : "hidden"} flex flex-col gap-10`}>
        <div className="w-full text-[#8A879F] font-archivo text-lg flex items-center justify-center">
          <h1 className="w-1/2 text-center">
            Your full service lab for clinical trials. Our process is to ensure the generation of
            accurate and precise findings
          </h1>
        </div>
        <div className="w-full grid grid-rows-1 grid-cols-3 gap-10">
          {/* img */}
          <div className="w-full flex justify-center">
            <div className="overflow-hidden w-2/3 h-1/2 rounded-2xl aspect-h-1 aspect-w-1">
              <img className="w-full h-full object-center object-cover" src={thumb3} alt="" />
            </div>
          </div>
          {/* text */}
          <div className="flex flex-col w-full gap-6">
            <h1 className="font-dayone text-[36px] leading-none text-center text-blueblack">
              Our Mission is Give You Always Best Results.
            </h1>
            <span className="font-archivo text-center">
              Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem
              insitamconse quat.Exerci tation ullamcorper suscipit loborti excommodo habent
              claritatem insitamconse quat.Exerci tationlobortis nisl aliquip ex ea commodo habent
              claritatem insitamconse quat.
            </span>
            <span className="font-archivo text-center">
              Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem
              insitamconse quat.Exerci tation ullamcorper suscip
            </span>
          </div>
          {/* img */}
          <div className="w-full flex justify-center">
            <div className="aspect-h-1 aspect-w-1 w-2/3 h-1/2 rounded-2xl overflow-hidden">
              <img className="w-full h-full object-center object-cover" src={thumb4} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* value */}
      <div className={`${our === "value" ? "flex" : "hidden"} flex flex-col gap-10`}>
        <div className="w-full text-[#8A879F] font-archivo text-lg flex items-center justify-center">
          <h1 className="w-1/2 text-center">
            Your full service lab for clinical trials. Our process is to ensure the generation of
            accurate and precise findings
          </h1>
        </div>
        <div className="w-full grid grid-rows-1 grid-cols-3 gap-10">
          {/* img */}
          <div className="w-full flex justify-center">
            <div className="overflow-hidden w-2/3 h-1/2 rounded-2xl aspect-h-1 aspect-w-1">
              <img className="w-full h-full object-center object-cover" src={thumb1} alt="" />
            </div>
          </div>
          {/* text */}
          <div className="flex flex-col w-full gap-6">
            <h1 className="font-dayone text-[36px] leading-none text-blueblack text-center">
              We are Trusted by over 25000+ of customers
            </h1>
            <span className="font-archivo text-center">
              Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem
              insitamconse quat.Exerci tation ullamcorper suscipit loborti excommodo habent
              claritatem insitamconse quat.Exerci tationlobortis nisl aliquip ex ea commodo habent
              claritatem insitamconse quat.
            </span>
            <span className="font-archivo text-center">
              Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem
              insitamconse quat.Exerci tation ullamcorper suscip
            </span>
          </div>
          {/* img */}
          <div className="w-full flex justify-center">
            <div className="aspect-h-1 aspect-w-1 w-2/3 h-1/2 rounded-2xl overflow-hidden">
              <img className="w-full h-full object-center object-cover" src={thumb2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Our;
