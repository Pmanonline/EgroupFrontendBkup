import React from "react";
import { MapPin, Mail, Share2, Check } from "lucide-react";
import { Link } from "react-router-dom";

const BusinessCard = ({ business }) => (
  <div className="bg-white rounded-lg Nlg:shadow-md overflow-hidden mb-4 shadow-sm  ">
    <div className="text-xs bg-gray-200 px-2 py-1 rounded-t-lg inline-block">
      {business.since}
    </div>
    <div className="sm:flex">
      <div className="relative sm:w-1/3">
        <img
          src={business.image}
          alt={business.name}
          className="w-full h-48 sm:h-full object-cover"
        />
        <div className="absolute top-2 left-2 bg-gray-800 bg-opacity-70 text-white px-2 py-1 rounded text-xs">
          Business ID: {business.businessId}
        </div>
        <div className="absolute bottom-2 right-2 flex items-center bg-gray-800 bg-opacity-70 text-white px-2 py-1 rounded">
          <svg
            className="w-4 h-4 fill-current text-yellow-400 mr-1"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <span className="text-sm">{business.rating}</span>
        </div>
      </div>
      <div className="sm:w-2/3 p-4">
        <div className="mb-2">
          <h3 className="text-lg font-semibold">{business.name}</h3>
          <p className="text-sm text-gray-600">{business.services}</p>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <MapPin size={16} className="mr-1" />
          <span>{business.location}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <Mail size={16} className="mr-1" />
          <span>{business.email}</span>
        </div>
        <div className="flex justify-between items-center">
          <div
            className={`flex items-center text-sm ${
              business.verifiedPercentage >= 80
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            <Check size={16} className="mr-1" />
            <span>{business.verifiedPercentage}% Verified</span>
          </div>
          <div className="flex space-x-2">
            <button className="p-3 rounded-full ">
              <Share2 size={16} />
            </button>

            <Link target="blank" to={business.link}>
              <button className="px-3 py-1 bg-NavClr text-white rounded-full text-sm">
                View Business
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const BookDisplay = ({ book }) => (
  <div className="mb-4">
    <img
      src={book.image}
      alt={book.title}
      className="w-full h-auto rounded-lg shadow-md"
    />
  </div>
);

const TopNotchBusinesses = () => {
  const businesses = [
    {
      businessId: "BU1623871",
      name: "James Restaurant",
      services: "Agricultural Services, Birthcakes | Lawyer, Baby sitter",
      since: "Since 02-October-2023",
      rating: "5,907",
      location: "Ikeja, Lagos",
      email: "000.samrole202@gmail.com",
      verifiedPercentage: 43,
      image: "/src/assets/images/businessCard1.png",
      link: "https://edirect.essential.ng/company",
    },
    {
      businessId: "BU1623872",
      name: "Bekky Laundry",
      services: "A.C Gas Filling, A.C Repair Service,Accessories Repair,",
      since: "Since 02-October-2023",
      rating: "5,907",
      location: "Ikeja, Lagos",
      email: "000.samrole202@gmail.com",
      verifiedPercentage: 100,
      image: "/src/assets/images/businessCard1.png",
      link: "https://edirect.essential.ng/company",
    },
    {
      businessId: "BU1623873",
      name: "Charlie Support Cars",
      services: "A.C GAS FILLING, AC Repair Service, Accessories Repair,",
      since: "Since 02-October-2023",
      rating: "5,907",
      location: "Ikeja, Lagos",
      email: "000.samrole202@gmail.com",
      verifiedPercentage: 87,
      image: "/src/assets/images/businessCard1.png",
      link: "https://edirect.essential.ng/company",
    },
  ];

  const books = [
    {
      title: "Explore the World",
      image: "/src/assets/images/recommendbooks2.png",
    },
    {
      title: "Business Growth",
      image: "/src/assets/images/recommendbooks.png",
    },
    {
      title: "New World Order",
      image: "/src/assets/images/recommendbooks3.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-4">
        Top notch businesses in Nigeria
      </h2>
      <div className="flex flex-col lg:flex-row ">
        <div className="lg:w-[80%] lg:pr-16  ">
          {businesses.map((business, index) => (
            <BusinessCard key={index} business={business} />
          ))}

          <Link target="blank" to={"https://edirect.essential.ng/company"}>
            <button className=" text-start text-lg py-2 font-bold rounded-lg mt-4 underline">
              See more
            </button>
          </Link>
        </div>
        <div className="lg:w-[20%] mt-8 lg:mt-0 Nlg:hidden">
          <h3 className="text-xl font-bold mb-4">Featured Books</h3>
          {books.map((book, index) => (
            <BookDisplay key={index} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopNotchBusinesses;
