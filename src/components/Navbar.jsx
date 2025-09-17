import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";  // Import Link and useLocation

import "../css/Navbar.css";

const Navbar = () => {
  const location = useLocation();  // useLocation gives you the current location (pathname)
  const [activeLink, setActiveLink] = useState(location.pathname);  // Set initial active link based on current path

  useEffect(() => {
    setActiveLink(location.pathname);  // Update active link whenever the path changes
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">CampusConnect</div>
      <ul className="navbar-links">
        <li>
          <Link
            to="/" 
            className={activeLink === "/" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={activeLink === "/about" ? "active" : ""}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/eventcalendar"
            className={activeLink === "/eventcalendar" ? "active" : ""}
          >
            Events Calendar
          </Link>
        </li>
        <li>
          <Link
            to="/eventdetails"
            className={activeLink === "/eventdetails" ? "active" : ""}
          >
            Event Details
          </Link>
        </li>
        <li>
          <Link
            to="/registration"
            className={activeLink === "/registration" ? "active" : ""}
          >
            Registration
          </Link>
        </li>
        <li>
          <Link
            to="/gallery"
            className={activeLink === "/gallery" ? "active" : ""}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={activeLink === "/contact" ? "active" : ""}
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            to="/feedback"
            className={activeLink === "/feedback" ? "active" : ""}
          >
            Feedback
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
