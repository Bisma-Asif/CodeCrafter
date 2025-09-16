import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Clock, Filter, BookOpen, Palette, Trophy, Zap, Heart } from 'lucide-react';

const EventCalendar = () => {
  // Events data for calendar
  const events = [
    { "title": "Defence Day", "date": "September 6, 2025", "category": "cultural" },
    { "title": "School Test", "date": "September 12, 2025", "category": "technical" },
    { "title": "Birthday Party", "date": "September 28, 2025", "category": "cultural" },
    { "title": "Durga Puja", "date": "September 30, 2025", "category": "cultural" },
    { "title": "Dussehra", "date": "October 2, 2025", "category": "cultural" },
    { "title": "Conference", "date": "October 15, 2025", "category": "technical" },
    { "title": "Team Meeting", "date": "October 20, 2025", "category": "technical" },
    { "title": "Dentist Appointment", "date": "September 17, 2025", "category": "cultural" },
    { "title": "Team Lunch", "date": "September 17, 2025", "category": "cultural" }
  ];

  // Extended events data for catalog with more details
  const eventsData = [
    {
      id: 1,
      name: "Inter-College Cricket Tournament",
      date: "2025-02-22",
      time: "08:00 - 17:00",
      venue: "College Cricket Ground",
      category: "Sports",
      description: "Annual cricket competition featuring teams from colleges across the region."
    },
    {
      id: 2,
      name: "Research Paper Presentation",
      date: "2025-10-12",
      time: "09:30 - 16:00",
      venue: "Seminar Hall",
      category: "Academic",
      description: "An opportunity for students to present their research findings to faculty and peers."
    },
    {
      id: 3,
      name: "Defence Day Celebration",
      date: "2025-09-06",
      time: "10:00 - 15:00",
      venue: "Main Auditorium",
      category: "Cultural",
      description: "Commemorating our nation's defense forces with cultural performances and speeches."
    },
    {
      id: 4,
      name: "Tech Innovation Workshop",
      date: "2025-09-12",
      time: "14:00 - 18:00",
      venue: "Computer Lab",
      category: "Technical",
      description: "Hands-on workshop exploring the latest technologies and innovation trends."
    },
    {
      id: 5,
      name: "Cultural Festival - Durga Puja",
      date: "2025-09-30",
      time: "18:00 - 22:00",
      venue: "Campus Ground",
      category: "Cultural",
      description: "Traditional celebration with dance, music, and cultural performances."
    },
    {
      id: 6,
      name: "Annual Conference",
      date: "2025-10-15",
      time: "09:00 - 17:00",
      venue: "Convention Center",
      category: "Technical",
      description: "Industry experts sharing insights on emerging technologies and career opportunities."
    },
    {
      id: 7,
      name: "Student Social Mixer",
      date: "2025-09-17",
      time: "19:00 - 23:00",
      venue: "Student Center",
      category: "Social",
      description: "An evening of networking, games, and refreshments for all students."
    },
    {
      id: 8,
      name: "Dussehra Celebration",
      date: "2025-10-02",
      time: "17:00 - 21:00",
      venue: "Main Campus",
      category: "Cultural",
      description: "Traditional celebration marking the victory of good over evil."
    }
  ];

  const [currentDate, setCurrentDate] = useState(new Date(2025, 8, 1)); // September 2025
  const today = new Date(2025, 8, 13); // September 13, 2025
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Event Catalog states
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [catalogEvents, setCatalogEvents] = useState([]);

  useEffect(() => {
    applyFilterAndSort(filter, sortBy);
  }, [filter, sortBy]);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const parseDate = (dateStr) => {
    return new Date(Date.parse(dateStr));
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Event Catalog functions
  const formatEventDate = (dateStr) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(dateStr).toLocaleDateString("en-US", options);
  };

  const applyFilterAndSort = (filterValue, sortValue) => {
    let filtered = filterValue === "all" ? eventsData : eventsData.filter(e => e.category === filterValue);

    switch(sortValue) {
      case "date":
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "category":
        filtered.sort((a, b) => a.category.localeCompare(b.category));
        break;
      default:
        break;
    }

    setCatalogEvents(filtered);
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case "Technical":
        return <Zap size={16} />;
      case "Cultural":
        return <Palette size={16} />;
      case "Sports":
        return <Trophy size={16} />;
      case "Academic":
        return <BookOpen size={16} />;
      case "Social":
        return <Heart size={16} />;
      default:
        return <Filter size={16} />;
    }
  };

  const categories = ["all", "Technical", "Cultural", "Sports", "Academic", "Social"];

  const getEventsForDate = (date) => {
    return events.filter(event => {
      const eventDate = parseDate(event.date);
      return eventDate.getDate() === date.getDate() && 
             eventDate.getMonth() === date.getMonth() && 
             eventDate.getFullYear() === date.getFullYear();
    });
  };

  const getMonthEvents = () => {
    const monthEvents = events.filter(event => {
      const eventDate = parseDate(event.date);
      return eventDate.getMonth() === currentDate.getMonth() && 
             eventDate.getFullYear() === currentDate.getFullYear();
    });

    return monthEvents.sort((a, b) => parseDate(a.date) - parseDate(b.date));
  };

  const generateCalendarDays = () => {
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const startDate = new Date(firstDay);
    const dayOfWeek = (firstDay.getDay() + 6) % 7; // Convert Sunday=0 to Monday=0
    startDate.setDate(firstDay.getDate() - dayOfWeek);

    const days = [];
    
    // Generate 6 weeks of days
    for (let week = 0; week < 6; week++) {
      for (let day = 0; day < 7; day++) {
        const currentDay = new Date(startDate);
        currentDay.setDate(startDate.getDate() + (week * 7) + day);
        
        const dayEvents = getEventsForDate(currentDay);
        const isToday = currentDay.getTime() === today.getTime();
        const isOtherMonth = currentDay.getMonth() !== currentDate.getMonth();
        const hasEvent = dayEvents.length > 0;

        days.push({
          date: currentDay,
          day: currentDay.getDate(),
          isToday,
          isOtherMonth,
          hasEvent,
          events: dayEvents
        });
      }
    }
    
    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const handleLearnMore = (event) => {
    // Navigate to event details page
    window.location.href = '/eventdetails';
  };

  const handleBackToCalendar = () => {
    setShowEventDetails(false);
    setSelectedEvent(null);
  };

  const calendarDays = generateCalendarDays();
  const monthEvents = getMonthEvents();

  // Event Details Component matching your provided EventDetails
  const EventDetailsComponent = () => {
    const [isSaved, setIsSaved] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    // Map selected event to match EventDetails format
    const currentEvent = {
      id: selectedEvent.id,
      name: selectedEvent.name,
      date: selectedEvent.date,
      time: selectedEvent.time,
      venue: selectedEvent.venue,
      category: selectedEvent.category,
      description: selectedEvent.description,
      attendees: "200+",
      image: "",
      schedule: [
        { activity: "Registration", time: "9:00 AM" },
        { activity: "Opening Ceremony", time: "10:00 AM" },
        { activity: "Main Event", time: "11:00 AM - 4:00 PM" },
        { activity: "Closing Ceremony", time: "5:00 PM" }
      ]
    };

    const handleBack = () => {
      handleBackToCalendar();
    };

    const handleSave = () => {
      setIsSaved(!isSaved);
      alert(isSaved ? "Event removed from saved events!" : "Event saved to your favorites!");
    };

    const handleRegister = () => {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        alert("Registration functionality would be implemented here!");
      }, 1000);
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
        margin: 0
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
            <div style={styles.logo}>
              <Calendar style={{ marginRight: "10px" }} /> Eventify
            </div>
            <button style={styles.backBtn} onClick={handleBack}>
              ← Back to Calendar
            </button>
          </header>

          <div style={styles.eventDetails}>
            <div style={styles.eventImage}>
              <div style={styles.eventDate}>
                <Calendar style={{ marginRight: "5px" }} /> {formatDate(currentEvent.date)}
              </div>
              
              <div style={styles.imagePlaceholder}>
                {currentEvent.category} Event
              </div>
            </div>

            <div style={styles.eventContent}>
              <h1 style={styles.eventTitle}>{currentEvent.name}</h1>

              <div style={styles.eventInfo}>
                <div style={styles.infoItem}>
                  <Clock style={{ marginRight: "10px", color: "#3c1053" }} /> {currentEvent.time}
                </div>
                <div style={styles.infoItem}>
                  <MapPin style={{ marginRight: "10px", color: "#3c1053" }} /> {currentEvent.venue}
                </div>
                <div style={styles.infoItem}>
                  <Heart style={{ marginRight: "10px", color: "#3c1053" }} /> {currentEvent.attendees} Attendees
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
                      <Filter style={{ marginRight: "8px" }} /> Register Now
                    </>
                  )}
                </button>

                <button 
                  style={styles.btnSecondary} 
                  onClick={handleSave}
                >
                  <Heart style={{ marginRight: "8px" }} /> {isSaved ? "Saved" : "Save Event"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Show Event Details if selected
  if (showEventDetails && selectedEvent) {
    return <EventDetailsComponent />;
  }

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      backgroundColor: "#f0f0f5",
      minHeight: "100vh"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px"
      }}>
        {/* Calendar Section */}
        <div style={{
          background: "white",
          borderRadius: "15px",
          padding: "30px",
          marginBottom: "30px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: '30px', 
            gap: '20px' 
          }}>
            <button 
              onClick={handlePrevMonth}
              style={{
                background: "linear-gradient(135deg, #6b46c1 0%, #9333ea 100%)",
                color: "white",
                border: "none",
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <div style={{
              fontSize: '1.8rem',
              fontWeight: '600',
              color: '#6b46c1',
              minWidth: '250px',
              textAlign: 'center'
            }}>
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </div>
            <button 
              onClick={handleNextMonth}
              style={{
                background: "linear-gradient(135deg, #6b46c1 0%, #9333ea 100%)",
                color: "white",
                border: "none",
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '10px',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <div key={day} style={{ 
                textAlign: 'center', 
                fontWeight: '600', 
                color: '#6b46c1', 
                padding: '15px 0', 
                fontSize: '1.1rem' 
              }}>
                {day}
              </div>
            ))}
            
            {calendarDays.map((day, index) => (
              <div 
                key={index}
                title={day.events.map(e => e.title).join(', ')}
                style={{
                  aspectRatio: '1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  position: 'relative',
                  background: day.hasEvent ? '#6b46c1' : (day.isToday ? '#ff69b4' : 'transparent'),
                  color: day.hasEvent || day.isToday ? 'white' : (day.isOtherMonth ? '#ccc' : '#333'),
                  fontWeight: day.hasEvent || day.isToday ? 'bold' : '500',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  if (!day.hasEvent && !day.isToday) {
                    e.target.style.background = '#f0f0f5';
                  }
                }}
                onMouseOut={(e) => {
                  if (!day.hasEvent && !day.isToday) {
                    e.target.style.background = 'transparent';
                  }
                }}
              >
                {day.day}
              </div>
            ))}
          </div>

          <div style={{ 
            marginTop: '40px', 
            padding: '20px', 
            background: '#f8f8fc', 
            borderRadius: '15px', 
            borderLeft: '5px solid #6b46c1' 
          }}>
            <div style={{ 
              fontSize: '1.3rem', 
              fontWeight: '600', 
              color: '#6b46c1', 
              marginBottom: '15px' 
            }}>
              Upcoming Events
            </div>
            <div>
              {monthEvents.length === 0 ? (
                <div style={{ 
                  color: '#666', 
                  textAlign: 'center', 
                  padding: '20px',
                  fontStyle: 'italic'
                }}>
                  No events this month
                </div>
              ) : (
                monthEvents.map((event, index) => {
                  const eventDate = parseDate(event.date);
                  const dateStr = formatDate(eventDate);
                  
                  return (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px 0',
                      borderBottom: index < monthEvents.length - 1 ? '1px solid #e8e8f0' : 'none'
                    }}>
                      <div style={{
                        background: '#6b46c1',
                        color: 'white',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        minWidth: '70px',
                        textAlign: 'center'
                      }}>
                        {dateStr}
                      </div>
                      <div style={{ 
                        color: '#333', 
                        fontWeight: '500', 
                        flex: '1',
                        fontSize: '1rem'
                      }}>
                        {event.title}
                      </div>
                      <div style={{
                        marginLeft: 'auto',
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        fontWeight: '500',
                        background: event.category === 'cultural' ? '#ffe6f0' : '#e6f3ff',
                        color: event.category === 'cultural' ? '#d63384' : '#0d6efd'
                      }}>
                        {event.category}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Event Catalog Section */}
        <div style={{
          background: "white",
          borderRadius: "15px",
          padding: "30px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
        }}>
          <h2 style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#6b46c1",
            marginBottom: "30px",
            textAlign: "center"
          }}>
            Event Catalog
          </h2>

          {/* Filters */}
          <div style={{ 
            display: 'flex', 
            gap: '10px', 
            marginBottom: '20px', 
            flexWrap: 'wrap',
            justifyContent: "center"
          }}>
            {categories.map(cat => (
              <button
                key={cat}
                style={{
                  background: filter === cat ? "linear-gradient(135deg, #9333ea 0%, #6b46c1 100%)" : "#e5e7eb",
                  color: filter === cat ? "white" : "#374151",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "25px",
                  fontSize: "14px",
                  cursor: "pointer",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                  boxShadow: filter === cat ? "0 4px 15px rgba(0,0,0,0.2)" : "none"
                }}
                onClick={() => setFilter(cat)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  {cat !== "all" && getCategoryIcon(cat)}
                  <span>{cat === "all" ? "All Events" : cat}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Sorting */}
          <div style={{ marginBottom: '30px', textAlign: "center" }}>
            <select 
              style={{
                background: "linear-gradient(135deg, #6b46c1 0%, #9333ea 100%)",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: "25px",
                fontSize: "14px",
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
              }}
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="date" style={{ background: 'white', color: 'black' }}>Sort by Date (Upcoming First)</option>
              <option value="name" style={{ background: 'white', color: 'black' }}>Sort by Name (A-Z)</option>
              <option value="category" style={{ background: 'white', color: 'black' }}>Sort by Category</option>
            </select>
          </div>

          {/* Events Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "25px"
          }}>
            {catalogEvents.length === 0 ? (
              <div style={{
                textAlign: "center",
                padding: "40px",
                color: "#666",
                fontSize: "1.1rem"
              }}>
                <p>No events found.</p>
              </div>
            ) : (
              catalogEvents.map(event => (
                <div key={event.id} style={{
                  background: "white",
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
                }}
                >
                  {/* Event Header */}
                  <div style={{
                    background: "linear-gradient(135deg, #6b46c1 0%, #9333ea 100%)",
                    color: "white",
                    padding: "20px"
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "10px"
                    }}>
                      {getCategoryIcon(event.category)}
                      <span style={{
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        opacity: "0.9"
                      }}>
                        {event.category}
                      </span>
                    </div>
                    <h3 style={{
                      fontSize: "1.4rem",
                      fontWeight: "bold",
                      margin: "0 0 15px 0",
                      lineHeight: "1.3"
                    }}>
                      {event.name}
                    </h3>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      fontSize: "0.9rem",
                      opacity: "0.9"
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <Calendar size={16} />
                        <span>{formatEventDate(event.date)}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <Clock size={16} />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Event Body */}
                  <div style={{ padding: "20px" }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "15px",
                      color: "#6b7280",
                      fontSize: "0.9rem"
                    }}>
                      <MapPin size={16} />
                      <span>{event.venue}</span>
                    </div>
                    <p style={{
                      color: "#4b5563",
                      lineHeight: "1.6",
                      margin: "0 0 20px 0",
                      fontSize: "0.95rem"
                    }}>
                      {event.description}
                    </p>
                    
                    <button 
                      onClick={() => handleLearnMore(event)}
                      style={{
                        background: "linear-gradient(135deg, #6b46c1 0%, #9333ea 100%)",
                        color: "white",
                        border: "none",
                        padding: "12px 25px",
                        borderRadius: "25px",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;