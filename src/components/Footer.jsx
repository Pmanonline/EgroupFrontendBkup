import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const services = [
    { name: "Business Directories", path: "https://edirect.ng/" },
    { name: "Hotel Portal", path: "https://ebnbhotel.com/" },
    { name: "Job Offers", path: "https://ejobs.com.ng/" },
    { name: "Events & Venues", path: "https://evenue.ng" },
    { name: "Shop & Stores", path: "https://estores.ng" },
  ];

  const policies = [
    { name: "Terms and Conditions", path: "/privacypolicy" },
    { name: "FAQs", path: "/" },
    { name: "Contact Us", path: "/contactus" },
  ];

  const socialLinks = [
    { icon: Facebook, url: "https://www.facebook.com/yourcompany" },
    { icon: Instagram, url: "https://www.instagram.com/yourcompany" },
    { icon: Linkedin, url: "https://www.linkedin.com/company/yourcompany" },
    { icon: Twitter, url: "https://www.twitter.com/yourcompany" },
  ];

  return (
    <footer className="relative text-white py-8 px-4 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/src/assets/images/footerImage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#8B0000",
        }}
      />

      {/* Circular overlay */}
      <div
        className="absolute bottom-0 right-0 w-1/2 h-1/2 z-10"
        style={{
          background:
            "radial-gradient(circle at bottom right, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold mb-4">About</h2>
            <p className="mb-4">
              Innovating the digital transformation landscape in Africa and
              beyond. Focused on delivering cutting-edge solutions to meet
              today's tech demands.
            </p>
            <Link to="/aboutUs">
              <button className="bg-yellow-300 text-red-700 font-bold py-2 px-4 rounded transition-all duration-300 hover:bg-transparent hover:text-white hover:border-2 hover:border-yellow-300">
                Learn More
              </button>
            </Link>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Other Services</h2>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="hover:text-yellow-300 transition-colors duration-300">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
            <ul className="space-y-2">
              {policies.map((policy, index) => (
                <li key={index}>
                  <Link
                    to={policy.path}
                    className="hover:text-yellow-300 transition-colors duration-300">
                    {policy.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-bold mt-6 mb-4">Follow us</h2>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  to={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-300 transition-colors duration-300">
                  <social.icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
