import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../../context/Authcontext";

const Booking = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const { data: tour, loader, error } = useFetch(`${BASE_URL}/tours/${id}`);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userId: user?._id || "",
    userEmail: user?.email || "",
    fullname: "",
    number: "",
    guestSize: "",
    date: "",
    tourName: "",
  });

  useEffect(() => {
    if (tour) {
      setFormData((prev) => ({ ...prev, tourName: tour.name }));
    }
  }, [tour]);

  if (loader) {
    return <div className="min-h-screen flex items-center justify-center">⏳ Loading...</div>;
  }

  if (error || !tour) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        ❌ Tour Not Found!
      </div>
    );
  }

  const { name, price } = tour;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullname, number, guestSize, date } = formData;

    if (!fullname || !number || !guestSize || !date) {
      alert("⚠️ Please fill all the fields before confirming the booking.");
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/booking/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) {
        alert(result.message || "Something went wrong.");
        return;
      }

      alert("🎉 Booking Confirmed! We will contact you soon.");
      navigate("/tours");
    } catch (error) {
      alert("❌ " + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="max-w-md w-full p-8 bg-white shadow-xl rounded-lg border-2 border-blue-400">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-1">
          ✈️ Book Your Trip to <span className="text-blue-500">{name}</span>
        </h2>
        <p className="text-lg font-semibold text-center text-gray-700 mb-6">
          Price: <span className="text-blue-500 font-bold">{price}₹/P</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="userEmail"
            placeholder="Your Email"
            readOnly
            value={formData.userEmail}
            className="w-full px-4 py-3 rounded-lg bg-gray-100"
          />
          <input
            name="fullname"
            placeholder="Full Name"
            required
            value={formData.fullname}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-100"
          />
          <input
            name="number"
            placeholder="Phone Number"
            required
            type="tel"
            value={formData.number}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-100"
          />
          <input
            name="tourName"
            readOnly
            value={formData.tourName}
            className="w-full px-4 py-3 rounded-lg bg-gray-100"
          />
          <input
            name="guestSize"
            placeholder="Number of Guests"
            required
            type="number"
            min="1"
            value={formData.guestSize}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-100"
          />
          <input
            name="date"
            placeholder="Travel Date"
            required
            type="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-100"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold"
          >
            ✅ Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
