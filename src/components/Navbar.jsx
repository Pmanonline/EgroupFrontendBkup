import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import OurProductNav from "../assets/images/ourProductNav.png";
import { MdArrowForward } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/auth/authSlice";
import { fetchProfileById } from "../features/Users/userAction";
import { FaUserCircle } from "react-icons/fa";
import NavLogo from "../assets/images/navLogo.png";
import backendURL from "../config";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [oshinOpen, setOshinOpen] = useState(false);
  const sidebarRef = useRef(null);
  const productsDropdownRef = useRef(null);
  const oshinDropdownRef = useRef(null);
  const navigate = useNavigate();
  const userDropdownRef = useRef(null);
  const menuRef = useRef(null);
  const [userOpen, setUserOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const isSmallScreen = window.innerWidth < 640;

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleProducts = () => setProductsOpen(!productsOpen);
  const toggleOshin = () => setOshinOpen(!oshinOpen);

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      !event.target.closest("button") &&
      !event.target.closest(".dropdown-content")
    ) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavClick = (to) => {
    navigate(to);
    setIsSidebarOpen(false);
    setOshinOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLinkClick = () => {
    if (isMenuOpen) setIsMenuOpen(false);
    setUserOpen(false);
  };
  const toggleUserFile = () => setUserOpen(!userOpen);

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(userInfo);

  useEffect(() => {
    setIsLoggedIn(!!userInfo);
  }, [userInfo]);

  const { profile, loading, success, error } = useSelector(
    (state) => state.profiles
  );
  const userId = userInfo?._id;
  const dashboardPath =
    userInfo?.role === "admin"
      ? "/DashBoard/Admin_Dashboard"
      : "/DashBoard/profile";

  // Fetch profile on component mount
  useEffect(() => {
    if (userId) {
      dispatch(fetchProfileById(userId));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    // Check if user is logged in (e.g., by checking for a token in localStorage)
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    try {
      dispatch(logoutUser());
      setSnackbarMessage("Logged out successfully!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      window.location.reload();
      navigate("/");
    } catch (error) {
      setSnackbarMessage("Logout failed!");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      console.error("Logout error:", error);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const NavItem = ({ to, children, dropdown, toggle, isOpen, dropdownRef }) => (
    <div
      className={`relative group ${dropdown ? "" : "cursor-pointer"}`}
      ref={dropdownRef}
    >
      {to ? (
        <NavLink
          to={to}
          className={`block px-3 py-2 text-sm font-medium ${
            isSmallScreen ? "py-4" : ""
          } nav-link`}
          activeClassName="text-[#E10A0A]"
          style={{
            color: "gray",
            textDecoration: "none",
          }}
          onClick={() => handleNavClick(to)}
        >
          {children}
        </NavLink>
      ) : (
        <button
          onClick={toggle}
          className={`w-full text-left text-gray-700 px-3 py-2 text-sm font-medium flex items-center justify-between ${
            isSmallScreen ? "py-4" : ""
          }`}
        >
          {children}
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
      {dropdown && dropdown !== "products" && (
        <div
          className={`absolute z-50 left-0 mt-2 w-48 rounded-md shadow-lg bg-black text-white transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } ${isSidebarOpen ? "right-0 left-auto" : ""}`}
        >
          <div className="py-1">
            {dropdown.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 hover:text-[#E10A0A]"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                onClick={() => handleNavClick(item.to)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <nav className="bg-white shadow relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center ">
            <Link
              to="/"
              className="nav-link text-xl font-bold text-gray-800 cursor-pointer  "
            >
              {/* Menu */}
              <img src={NavLogo} alt="" className="w-[12rem] z-50" />
            </Link>
          </div>
          <div className="hidden lg:flex sm:items-center sm:justify-center navLogo:justify-end navLogo:mr-12  absolute left-0 right-0 top-0 bottom-0 z-30">
            <div className=" flex justify-between">
              <div className="flex space-x-4">
                <NavItem to="/">
                  <span className="text-black hover:text-[#E10A0A]">HOME</span>
                </NavItem>
                <NavItem to="/aboutUs">
                  <span className="text-black hover:text-[#E10A0A]">
                    ABOUT US
                  </span>
                </NavItem>
                <NavItem
                  dropdown="products"
                  toggle={toggleProducts}
                  isOpen={productsOpen}
                  dropdownRef={productsDropdownRef}
                >
                  <span className="text-black hover:text-[#E10A0A]">
                    OUR PRODUCTS
                  </span>
                </NavItem>
                <NavItem target="_blank" to="https://edirect.ng/">
                  <span className="text-black hover:text-[#E10A0A]">
                    ESSENTIAL DIRECT
                  </span>
                </NavItem>
                <NavItem
                  dropdown={[
                    { to: "/Segn-oshin-online", label: "Segun Oshin Online" },
                    { to: "/Oshin-invetsments", label: "Oshin Investments" },
                    { to: "/Books", label: "Books" },
                    { to: "/Blog", label: "Blog" },
                  ]}
                  toggle={toggleOshin}
                  isOpen={oshinOpen}
                  dropdownRef={oshinDropdownRef}
                  onClick={handleClickOutside}
                >
                  <span className="text-black hover:text-[#E10A0A]">
                    OSHIN FAMILY
                  </span>
                </NavItem>
              </div>
              {/* userInfoButton */}
              <div className="hidden sm:flex sm:items-center">
                {userInfo ? (
                  <button
                    onClick={handleLogout}
                    className="ml-4 px-4  bg-red-200 text-black rounded hover:bg-NavClr hover:text-white transition-colors duration-300"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="ml-4 px-4  bg-red-200 text-black rounded hover:bg-NavClr hover:text-white transition-colors duration-300"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleSidebar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Updated Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b">
          <span className="text-lg font-semibold">Menu</span>
          <button
            onClick={toggleSidebar}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="py-4 space-y-2">
          <NavItem to="/aboutUs" onClick={() => handleNavClick("/")}>
            <span className="text-gray-700 hover:text-NavClr">HOME</span>
          </NavItem>
          <NavItem to="/aboutUs" onClick={() => handleNavClick("/about")}>
            <span className="text-gray-700 hover:text-NavClr">ABOUT US</span>
          </NavItem>
          <NavItem
            dropdown="products"
            toggle={toggleProducts}
            isOpen={productsOpen}
            dropdownRef={productsDropdownRef}
          >
            <span className="text-gray-700 hover:text-NavClr">
              OUR PRODUCTS
            </span>
          </NavItem>
          <NavItem
            to="/Ebusinesses"
            onClick={() => handleNavClick("/essential-direct")}
          >
            <span className="text-gray-700 hover:text-NavClr">
              ESSENTIAL DIRECT
            </span>
          </NavItem>
          <NavItem
            dropdown={[
              { to: "/Segn-oshin-online", label: "Segun Oshin Online" },
              { to: "/Oshin-invetsments", label: "Oshin Investments" },
              { to: "/Books", label: "Books" },
              { to: "/Blog", label: "Blog" },
            ]}
            toggle={toggleOshin}
            isOpen={oshinOpen}
            dropdownRef={oshinDropdownRef}
          >
            <span className="text-gray-700 hover:text-NavClr">
              OSHIN FAMILY
            </span>
          </NavItem>
        </div>
      </div>

      {/* Updated ProductsDropdown */}
      <ProductsDropdown
        isOpen={productsOpen}
        onClose={() => setProductsOpen(false)}
        isSidebarOpen={isSidebarOpen}
      />
    </nav>
  );
};

const NavItem = ({
  to,
  children,
  dropdown,
  toggle,
  isOpen,
  dropdownRef,
  onClick,
}) => (
  <div className="relative group" ref={dropdownRef}>
    {to ? (
      <NavLink
        to={to}
        className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-[#E10A0A] transition-colors duration-200"
        activeClassName="text-[#E10A0A] bg-gray-100"
        onClick={onClick}
      >
        {children}
      </NavLink>
    ) : (
      <button
        onClick={toggle}
        className="w-full text-left text-gray-700 px-4 py-2 text-sm font-medium flex items-center justify-between hover:bg-gray-100 hover:text-[#E10A0A] transition-colors duration-200"
      >
        {children}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    )}
    {dropdown && dropdown !== "products" && (
      <div
        className={`mt-2 w-full rounded-md shadow-lg bg-white transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="py-1">
          {dropdown.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#E10A0A] transition-colors duration-200"
              onClick={() => onClick(item.to)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    )}
  </div>
);

const ProductsDropdown = ({ isOpen, onClose, isSidebarOpen }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div
        ref={dropdownRef}
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ${isSidebarOpen ? "lg:hidden" : ""} overflow-y-auto z-50`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">OUR PRODUCTS</h2>
          <div className="relative h-40 rounded-3xl overflow-hidden mb-4">
            <img
              src={OurProductNav}
              alt="Products showcase"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <p className="text-white text-center text-sm">
                Our solution to bring ease in all endeavors. Pioneering cutting
                edge Technology across Africa
              </p>
            </div>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border rounded-full mb-4"
          />
          <div className="grid grid-cols-1 gap-4">
            {[
              { name: "E-Direct", url: "http://edirect.ng" },
              { name: "E-Schools", url: "http://eschoolconnect.ng" },
              { name: "E-BNB", url: "http://ebnbhotel.com" },
              { name: "E-Stores", url: "http://estores.ng" },
            ].map((product) => (
              <Link
                target="_blank"
                key={product.name}
                to={product.url}
                className="py-2 border border-red-500 text-black font-medium rounded-lg text-center hover:bg-red-500 hover:text-white transition-colors duration-300"
                onClick={onClose}
              >
                {product.name}
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <NavLink
              to="/AllServiceCards"
              onClick={onClose}
              className="text-black font-medium hover:text-red-500 transition-colors duration-300 transform hover:scale-110 inline-flex items-center"
            >
              View All <MdArrowForward className="ml-2" size={24} />
            </NavLink>
          </div>
        </div>
      </div>
      {/* largeScreenView */}
      <div
        ref={dropdownRef}
        className="absolute top-full left-0 w-full bg-white shadow-md z-50 Nlg:hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="md:w-[30%] mb-6 md:mb-0">
              <h2 className="text-xl font-bold mb-4">OUR PRODUCTS</h2>
              <div className="relative h-40 rounded-3xl overflow-hidden">
                <img
                  src={OurProductNav}
                  alt="Products showcase"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <p className="text-white text-center text-sm">
                    Our solution to bring ease in all endeavors. Pioneering
                    cutting edge Technology across Africa
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-[60%] md:pl-8">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-4 py-2 border rounded-full"
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                {[
                  { name: "E-Direct", url: "http://edirect.ng" },
                  { name: "E-Schools", url: "http://eschoolconnect.ng" },
                  { name: "E-BNB", url: "http://ebnbhotel.com" },
                  { name: "E-Stores", url: "http://estores.ng" },
                ].map((product) => (
                  <Link
                    target="_blank"
                    key={product.name}
                    to={product.url}
                    className="py-4 border border-red-500 text-black font-medium rounded-lg text-center hover:bg-red-500 hover:text-white transition-colors duration-300"
                    onClick={onClose}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="md:w-[10%] md:pl-8  mt-24 00 text-black font-medium rounded-lg text-center hover:text-red-500   transition-colors duration-300 transitio ease-in-out  transform hover:scale-110 cursor-pointer">
              <NavLink to={"/AllServiceCards"} onClick={onClose}>
                <span className="flex">
                  View All
                  <MdArrowForward size={48} />
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* largeScreenView */}
    </>
  );
};

export default Navbar;
