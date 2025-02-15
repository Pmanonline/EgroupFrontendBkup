import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Camera, Loader2, Trash2, UserCircle2, X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import backendURL from "../../config";
import { Alert, AlertDescription } from "../../components/tools/Alert";

const AdminProfile = () => {
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

export default AdminProfile;
