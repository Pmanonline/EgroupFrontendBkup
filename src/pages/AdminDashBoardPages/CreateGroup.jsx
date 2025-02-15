import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  Button,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
  Snackbar,
  Alert as MuiAlert,
} from "@mui/material";
import { useSelector } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { IoArrowBack } from "react-icons/io5";
import axios from "axios";
import backendURL from "../../config";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CreateGroup() {
  const navigate = useNavigate();
  const { groupId } = useParams();
  const { userInfo } = useSelector((state) => state.auth);
  const userId = userInfo?._id;
  const email = userInfo?.email;
  const username = userInfo?.username;

  // State Management
  const [formData, setFormData] = useState({
    Groupname: "",
    description: "",
    category: "",
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const categories = [
    "Technology",
    "Health",
    "Education",
    "Entertainment",
    "Business",
  ];

  // Fetch existing group data if editing
  useEffect(() => {
    const fetchGroup = async () => {
      if (groupId) {
        try {
          setLoading(true);
          const response = await axios.get(
            `${backendURL}/api/groups/getGroupBySlug/${groupId}`
          );
          const group = response.data;
          setFormData({
            Groupname: group.Groupname || "",
            description: group.description || "",
            category: group.category || "",
          });
        } catch (error) {
          showSnackbar(
            error.response?.data?.message || "Failed to fetch group",
            "error"
          );
        } finally {
          setLoading(false);
        }
      }
    };

    fetchGroup();
  }, [groupId]);

  // Form Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuillChange = (value) => {
    setFormData((prev) => ({ ...prev, description: value }));
  };
  // Add to your form validation
  const validateForm = () => {
    const errors = {};

    if (!formData.Groupname.trim()) {
      errors.Groupname = "Group name is required";
    } else if (formData.Groupname.length < 2) {
      errors.Groupname = "Group name must be at least 2 characters";
    }

    if (!formData.description.trim()) {
      errors.description = "Description is required";
    }

    if (!formData.category) {
      errors.category = "Category is required";
    }

    return errors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      showSnackbar("Please fix the form errors", "error");
      return;
    }

    if (!userInfo) {
      showSnackbar("You must be logged in to create a group", "error");
      return;
    }

    setLoading(true);

    try {
      const groupData = {
        Groupname: formData.Groupname.trim(),
        description: formData.description.trim(),
        category: formData.category,
        id: userId,
        email: email,
        name: username,
      };

      const response = groupId
        ? await axios.put(
            `${backendURL}/api/groups/updateGroup/${groupId}`,
            groupData
          )
        : await axios.post(`${backendURL}/api/groups/createGroup`, groupData);

      showSnackbar(
        groupId ? "Group updated successfully" : "Group created successfully",
        "success"
      );

      // Navigate using the slug from the response
      navigate(`/DashBoard/Admin/Group`);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to save group";
      showSnackbar(errorMessage, "error");
    } finally {
      setLoading(false);
    }
  };

  // Snackbar Handlers
  const showSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box className="p-6">
        <Link to="/DashBoard/Admin/Events">
          <Button
            startIcon={<IoArrowBack />}
            className="mb-6 text-blue-500 hover:text-blue-700">
            Back
          </Button>
        </Link>

        <Box className="max-w-3xl mx-auto">
          <h1 className="text-center text-3xl my-7 font-semibold">
            {groupId ? "Edit Group" : "Create a Group"}
          </h1>

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <TextField
              label="Group Name"
              required
              id="Groupname"
              name="Groupname"
              value={formData.Groupname}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
            />

            <FormControl fullWidth required>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                label="Category">
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Box className="mb-12">
              <ReactQuill
                theme="snow"
                placeholder="Write group description..."
                className="h-72"
                value={formData.description}
                onChange={handleQuillChange}
              />
            </Box>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={loading}
              className="mt-4">
              {loading ? (
                <CircularProgress size={24} />
              ) : groupId ? (
                "Update Group"
              ) : (
                "Create Group"
              )}
            </Button>
          </form>
        </Box>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: "100%" }}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </LocalizationProvider>
  );
}
