import React, { useEffect, useState } from "react";
import "../css/Gallery.css";
import galleryData from "../data/Gallery.json";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(galleryData);
  }, []);

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Our Event Gallery</h1>
      <p className="gallery-subtitle">
        Explore glimpses of our memorable events and celebrations
      </p>
      <div className="gallery-grid">
        {images.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img src={item.image} alt={item.title} className="gallery-image" />
            <div className="gallery-overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
