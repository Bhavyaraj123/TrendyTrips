import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../../context/Authcontext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  useEffect(() => {
     ("User state updated:", user);
  }, [user]);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="flex justify-between items-center px-6 py-4 md:px-12">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-wide">
            Trendy<span className="text-yellow-500">Trips</span>
          </h2>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li><Link to="/" className="hover:text-yellow-500 text-xl">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-500 text-xl">About</Link></li>
          <li><Link to="/tours" className="hover:text-yellow-500 text-xl">Tours</Link></li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-2">
          {user ? (
            <>
              <h5 className="text-lg font-bold text-gray-800">{user.username}</h5>
              <button
                className="bg-red-500 text-white py-2 px-3 rounded-lg hover:bg-red-600"
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-emerald-500 text-white py-2 px-3 rounded-lg hover:bg-emerald-600">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-yellow-400 text-black py-2 px-3 rounded-lg hover:bg-yellow-500">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)}>
          <X size={32} />
        </button>

        <ul className="flex flex-col items-center space-y-6 text-lg font-medium text-gray-800">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/tours" onClick={() => setIsOpen(false)}>Tours</Link></li>
        </ul>

        {/* Mobile Auth Section */}
        <div className="flex flex-col mt-4 gap-2">
          {user ? (
            <>
              <h5 className="text-lg font-bold text-gray-800 text-center">{user.username}</h5>
              <button
                className="bg-red-500 text-white py-2 px-3 rounded-lg hover:bg-red-600"
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-emerald-500 text-white py-2 px-3 rounded-lg hover:bg-emerald-600">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-yellow-400 text-black py-2 px-3 rounded-lg hover:bg-yellow-500">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
