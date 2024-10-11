import React, { useState } from "react";
import { Link } from "react-router-dom";
import eRegistryIcon from "./../assets/images/herocardImage.png";
import eCertifyIcon from "./../assets/images/herocardImage2.png";
import eMailIcon from "./../assets/images/herocardImage3.png";
import ePollsIcon from "./../assets/images/herocardImage4.png";
import eDirectIcon from "./../assets/images/herocardImage.png";
import companionIcon from "./../assets/images/herocardImage2.png";
import eJobs from "../assets/images//Ejobs.jpg";
import eDriveIcon from "../assets/images/Edrive.jpg";
import eNews from "../assets/images/Enews.jpg";
import eSchools from "../assets/images/Eschools.jpg";
import eVenue from "../assets/images/Evenue.png";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Search as SearchIcon } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const NavLink = ({ text, isActive, onClick }) => (
  <a
    href="#"
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium ${
      isActive
        ? "text-red-500 border-b-2 border-red-500"
        : "text-gray-500 hover:text-gray-700"
    }`}
  >
    {text}
  </a>
);

const HeroCard = ({ title, description, iconSrc, url }) => (
  <Link target="blank" to={url} className="no-underline">
    <Card
      data-aos="fade-up"
      // className="h-full flex flex-col transition-transform duration-300 hover:scale-105 hover:text-NavClr"
      className="h-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg group"
    >
      <CardMedia
        component="img"
        height="200"
        image={iconSrc}
        alt={title}
        className="object-cover h-60 transition-transform duration-300 group-hover:scale-105"
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
  const [activeNav, setActiveNav] = useState("All companies");
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const navLinks = [
    "All companies",
    "Entertainment",
    "Health & Wellness",
    "Money",
    "People",
    "Technology",
    "Countries",
  ];

  const services = [
    {
      title: "E-Jobs",
      description: "Lorem ipsum dolor sit amet consectetur.",
      iconSrc: eJobs,
      url: " http://13.92.179.121:3002/",
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
      iconSrc: eDirectIcon,
      url: "https://edirect.essential.ng/",
      category: "Technology",
    },
    {
      title: "E-schools",
      description: "Lorem ipsum dolor sit amet consectetur.",
      iconSrc: eSchools,
      url: "https://eschools.ng/",
      category: "Technology",
    },

    {
      title: "E-Registry",
      description: "Description for E-Registry",
      iconSrc: eRegistryIcon,
      category: "Technology",
      url: "/services/e-registry",
    },
    {
      title: "E-Certify",
      description: "Lorem ipsum dolor sit amet consectetur.",
      iconSrc: eCertifyIcon,
      category: "Technology",
      url: "/services/e-certify",
    },
    {
      title: "E-Mail",
      description: "Lorem ipsum dolor sit amet consectetur.",
      iconSrc: eMailIcon,
      category: "Technology",
      url: "/services/e-mail",
    },
    {
      title: "E-Polls",
      description: "Lorem ipsum dolor sit amet consectetur.",
      iconSrc: ePollsIcon,
      category: "People",
      url: "/services/e-polls",
    },
    {
      title: "Companion",
      description: "Lorem ipsum dolor sit amet consectetur.",
      iconSrc: companionIcon,
      category: "Health & Wellness",
      url: "/services/companion",
    },
    {
      title: "E-Polls",
      description: "Lorem ipsum dolor sit amet consectetur.",
      iconSrc: ePollsIcon,
      category: "Health & Wellness",
      url: "/services/companion",
    },
  ];

  const filteredServices = services.filter(
    (service) =>
      (activeNav === "All companies" || service.category === activeNav) &&
      service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <nav className="flex justify-center mb-8 border-b">
        {navLinks.map((link) => (
          <NavLink
            key={link}
            text={link}
            isActive={link === activeNav}
            onClick={() => setActiveNav(link)}
          />
        ))}
      </nav>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-12">
        {filteredServices.map((service, index) => (
          <HeroCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default AllServiceCards;
