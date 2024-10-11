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
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CircularProgress } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { IoArrowBack } from "react-icons/io5";

const backendURL = import.meta.env.VITE_BACKEND_URL;

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CreateGroup() {
  const { groupId } = useParams(); // Fetch groupId if you're editing
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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

  // If editing a group, fetch its details
  useEffect(() => {
    const fetchGroup = async () => {
      if (groupId) {
        try {
          setLoading(true);
          const res = await fetch(`${backendURL}/api/getGroupById/${groupId}`);
          const group = await res.json();
          if (group) {
            setFormData({
              name: group.name || "",
              description: group.description || "",
              category: group.category || "",
            });
          }
        } catch (error) {
          console.error("Error fetching group:", error);
          showSnackbar("Failed to fetch group", "error");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchGroup();
  }, [groupId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleQuillChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      description: value,
    }));
  };

  const handleCategoryChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      category: event.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description || !formData.category) {
      showSnackbar("name, description, and category are required", "error");
      return;
    }

    setLoading(true);
    try {
      const groupFormData = {
        ...formData,
      };

      let response;
      if (groupId) {
        response = await fetch(`${backendURL}/api/updateGroup/${groupId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(groupFormData),
        });
      } else {
        response = await fetch(`${backendURL}/api/groups/createGroup`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(groupFormData),
        });
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to save group");
      }

      showSnackbar(
        groupId ? "Group updated successfully" : "Group created successfully",
        "success"
      );
      navigate("/groups");
    } catch (error) {
      showSnackbar(error.message || "Failed to save group", "error");
    } finally {
      setLoading(false);
    }
  };

  const showSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Link to={"/DashBoard/Admin/Events"}>
        <Button className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200">
          <IoArrowBack className="mr-2" size={24} />
          Back
        </Button>
      </Link>
      <Box className="p-3 max-w-3xl mx-auto min-h-screen">
        <h1 className="text-center text-3xl my-7 font-semibold">
          {groupId ? "Edit Group" : "Create a Group"}
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <TextField
            label="Group Name"
            required
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              value={formData.category}
              onChange={handleCategoryChange}
              label="Category"
              required
            >
              {categories.map((category, index) => (
                <MenuItem key={index} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <ReactQuill
            theme="snow"
            placeholder="Write group description..."
            className="h-72 mb-12"
            required
            value={formData.description}
            onChange={handleQuillChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} />
            ) : groupId ? (
              "Update Group"
            ) : (
              "Create Group"
            )}
          </Button>
        </form>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </LocalizationProvider>
  );
}
