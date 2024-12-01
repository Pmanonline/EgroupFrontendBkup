import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import heroImage from "../assets/images/heroImage.png";
import heroImage2 from "../assets/images/sample_img.jpg";
import Ebusiness from "../assets/images/E-business.png";
import Diamond from "../assets/images/diamond.png";
import ServiceCards from "../components/Cards/HeroCards";
import ShortVideosSection from "../components/Cards/ShortVideoCards";
import ScoopCards from "../components/Cards/ScoopCards";
import AwardCards from "../components/Cards/AwardCards";
import WinnersCard from "../components/Cards/winnersCard";
import WhosTaken from "../components/Cards/WhosTakenCard";
import ExploreCards from "../components/Cards/ExploreCards";
import GroupsYouMayLike from "../components/Cards/groupCard";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import Egroup from "../assets/images/Egroup.png";
import EventsImage from "../assets/images/Events.png";

const Home = () => {
  return (
    <>
      <section className="bg-HeroClr min-h-screen flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between w-full">
          {/* Left Side - Text */}
          <div className="lg:w-1/2 w-full text-center lg:text-center">
            <h1 className="text-6xl lg:text-7xl leading-tight font-bold text-white mb-4">
              Say hello to <br /> Essential Point
            </h1>

            {/* Explore Button with hover effect */}
            <div className="flex justify-center items-center lg:justify-center ">
              <h4 className="text-white mb-4 font-thin flex items-center">
                <Link target="blank" to={"https://edirect.essential.ng/"}>
                  <button className="bg-transparent border border-white text-white py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-HeroClr">
                    EXPLORE OUR DIRECTORY
                  </button>
                </Link>
                <MdKeyboardArrowRight
                  size={24}
                  className="text-white mt-[1px] mx-1"
                />
              </h4>
            </div>
          </div>
          {/* Right Side - Image */}
          <div className="lg:w-1/2 w-full">
            <div className="relative w-full aspect-[4/3] lg:aspect-square">
              <img
                src={heroImage}
                alt="Essential Point"
                className=" mt-24  ml-24     absolute inset-0 w-[70%] h-[70%] object-cover rounded-full shadow-lg hidden lg:block"
              />

              <img
                src={heroImage2}
                alt="Essential Point"
                className="absolute inset-0 w-full h-full object-cover shadow-lg lg:hidden"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto md:px-24 py-[5rem]">
        <h2 className="text-3xl font-bold mb-8 text-center">
          See what we're made of.
        </h2>
        <ServiceCards />
      </section>
      <section className="mx-auto md:px-5  py-[5rem]">
        <ShortVideosSection />
      </section>
      <section className="mx-auto md:px-24 py-[5rem]">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Get the inside scoop.
        </h2>
        <ScoopCards />

        {/* More on Scoop */}
        <div className="flex flex-col items-center text-center max-w-md mx-auto py-8">
          <button className="mb-6 px-4 py-2 border border-gray-300  shadow-sm text-NavClr font-bold rounded-md hover:bg-NavClr hover:text-white transition-colors">
            View more from Essential
          </button>

          <div className="">
            <img src={Egroup} alt="Egroup.png" />
          </div>

          <h2 className="text-xl font-bold mb-2 mt-5">Reach us on social</h2>
          <p className="text-gray-600 mb-6">
            Be part of the conversation on our latest ventures
          </p>

          <div className="flex space-x-4">
            <a
              href="#"
              target="blank"
              className="text-gray-800  hover:text-red-500"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              target="blank"
              className="text-gray-800  hover:text-red-500"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              target="blank"
              className="text-gray-800  hover:text-red-500"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              target="blank"
              className="text-gray-800  hover:text-red-500"
            >
              <Youtube size={24} />
            </a>
            <a
              href="#"
              target="blank"
              className="text-gray-800  hover:text-red-500"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <div className="w-full h-px bg-gray-200 mt-8"></div>
        </div>
        {/* More on Scoop */}
      </section>

      <section className="mx-auto md:px-24 py-[5rem] bg-gray-50">
        <div>
          <h2 className="text-5xl font-medium mb-8 text-center text-green">
            PRIDE OF NIGERIA<br></br>
            <div className="flex justify-center gap-7">
              <img src={Diamond} alt="" className="w-4 h-4 mt-3" />
              <span className="text-green font-medium text-2xl">AWARD</span>
              <img src={Diamond} alt="" className="w-4 h-4 mt-3" />
            </div>
          </h2>
        </div>
        <div className="mx-5">
          <AwardCards />
        </div>
      </section>
      <section className="  py-[5rem]">
        <div className="text-start">
          <h3 className="text-lg font-bold ml-[7rem] m-2">Winners</h3>
        </div>
        <div className="mx-5 mb-[4rem]">
          <WinnersCard />
        </div>
        {/* ?? */}

        <Link
          target="blank
        "
          to={"https://theprideofnigeria.ng/"}
        >
          <div className="w-full sm:max-w-[35rem] mid:px-5 mx-auto mt-5 my-[4rem]">
            <div className="bg-[#0D5C3B] hover:scale-95 text-white text-center py-6 px-8 rounded-md ">
              <p className="text-lg">Pride of Nigeria</p>
            </div>
          </div>
        </Link>
        {/* ?? */}
        {/* event ticket */}

        <div className="flex flex-col md:flex-row mx-auto p-8 my-24">
          <div className="md:w-3/5 mb-4 md:mb-0">
            <img
              src={EventsImage}
              alt="Dark background image"
              className="w-full h-full object-cover"
            />
          </div>
          {/* <div className="md:w-2/5 flex flex-col justify-center bg-gray-50 p-3">
            <p className="text-black mb-6 px-3">
              Lorem ipsum dolor sit amet consectetur. Integer augue at vitae sed
              integer porttitor sed ultrices ornare.
            </p>
            <div className="space-y-2 mb-6 px-3">
              <div className="border-b mt-3 border-gray-500 w-full mx-auto mb-5"></div>
              <div className="border-b mt-3 border-gray-500 w-full mx-auto"></div>
            </div>
            <button className="text-black font-bold text-lg py-2 px-4 rounded-md w-full md:w-auto">
              Get Started
            </button>
            <div className="border-b mt-3 border-gray-500 w-[40%] mx-auto"></div>
          </div> */}
          <div className="md:w-2/5 flex flex-col justify-center bg-gray-50 p-3">
            <p className="text-black mb-6 px-3">
              Lorem ipsum dolor sit amet consectetur. Integer augue at vitae sed
              integer porttitor sed ultrices ornare.
            </p>
            <div className="space-y-2 mb-6 px-3">
              <div className="border-b mt-3 border-gray-500 w-full mx-auto mb-5"></div>
              <div className="border-b mt-3 border-gray-500 w-full mx-auto"></div>
            </div>

            {/* Link with hover and transition effect */}
            <Link
              target="blank"
              className="text-center"
              to="https://evenue.ng/"
            >
              <button className="text-black font-bold text-lg py-2 px-4 rounded-md w-full md:w-auto  hover:bg-NavClr hover:text-white hover:scale-105 transition-transform duration-300 ease-in-out">
                Get Started
              </button>
            </Link>

            <div className="border-b mt-3 border-gray-500 w-[40%] mx-auto"></div>
          </div>
        </div>
        {/* event ticket */}
        {/* Whos Taken */}
        <WhosTaken />
      </section>
      {/* explore */}
      <section className="  py-[4rem]">
        <ExploreCards />
      </section>
      {/* E-business */}
      <section className="  py-[4rem]">
        <div className="w-full h-[23rem] mid:h-[35rem] bg-gradient-to-r from-[#341f1f] to-[#803d3d] shadow-md">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold p-4 border-b text-white">
              E- Business
            </h1>
            <div className="flex flex-col md:flex-row items-center p-6">
              <div className="w-full md:w-1/2 pr-0 md:pr-6">
                <h2 className="text-2xl font-bold mb-2 text-white">
                  Register Now to get your Business Listed On Essential Direct
                </h2>
                <p className="text-white font-light mb-4">
                  Lorem ipsum dolor sit amet consectetur. Vestibulum massa
                  turpis varius et eros at.
                </p>
                <Link to={"/Ebusinesses"}>
                  <button className="bg-NavClr text-white px-6 py-2 rounded hover:bg-red-700 transition duration-300">
                    Register Now
                  </button>
                </Link>
              </div>
              <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <img
                  src={Ebusiness}
                  alt="E-Business"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* E-business */}
      <section className=" px-5  py-[4rem]">
        <GroupsYouMayLike />
      </section>
    </>
  );
};

export default Home;
