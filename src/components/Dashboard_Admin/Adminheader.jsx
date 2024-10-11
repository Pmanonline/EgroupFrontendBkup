// import React, { useState, useRef, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { logoutUser } from "../../features/auth/authSlice";
// import { IoClose } from "react-icons/io5";
// import { Link, useNavigate } from "react-router-dom";
// import { MdOutlineDashboard } from "react-icons/md";
// import { FaUserCircle } from "react-icons/fa";
// import { fetchProfileById } from "../../features/Users/userAction";
// import { IoHomeOutline } from "react-icons/io5";
// import { HiOutlineLogout } from "react-icons/hi";
// import { CiViewList } from "react-icons/ci";
// import { IoPerson } from "react-icons/io5";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { VscDashboard } from "react-icons/vsc";
// import { FaUsersGear } from "react-icons/fa6";

// function Adminheader() {
//   const backendURL = import.meta.env.VITE_BACKEND_URL;
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const fileInputRef = useRef(null);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { userInfo } = useSelector((state) => state.auth);
//   const userId = userInfo?.user._id;
//   const { profile, loading, success, error } = useSelector(
//     (state) => state.profiles
//   );
//   const [activeLink, setActiveLink] = useState(null);

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//   };
//   const handleLogout = () => {
//     dispatch(logoutUser());
//     navigate("/");
//   };

//   useEffect(() => {
//     if (userId) {
//       dispatch(fetchProfileById(userId));
//     }
//   }, [dispatch, userId]);

//   const handleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   const handleClickUpload = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       // Handle the file upload
//       console.log(file);
//     }
//   };

//   return (
//     <>
//       {/* Background Overlay */}
//       <div
//         className={`fixed inset-0 bg-black transition-opacity duration-300 ${
//           isNavOpen ? "opacity-70" : "opacity-0"
//         } ${isNavOpen ? "pointer-events-auto" : "pointer-events-none"}`}
//         style={{ zIndex: 30 }}
//       />

//       {/* Mobile Menu */}
//       <div
//         className={`fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[40%] h-screen bg-purple p-5 transform transition-transform ease-in duration-500 ${
//           isNavOpen ? "translate-x-0" : "-translate-x-full"
//         } overflow-y-auto`}
//         style={{ zIndex: 40 }}
//       >
//         <div className="flex w-full items-center justify-between mb-6">
//           <div className="text-white text-2xl font-bold">E-group</div>
//           <div
//             onClick={handleNav}
//             className="rounded-full bg-white p-2 cursor-pointer"
//           >
//             <IoClose className="text-xl text-purple" />
//           </div>
//         </div>
//         <div className="text-white text-sm mb-8">Administrator</div>

//         {/* Mobile menu items */}
//         <div className="md:flex  lg:gap-0.5 lg:py-3  justify-between  h-20 px-2 2xl:px-16  flex-col flex-1 ">
//           <div className="flex flex-1 flex-col">
//             {/* Links */}
//             <div className="">
//               <Link
//                 to="/DashBoard/Admin_Dashboard"
//                 style={{
//                   color: "white",
//                   backgroundColor:
//                     activeLink === "/DashBoard/Admin_Dashboard"
//                       ? "#ffffff66 "
//                       : "",
//                 }}
//                 className="mb-3 flex gap-3 rounded-md p-2"
//                 onClick={() => handleLinkClick("/DashBoard/Admin_Dashboard")}
//               >
//                 <VscDashboard className="text-white w-6 h-6" />
//                 <span className="text-[16px] my-auto">Dashboard</span>
//               </Link>

//               <Link
//                 to="/DashBoard/AdminProfile"
//                 style={{
//                   color: "white",
//                   backgroundColor:
//                     activeLink === "/DashBoard/AdminProfile"
//                       ? "#ffffff66 "
//                       : "",
//                 }}
//                 className="mb-3 flex gap-3 rounded-md p-2"
//                 onClick={() => handleLinkClick("/DashBoard/AdminProfile")}
//               >
//                 <IoPerson className="text-white w-6 h-6" />
//                 <span className="text-[16px] my-auto">Profile</span>
//               </Link>
//               <Link
//                 to="/DashBoard/Users"
//                 style={{
//                   color: "white",
//                   backgroundColor:
//                     activeLink === "/DashBoard/Users" ? "#ffffff66 " : "",
//                 }}
//                 className="mb-3 flex gap-3 rounded-md p-2"
//                 onClick={() => handleLinkClick("/DashBoard/Users")}
//               >
//                 <FaUsersGear className="text-white w-6 h-6" />
//                 <span className="text-[16px] my-auto">Users</span>
//               </Link>

//               <Link
//                 to="/DashBoard/Admin/Posts"
//                 style={{
//                   color: "white",
//                   backgroundColor:
//                     activeLink === "/DashBoard/Admin/Posts" ? "#ffffff66 " : "",
//                 }}
//                 className="mb-3 flex gap-3 rounded-md p-2"
//                 onClick={() => handleLinkClick("/DashBoard/Admin/Posts")}
//               >
//                 <CiViewList className="text-white w-6 h-6" />
//                 <span className="text-[16px] my-auto">Blog_Posts</span>
//               </Link>
//               <Link
//                 to="/DashBoard/Admin/Events"
//                 style={{
//                   color: "white",
//                   backgroundColor:
//                     activeLink === "/DashBoard/Admin/Events"
//                       ? "#ffffff66 "
//                       : "",
//                 }}
//                 className="mb-3 flex gap-3 rounded-md p-2"
//                 onClick={() => handleLinkClick("/DashBoard/Admin/Events")}
//               >
//                 <CiViewList className="text-white w-6 h-6" />
//                 <span className="text-[16px] my-auto">Groups</span>
//               </Link>
//             </div>
//             {/* Links */}
//           </div>
//           <hr className="border-t border-gray-200 my-4" />
//           <div className="mt-auto">
//             <div
//               style={{
//                 color: "white",
//                 backgroundColor: "#ffffff ",
//               }}
//               className="my-5 flex gap-3 rounded-md p-2 cursor-pointer"
//               onClick={handleLogout}
//             >
//               <HiOutlineLogout className="text-red-500 w-6 h-6" />
//               <span className="text-[16px] my-auto text-red-500">Sign out</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Large Screen Header */}
//       <div className="flex items-center justify-between px-4 border-b border-gray-200 shadow-lg py-3">
//         <div onClick={handleNav}>
//           <MdOutlineDashboard
//             size={24}
//             className="w-8 h-8 text-purple cursor-pointer hover:scale-125 hidden mid:block"
//           />
//         </div>

//         <div className="flex items-center">
//           <span className="mb-1 mr-2 font-medium first-letter:uppercase">
//             {profile?.username || "Guest"}
//           </span>
//           <span className="mb-2">
//             {profile?.image ? (
//               <img
//                 src={`${backendURL}/uploads/${profile?.image}`}
//                 alt={`${userInfo.username}`}
//                 className="w-7 h-7 rounded-full object-cover mr-4"
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src = "/fallback-image.png";
//                 }}
//               />
//             ) : (
//               <FaUserCircle className="w-7 h-7 text-gray-400 mr-4 " />
//             )}
//           </span>
//         </div>
//       </div>

//       {/* Hidden File Input */}
//       <input
//         ref={fileInputRef}
//         type="file"
//         style={{ display: "none" }}
//         onChange={handleFileChange}
//       />
//     </>
//   );
// }

// export default Adminheader;

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

function Adminheader() {
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [isNavOpen, setIsNavOpen] = useState(false);
  const fileInputRef = useRef(null);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const userId = userInfo?.user._id;
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
        style={{ zIndex: 40 }}
      >
        <div className="flex w-full items-center justify-between mb-6">
          <Link to={"/"} className=" cursor-pointer mb-2 ">
            <span className="text-4xl text-white mb-2">E-group</span>
          </Link>
          <div
            onClick={handleNav}
            className="rounded-full bg-white p-2 cursor-pointer hover:bg-gray-200 transition-colors duration-200"
          >
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
                onClick={() => handleLinkClick(link.to)}
              >
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
            onClick={handleLogout}
          >
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
