import React, { useState, useEffect } from "react";
import "../css/Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Get current pathname
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">CampusConnect</div>
      <ul className="navbar-links">
        <li>
          <a 
            href="/" 
            className={activeLink === "/" ? "active" : ""} 
            onClick={() => handleLinkClick("/")}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="/about" 
            className={activeLink === "/about" ? "active" : ""} 
            onClick={() => handleLinkClick("/about")}
          >
            About Us
          </a>
        </li>
        <li>
          <a 
            href="/eventcalendar" 
            className={activeLink === "/eventcalendar" ? "active" : ""} 
            onClick={() => handleLinkClick("/eventcalendar")}
          >
            Events Calendar
          </a>
        </li>
        <li>
          <a 
            href="/eventdetails" 
            className={activeLink === "/eventdetails" ? "active" : ""} 
            onClick={() => handleLinkClick("/eventdetails")}
          >
            Event Details
          </a>
        </li>
        <li>
          <a 
            href="/registration" 
            className={activeLink === "/registration" ? "active" : ""} 
            onClick={() => handleLinkClick("/registration")}
          >
            Registration
          </a>
        </li>
        <li>
          <a 
            href="/gallery" 
            className={activeLink === "/gallery" ? "active" : ""} 
            onClick={() => handleLinkClick("/gallery")}
          >
            Gallery
          </a>
        </li>
        <li>
          <a 
            href="/contact" 
            className={activeLink === "/contact" ? "active" : ""} 
            onClick={() => handleLinkClick("/contact")}
          >
            Contact Us
          </a>
        </li>
        <li>
          <a 
            href="/feedback" 
            className={activeLink === "/feedback" ? "active" : ""} 
            onClick={() => handleLinkClick("/feedback")}
          >
            Feedback
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;