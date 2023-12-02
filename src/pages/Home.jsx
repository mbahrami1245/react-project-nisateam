/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import bg from "../assets/images/bg.jpeg";
import bgabout from "../assets/images/about-bg-07.jpg";
import services1 from "../assets/images/services-thumb-01.jpg";
import services2 from "../assets/images/services-thumb-02.jpg";
import services3 from "../assets/images/services-thumb-03.jpg";
import services4 from "../assets/images/services-thumb-04.jpg";
import services5 from "../assets/images/services-thumb-05.jpg";
import services6 from "../assets/images/services-thumb-06.jpg";
import videobg from "../assets/images/tp-video-bg-01.jpg";
import Our from "../components/Our";
import Comments from "../components/Comments";
import RecentBlog from "../components/RecentBlog";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <section className="w-[100vw] h-[100vh] max-w-screen-2xl mx-auto grid grid-cols-5 grid-rows-1">
      <nav className="hidden xl:block col-span-1 row-span-1">
        <Navbar />
      </nav>
      <section className="col-span-5 xl:col-span-4 row-span-1 overflow-auto">
        <section className="w-full flex flex-col">
          {/* header */}
          <Header />
          {/* top */}
          <div className="w-full relative">
            <div className="">
              <img src={bg} alt="bg" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-gradient-to-r from-blue to-transparent"></div>
            <div className="absolute w-[50%] flex flex-col gap-10 left-10  top-[20%] text-white">
              <h1 className="text-[60px] leading-[1.1] font-dayone">
                Research and Verify physics laboratory
              </h1>
              <h2 className="text-lg font-medium">
                Your full service lab for clinical trials. Our mission is to ensure the generation
                of accurate and precise findings
              </h2>
              <button className="py-6 font-bold w-1/2 px-8 font-archivo  bg-green text-white rounded-md">
                BOOKAPOINTMENT
              </button>
            </div>
          </div>
          {/*  */}
          <div className="p-16 mt-20 flex items-center gap-4">
            <div className="w-1/2 flex flex-col gap-8">
              <div className="text-blue font-archivo font-bold">
                <h1>ABOUT US</h1>
              </div>
              <div>
                <h2 className="font-dayone text-blueblack text-[36px]">
                  We’ll Ensure You Always Get Best Results.
                </h2>
              </div>
              <NavLink
                to="#"
                className="flex font-archivo font-medium hover:text-green items-center gap-4"
              >
                <span>Read our MIssion & Vission</span>
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
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </NavLink>
              <div>
                <span className="font-archivo ">
                  Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem
                  insitamconse quat.Exerci tation ullamcorper suscipit loborti excommodo habent
                  claritatem insitamconse quat.Exerci tationlobortis nisl aliquip ex ea commodo
                  habent claritatem insitamconse quat.
                </span>
              </div>
              <div className="flex flex-col font-archivo gap-2">
                {/*  */}
                <div className="flex items-center gap-2">
                  <span className="text-green">
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
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span>Extramural Funding</span>
                </div>
                {/*  */}
                <div className="flex items-center gap-2">
                  <span className="text-green">
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
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span>Bacteria Markers</span>
                </div>
                {/*  */}
                <div className="flex items-center gap-2">
                  <span className="text-green">
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
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span>Nam nec mi euismod euismod</span>
                </div>
                {/*  */}
                <div className="flex items-center gap-2">
                  <span className="text-green">
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
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span>In aliquet dui nec lectus</span>
                </div>
              </div>
              <div className="text-white font-bold font-archivo">
                <button className="py-6 px-8 rounded-md  bg-blue">ABOUT US</button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div>
                <img src={bgabout} alt="" />
              </div>
              <div className="absolute text-white -left-[100px] flex flex-col items-center justify-center gap-2 bottom-5 bg-green p-4 rounded-md">
                <span className="font-dayone text-[115px]">12</span>
                <span className="text-[24px] font-archivo text-center">Years of Experience</span>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="bg-bg mt-20 w-full flex flex-col gap-10 p-16">
            {/* header */}
            <div className="w-full flex justify-between items-center">
              <div>
                <h1 className="font-archivo text-blue font-bold">OUR SERVICES</h1>
                <h2 className="font-dayone text-[43px]">Service Area</h2>
              </div>
              <div className="flex gap-1 items-center">
                <span className="font-archivo font-medium text-[#8A879F]">
                  We'll ensure you always get the best results:
                </span>
                <NavLink className="text-[18px] hover:text-green flex items-center font-archivo text-blue font-medium">
                  <span>CONTACT US</span>
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
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </span>
                </NavLink>
              </div>
            </div>
            {/* carts */}
            <div className="w-full grid grid-cols-3 grid-rows-2 gap-8">
              {/* single cart */}
              <div className="flex flex-col bg-white rounded-md overflow-hidden">
                <div>
                  <img src={services1} alt="" />
                </div>
                <div className="p-8 flex items-center gap-8">
                  <div>
                    <span className="w-14 bg-[#E7FAF6] h-14 flex items-center justify-center rounded-full">
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
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-dayone text-[20px]">Hemoglobin Test</span>
                    <NavLink className="font-archivo text-[14px] text-[#B9B8CB]">READ MORE</NavLink>
                  </div>
                </div>
              </div>
              {/* single cart */}
              <div className="flex flex-col bg-white rounded-md overflow-hidden">
                <div>
                  <img src={services2} alt="" />
                </div>
                <div className="p-8 flex items-center gap-8">
                  <div>
                    <span className="w-14 bg-[#FEEAF1] h-14 flex items-center justify-center rounded-full">
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
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-dayone text-[20px]">Genarel Analysis</span>
                    <NavLink className="font-archivo text-[14px] text-[#B9B8CB]">READ MORE</NavLink>
                  </div>
                </div>
              </div>
              {/* single cart */}
              <div className="flex flex-col bg-white rounded-md overflow-hidden">
                <div>
                  <img src={services3} alt="" />
                </div>
                <div className="p-8 flex items-center gap-8">
                  <div>
                    <span className="w-14 bg-[#ECF9FF] h-14 flex items-center justify-center rounded-full">
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
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-dayone text-[20px]">Biochemistry</span>
                    <NavLink className="font-archivo text-[14px] text-[#B9B8CB]">READ MORE</NavLink>
                  </div>
                </div>
              </div>
              {/* single cart */}
              <div className="flex flex-col bg-white rounded-md overflow-hidden">
                <div>
                  <img src={services4} alt="" />
                </div>
                <div className="p-8 flex items-center gap-8">
                  <div>
                    <span className="w-14 bg-[#E7EFFF] h-14 flex items-center justify-center rounded-full">
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
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-dayone text-[20px]">Hemoglobin Test</span>
                    <NavLink className="font-archivo text-[14px] text-[#B9B8CB]">READ MORE</NavLink>
                  </div>
                </div>
              </div>
              {/* single cart */}
              <div className="flex flex-col bg-white rounded-md overflow-hidden">
                <div>
                  <img src={services5} alt="" />
                </div>
                <div className="p-8 flex items-center gap-8">
                  <div>
                    <span className="w-14 bg-[#E7FAF6] h-14 flex items-center justify-center rounded-full">
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
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-dayone text-[20px]">histopatology</span>
                    <NavLink className="font-archivo text-[14px] text-[#B9B8CB]">READ MORE</NavLink>
                  </div>
                </div>
              </div>
              {/* single cart */}
              <div className="flex flex-col bg-white rounded-md overflow-hidden">
                <div>
                  <img src={services6} alt="" />
                </div>
                <div className="p-8 flex items-center gap-8">
                  <div>
                    <span className="w-14 bg-[#FEEAF1] h-14 flex items-center justify-center rounded-full">
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
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-dayone text-[20px]">Genetics</span>
                    <NavLink className="font-archivo text-[14px] text-[#B9B8CB]">READ MORE</NavLink>
                  </div>
                </div>
              </div>
            </div>
            {/* button */}
            <div className="font-archivo w-full flex items-center justify-center font-bold text-white">
              <button className="bg-blue py-4 px-6 rounded-md">ALLSERVICE</button>
            </div>
          </div>
          {/*  */}
          <div className="w-full mt-20 grid grid-cols-4 grid-rows-1 gap-5 p-16">
            {/* single card */}
            <div className="w-full flex flex-col transition-colors duration-500 py-20 px-4 border-[2px] border-[#ECEEF3] hover:border-blue rounded-md">
              <span className="text-[#2C77FF] animate-pulse fill-[#2C77FF]">
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
                    d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                  />
                </svg>
              </span>
              <span className="font-dayone text-[43px] text-blueblack">1492</span>
              <span className="font-archivo">Laboratories in 100+ states</span>
            </div>
            {/* single card */}
            <div className="w-full flex flex-col transition-colors duration-500 py-20 px-4 border-[2px] border-[#ECEEF3] hover:border-blue rounded-md">
              <span className="text-[#FCB9D2] animate-pulse fill-[#FCB9D2]">
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
                    d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                  />
                </svg>
              </span>
              <span className="font-dayone text-[43px] text-blueblack">152</span>
              <span className="font-archivo">Laboratory specialists</span>
            </div>
            {/* single card */}
            <div className="w-full flex flex-col transition-colors duration-500 py-20 px-4 border-[2px] border-[#ECEEF3] hover:border-blue rounded-md">
              <span className="text-[#74D0FF] animate-pulse fill-[#74D0FF]">
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
                    d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                  />
                </svg>
              </span>
              <span className="font-dayone text-[43px] text-blueblack">1022</span>
              <span className="font-archivo">Material collection points</span>
            </div>
            {/* single card */}
            <div className="w-full flex flex-col transition-colors duration-500 py-20 px-4 border-[2px] border-[#ECEEF3] hover:border-blue rounded-md">
              <span className="text-[#6FE3C6] animate-pulse fill-[#6FE3C6]">
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
                    d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                  />
                </svg>
              </span>
              <span className="font-dayone text-[43px] text-blueblack">24332</span>
              <span className="font-archivo">Patients diagnosed in 2022</span>
            </div>
          </div>
          {/*  */}
          <Our />
          {/*  */}
          <div className="w-full mt-20 relative">
            <div className="w-full">
              <img src={videobg} alt="" />
            </div>
            <span className="absolute bg-white flex items-center justify-center animate-pulse top-[calc(50%-40px)] left-[calc(50%-40px)] z-20  w-20 h-20 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black fill-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
            </span>
          </div>
          <Comments />
          <RecentBlog />
          <Footer />
        </section>
      </section>
    </section>
    //
  );
};

export default Home;
