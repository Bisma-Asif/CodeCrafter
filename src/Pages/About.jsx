import React, { useState } from "react";
import { BookOpen, Users, Award, Target, Zap, Palette, GraduationCap, Trophy, FlaskConical, Clock, Calendar } from 'lucide-react';
import "../css/About.css";
import timelineEvents from '../data/timeline-events.json';
import keyAnnualEvents from '../data/key-annual-events.json';

const About = () => {
  const [activeCategory, setActiveCategory] = useState('technical');

  const categories = [
    { id: 'technical', label: 'Technical Events' },
    { id: 'cultural', label: 'Cultural Events' },
    { id: 'sports', label: 'Sports & Others' }
  ];

  const filteredEvents = keyAnnualEvents.filter(event => event.category === activeCategory);

  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-content">
          <h1>About Our College</h1>
          <p>Learn about our prestigious institution, achievements, and the vibrant events that shape campus life</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="about-main">
        <div className="container">
          
          {/* College Introduction Section */}
          <section className="intro-section">
            <h2>College Introduction</h2>
            <div className="intro-content">
              <div className="intro-text">
                <h3>Quintex College of Engineering</h3>
                <p>Located in the heart of the city, XYZ College of Engineering has been a pioneer in technical education for over 40 years. Our campus spans 50 acres of state-of-the-art infrastructure designed to foster learning and innovation.</p>
                <p>Affiliated with ABC University, we are recognized by the All India Council for Technical Education and accredited with an 'A' grade by the National Assessment and Accreditation Council.</p>
              </div>
              <div className="intro-stats">
                <div className="stat-item">
                  <div className="stat-icon">
                    <GraduationCap />
                  </div>
                  <div className="stat-content">
                    <h4>5000+ Students</h4>
                    <p>Thriving community of learners</p>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <Trophy />
                  </div>
                  <div className="stat-content">
                    <h4>25+ Awards</h4>
                    <p>National and international recognition</p>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <FlaskConical />
                  </div>
                  <div className="stat-content">
                    <h4>12 Research Centers</h4>
                    <p>Advancing knowledge and innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Campus Achievements Section */}
          <section className="achievements-section">
            <h2>Campus Achievements</h2>
            <div className="achievements-grid">
              <div className="achievement-card">
                <h3>Excellence in Technical Education</h3>
                <p>Awarded by the National Education Association for innovative curriculum and outstanding placement records for 5 consecutive years.</p>
              </div>
              <div className="achievement-card">
                <h3>Green Campus Initiative</h3>
                <p>Recognized as the most eco-friendly campus in the state with solar-powered facilities and zero-waste management systems.</p>
              </div>
              <div className="achievement-card">
                <h3>Research Excellence</h3>
                <p>Received the National Research Development Corporation award for pioneering work in renewable energy technologies.</p>
              </div>
            </div>
          </section>

          {/* Event Timeline Section */}
          <section className="events-timeline-section">
            <h2 className="events-timeline-title">Event Timeline</h2>
            <div className="timeline-container">
              <div className="timeline-line"></div>
              {timelineEvents.map((event, index) => (
                <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-date">{event.date}</div>
                    <div className="timeline-event-title">{event.title}</div>
                    <div className="timeline-description">{event.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Annual Events Section */}
          <section className="key-events-section">
            <h2 className="key-events-title">Key Annual Events</h2>
            
            {/* Category Filters */}
            <div className="event-filters">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Event Cards */}
            <div className="key-events-grid">
              {filteredEvents.map((event) => (
                <div key={event.id} className="key-event-card">
                  <div className={`event-header bg-gradient-to-r ${event.gradient}`}>
                    <h3>{event.title}</h3>
                  </div>
                  <div className="event-content">
                    <div className="event-date">
                      <Calendar size={16} />
                      {event.date}
                    </div>
                    <p className="event-description">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* Additional CSS Styles */}
      <style jsx>{`
        .events-timeline-section {
          margin: 60px 0;
          padding: 40px 0;
          background: #f8f9fa;
          border-radius: 12px;
        }

        .events-timeline-title {
          color: #663399;
          font-size: 2.5rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 40px;
          position: relative;
        }

        .events-timeline-title::after {
          content: '';
          display: block;
          width: 60px;
          height: 4px;
          background: #663399;
          margin: 10px auto;
          border-radius: 2px;
        }

        .timeline-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(to bottom, #663399, #a855f7);
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          margin: 40px 0;
          display: flex;
          align-items: center;
        }

        .timeline-item.left {
          flex-direction: row;
        }

        .timeline-item.right {
          flex-direction: row-reverse;
        }

        .timeline-dot {
          position: absolute;
          left: 50%;
          width: 20px;
          height: 20px;
          background: #663399;
          border: 4px solid white;
          border-radius: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }

        .timeline-content {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width: 45%;
          margin: 0 2.5%;
        }

        .timeline-date {
          color: #a855f7;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .timeline-event-title {
          color: #2d3748;
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .timeline-description {
          color: #4a5568;
          line-height: 1.5;
        }

        .key-events-section {
          margin: 60px 0;
        }

        .key-events-title {
          color: #663399;
          font-size: 2.5rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 40px;
          position: relative;
        }

        .key-events-title::after {
          content: '';
          display: block;
          width: 60px;
          height: 4px;
          background: #663399;
          margin: 10px auto;
          border-radius: 2px;
        }

        .event-filters {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 12px 24px;
          border: none;
          border-radius: 25px;
          background: #e2e8f0;
          color: #4a5568;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          background: #cbd5e0;
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: #663399;
          color: white;
        }

        .key-events-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 24px;
          margin-top: 32px;
        }

        .key-event-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .key-event-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .event-header {
          padding: 20px;
          color: white;
          text-align: center;
        }

        .event-header h3 {
          margin: 0;
          font-size: 1.5rem;
          font-weight: bold;
        }

        .event-content {
          padding: 24px;
        }

        .event-date {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #6b7280;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .event-description {
          color: #4b5563;
          line-height: 1.6;
          margin: 0;
        }

        .bg-gradient-to-r.from-purple-600.to-purple-800 {
          background: linear-gradient(to right, #9333ea, #7c3aed);
        }

        .bg-gradient-to-r.from-purple-700.to-pink-700 {
          background: linear-gradient(to right, #7c3aed, #be185d);
        }

        .bg-gradient-to-r.from-pink-500.to-orange-500 {
          background: linear-gradient(to right, #ec4899, #f97316);
        }

        .bg-gradient-to-r.from-blue-600.to-indigo-700 {
          background: linear-gradient(to right, #2563eb, #4338ca);
        }

        .bg-gradient-to-r.from-green-600.to-teal-700 {
          background: linear-gradient(to right, #059669, #0f766e);
        }

        .bg-gradient-to-r.from-indigo-600.to-purple-700 {
          background: linear-gradient(to right, #4f46e5, #7c3aed);
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 20px;
          }

          .timeline-item {
            flex-direction: row !important;
          }

          .timeline-dot {
            left: 20px;
          }

          .timeline-content {
            width: calc(100% - 60px);
            margin-left: 40px;
          }

          .key-events-grid {
            grid-template-columns: 1fr;
          }

          .events-timeline-title,
          .key-events-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;