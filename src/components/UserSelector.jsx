import { useState } from "react";
import "../css/Model.css";

export default function UserSelector({ onComplete }) {
  const [userName, setUserName] = useState(""); // To store user's name
  const [userType, setUserType] = useState("");
  const [showNameModal, setShowNameModal] = useState(true); // Step 1: Name input
  const [showUserModal, setShowUserModal] = useState(false); // Step 2: User type selection
  const [showWelcomeModal, setShowWelcomeModal] = useState(false); // Step 3: Welcome message

  // Handle name submission
  const handleNameSubmit = () => {
    if (userName.trim() === "") return; // Prevent empty names
    setShowNameModal(false);
    setShowUserModal(true);
  };

  // Handle user type selection
  const handleUserSelect = (type) => {
    setUserType(type);
    setShowUserModal(false);
    setShowWelcomeModal(true);
    localStorage.setItem("userName", userName)
    localStorage.setItem("userType", type)

    // Hide welcome modal after 3 seconds & call onComplete (homepage)
    setTimeout(() => {
      setShowWelcomeModal(false);
      if (onComplete) onComplete(); // Callback to show homepage
    }, 3000);
  };

  // Get readable title
  const getUserTitle = () => {
    switch (userType) {
      case "student":
        return "Student";
      case "faculty":
        return "Faculty Member";
      case "guest":
        return "Guest";
      default:
        return "";
    }
  };

  return (
    <>
      {/* Name Modal */}
      {showNameModal && (
        <div className="user-modal">
          <div className="modal-content">
            <div className="modal-header">
              <div className="logo-ring">
                <div className="logo-inner">QC</div>
              </div>
              <h2>Welcome to Quantix College</h2>
              <div className="subtitle-line"></div>
            </div>
            <p>Please enter your name to continue:</p>
            <div className="input-container">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name"
                className="premium-input"
              />
              <div className="input-glow"></div>
            </div>
            <button className="user-btn primary" onClick={handleNameSubmit}>
              <span>Continue</span>
              <div className="btn-ripple"></div>
            </button>
          </div>
        </div>
      )}

      {/* User Type Modal */}
      {showUserModal && (
        <div className="user-modal">
          <div className="modal-content">
            <div className="modal-header">
              <div className="logo-ring">
                <div className="logo-inner">QC</div>
              </div>
              <h2>Hello, {userName}!</h2>
              <div className="subtitle-line"></div>
            </div>
            <p>Please select your user type to continue:</p>
            <div className="user-options">
              <button className="user-btn student" onClick={() => handleUserSelect("student")}>
                <div className="btn-icon">🎓</div>
                <span>Student</span>
                <div className="btn-ripple"></div>
              </button>
              <button className="user-btn faculty" onClick={() => handleUserSelect("faculty")}>
                <div className="btn-icon">👨‍🏫</div>
                <span>Faculty</span>
                <div className="btn-ripple"></div>
              </button>
              <button className="user-btn guest" onClick={() => handleUserSelect("guest")}>
                <div className="btn-icon">👤</div>
                <span>Guest</span>
                <div className="btn-ripple"></div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Welcome Modal */}
      {showWelcomeModal && (
        <div className="welcome-modal active">
          <div className="welcome-content">
            <div className="success-animation">
              <div className="checkmark">
                <div className="checkmark-circle"></div>
                <div className="checkmark-stem"></div>
                <div className="checkmark-kick"></div>
              </div>
            </div>
            <h2>Welcome, {userName}!</h2>
            <div className="user-badge">
              <span className="badge-text">{getUserTitle()}</span>
            </div>
            <p>Redirecting you to the CampusConnect homepage...</p>
            <div className="loading-bar">
              <div className="loading-progress"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}