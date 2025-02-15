// import React, { useState, useEffect, useRef } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   fetchProfileById,
//   updateProfile,
//   deleteAccount,
// } from "../../features/Users/userAction";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import { BsPersonBoundingBox } from "react-icons/bs";
// import { MdOutlineAddAPhoto } from "react-icons/md";
// import { IoClose } from "react-icons/io5";
// import { AiTwotoneDelete } from "react-icons/ai";
// import Spinner from "../../components/tools/Spinner";
// import { resetSuccess } from "../../features/Users/UserSlice";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import backendURL from "../../config";

// function DashBoardProfile() {
//   const fileInputRef = useRef(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [Deleteopen, setDeleteOpen] = React.useState(false);
//   const { userInfo } = useSelector((state) => state.auth);
//   const { profile, loading, success, error } = useSelector(
//     (state) => state.profiles
//   );
//   const userId = userInfo?.user?._id;
//   console.log(userInfo);
//   const dispatch = useDispatch();

//   const DeleteOpen = () => {
//     setDeleteOpen(true);
//   };
//   const DeleteClose = () => {
//     setDeleteOpen(false);
//   };

//   // Fetch profile on component mount
//   useEffect(() => {
//     if (userId) {
//       dispatch(fetchProfileById(userId));
//     }
//   }, [dispatch, userId]);

//   useEffect(() => {
//     if (profile) {
//       setFormData({
//         username: profile.username || "",
//         email: profile.email || "",
//         password: "", // Do not prefill password
//       });

//       if (profile.image) {
//         setImagePreview(`${backendURL}/uploads/${profile.image}`);
//       }
//     }
//   }, [profile, backendURL]);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedFile(file);
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const updateData = new FormData();
//     updateData.append("username", formData.username);
//     updateData.append("email", formData.email);
//     updateData.append("password", formData.password);
//     if (selectedFile) {
//       updateData.append("image", selectedFile);
//     }
//     if (userId) {
//       dispatch(updateProfile({ userId, formData: updateData }));
//       toast.success("Profile updated successfully!");
//       dispatch(resetSuccess());
//     } else {
//       console.error("User ID is undefined");
//     }

//     // Log FormData entries
//     for (let [key, value] of updateData.entries()) {
//       console.log(`${key}:`, value);
//     }
//   };

//   const handleDelete = () => {
//     if (userId) {
//       dispatch(deleteAccount(userId))
//         .then(() => {
//           toast.success("Account deleted successfully!");
//         })
//         .catch(() => {
//           toast.error("Failed to delete account.");
//         });
//     } else {
//       console.error("User ID is undefined");
//     }
//     setIsModalOpen(false); // Close the modal
//   };

//   return (
//     <div>
//       {/* Image */}
//       <div>
//         <div className="col-span-full mx-auto text-center items-center align-middle">
//           <label
//             htmlFor="cover-photo"
//             className="block text-xl font-bold leading-6 text-gray-900"
//           >
//             My profile
//           </label>
//           <div className="mt-1 flex justify-center rounded-lg px-6 pt-10">
//             <div className="relative text-center">
//               {imagePreview ? (
//                 <>
//                   <img
//                     src={imagePreview}
//                     alt="Image preview"
//                     className="h-[15rem] w-[15rem] rounded-full object-cover border-4 border-white"
//                   />
//                   <label
//                     htmlFor="file-upload"
//                     className="absolute bottom-0 right-4 cursor-pointer h-12 w-12 bg-white rounded-full flex justify-center items-center border-2 border-white"
//                   >
//                     <MdOutlineAddAPhoto
//                       aria-hidden="true"
//                       className="h-8 w-8 text-gray-500"
//                     />
//                     <input
//                       id="file-upload"
//                       name="image"
//                       type="file"
//                       className="sr-only"
//                       onChange={handleFileChange}
//                       ref={fileInputRef}
//                     />
//                   </label>
//                 </>
//               ) : (
//                 <label
//                   htmlFor="file-upload"
//                   className="cursor-pointer h-40 w-40 flex flex-col justify-center items-center border-2 border-dashed border-gray-300 rounded-full"
//                 >
//                   <BsPersonBoundingBox
//                     aria-hidden="true"
//                     className="h-12 w-12 text-gray-300"
//                   />
//                   <div className="mt-4 flex text-sm leading-6 text-gray-600">
//                     <input
//                       id="file-upload"
//                       name="image"
//                       type="file"
//                       className="sr-only"
//                       onChange={handleFileChange}
//                       ref={fileInputRef}
//                     />
//                   </div>
//                 </label>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Form */}
//       <div className="md:px-[5rem] p-16 mx-auto md:w-[35rem] mid:mx-[1rem] rounded-xl">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-5">
//             <label
//               htmlFor="username"
//               className="block mb-2 text-sm font-medium text-gray-900"
//             >
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={formData.username}
//               onChange={handleInputChange}
//               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
//               required
//             />
//           </div>
//           <div className="mb-5">
//             <label
//               htmlFor="email"
//               className="block mb-2 text-sm font-medium text-gray-900"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
//               required
//             />
//           </div>
//           <div className="mb-5">
//             <label
//               htmlFor="password"
//               className="block mb-2 text-sm font-medium text-gray-900"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
//               placeholder="********"
//             />
//           </div>

//           <div className=" flex justify-end">
//             <button
//               type="submit"
//               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[30%]   py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
//             >
//               {loading ? <Spinner /> : "Submit"}
//             </button>
//           </div>
//         </form>
//       </div>
//       {/* DELETING MODAL STARTS HERE */}
//       <Button>
//         <React.Fragment>
//           <button
//             onClick={DeleteOpen}
//             href="#"
//             className="px-2  first-letter:uppercase  pt-[10rem] text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white transition ease-in-out duration-200 transform hover:scale-110 hover:text-red-600 underline"
//           >
//             Delete Account
//           </button>
//           {/* </Button> */}
//           <Dialog
//             open={Deleteopen}
//             onClose={DeleteClose}
//             aria-labelledby="alert-dialog-title"
//             aria-describedby="alert-dialog-description"
//           >
//             <DialogTitle id="alert-dialog-title">
//               Are you sure you want to delete your account?
//             </DialogTitle>
//             <DialogContent>
//               <DialogContentText id="alert-dialog-description">
//                 Confirm delete or cancel
//               </DialogContentText>
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={DeleteClose}>
//                 <IoClose
//                   size={24}
//                   className="text-red-500  border-red-500 rounded-sm transition ease-in-out duration-200 transform hover:scale-125 hover:text-red-600"
//                 />
//               </Button>
//               <Button onClick={handleDelete}>
//                 <AiTwotoneDelete
//                   size={24}
//                   className="text-red-500  border-red-500 rounded-sm transition ease-in-out duration-200 transform hover:scale-125 hover:text-red-600"
//                 />
//               </Button>
//             </DialogActions>
//           </Dialog>
//         </React.Fragment>
//       </Button>
//       {/* DELETING MODAL Ends HERE */}
//     </div>
//   );
// }

// export default DashBoardProfile;

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Camera, Loader2, Trash2, UserCircle2, X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import backendURL from "../../config";
import { Alert, AlertDescription } from "../../components/tools/Alert";

const DashBoardProfile = () => {
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertConfig, setAlertConfig] = useState({
    variant: "default",
    message: "",
  });

  const showAlertMessage = (message, variant = "default") => {
    setAlertConfig({ message, variant });
    setShowAlert(true);
  };

  const { userInfo } = useSelector((state) => state.auth);
  const userId = userInfo?._id;
  console.log(userId);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (!userId) return;

        const response = await axios.get(
          `${backendURL}/api/getUsers/${userId}`
        );
        const profileData = response.data;

        setProfile(profileData);
        setFormData({
          username: profileData.username || "",
          email: profileData.email || "",
          password: "",
        });

        if (profileData.image) {
          setImagePreview(`${backendURL}/uploads/${profileData.image}`);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        showAlertMessage("Failed to fetch profile.", "destructive");
      }
    };

    fetchProfile();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userId = JSON.parse(localStorage.getItem("userInfo"))?._id;
      if (!userId) throw new Error("User ID not found");

      const updateData = new FormData();
      updateData.append("username", formData.username);
      updateData.append("email", formData.email);
      if (formData.password) {
        updateData.append("password", formData.password);
      }
      if (selectedFile) {
        updateData.append("image", selectedFile);
      }

      await axios.put(
        `${backendURL}/api/Users/updateUser/${userId}`,
        updateData
      );
      showAlertMessage("Profile updated successfully!", "success");
    } catch (error) {
      showAlertMessage(" Failed to update profile", "destructive");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      const userId = JSON.parse(localStorage.getItem("userInfo"))?._id;
      if (!userId) throw new Error("User ID not found");

      await axios.delete(`${backendURL}/api/users/delete/${userId}`);
      toast.success("Account deleted successfully!");
      setShowDeleteDialog(false);
      // Handle logout/redirect here
    } catch (error) {
      toast.error("Failed to delete account");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            My Profile
          </h2>
        </div>

        <div className="p-6">
          {/* Profile Image Section */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {imagePreview ? (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Profile"
                    className="h-32 w-32 rounded-full object-cover ring-4 ring-white shadow-lg"
                  />
                  <label
                    htmlFor="file-upload"
                    className="absolute bottom-0 right-0 h-8 w-8 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg ring-2 ring-white hover:bg-gray-50 transition-colors">
                    <Camera className="h-5 w-5 text-gray-600" />
                    <input
                      id="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={handleFileChange}
                      ref={fileInputRef}
                      accept="image/*"
                    />
                  </label>
                </div>
              ) : (
                <label htmlFor="file-upload" className="cursor-pointer group">
                  <div className="h-32 w-32 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    <UserCircle2 className="h-20 w-20 text-gray-400" />
                  </div>
                  <input
                    id="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    accept="image/*"
                  />
                </label>
              )}
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm outline-none"
                placeholder="Leave blank to keep current password"
              />
            </div>

            <div className="flex justify-between items-center pt-4">
              <button
                type="button"
                onClick={() => setShowDeleteDialog(true)}
                className="text-red-600 hover:text-red-700 text-sm font-medium">
                Delete Account
              </button>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Updating...
                  </>
                ) : (
                  "Update Profile"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Custom Delete Dialog */}
      {showDeleteDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Are you absolutely sure?
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </p>
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={() => setShowDeleteDialog(false)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <X className="mr-2 h-4 w-4" />
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Alert Component */}
      {showAlert && (
        <Alert
          variant={alertConfig.variant}
          show={showAlert}
          onClose={() => setShowAlert(false)}
          autoClose={true}
          autoCloseTime={5000}>
          <AlertDescription>{alertConfig.message}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default DashBoardProfile;
