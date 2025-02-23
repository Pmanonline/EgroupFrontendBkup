import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const NotFound = () => {
  return (
    <section className="bg-HeroClr min-h-screen flex items-center justify-center">
      <div className="container mx-auto text-center">
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <h2 className="text-4xl font-bold text-white mb-8">Page Not Found</h2>
        <p className="text-xl text-white mb-8">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <Link to="/">
          <button className="bg-transparent border border-white text-white py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-HeroClr flex items-center">
            GO BACK HOME
            <MdKeyboardArrowRight
              size={24}
              className="text-white mt-[1px] mx-1"
            />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
