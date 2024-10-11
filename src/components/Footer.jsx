import React from "react";
import { useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import FooterBG from "../assets/images/footerImage.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Footer = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const { profile, loading, success, error } = useSelector(
    (state) => state.profiles
  );
  const userId = userInfo?.user?._id;
  const dashboardPath =
    userInfo?.user?.role === "admin"
      ? "/DashBoard/Admin_Dashboard"
      : "/DashBoard/profile";
  return (
    <footer className="relative text-white py-8 px-4 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/src/assets/images/footerImage.png')", // Replace with your actual image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#8B0000", // Fallback color
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus.
            </p>
            <button className="bg-yellow-300 text-red-700 font-bold py-2 px-4 hover:bg-transparent hover:text-white rounded hover:border-2 hover:border-yellow-300">
              Learn More
            </button>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Services</h2>
            <ul className="space-y-2">
              <li>Surveys</li>
              <li>Polls</li>
              <li>Job Interview</li>
              {userInfo && (
                <li>
                  <NavLink
                    to={dashboardPath}
                    className=" hover:text-red-200 md:dark:hover:bg-transparent "
                  >
                    My DashBoard
                  </NavLink>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
            <ul className="space-y-2">
              <li>Terms and conditions</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>

            <h2 className="text-xl font-bold mt-6 mb-4">Follow us</h2>
            <div className="flex space-x-4">
              {/* <Facebook className="w-6 h-6" /> */}
              <Link target="blank" to={"https://www.facebook.com"}>
                <Facebook className="w-6 h-6" />
              </Link>
              <Link target="blank" to={"https://www.facebook.com"}>
                <Instagram className="w-6 h-6" />
              </Link>
              <Link target="blank" to={"https://www.facebook.com"}>
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link target="blank" to={"https://www.facebook.com"}>
                <Twitter className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
