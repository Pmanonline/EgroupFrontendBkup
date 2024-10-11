import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../features/auth/authActions";
import { resetSuccess } from "../features/auth/authSlice";
import Spinner from "../components/tools/Spinner";
import { Snackbar, Alert, CircularProgress } from "@mui/material";

const Signup = () => {
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  useEffect(() => {
    if (success) {
      setSnackbarMessage("Registered successfully. You can now log in.");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      setTimeout(() => {
        dispatch(resetSuccess());
        navigate("/login");
      }, 3000);
    }
    if (error) {
      setSnackbarMessage(error);
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, success, userInfo, error, dispatch]);

  const submitForm = (data) => {
    if (data.password !== data.confirmPassword) {
      setSnackbarMessage("Passwords do not match!");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    data.email = data.email.toLowerCase();
    dispatch(registerUser(data))
      .unwrap()
      .then(() => {})
      .catch((error) => {
        console.error("Registration error:", error);
      });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <>
      <div className="md:mt-32 mt-36 md:px-[5rem] p-16 border-2 mx-auto md:w-[35rem] mid:mx-[1rem] rounded-xl">
        <h2 className="mb-10 flex justify-center text-xl">Sign Up</h2>
        <form onSubmit={handleSubmit(submitForm)} className="">
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                {/* Icon SVG */}
              </span>
              <input
                type="text"
                id="username"
                className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Username"
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && <span>{errors.username.message}</span>}
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@gmail.com"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>

          <div className="mb-5">
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              {...register("confirmPassword", {
                required: "Please confirm your password",
              })}
            />
            {errors.confirmPassword && (
              <span>{errors.confirmPassword.message}</span>
            )}
          </div>

          <div className=" flex justify-end">
            <button
              type="submit"
              className="ml-4 px-4  bg-red-600 text-white p-1 rounded hover:bg-NavClr hover:text-white transition-colors duration-300"
            >
              {loading ? <Spinner /> : "SignUp"}
            </button>
          </div>
        </form>

        <div className="flex justify-end ms-20 gap-2 text-sm my-2">
          <span>Have an account?</span>
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </div>
      </div>

      {/* Snackbar for displaying messages */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Signup;
