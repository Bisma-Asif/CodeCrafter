import React, { useEffect, useState } from "react";
import "../css/contact.css";
import contactData from "../data/contact.json";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Default marker fix for Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Contact = () => {
  const [faculty, setFaculty] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setFaculty(contactData.faculty);
    setStudents(contactData.students);
  }, []);

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Get in touch with our faculty and student coordinators for any
          event-related queries
        </p>
      </header>

      <div className="contact-content">
        {/* Faculty */}
        <div className="contact-info">
          <h2 className="section-title">Faculty Coordinators</h2>
          <ul className="contact-list">
            {faculty.map((person, idx) => (
              <li className="contact-item" key={idx}>
                <div className="contact-icon">
                  <i className={`fas ${person.icon}`}></i>
                </div>
                <div className="contact-details">
                  <h3>{person.name}</h3>
                  <p>{person.designation}</p>
                  <p>{person.department}</p>
                  <p>
                    Phone: <a href={`tel:${person.phone}`}>{person.phone}</a>
                  </p>
                  <p>
                    Email: <a href={`mailto:${person.email}`}>{person.email}</a>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Students */}
        <div className="contact-info">
          <h2 className="section-title">Student Coordinators</h2>
          <ul className="contact-list">
            {students.map((person, idx) => (
              <li className="contact-item" key={idx}>
                <div className="contact-icon">
                  <i className={`fas ${person.icon}`}></i>
                </div>
                <div className="contact-details">
                  <h3>{person.name}</h3>
                  <p>{person.designation}</p>
                  <p>{person.department}</p>
                  <p>
                    Phone: <a href={`tel:${person.phone}`}>{person.phone}</a>
                  </p>
                  <p>
                    Email: <a href={`mailto:${person.email}`}>{person.email}</a>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Map */}
        <div className="map-container">
          <div className="map-header">
            <h2>Our Location</h2>
          </div>
          <MapContainer
            center={[40.7547, -73.9845]} 
            zoom={14}
            scrollWheelZoom={true}
            className="map-frame"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[40.7547, -73.9845]}>
              <Popup>Our University Location</Popup>
            </Marker>
          </MapContainer>
          <div className="map-footer">
            <p>123 University Avenue, City, State 12345</p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Contact;
