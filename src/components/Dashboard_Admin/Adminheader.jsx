import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../features/auth/authSlice";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { fetchProfileById } from "../../features/Users/userAction";
import { HiOutlineLogout } from "react-icons/hi";
import { CiViewList } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { VscDashboard } from "react-icons/vsc";
import { FaUsersGear } from "react-icons/fa6";
import backendURL from "../../config";

function Adminheader() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const fileInputRef = useRef(null);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const userId = userInfo?._id;
  const { profile } = useSelector((state) => state.profiles);
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsNavOpen(false);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
    setIsNavOpen(false);
  };

  useEffect(() => {
    if (userId) {
      dispatch(fetchProfileById(userId));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navLinks = [
    { to: "/DashBoard/Admin_Dashboard", icon: VscDashboard, text: "Dashboard" },
    { to: "/DashBoard/AdminProfile", icon: IoPerson, text: "Profile" },
    { to: "/DashBoard/Users", icon: FaUsersGear, text: "Users" },
    { to: "/DashBoard/Admin/Posts", icon: CiViewList, text: "Blog_Posts" },
    { to: "/DashBoard/Admin/Events", icon: CiViewList, text: "Groups" },
  ];

  return (
    <>
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isNavOpen ? "opacity-70" : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 30 }}
      />

      {/* Mobile Menu */}
      <div
        ref={navRef}
        className={`fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[40%] h-screen bg-purple p-5 transform transition-transform ease-in duration-500 ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto`}
        style={{ zIndex: 40 }}>
        <div className="flex w-full items-center justify-between mb-6">
          <Link to={"/"} className=" cursor-pointer mb-2 ">
            <span className="text-4xl text-white mb-2">E-group</span>
          </Link>
          <div
            onClick={handleNav}
            className="rounded-full bg-white p-2 cursor-pointer hover:bg-gray-200 transition-colors duration-200">
            <IoClose className="text-xl text-purple" />
          </div>
        </div>
        <div className="text-white text-sm mb-8">Administrator</div>

        {/* Mobile menu items */}
        <div className="flex flex-col flex-1">
          <div className="flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`mb-3 flex gap-3 rounded-md p-2 transition-colors duration-200 ${
                  activeLink === link.to
                    ? "bg-white bg-opacity-40"
                    : "hover:bg-white hover:bg-opacity-20"
                }`}
                onClick={() => handleLinkClick(link.to)}>
                <link.icon className="text-white w-6 h-6" />
                <span className="text-[16px] my-auto text-white">
                  {link.text}
                </span>
              </Link>
            ))}
          </div>
          <hr className="border-t border-gray-200 my-4" />
          <div
            className="my-5 flex gap-3 rounded-md p-2 cursor-pointer bg-white hover:bg-gray-200 transition-colors duration-200"
            onClick={handleLogout}>
            <HiOutlineLogout className="text-red-500 w-6 h-6" />
            <span className="text-[16px] my-auto text-red-500">Sign out</span>
          </div>
        </div>
      </div>

      {/* Large Screen Header */}
      <div className="flex items-center justify-between px-4 border-b border-gray-200 shadow-lg py-3 relative z-0">
        <div onClick={handleNav}>
          <MdOutlineDashboard
            size={24}
            className="w-8 h-8 text-purple cursor-pointer hover:scale-125 transition-transform duration-200 hidden mid:block"
          />
        </div>

        <div className="flex items-center">
          <span className="mb-1 mr-2 font-medium first-letter:uppercase">
            {profile?.username || "Guest"}
          </span>
          <span className="mb-2">
            {profile?.image ? (
              <img
                src={`${backendURL}/uploads/${profile?.image}`}
                alt={`${userInfo.username}`}
                className="w-7 h-7 rounded-full object-cover mr-4"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/fallback-image.png";
                }}
              />
            ) : (
              <FaUserCircle className="w-7 h-7 text-gray-400 mr-4 " />
            )}
          </span>
        </div>
      </div>
    </>
  );
}

export default Adminheader;
