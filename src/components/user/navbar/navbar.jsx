import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaSearch, FaBars, FaUser, FaShoppingCart, FaGift
} from "react-icons/fa";
import SearchBar from "./SearchBar";

const ProfessionalNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [cartItemCount, setCartItemCount] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const isActive = (path) => location.pathname === path;
  const searchRef = useRef();

  useEffect(() => {
    const fetchCartItems = async () => {
      var total = 0;
      const userId = sessionStorage.getItem("userId");
      if (!userId) return;
      const cartResponse = await fetch(
        `https://ecommercebackend-8gx8.onrender.com/cart/${userId}`
      );
      const cartData = await cartResponse.json();
      cartData.cart?.forEach((item) => {
        total = total + item.productQty;
      });
      setCartItemCount(total);
    };
    fetchCartItems();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
      }
    };

    const fetchUserName = async () => {
      const userId = sessionStorage.getItem("userId");
      if (userId) {
        try {
          const response = await fetch(
            `https://ecommercebackend-8gx8.onrender.com/auth/user/${userId}`
          );
          const data = await response.json();
          setUserName(data.name);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    fetchUserName();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("userId");
    window.location.reload();
  };

  const userId = sessionStorage.getItem("userId");

  return (
    <nav
      className={`top-0 left-0 w-full z-50 transition-all duration-300 mb-auto ${
        scrolled ? "bg-violet-700 shadow-md" : "bg-violet-600"
      }`}
    >
      {/* Main Navigation */}
      <div className="bg-violet-600 border-b">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
          <div className="h-[70px] flex items-center justify-between">
            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white hover:text-pink-600 transition"
            >
              <FaBars className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link
              to="/HomePage"
              className="text-2xl flex items-center hover:opacity-80 transition text-white"
            >
              <span className="font-['Bodoni_MT'] font-bold text-2xl">
                SaiFashionZone by Raiba
              </span>
            </Link>

            {/* Desktop Navigation Menu */}
            <div className="hidden lg:flex space-x-8 text-sm font-medium">
              {[ 
                { path: "/HomePage", name: "HOME" },
                { path: "/shop", name: "SHOP" },
                { path: "/contact", name: "CONTACT" },
                { path: "/about", name: "ABOUT" },
              ].map(({ path, name }) => (
                <Link
                  key={path}
                  to={path}
                  className={`
                    relative group transition-colors text-white
                    hover:text-pink-600
                  `}
                >
                  {name}
                  <span
                    className={`
                      absolute bottom-[-4px] left-0 w-0 h-0.5 bg-pink-600 
                      transition-all duration-300 group-hover:w-full
                    `}
                  />
                </Link>
              ))}
            </div>

            {/* Action Icons */}
            <div className="flex items-center space-x-6">
              <button className="text-white hover:text-pink-600 transition">
                {isSearchOpen ? (
                  <div ref={searchRef}>
                    <SearchBar />
                  </div>
                ) : (
                  <FaSearch onClick={toggleSearch} />
                )}
              </button>

              <Link
                to="/cart"
                className="relative text-white hover:text-pink-600 transition flex items-center"
              >
                <FaShoppingCart />
                {cartItemCount ? (
                  <span className="absolute top-[-8px] right-[-8px] bg-pink-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                ) : null}
              </Link>

              <div className="relative">
                <button
                  onClick={toggleProfileMenu}
                  className="flex items-center text-white hover:text-pink-600 transition"
                >
                  <FaUser />
                  <span className="ml-2 hidden md:block">
                    {userId ? `Hi, ${userName}` : "Profile"}
                  </span>
                </button>

                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg overflow-hidden z-50">
                    {userId ? (
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 hover:bg-pink-50 transition"
                      >
                        Logout
                      </button>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="block px-4 py-2 hover:bg-pink-50 transition"
                        >
                          Login
                        </Link>
                        <Link
                          to="/Signup"
                          className="block px-4 py-2 hover:bg-pink-50 transition"
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ProfessionalNavbar;
