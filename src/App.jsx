import React, { useState, useEffect } from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import EventCalendar from './Pages/EventCalendar';
import EventDetails from './Pages/EventDetails';
import Registration from './Pages/Registration';
import Gallery from './Pages/Gallery';
import ContactUs from './Pages/ContactUs';
import Feedback from './Pages/Feedback';
import './App.css';  // Make sure CSS is still included

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // ✅ Check localStorage on load
  useEffect(() => {
    const userName = localStorage.getItem("userName");
    const userType = localStorage.getItem("userType");
    
    if (userName && userType) {
      setIsLoading(false);  // Just stop loading if user data exists
    } else {
      setIsLoading(false);  // You can decide what to do here (maybe show a login page)
    }
  }, []);

  // ✅ Loading screen
  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontSize: '18px',
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-content p-4">
        <Routes>
          <Route path="/" element={<Home />} />
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
    </BrowserRouter>
  );
}

export default App;
