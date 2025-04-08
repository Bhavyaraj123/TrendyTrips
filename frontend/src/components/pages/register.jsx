import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Authcontext.jsx";
import { BASE_URL } from "../utils/config";

const Register = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Display loader during registration process
      dispatch({ type: "LOGIN_START" });

      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        // Handle unsuccessful registration
        
        alert(result.message || "An error occurred during registration");
      }

      // Successful registration
      dispatch({ type: "REGISTER_SUCCESS",});
      alert("🎉 Registration successful! Redirecting to login...");
      navigate("/login");
    } catch (error) {
      // Handle fetch errors
      dispatch({ type: "REGISTER_FAILURE", payload: error.message || "An unexpected error occurred" });
      alert(error.message || "Something went wrong, please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="max-w-md w-full p-8 bg-white shadow-xl rounded-lg border-2 border-blue-400">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-1">
          Create an Account
        </h2>
        <p className="text-lg font-semibold text-center text-gray-700 mb-6">
          Join us and start your journey!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            aria-label="Enter your username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg shadow-sm bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />

          <input
            type="email"
            name="email"
            aria-label="Enter your email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg shadow-sm bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />

          <input
            type="password"
            name="password"
            aria-label="Enter your password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg shadow-sm bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-bold shadow-md transition"
          >
            🚀 Register
          </button>
        </form>

        <div className="mt-5 flex items-center justify-center">
          <span className="h-px w-full bg-gray-300"></span>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <span className="h-px w-full bg-gray-300"></span>
        </div>

        {/* Google Sign-up Button */}
        <button className="mt-4 w-full flex justify-center items-center gap-3 border border-gray-300 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition">
          <img
            src="/assets/google-icon.svg" // Replace with your local path for the Google SVG
            alt="Google"
            className="h-5 w-5"
          />
          Sign up with Google
        </button>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 font-medium hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;