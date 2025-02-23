import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Home,
  Users,
  FileText,
  UserCircle,
  Settings,
  Bell,
  LogOut,
  ChevronRight,
  MenuSquare,
  Menu,
} from "lucide-react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiViewList } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../features/auth/authSlice";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    console.log("button fired");
    dispatch(logoutUser()); // Dispatch the logout action
    navigate("/"); // Redirect to home after logout
  };

  const menuItems = [
    {
      title: "Home",
      icon: Home,
      path: "/",
    },
    {
      title: "Profile",
      icon: UserCircle,
      path: "/DashBoard/profile",
    },
    {
      title: "Activity Log",
      icon: CiViewList,
      path: "/DashBoard/Activities",
    },

    {
      title: "Notifications",
      icon: IoMdNotificationsOutline,
      path: "/DashBoard/Notifications",
    },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-red-900 text-white md:hidden">
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:relative flex flex-col min-h-screen bg-red-900 text-white transition-all duration-300 z-50
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          ${collapsed ? "md:w-20" : "md:w-64"}
          md:translate-x-0 w-64`}>
        {/* Desktop Toggle Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-8 bg-indigo-600 rounded-full p-1.5 hover:bg-indigo-700 focus:outline-none hidden md:block">
          <ChevronRight
            className={`h-4 w-4 transition-transform duration-300 ${
              collapsed ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Logo Section */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-indigo-500/50">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
            <MenuSquare className="w-6 h-6" />
          </div>
          {(!collapsed || !isOpen) && (
            <div>
              <h1 className="text-xl font-bold">E-group</h1>
              <p className="text-xs text-indigo-200">Administrator</p>
            </div>
          )}
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "hover:bg-white/10 text-indigo-100"
                }`}>
                <Icon className="w-5 h-5" />
                {(!collapsed || !isOpen) && (
                  <div className="flex-1 flex items-center justify-between">
                    <span>{item.title}</span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs rounded-full bg-white/20">
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}
                {collapsed && item.badge && (
                  <span className="absolute right-2 px-1.5 py-0.5 text-xs rounded-full bg-white/20">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer Section */}
        <div className="p-4 border-t border-indigo-500/50">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2 text-red-200 rounded-lg hover:bg-white/10 transition-colors duration-200">
            <LogOut className="w-5 h-5" />
            {(!collapsed || !isOpen) && <span>Sign out</span>}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
