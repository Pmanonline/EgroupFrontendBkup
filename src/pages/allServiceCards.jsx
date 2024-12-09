// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import eRegistryIcon from "./../assets/images/herocardImage.png";
// import eCertifyIcon from "./../assets/images/herocardImage2.png";
// import eMailIcon from "./../assets/images/herocardImage3.png";
// import ePollsIcon from "./../assets/images/herocardImage4.png";
// import eJobs from "../assets/images//Ejobs.jpg";
// import eDriveIcon from "../assets/images/Edrive.jpg";
// import eNews from "../assets/images/Enews.jpg";
// import eSchools from "../assets/images/Eschools.jpg";
// import edirect from "../assets/images/Edirect.png";
// import eroot from "../assets/images/Eroot.png";
// import ebnb from "../assets/images/ebnb.jpg";
// import companion from "../assets/images/ecompanion.png";
// import autograph from "../assets/images/autograph2.png";
// import etech from "../assets/images/etech.png";
// import estores from "../assets/images/estores.png";
// import eproperties from "../assets/images/eproperties.png";
// import pride from "../assets/images/pride.png";

// import eVenue from "../assets/images/Evenue.png";

// import { Card, CardContent, CardMedia, Typography } from "@mui/material";
// import { Search as SearchIcon } from "lucide-react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

// const NavLink = ({ text, isActive, onClick }) => (
//   <a
//     href="#"
//     onClick={onClick}
//     className={`px-4 py-2 text-sm font-medium ${
//       isActive
//         ? "text-red-500 border-b-2 border-red-500"
//         : "text-gray-500 hover:text-gray-700"
//     }`}
//   >
//     {text}
//   </a>
// );

// const HeroCard = ({ title, description, iconSrc, url }) => (
//   <Link target="blank" to={url} className="no-underline">
//     <Card
//       data-aos="fade-up"
//       className="h-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg group"
//     >
//       <CardMedia
//         component="img"
//         height="200"
//         image={iconSrc}
//         alt={title}
//         className="object-cover h-60 transition-transform duration-300 group-hover:scale-105"
//       />
//       <CardContent className="bg-pink-100 flex-grow flex flex-col justify-between">
//         <Typography
//           gutterBottom
//           variant="h7"
//           component="div"
//           className="text-center font-bold text-lg text-inherit group-hover:text-red-500 transition-colors duration-300"
//         >
//           {title}
//         </Typography>
//         <Typography
//           variant="body2"
//           className="text-center font-bold text-lg text-gray-700 group-hover:text-red-500 transition-colors duration-300"
//         >
//           {description}
//         </Typography>
//       </CardContent>
//     </Card>
//   </Link>
// );

// const AllServiceCards = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeNav, setActiveNav] = useState("All companies");
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

// const navLinks = [
//   "All companies",
//   "Entertainment",
//   "Health & Wellness",
//   "Money",
//   "People",
//   "Technology",
//   "Countries",
//   "Academics",
// ];

// const services = [
//   {
//     title: "E-Jobs",
//     description: "Lorem ipsum dolor sit amet consectetur.",
//     iconSrc: eJobs,
//     url: "http://ejobs.com.ng",
//     category: "Technology",
//   },
//   {
//     title: "E-Drive",
//     description: "Lorem ipsum dolor sit amet consectetur.",
//     iconSrc: eDriveIcon,
//     url: "http://edrive.ng",
//     category: "Technology",
//   },
//   {
//     title: "E-News",
//     description: "Lorem ipsum dolor sit amet consectetur.",
//     iconSrc: eNews,
//     url: "http://essentialnews.ng",
//     category: "Entertainment",
//   },
//   {
//     title: "E-Direct",
//     description: "Lorem ipsum dolor sit amet consectetur.",
//     iconSrc: edirect,
//     url: "http://edirect.ng",
//     category: "Technology",
//   },
//   {
//     title: "E-schools",
//     description: "Lorem ipsum dolor sit amet consectetur.",
//     iconSrc: eSchools,
//     url: "http://eschoolconnect.ng",
//     category: "Technology",
//   },

//   {
//     title: "E-Legal",
//     description: "Description for E-Legal",
//     iconSrc: eRegistryIcon,
//     category: "Technology",
//     url: "http://elegal.ng",
//   },
//   {
//     title: "E-Root",
//     description: "Lorem ipsum dolor sit amet consectetur.",
//     iconSrc: eroot,
//     category: "Technology",
//     url: "http://eroot.ng/",
//   },
//   {
//     title: "OOSHMAIL",
//     description: "Lorem ipsum dolor sit amet consectetur.",
//     iconSrc: eMailIcon,
//     category: "Technology",
//     url: "http://ooshmail.com",
//   },
//   {
//     title: "E-BNB",
//     description: "Lorem ipsum dolor sit amet consectetur.",
//     iconSrc: ebnb,
//     category: "People",
//     url: "http://ebnbhotel.com",
//   },
//   {
//     title: "Companion",
//     description: "Lorem ipsum dolor sit amet consectetur.",
//     iconSrc: companion,
//     category: "Health & Wellness",
//     url: "http://ecompanionng.com",
//   },
//   {
//     title: "E-Polls",
//     description: "Lorem ipsum dolor sit amet consectetur.",
//     iconSrc: ePollsIcon,
//     category: "Health & Wellness",
//     url: "/services/companion",
//   },
//   {
//     title: "Autograph_Magazine",
//     description: "Lorem ipsum dolor sit amet consectetur.",
//     iconSrc: autograph,
//     category: "People",
//     url: "http://theautographcollections.ng",
//   },
//   {
//     title: "Etech",
//     description: "Lorem ipsum dolor sit amet consectetur.",
//     iconSrc: etech,
//     category: "People",
//     url: "http://etechology.ng",
//   },
//   {
//     title: "Estores",
//     description: "Lorem ipsum dolor sit amet consectetur.",
//     iconSrc: estores,
//     category: "People",
//     url: "http://estores.ng",
//   },
//   {
//     title: "Eproperties",
//     description: "Lorem ipsum dolor sit amet consectetur.",
//     iconSrc: eproperties,
//     category: "People",
//     url: "http://eproperties.ng",
//   },
//   {
//     title: "ThePrideOfNigeria",
//     description: "Lorem ipsum dolor sit amet consectetur.",
//     iconSrc: pride,
//     category: "People",
//     url: "http://theprideofnigeria.ng",
//   },
// ];

//   const filteredServices = services.filter(
//     (service) =>
//       (activeNav === "All companies" || service.category === activeNav) &&
//       service.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <nav className="flex justify-center mb-8 border-b">
//         {navLinks.map((link) => (
//           <NavLink
//             key={link}
//             text={link}
//             isActive={link === activeNav}
//             onClick={() => setActiveNav(link)}
//           />
//         ))}
//       </nav>
//       <div className="mb-8 flex justify-center">
//         <div className="relative w-full max-w-md">
//           <input
//             type="text"
//             placeholder="Search"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-12">
//         {filteredServices.map((service, index) => (
//           <HeroCard key={index} {...service} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllServiceCards;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Search as SearchIcon } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import eRegistryIcon from "./../assets/images/herocardImage.png";
import eCertifyIcon from "./../assets/images/herocardImage2.png";
import eMailIcon from "./../assets/images/herocardImage3.png";
import ePollsIcon from "./../assets/images/herocardImage4.png";
import eJobs from "../assets/images//Ejobs.jpg";
import eDriveIcon from "../assets/images/Edrive.jpg";
import eNews from "../assets/images/Enews.jpg";
import eSchools from "../assets/images/Eschools.jpg";
import edirect from "../assets/images/Edrive.jpg";
import eroot from "../assets/images/Eroot.png";
import ebnb from "../assets/images/ebnb.jpg";
import companion from "../assets/images/ecompanion.png";
import autograph from "../assets/images/autograph2.png";
import etech from "../assets/images/etech.png";
import estores from "../assets/images/estores.png";
import eproperties from "../assets/images/eproperties.png";
import pride from "../assets/images/pride.png";
import eVenue from "../assets/images/Evenue.png";

// icons
import { LuMails } from "react-icons/lu";

const FilterButton = ({ text, count, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-all duration-200 ${
      isActive
        ? "bg-blue-100 text-red-600"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    } flex items-center gap-2 m-1`}
  >
    <span>{text}</span>
    <span className="text-xs bg-white px-2 py-0.5 rounded-full">{count}</span>
  </button>
);
const CompanyNamesButton = ({ title, url }) => (
  <Link target="_blank" to={url}>
    <button
      className="px-4 py-1 rounded-full text-sm font-medium transition-all duration-200 bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105
     flex items-center gap-2 m-1"
    >
      <span>{title}</span>
    </button>
  </Link>
);

const HeroCard = ({ title, description, iconSrc, url }) => (
  <Link target="blank" to={url} className="no-underline">
    <Card
      data-aos="fade-up"
      className="h-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg group"
    >
      <CardMedia
        component="img"
        height="200"
        image={iconSrc}
        alt={title}
        className="object-cover  transition-transform duration-300 group-hover:scale-105 h-[50%]"
      />
      <CardContent className="bg-pink-100 flex-grow flex flex-col justify-between">
        <Typography
          gutterBottom
          variant="h7"
          component="div"
          className="text-center font-bold text-lg text-inherit group-hover:text-red-500 transition-colors duration-300"
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          className="text-center font-bold text-lg text-gray-700 group-hover:text-red-500 transition-colors duration-300"
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  </Link>
);

const AllServiceCards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All companies");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      title: "E-Jobs",
      description: "Lorem ipsum dolor sit amet consectetur.",
      iconSrc: eJobs,
      url: "http://ejobs.com.ng",
      category: "Technology",
    },
    {
      title: "E-Drive",
      description: "Lorem ipsum dolor sit amet consectetur.",
      iconSrc: eDriveIcon,
      url: "http://edrive.ng",
      category: "Technology",
    },
    {
      title: "E-News",
      description: "Lorem ipsum dolor sit amet consectetur.",
      iconSrc: eNews,
      url: "http://essentialnews.ng",
      category: "Entertainment",
    },
    {
      title: "E-Direct",
      description: "Lorem ipsum dolor sit amet consectetur.",
      iconSrc: edirect,
      url: "http://edirect.ng",
      category: "People",
    },
    {
      title: "E-schools",
      description: "Lorem ipsum dolor sit amet consectetur.",
      iconSrc: eSchools,
      url: "http://eschoolconnect.ng",
      category: "Academics",
    },

    {
      title: "E-Legal",
      description: "Description for E-Legal",
      iconSrc: eRegistryIcon,
      category: "Health & Wellness",
      url: "http://elegal.ng",
    },
    {
      title: "E-Root",
      description: "Lorem ipsum dolor sit amet consectetur.",
      iconSrc: eroot,
      category: "People",
      url: "http://eroot.ng/",
    },
    {
      title: "OOSHMAIL",
      description: "Lorem ipsum dolor sit amet consectetur.",
      iconSrc: eMailIcon,
      category: "Technology",
      url: "http://ooshmail.com",
    },
    {
      title: "E-BNB",
      description: "Lorem ipsum dolor sit amet consectetur.",
      iconSrc: ebnb,
      category: "People",
      url: "http://ebnbhotel.com",
    },
    {
      title: "Companion",
      description: "Lorem ipsum dolor sit amet consectetur.",
      iconSrc: companion,
      category: "Health & Wellness",
      url: "http://ecompanionng.com",
    },
    {
      title: "E-Polls",
      description: "Lorem ipsum dolor sit amet consectetur.",
      iconSrc: ePollsIcon,
      category: "People",
      url: "/services/companion",
    },
    {
      title: "Autograph_Magazine",
      description: "Lorem ipsum dolor sit amet consectetur.",
      iconSrc: autograph,
      category: "Entertainment",
      url: "http://theautographcollections.ng",
    },
    {
      title: "Etech",
      description: "Lorem ipsum dolor sit amet consectetur.",
      iconSrc: etech,
      category: "Technology",
      url: "http://etechology.ng",
    },
    {
      title: "Estores",
      description: "Lorem ipsum dolor sit amet consectetur.",
      iconSrc: estores,
      category: "People",
      url: "http://estores.ng",
    },
    {
      title: "Eproperties",
      description: "Lorem ipsum dolor sit amet consectetur.",
      iconSrc: eproperties,
      category: "People",
      url: "http://eproperties.ng",
    },
    {
      title: "ThePrideOfNigeria",
      description: "Lorem ipsum dolor sit amet consectetur.",
      iconSrc: pride,
      category: "People",
      url: "http://theprideofnigeria.ng",
    },
  ];

  // Create filter categories with counts
  const filterCategories = [
    { name: "All companies", count: services.length },
    {
      name: "Entertainment",
      count: services.filter((s) => s.category === "Entertainment").length,
    },
    {
      name: "Health & Wellness",
      count: services.filter((s) => s.category === "Health & Wellness").length,
    },
    {
      name: "Money",
      count: services.filter((s) => s.category === "Money").length,
    },
    {
      name: "People",
      count: services.filter((s) => s.category === "People").length,
    },
    {
      name: "Technology",
      count: services.filter((s) => s.category === "Technology").length,
    },
    {
      name: "Countries",
      count: services.filter((s) => s.category === "Countries").length,
    },
    {
      name: "Academics",
      count: services.filter((s) => s.category === "Academics").length,
    },
  ];

  const filteredServices = services.filter(
    (service) =>
      (activeFilter === "All companies" || service.category === activeFilter) &&
      service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-16">
      {/* list of brands */}
      <h1 className=" text-4xl text-center  font-semibold mb-3">
        The world is going <span className=" text-NavClr  italic">e</span> so
        are we{" "}
      </h1>
      {/* search */}
      <div className="mb-8 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center mx-auto gap-2 mb-8  bg-gradient-to-r from-[#287baf] to-[#53d2b5]  rounded-md  lg:p-5 lg:max-w-3xl Nlg:p-2">
        <div className="w-full text-xl text-white font-semibold text-center mt-2 mb-4">
          List of all essential group brands
        </div>
        <div className="w-full flex flex-wrap justify-center">
          {services.map((service) => (
            <CompanyNamesButton
              key={service.title}
              title={service.title}
              url={service.url}
            />
          ))}
        </div>
      </div>

      {/* filter */}
      <div className="flex flex-wrap justify-center mx-auto gap-2 mb-8  bg-gradient-to-r from-[#aa6e91] to-[#bd987b] rounded-md    lg:p-5 lg:max-w-3xl Nlg:p-2">
        <div className="w-full text-xl text-white font-semibold text-center mt-2 mb-4">
          Browse by category
        </div>
        <div className="w-full flex flex-wrap justify-center">
          {filterCategories.map((category) => (
            <FilterButton
              key={category.name}
              text={category.name}
              count={category.count}
              isActive={category.name === activeFilter}
              onClick={() => setActiveFilter(category.name)}
            />
          ))}
        </div>
      </div>
      {/* filter */}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-12">
        {filteredServices.map((service, index) => (
          <HeroCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default AllServiceCards;
