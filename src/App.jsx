import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UserSelector from "./components/UserSelector";

import Home from "./Pages/Home";
import About from "./Pages/About";
import EventCalendar from "./Pages/EventCalendar";
import EventDetails from "./Pages/EventDetails";
import Registration from "./Pages/Registration";
import Gallery from "./Pages/Gallery";
import ContactUs from "./Pages/ContactUs";
import Feedback from "./Pages/Feedback";

function AppContent() {
  const [userCompleted, setUserCompleted] = useState(false);
  const [data, setData] = useState({ userType: "", name: "" });
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Check localStorage when app loads
    const checkUserData = () => {
      const userName = localStorage.getItem("userName");
      const userType = localStorage.getItem("userType");
      
      if (userName && userType) {
        setData({ userType, name: userName });
        setUserCompleted(true);
      }
      setIsLoading(false);
    };
    
    checkUserData();
  }, []);

  const handleUserComplete = () => {
    const userName = localStorage.getItem("userName");
    const userType = localStorage.getItem("userType");
    setData({ userType, name: userName });
    setUserCompleted(true);
  };

  // Show loading while checking localStorage
  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px'
      }}>
        Loading...
      </div>
    );
  }

  // Show UserSelector only if user hasn't completed (regardless of route)
  if (!userCompleted) {
    return <UserSelector onComplete={handleUserComplete} />;
  }

  // Main app content
  return (
    <>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/about" element={<About />} />
          <Route path="/eventcalendar" element={<EventCalendar />} />
          <Route path="/eventdetails" element={<EventDetails />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}