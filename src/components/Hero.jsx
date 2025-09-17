import React, { useState, useEffect } from "react";
import heroData from "../data/Hero.json";
import "../css/Header.css";

export default function Hero({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide like a carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === heroData.bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {/* Background slider */}
      <div className="hero-slider">
        {heroData.bannerImages.map((bg, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentIndex ? "active" : ""}`}
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <p className="hero-subtext">Welcome {data.name} As A {data.userType}</p>
        <h1 className="hero-title">{heroData.welcomeMessage}</h1>
        <p className="hero-subtext">{heroData.subText}</p>
      </div>
    </section>
  );
}
