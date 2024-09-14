import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);
  const wishItems = useSelector((state) => state.wishdata);

  return (
    <>
      <div className="w-full py-5 px-5 flex flex-col md:flex-row justify-between items-center z-50 sticky top-0 bg-gray-500 border-b-4 border-black">
        <div className="flex items-center justify-between w-full md:w-auto">
          <NavLink to="#" className="text-white font-bold text-xl">
            LOGO
          </NavLink>

          {/* Mobile Menu Button */}
          <button className="text-white md:hidden flex items-center ml-auto">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex md:items-center md:space-x-8 ml-4 w-full">
          <NavLink to="/" className="page">
            Home
          </NavLink>
          <NavLink to="/aboutUs" className="page">
            About Us
          </NavLink>
          <NavLink to="/Contact" className="page">
            Contact Us
          </NavLink>
          <NavLink to="/product" className="page">
            Product
          </NavLink>
        </div>

        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <NavLink
            to="/signup"
            className="product py-2 px-2 text-white rounded-lg hover:bg-gray-600 hover:text-blue-500 transition duration-300 ease-in-out"
          >
            SignUp
          </NavLink>
          <NavLink
            to="/signin"
            className="product px-2 py-2 text-white rounded-lg hover:bg-gray-600 hover:text-blue-500 transition duration-300 ease-in-out"
          >
            SignIn
          </NavLink>

          <div className="relative">
            <NavLink to="/cart">
              <FaShoppingCart className="text-2xl text-gray-950 hover:text-[#ff0000]" />
              <span className="absolute top-0 right-5 transform translate-x-1/2 -translate-y-1/2 border-2 rounded-full px-1 text-[#fff] bg-[#ff0000] text-xs">
                {cartItems.length}
              </span>
            </NavLink>
          </div>
          <div className="relative">
            <NavLink to="/wishlist">
              <FaHeart className="text-2xl text-gray-950 hover:text-[#ff0000]" />
              <span className="absolute top-0 right-5 transform translate-x-1/2 -translate-y-1/2 border-2 rounded-full px-1 text-[#fff] bg-[#ff0000] text-xs">
                {wishItems.length}
              </span>
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
