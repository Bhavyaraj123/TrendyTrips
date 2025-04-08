import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Authcontext.jsx";
import { BASE_URL } from "../utils/config";

const Login = () => {
  const { dispatch, loader } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        formData:'include',
        body: JSON.stringify(formData),
        
      });
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Failed to login");
      }



     
       (result.data)
      dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      alert("🎉 Login Successful! Welcome back.");
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message || "Unknown error" });
      alert(error.message || "Something went wrong, try again!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="max-w-md w-full p-8 bg-white shadow-xl rounded-lg border-2 border-blue-400">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-1">
          Sign In to Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            aria-label="Enter your email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg shadow-sm bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-400 transition"
            required
          />

          <input
            type="password"
            name="password"
            aria-label="Enter your password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg shadow-sm bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-400 transition"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-bold shadow-md transition"
            disabled={loader}
          >
            {loader ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Not registered?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;