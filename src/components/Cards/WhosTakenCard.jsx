import React from "react";
import whosTaken from "../../assets/images/whosTaken.png";

import "../../index.css";

const WhosTaken = () => {
  return (
    <div className="relative h-screen w-full bg-black">
      {/* Background image */}
      <img
        src={whosTaken}
        alt="Happy family"
        className="absolute inset-0 w-full h-full object-cover opacity-100  "
      />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center   font-montserra montserrat">
          SEE WHO IS TAKEN
        </h1>
        <p className="text-lg md:text-sm mb-8 text-center max-w-3xl">
          Connect with your family story on Ancestry® and discover the what,
          where, and who of how it all leads to you.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 w-full max-w-2xl">
          <button className="bg-transparent  text-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition duration-300 w-full md:w-auto montserrat">
            <span className=" underline">COURT</span> <br></br> STATEMENTS
          </button>
          <button className=" text-white py-7 border border-white px-12 rounded-lg hover:bg-white hover:text-black hover:font-semibold transition duration-300 w-full md:w-auto ">
            View Registry
          </button>

          <button className="bg-transparent  text-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition duration-300 w-full md:w-auto montserrat ">
            <span className=" underline">BIRTH</span> <br></br> CERTIFICATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhosTaken;
