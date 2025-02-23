import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import eDirectIcon from "../../assets/images/Edirect.png";
import eJobs from "../../assets/images/Ejobs.jpg";
import eDriveIcon from "../../assets/images/Edrive.jpg";
import eNews from "../../assets/images/Enews.jpg";
import eSchools from "../../assets/images/Eschools.jpg";
import eVenue from "../../assets/images/Evenue.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroCard = ({ title, description, iconSrc, url }) => {
  return (
    <Link to={url} target="_blank" className="no-underline block">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg group">
        <div className="relative h-48">
          <img
            src={iconSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <CardContent className="bg-pink-100 p-4 flex flex-col gap-2 group-hover:bg-pink-200 transition-colors duration-300">
          <h3 className="text-center font-bold text-lg text-gray-700 group-hover:text-red-500 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300 line-clamp-4 text-xs">
            {description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

const ServiceCards = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const services = [
    {
      title: "E-Venue",
      description:
        "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur",
      iconSrc: eVenue,

      url: "https://evenue.ng/",
    },
    {
      title: "E-Jobs",
      description:
        "E-Jobs is a comprehensive job portal that links job seekers with employers across various industries. Whether you're looking for full-time employment, remote work, or freelance gigs, E-Jobs provides thousands of job listings tailored to your skills and experience. Employers can post vacancies, review applications, and connect with top talents through the platform. Job seekers can upload their resumes, receive interview tips, and access career development resources to enhance their employability.",
      iconSrc: eJobs,
      url: " http://ejobs.com.ng/",
    },
    {
      title: "E-Drivers",
      description:
        "E-Drivers is a dedicated job-matching platform for professional drivers seeking employment opportunities. Whether you specialize in ride-hailing, logistics, corporate driving, or chauffeur services, E-Drivers connects you with companies and individuals in need of skilled drivers. Employers can post job openings, review applications, and find the right fit for their needs. The platform also provides resources such as driving tips, licensing updates, and professional training courses to enhance career growth in the transportation industry...",
      iconSrc: eDriveIcon,
      url: "http://edrive.ng",
    },
    {
      title: "E-News",
      description:
        "E-News is a cutting-edge digital news platform that delivers real-time updates on politics, business, entertainment, sports, and global events. Whether you’re looking for breaking news, in-depth analysis, or exclusive interviews, E-News ensures that you stay ahead with credible and well-researched journalism. Readers can customize their news feed, watch live broadcasts, and engage in discussions on trending topics",
      iconSrc: eNews,
      url: "http://essentialnews.ng",
    },
    {
      title: "E-Direct",
      description:
        "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
      iconSrc: eDirectIcon,
      url: "https://edirect.essential.ng/",
    },
    {
      title: "E-schools",
      description:
        "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
      iconSrc: eSchools,
      url: "https://eschools.ng/",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-12">
        {services.map((service, index) => (
          <HeroCard key={index} {...service} />
        ))}
      </div>
      <div className="flex justify-end mt-5">
        <Link to={"/AllServiceCards"}>
          <span className="text-red-600 underline font-semibold text-lg hover:text-NavClr  transition-transform duration-300 group-hover:scale-105  cursor-pointer">
            See All
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCards;
