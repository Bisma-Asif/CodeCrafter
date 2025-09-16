import React from "react";
import { GraduationCap, Trophy, FlaskConical, BookOpen, Users, Award } from 'lucide-react';
import "../css/CollegeInfo.css";

const CollegeInfo = () => {
  return (
    <div className="college-info-container">
      {/* College Introduction Section */}
      <section className="college-intro-section">
        <div className="container">
          <h2>College Introduction</h2>
          <div className="intro-content">
            <div className="intro-text">
              <h3>Quantix College of Engineering</h3>
              <p>Located in the heart of the city, Quantix College of Engineering has been a pioneer in technical education for over 40 years. Our campus spans 50 acres of state-of-the-art infrastructure designed to foster learning and innovation.</p>
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
        </div>
      </section>

      {/* Campus Achievements Section */}
      <section className="achievements-section">
        <div className="container">
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
        </div>
      </section>

      {/* Additional Info Cards */}
      <section className="info-cards-section">
        <div className="container">
          <div className="info-cards-grid">
            <div className="info-card">
              <div className="info-card-header">
                <BookOpen className="info-icon" />
                <h3>Academic Excellence</h3>
              </div>
              <p>
                Comprehensive programs across engineering disciplines with industry-aligned curriculum and hands-on learning experiences.
              </p>
            </div>

            <div className="info-card">
              <div className="info-card-header">
                <Users className="info-icon" />
                <h3>Vibrant Community</h3>
              </div>
              <p>
                A diverse student body from across the globe, creating a multicultural learning environment that prepares students for global careers.
              </p>
            </div>

            <div className="info-card">
              <div className="info-card-header">
                <Award className="info-icon" />
                <h3>Industry Partnerships</h3>
              </div>
              <p>
                Strong collaborations with leading companies providing internships, placements, and real-world project opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollegeInfo;