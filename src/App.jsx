import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/aboutUs";
import AllServiceCards from "./pages/allServiceCards";
import Ebusinesses from "./pages/E-businesses";
import Books from "./pages/Books";
import Group1 from "./pages/Groups/Group1";
import DiscussionPage from "./pages/Groups/Discussion";
import Conferences from "./pages/Conference";
import Contact from "./pages/Contactus";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RegisterAdmin from "../src/pages/RegisterAdmin";
import Signup from "../src/pages/RegisterUser";
import ForgotPassword from "../src/pages/ForgotPassword";
import PasswordReset from "./pages/PasswordReset";
import NotFound from "./pages/404page";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Blog from "./pages/Blog";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Layout from "./components/UsersDashboard/Layout";
import HomeDashBoard from "./pages/UsersDashBoardPages/DashBoardProfile";
import DashBoardActivities from "./pages/UsersDashBoardPages/DashBoardActivities";
import DashBoardNotifications from "./pages/UsersDashBoardPages/DashBoardNotifications";
import Post from "./pages/Post";
// Admin
import AdminLayout from "./components/Dashboard_Admin/AdminLayout";
import AdminDashboard from "./pages/AdminDashBoardPages/AdminDashboard";
import AdminProfile from "./pages/AdminDashBoardPages/AdminProfile";
import AdminUsersLists from "./pages/AdminDashBoardPages/AdminUsersLists";
import Authors from "./pages/AdminDashBoardPages/DashBoardActivities";
import Posts from "./pages/AdminDashBoardPages/Posts";
import CreatePosts from "./pages/AdminDashBoardPages/CreatePosts";
import CreateAuthor from "./pages/AdminDashBoardPages/CreateAuthor";
import AdminGroupDetails from "./pages/AdminDashBoardPages/AdminGroupDetails";
import CreateGroup from "./pages/AdminDashBoardPages/CreateGroup";
import Speakers from "./pages/AdminDashBoardPages/SpeakerList";
import CreateSpeaker from "./pages/AdminDashBoardPages/CreateSpeaker";
import SingleEventPost from "./pages/SingleEventPost";
import ScrollToTop from "./components/tools/scrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Routes with Navbar and Footer */}
        <Route
          element={
            <>
              <Navbar />
              <Outlet />
              <Footer />
            </>
          }>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/AllServiceCards" element={<AllServiceCards />} />
          <Route path="/Ebusinesses" element={<Ebusinesses />} />
          <Route path="/books" element={<Books />} />
          <Route path="/Group/:slug?" element={<Group1 />} />
          <Route path="/discussion/:slug?" element={<DiscussionPage />} />
          <Route path="/Post/:slug" element={<Post />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/event/:slug" element={<SingleEventPost />} />
          {/* <Route path="/webinars" element={<Webinar />} /> */}
          <Route path="/conferences" element={<Conferences />} />
          {/* <Route path="/solutions" element={<Solutions />} /> */}
          <Route path="/contactus" element={<Contact />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/RegisterAdmin" element={<RegisterAdmin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<PasswordReset />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Protected user routes without Footer */}
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/DashBoard/profile" element={<HomeDashBoard />} />
            <Route
              path="/DashBoard/Activities"
              element={<DashBoardActivities />}
            />
            <Route
              path="/DashBoard/Notifications"
              element={<DashBoardNotifications />}
            />
          </Route>
        </Route>

        {/* Protected Admin Dashboard routes without Footer */}
        <Route element={<ProtectedRoute requiredRole="admin" />}>
          <Route element={<AdminLayout />}>
            <Route
              path="/DashBoard/Admin_Dashboard"
              element={<AdminDashboard />}
            />
            <Route path="/DashBoard/AdminProfile" element={<AdminProfile />} />
            <Route path="/DashBoard/Admin/SpeakerList" element={<Speakers />} />
            <Route
              path="/DashBoard/Admin/CreateSpeaker/:speakerId?"
              element={<CreateSpeaker />}
            />
            <Route path="/DashBoard/Users" element={<AdminUsersLists />} />
            <Route path="/DashBoard/Admin/Authors" element={<Authors />} />
            <Route path="/DashBoard/Admin/Posts" element={<Posts />} />
            <Route
              path="/DashBoard/Admin/CreatePosts/:postId?"
              element={<CreatePosts />}
            />
            <Route
              path="/DashBoard/Admin/CreateAuthor/:authorId?"
              element={<CreateAuthor />}
            />
            <Route
              path="/DashBoard/Admin/Group"
              element={<AdminGroupDetails />}
            />
            <Route
              path="/DashBoard/Admin/CreateGroup/:eventId?"
              element={<CreateGroup />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
