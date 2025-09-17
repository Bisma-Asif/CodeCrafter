import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NextStepNavigator from './components/Navigator/NextStepNavigator';  // This is your new step navigator
import Home from './pages/Home';
import About from './pages/About';
import EventCalendar from './pages/EventCalendar';  // Update your page components to match the second structure
import EventDetails from './pages/EventDetails';
import Registration from './pages/Registration';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import Feedback from './pages/Feedback';
import './App.css';  // Ensure the CSS file path is correct

function App() {
  const [showNavigator, setShowNavigator] = useState(true);

  const handleNavigatorComplete = () => {
    setShowNavigator(false);  // Hide the navigator after completion
  };

  // Show the NextStepNavigator until it's completed
  if (showNavigator) {
    return <NextStepNavigator onComplete={handleNavigatorComplete} />;
  }

  // After completing the navigator, show the main app
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
