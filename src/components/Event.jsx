import React from "react";
import { useState, useEffect } from "react";

const eventsData = [
  {
    id: 1,
    name: "InnovateX Hackathon",
    date: "2026-02-15",
    time: "10:00 - 18:00",
    venue: "Tech Innovation Center",
    category: "Technical",
    description: "24-hour coding competition where participants solve real-world problems using innovative technology solutions.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Annual Cultural Fest",
    date: "2026-03-05",
    time: "09:00 - 21:00",
    venue: "Main Auditorium",
    category: "Cultural",
    description: "A day-long celebration of diverse cultures with performances, food stalls, and artistic displays.",
    image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Inter-College Cricket Tournament",
    date: "2026-02-22",
    time: "08:00 - 17:00",
    venue: "College Cricket Ground",
    category: "Sports",
    description: "Annual cricket competition featuring teams from colleges across the region.",
    image: "https://images.pexels.com/photos/7688182/pexels-photo-7688182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    name: "Research Paper Presentation",
    date: "2025-10-12",
    time: "09:30 - 16:00",
    venue: "Seminar Hall",
    category: "Academic",
    description: "An opportunity for students to present their research findings to faculty and peers.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    name: "Robotics Workshop",
    date: "2026-02-18",
    time: "14:00 - 17:00",
    venue: "Robotics Lab",
    category: "Technical",
    description: "Hands-on workshop on building and programming robots for beginners.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    name: "Dance Competition",
    date: "2026-03-08",
    time: "15:00 - 19:00",
    venue: "Cultural Hall",
    category: "Cultural",
    description: "Showcase your dancing skills in various categories including classical, contemporary, and hip-hop.",
    image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 7,
    name: "Blood Donation Camp",
    date: "2025-12-28",
    time: "10:00 - 16:00",
    venue: "Health Center",
    category: "Social",
    description: "Join us in this noble cause to help save lives by donating blood.",
    image: "https://images.pexels.com/photos/7688182/pexels-photo-7688182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 8,
    name: "Career Guidance Seminar",
    date: "2025-11-20",
    time: "11:00 - 13:00",
    venue: "Conference Room",
    category: "Academic",
    description: "Industry experts share insights on career opportunities and preparation strategies.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const eventsStyles = {
  events: {
    padding: '80px 20px',
    background: '#fff',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  sectionTitleH2: {
    fontSize: '2.5rem',
    marginBottom: '15px',
    color: '#6a3093',
    fontWeight: '700',
    margin: '0 0 15px 0',
  },
  sectionTitleP: {
    fontSize: '1.1rem',
    color: '#666',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  eventsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
    marginTop: '40px',
  },
  eventCard: {
    background: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 8px 25px rgba(106, 48, 147, 0.15)',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  eventImage: {
    position: 'relative',
    overflow: 'hidden',
    height: '220px',
  },
  eventImageImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  eventTimeOverlay: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'rgba(106, 48, 147, 0.95)',
    color: 'white',
    padding: '10px 15px',
    borderRadius: '15px',
    fontSize: '0.75rem',
    fontWeight: '600',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 15px rgba(106, 48, 147, 0.3)',
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  },
  countdownItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '35px',
  },
  countdownNumber: {
    fontSize: '1rem',
    fontWeight: '700',
    lineHeight: '1',
    marginBottom: '2px',
  },
  countdownLabel: {
    fontSize: '0.6rem',
    opacity: '0.9',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  eventContent: {
    padding: '25px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    gap: '12px',
  },
  eventTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#333',
    lineHeight: '1.3',
    margin: '0',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  eventDate: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.95rem',
    color: '#6a3093',
    fontWeight: '500',
    margin: '0',
  },
  eventVenue: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.9rem',
    color: '#888',
    fontWeight: '400',
    margin: '0',
  },
  eventDescription: {
    fontSize: '1rem',
    color: '#666',
    lineHeight: '1.6',
    margin: '0',
    flexGrow: 1,
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  eventButton: {
    display: 'inline-block',
    padding: '12px 24px',
    background: 'linear-gradient(135deg, #6a3093, #a044ff)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '25px',
    fontSize: '1rem',
    fontWeight: '600',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    marginTop: 'auto',
    alignSelf: 'flex-start',
    border: 'none',
    cursor: 'pointer',
    minHeight: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    whiteSpace: 'nowrap',
  }
};

export default function Events() {
  const [countdowns, setCountdowns] = useState({});

  useEffect(() => {
    const updateCountdowns = () => {
      const newCountdowns = {};
      eventsData.forEach((event) => {
        // Extract start time from the time range (e.g., "10:00 - 18:00" becomes "10:00")
        const [startTime] = event.time.split(' - ');
        // Create proper date string in ISO format
        const eventDateTime = new Date(`${event.date}T${startTime}:00`);
        const now = new Date();
        const difference = eventDateTime.getTime() - now.getTime();

        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);

          newCountdowns[event.id] = {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
          };
        } else {
          // Event has passed
          newCountdowns[event.id] = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
          };
        }
      });
      setCountdowns(newCountdowns);
    };

    // Update immediately
    updateCountdowns();

    // Set up interval to update every second
    const interval = setInterval(updateCountdowns, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCardHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-8px)';
    e.currentTarget.style.boxShadow = '0 15px 35px rgba(106, 48, 147, 0.25)';
    const img = e.currentTarget.querySelector('img');
    if (img) {
      img.style.transform = 'scale(1.05)';
    }
  };

  const handleCardLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 8px 25px rgba(106, 48, 147, 0.15)';
    const img = e.currentTarget.querySelector('img');
    if (img) {
      img.style.transform = 'scale(1)';
    }
  };

  const handleButtonHover = (e) => {
    e.target.style.background = 'linear-gradient(135deg, #4e2170, #7d1eff)';
    e.target.style.transform = 'translateY(-2px)';
    e.target.style.boxShadow = '0 5px 15px rgba(106, 48, 147, 0.3)';
  };

  const handleButtonLeave = (e) => {
    e.target.style.background = 'linear-gradient(135deg, #6a3093, #a044ff)';
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = 'none';
  };

  return (
    <section style={eventsStyles.events}>
      <div style={eventsStyles.container}>
        <div style={eventsStyles.sectionTitle}>
          <h2 style={eventsStyles.sectionTitleH2}>Upcoming Highlights</h2>
          <p style={eventsStyles.sectionTitleP}>Stay connected with the most exciting events on our campus!</p>
        </div>
        <div style={eventsStyles.eventsGrid}>
          {eventsData.map((event) => (
            <div 
              key={event.id}
              style={eventsStyles.eventCard}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <div style={eventsStyles.eventImage}>
                <img src={event.image} alt={event.name} style={eventsStyles.eventImageImg} />
                <div style={eventsStyles.eventTimeOverlay}>
                  {countdowns[event.id] && (
                    <>
                      <div style={eventsStyles.countdownItem}>
                        <div style={eventsStyles.countdownNumber}>{countdowns[event.id].days.toString().padStart(2, '0')}</div>
                        <div style={eventsStyles.countdownLabel}>DAYS</div>
                      </div>
                      <div style={eventsStyles.countdownItem}>
                        <div style={eventsStyles.countdownNumber}>{countdowns[event.id].hours.toString().padStart(2, '0')}</div>
                        <div style={eventsStyles.countdownLabel}>HOURS</div>
                      </div>
                      <div style={eventsStyles.countdownItem}>
                        <div style={eventsStyles.countdownNumber}>{countdowns[event.id].minutes.toString().padStart(2, '0')}</div>
                        <div style={eventsStyles.countdownLabel}>MINUTES</div>
                      </div>
                      <div style={eventsStyles.countdownItem}>
                        <div style={eventsStyles.countdownNumber}>{countdowns[event.id].seconds.toString().padStart(2, '0')}</div>
                        <div style={eventsStyles.countdownLabel}>SECONDS</div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div style={eventsStyles.eventContent}>
                <h3 style={eventsStyles.eventTitle}>{event.name}</h3>
                <span style={eventsStyles.eventDate}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '8px', flexShrink: 0}}>
                    <path d="M8 2V5M16 2V5M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z" stroke="#6a3093" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {event.date} • {event.time}
                </span>
                <div style={eventsStyles.eventVenue}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '8px', flexShrink: 0}}>
                    <path d="M21 10C21 17L12 23L3 10C3 6.13401 7.13401 2 12 2C16.866 2 21 6.13401 21 10Z" stroke="#6a3093" strokeWidth="2"/>
                    <circle cx="12" cy="10" r="3" stroke="#6a3093" strokeWidth="2"/>
                  </svg>
                  {event.venue}
                </div>
                <p style={eventsStyles.eventDescription}>{event.description}</p>
                <button 
                  style={eventsStyles.eventButton}
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonLeave}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .events {
            padding: 60px 15px !important;
          }
          
          .section-title h2 {
            font-size: 2rem !important;
          }
          
          .section-title p {
            font-size: 1rem !important;
          }
          
          .events-grid {
            grid-template-columns: 1fr !important;
            gap: 25px !important;
          }
          
          .event-content {
            padding: 20px !important;
          }
          
          .event-title {
            font-size: 1.3rem !important;
          }
          
          .event-description {
            font-size: 0.95rem !important;
          }
        }

        @media (max-width: 480px) {
          .events {
            padding: 40px 10px !important;
          }
          
          .section-title h2 {
            font-size: 1.8rem !important;
          }
          
          .event-content {
            padding: 18px !important;
          }
          
          .event-button {
            padding: 10px 20px !important;
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </section>
  );
}