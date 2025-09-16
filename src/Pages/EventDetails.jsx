import React, { useState } from "react";
import { FaCalendarAlt, FaArrowLeft, FaCalendarDay, FaClock, FaMapMarkerAlt, FaUsers, FaTicketAlt, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Add this import for navigation

const EventDetails = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(1); // Default to first event
  const navigate = useNavigate(); // Add navigate hook

  // Events data with proper images
  const eventsData = [
    {
      "id": 1,
      "name": "InnovateX Hackathon",
      "date": "2025-09-15",
      "time": "10:00 AM - 6:00 PM",
      "venue": "Tech Innovation Center",
      "category": "Technical",
      "description": "24-hour coding competition where participants solve real-world problems using innovative technology solutions.",
      "attendees": "200+",
      "image": "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      "schedule": [
        { "activity": "Registration", "time": "10:00 AM" },
        { "activity": "Opening Ceremony", "time": "11:00 AM" },
        { "activity": "Coding Begins", "time": "12:00 PM" },
        { "activity": "Lunch Break", "time": "1:00 PM - 2:00 PM" },
        { "activity": "Final Submission", "time": "5:00 PM" },
        { "activity": "Results & Prizes", "time": "6:00 PM" }
      ]
    },
    {
      "id": 2,
      "name": "Annual Cultural Fest",
      "date": "2025-10-05",
      "time": "9:00 AM - 9:00 PM",
      "venue": "Main Auditorium",
      "category": "Cultural",
      "description": "A day-long celebration of diverse cultures with performances, food stalls, and artistic displays.",
      "attendees": "5000+",
      "image": "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
      "schedule": [
        { "activity": "Opening Performance", "time": "9:00 AM" },
        { "activity": "Cultural Performances", "time": "10:00 AM - 12:00 PM" },
        { "activity": "Food Festival", "time": "12:00 PM - 2:00 PM" },
        { "activity": "Art Exhibition", "time": "2:00 PM - 5:00 PM" },
        { "activity": "Evening Shows", "time": "6:00 PM - 9:00 PM" }
      ]
    },
    {
      "id": 3,
      "name": "Inter-College Cricket Tournament",
      "date": "2025-09-22",
      "time": "8:00 AM - 5:00 PM",
      "venue": "College Cricket Ground",
      "category": "Sports",
      "description": "Annual cricket competition featuring teams from colleges across the region.",
      "attendees": "300+",
      "image": "https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=800",
      "schedule": [
        { "activity": "Team Registration", "time": "8:00 AM" },
        { "activity": "Opening Match", "time": "9:00 AM" },
        { "activity": "Quarter Finals", "time": "11:00 AM" },
        { "activity": "Lunch Break", "time": "1:00 PM - 2:00 PM" },
        { "activity": "Semi Finals", "time": "2:00 PM" },
        { "activity": "Final Match", "time": "4:00 PM" }
      ]
    },
    {
      "id": 4,
      "name": "Research Paper Presentation",
      "date": "2025-10-12",
      "time": "9:30 AM - 4:00 PM",
      "venue": "Seminar Hall",
      "category": "Academic",
      "description": "An opportunity for students to present their research findings to faculty and peers.",
      "attendees": "150+",
      "image": "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      "schedule": [
        { "activity": "Registration", "time": "9:30 AM" },
        { "activity": "Keynote Speech", "time": "10:00 AM" },
        { "activity": "Session 1", "time": "11:00 AM - 12:30 PM" },
        { "activity": "Lunch Break", "time": "12:30 PM - 1:30 PM" },
        { "activity": "Session 2", "time": "1:30 PM - 3:00 PM" },
        { "activity": "Award Ceremony", "time": "3:30 PM" }
      ]
    }
  ];

  const currentEvent = eventsData.find(event => event.id === selectedEventId) || eventsData[0];

  const handleBack = () => {
    alert("Going back to calendar...");
    window.history.back();
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    alert(isSaved ? "Event removed from saved events!" : "Event saved to your favorites!");
  };

  // Updated handleRegister function to navigate to registration page
  const handleRegister = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      // Store selected event data in sessionStorage for registration page
      sessionStorage.setItem('selectedEvent', JSON.stringify(currentEvent));
      // Navigate to registration page
      navigate('/registration');
    }, 1000); // Reduced timeout for better UX
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric',
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category) => {
    switch(category.toLowerCase()) {
      case 'technical': return '#0d6efd';
      case 'cultural': return '#d63384';
      case 'sports': return '#198754';
      case 'academic': return '#fd7e14';
      default: return '#6b5b95';
    }
  };

  // Consistent button style
  const buttonStyle = {
    background: "linear-gradient(to right, #3c1053, #ad5389)",
    color: "white",
    border: "none",
    padding: "12px 25px",
    borderRadius: "30px",
    fontSize: "16px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
  };

  const styles = {
    body: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      color: "#333",
      lineHeight: "1.6",
      padding: "20px",
      minHeight: "100vh",
      margin: 0,
      marginTop: "120px" // Added margin to push content below navbar
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto"
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 0",
      marginBottom: "30px"
    },
    logo: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#3c1053",
      display: "flex",
      alignItems: "center"
    },
    backBtn: buttonStyle,
    eventSelector: {
      marginBottom: "20px",
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      justifyContent: "center"
    },
    eventBtn: {
      ...buttonStyle,
      padding: "8px 16px",
      fontSize: "14px"
    },
    eventBtnActive: {
      ...buttonStyle,
      padding: "8px 16px",
      fontSize: "14px",
      background: "linear-gradient(to right, #ad5389, #3c1053)",
      boxShadow: "0 6px 20px rgba(0,0,0,0.3)"
    },
    eventDetails: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "30px",
      background: "white",
      borderRadius: "15px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
    },
    eventImage: {
      position: "relative",
      height: "100%",
      minHeight: "400px",
      overflow: "hidden"
    },
    eventImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    },
    imagePlaceholder: {
      width: "100%",
      height: "100%",
      background: `linear-gradient(45deg, ${getCategoryColor(currentEvent.category)}, #88d3ce)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "18px",
      fontWeight: "600"
    },
    imageOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(135deg, rgba(60, 16, 83, 0.3), rgba(173, 83, 137, 0.3))",
      pointerEvents: "none"
    },
    eventDate: {
      position: "absolute",
      top: "20px",
      left: "20px",
      background: "linear-gradient(to right, #3c1053, #ad5389)",
      color: "white",
      padding: "10px 15px",
      borderRadius: "10px",
      fontWeight: "600",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      display: "flex",
      alignItems: "center",
      zIndex: 10
    },
    eventContent: {
      padding: "30px",
      display: "flex",
      flexDirection: "column"
    },
    eventTitle: {
      fontSize: "32px",
      color: "#3c1053",
      marginBottom: "15px",
      fontWeight: "800"
    },
    eventInfo: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      marginBottom: "25px"
    },
    infoItem: {
      display: "flex",
      alignItems: "center",
      background: "#f8f9fa",
      padding: "10px 15px",
      borderRadius: "8px",
      fontSize: "16px"
    },
    eventDescription: {
      marginBottom: "25px",
      lineHeight: "1.8",
      color: "#555"
    },
    eventSchedule: {
      marginBottom: "25px"
    },
    scheduleTitle: {
      fontSize: "20px",
      color: "#3c1053",
      marginBottom: "15px",
      fontWeight: "600"
    },
    scheduleItem: {
      display: "flex",
      justifyContent: "space-between",
      padding: "12px 0",
      borderBottom: "1px dashed #e0e0e0"
    },
    actionButtons: {
      display: "flex",
      gap: "15px",
      marginTop: "auto"
    },
    btnPrimary: {
      ...buttonStyle,
      flex: 2
    },
    btnSecondary: {
      ...buttonStyle,
      flex: 1
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <header style={styles.header}>
          <button style={styles.backBtn} onClick={handleBack}>
            <FaArrowLeft style={{ marginRight: "8px" }} /> Back to Calendar
          </button>
        </header>

        {/* Event Selector */}
        <div style={styles.eventSelector}>
          {eventsData.map((event) => (
            <button
              key={event.id}
              style={selectedEventId === event.id ? styles.eventBtnActive : styles.eventBtn}
              onClick={() => setSelectedEventId(event.id)}
            >
              {event.name}
            </button>
          ))}
        </div>

        <div style={styles.eventDetails}>
          <div style={styles.eventImage}>
            <div style={styles.eventDate}>
              <FaCalendarDay style={{ marginRight: "5px" }} /> {formatDate(currentEvent.date)}
            </div>
            
            {currentEvent.image ? (
              <>
                <img 
                  src={currentEvent.image} 
                  alt={currentEvent.name}
                  style={styles.eventImg}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div style={{...styles.imagePlaceholder, display: 'none'}}>
                  {currentEvent.category} Event
                </div>
                <div style={styles.imageOverlay}></div>
              </>
            ) : (
              <div style={styles.imagePlaceholder}>
                {currentEvent.category} Event
              </div>
            )}
          </div>

          <div style={styles.eventContent}>
            <h1 style={styles.eventTitle}>{currentEvent.name}</h1>

            <div style={styles.eventInfo}>
              <div style={styles.infoItem}>
                <FaClock style={{ marginRight: "10px", color: "#3c1053" }} /> {currentEvent.time}
              </div>
              <div style={styles.infoItem}>
                <FaMapMarkerAlt style={{ marginRight: "10px", color: "#3c1053" }} /> {currentEvent.venue}
              </div>
              <div style={styles.infoItem}>
                <FaUsers style={{ marginRight: "10px", color: "#3c1053" }} /> {currentEvent.attendees} Attendees
              </div>
            </div>

            <div style={styles.eventDescription}>
              <p>{currentEvent.description}</p>
            </div>

            <div style={styles.eventSchedule}>
              <h3 style={styles.scheduleTitle}>Event Schedule</h3>
              {currentEvent.schedule.map((item, index) => (
                <div key={index} style={styles.scheduleItem}>
                  <span>{item.activity}</span>
                  <span>{item.time}</span>
                </div>
              ))}
            </div>

            <div style={styles.actionButtons}>
              <button
                style={styles.btnPrimary}
                onClick={handleRegister}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>Processing...</>
                ) : (
                  <>
                    <FaTicketAlt style={{ marginRight: "8px" }} /> Register Now
                  </>
                )}
              </button>

              <button 
                style={styles.btnSecondary} 
                onClick={handleSave}
              >
                <FaHeart style={{ marginRight: "8px" }} /> {isSaved ? "Saved" : "Save Event"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;