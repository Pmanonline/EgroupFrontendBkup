import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Search as SearchIcon } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import eRegistryIcon from "./../assets/images/herocardImage.png";
import eCertifyIcon from "./../assets/images/herocardImage2.png";
import Edirect from "./../assets/images/Edirect.png";
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
import Efix from "../assets/Efix.png";
import oosh from "../assets/oosh.jpg";

// icons
import { LuMails } from "react-icons/lu";

const FilterButton = ({ text, count, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-all duration-200 ${
      isActive
        ? "bg-blue-100 text-red-600"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    } flex items-center gap-2 m-1`}>
    <span>{text}</span>
    <span className="text-xs bg-white px-2 py-0.5 rounded-full">{count}</span>
  </button>
);
const CompanyNamesButton = ({ title, url }) => (
  <Link target="_blank" to={url}>
    <button
      className="px-4 py-1 rounded-full text-sm font-medium transition-all duration-200 bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105
     flex items-center gap-2 m-1">
      <span>{title}</span>
    </button>
  </Link>
);

const HeroCard = ({ title, description, iconSrc, url }) => (
  <Link to={url} target="_blank" className="no-underline">
    <div
      data-aos="fade-up"
      className="h-full flex flex-col rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg group">
      <div className="relative h-[50%]">
        <img
          src={iconSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="bg-pink-100 flex-grow flex flex-col justify-between p-2">
        <h3 className="text-center font-bold text-lg text-inherit mb-2 group-hover:text-red-500 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-center  text-xs text-gray-700 group-hover:text-red-500 transition-colors duration-300 line-clamp-4">
          {description}
        </p>
      </div>
    </div>
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
      description:
        "E-Jobs is a comprehensive job portal that links job seekers with employers across various industries. Whether you're looking for full-time employment, remote work, or freelance gigs, E-Jobs provides thousands of job listings tailored to your skills and experience. Employers can post vacancies, review applications, and connect with top talents through the platform. Job seekers can upload their resumes, receive interview tips, and access career development resources to enhance their employability.",
      iconSrc: eJobs,
      url: "http://ejobs.com.ng",
      category: "Technology",
    },
    {
      title: "E-Drivers",
      description:
        "E-Drivers is a dedicated job-matching platform for professional drivers seeking employment opportunities. Whether you specialize in ride-hailing, logistics, corporate driving, or chauffeur services, E-Drivers connects you with companies and individuals in need of skilled drivers. Employers can post job openings, review applications, and find the right fit for their needs. The platform also provides resources such as driving tips, licensing updates, and professional training courses to enhance career growth in the transportation industry..",
      iconSrc: eDriveIcon,
      url: "http://edrive.ng",
      category: "Technology",
    },
    {
      title: "E-Cars",
      description:
        "E-Cars is the ultimate destination for car buyers and sellers. Whether you're looking for a brand-new ride, a pre-owned vehicle, or a specialty car, E-Cars provides a vast selection from verified sellers and dealerships. With an advanced search system, users can filter vehicles by make, model, year, price, and location. Sellers can easily list their cars with high-resolution images and specifications to attract the right buyers. E-Cars also features expert car reviews, financing options, and insurance partnerships to make the car-buying journey smooth and hassle-free.",
      iconSrc: eDriveIcon,
      url: "http://ecars.ng",
      category: "Technology",
    },
    {
      title: "E-News",
      description:
        "E-News is a cutting-edge digital news platform that delivers real-time updates on politics, business, entertainment, sports, and global events. Whether you’re looking for breaking news, in-depth analysis, or exclusive interviews, E-News ensures that you stay ahead with credible and well-researched journalism. Readers can customize their news feed, watch live broadcasts, and engage in discussions on trending topics.",
      iconSrc: eNews,
      url: "http://essentialnews.ng",
      category: "Entertainment",
    },
    {
      title: "E-Direct",
      description: "Lorem ipsum dolor sit amet consectetur.",
      iconSrc: Edirect,
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
      description:
        "Every family has a story waiting to be told. eRoot is a revolutionary genealogy platform designed to help individuals trace their lineage, document their family history, and connect with long-lost relatives across generations. Whether you're uncovering your ancestors, building a family tree, or preserving memories for future generations, eRoot is your digital gateway to the past. E-Root provides a seamless way to explore your ancestry, offering tools to document your lineage, access historical records, and connect with relatives worldwide. From birth and marriage certificates to census data and migration records, our platform empowers you to piece together the puzzle of your family’s past. This platform helps you discover new relatives and uncover historical connections you never knew existed. You can reconnect with lost relatives or discover new ones through eRoot’s powerful search and matching system. Our platform helps users find and connect with family members worldwide, making it easier to bridge generational gaps and strengthen familial bonds. History isn’t just about names and dates—it’s about the stories, traditions, and values that define us. eRoot allows families to store cherished memories, old photographs, personal letters, and recorded stories in a secure digital archive. Future generations will have access to a treasure trove of family history, ensuring that legacies are never forgotten.",
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
      title: "Etalent",
      description:
        "This platform helps you to discover, Connect, and Showcase Your Talent. Unleash your potential with eTalent—the ultimate platform for connecting talented individuals with opportunities. Whether you’re an artist, freelancer, performer, or professional, showcase your skills, collaborate with like-minded creatives, and get discovered by top recruiters and clients worldwide. Your talent deserves the spotlight!.",
      iconSrc: etech,
      category: "Technology",
      url: "http://etechology.ng",
    },
    {
      title: "Estores",
      description:
        "E-Stores is an all-in-one online marketplace where businesses and individuals can set up virtual shops and sell their products to a global audience. Whether you’re a small business owner, an artisan, or a large retailer, E-Stores offers customizable storefronts, secure payment gateways, and integrated shipping options. Shoppers can explore a vast selection of products, from fashion and beauty to electronics and home essentials, enjoying seamless transactions and fast delivery.",
      iconSrc: estores,
      category: "People",
      url: "http://estores.ng",
    },
    {
      title: "Eproperties",
      description:
        "E-Properties is a cutting-edge real estate marketplace that connects property buyers, sellers, and renters in one easy-to-navigate platform. Whether you’re searching for your dream home, a commercial space, or a rental apartment, E-Properties offers thousands of listings to choose from. The platform enables property owners, realtors, and agents to list properties with detailed descriptions, high-quality images, and virtual tours to attract potential buyers or tenants. Users can also access mortgage calculators, legal guides, and expert property advice to make informed decisions.",
      iconSrc: eproperties,
      category: "People",
      url: "http://eproperties.ng",
    },
    {
      title: "Efix",
      description:
        "Your Trusted Repair & Maintenance Hub. E-Fix is an all-in-one platform connecting users with skilled repair and maintenance professionals. Whether you need a plumber, electrician, handyman, car mechanic, or appliance technician, E-Fix ensures you find reliable service providers at the best rates. The platform allows users to book services, compare prices, and read customer reviews to make informed decisions. Professionals can also showcase their expertise and grow their businesses by reaching a wider audience.",
      iconSrc: Efix,
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
    {
      title: "Oosh",
      description:
        "Welcome to Oosh, the next-gen social media platform designed for authentic connections. Share your thoughts, explore trending topics, engage with communities, and express yourself without limits. Whether it's personal moments or professional networking, Oosh keeps you connected in the most exciting way..",
      iconSrc: oosh,
      category: "People",
      url: "http://theprideofnigeria.ng",
    },
    {
      title: "E-Religion",
      description:
        "E-Religion is a faith-based online platform where believers from all backgrounds can connect, share spiritual insights, and engage in meaningful discussions. Whether you’re looking for a place of worship, religious events, or faith-based teachings, E-Religion provides a space to explore and deepen your spirituality. The platform includes religious articles, prayer groups, live-streamed sermons, and an interactive forum where members can seek guidance and share testimonies.",
      iconSrc: oosh,
      category: "People",
      url: "http://ereligion.ng",
    },
    {
      title: "E-venue",
      description:
        "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
      iconSrc: eVenue,
      category: "People",
      url: "http://evenue.ng",
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
    <div className="container mx-auto mb-24">
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

      <div
        style={{
          background: "linear-gradient(to right, #082044, #8b2323, #bc0202)",
        }}
        className="flex flex-wrap justify-center mx-auto gap-2 mb-8  rounded-md  lg:p-5 lg:max-w-3xl Nlg:p-2">
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
      <div
        style={{
          background: "linear-gradient(to right, #287baf, #8a2be2, #53d2b5)",
        }}
        className="flex flex-wrap justify-center mx-auto gap-2 mb-8   rounded-md    lg:p-5 lg:max-w-3xl Nlg:p-2">
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

      <div className="px-5 lg:px-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-12">
        {filteredServices.map((service, index) => (
          <HeroCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default AllServiceCards;
