import React, { useState } from "react";
import "../css/feedback.css";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    event: '',
    rating: '',
    comments: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.role) {
      newErrors.role = 'Please select your role';
    }

    if (!formData.event) {
      newErrors.event = 'Please select an event';
    }

    if (!formData.rating) {
      newErrors.rating = 'Please provide a rating';
    }

    if (!formData.comments.trim()) {
      newErrors.comments = 'Comments are required';
    } else if (formData.comments.trim().length < 10) {
      newErrors.comments = 'Comments must be at least 10 characters long';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Thank you for your feedback!");
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      role: '',
      event: '',
      rating: '',
      comments: ''
    });
    setErrors({});
  };

  return (
    <div className="feedback-container">
      <div className="feedback-header">
        <h1>Feedback Form</h1>
        <p>We value your opinion and appreciate your feedback</p>
      </div>

      <div className="form-container">
        <form id="feedbackForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form-control ${errors.name ? 'error-input' : ''}`}
              placeholder="Enter your full name"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-control ${errors.email ? 'error-input' : ''}`}
              placeholder="Enter your email address"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="role">User Type</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={`form-control ${errors.role ? 'error-input' : ''}`}
            >
              <option value="">Select your role</option>
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="alumni">Alumni</option>
              <option value="staff">Staff</option>
              <option value="guest">Guest</option>
            </select>
            {errors.role && <span className="error-message">{errors.role}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="event">Event Attended</label>
            <select
              id="event"
              name="event"
              value={formData.event}
              onChange={handleChange}
              className={`form-control ${errors.event ? 'error-input' : ''}`}
            >
              <option value="">Select an event</option>
              <option value="tech-conference">Tech Conference 2023</option>
              <option value="career-fair">Annual Career Fair</option>
              <option value="alumni-meet">Alumni Meetup</option>
              <option value="research-symposium">Research Symposium</option>
              <option value="workshop">Web Development Workshop</option>
            </select>
            {errors.event && <span className="error-message">{errors.event}</span>}
          </div>

          <div className="form-group">
            <label>Rating</label>
            <div className="rating-container">
              {["Poor", "Fair", "Good", "Very Good", "Excellent"].map((label, index) => (
                <label key={index} className="rating-option">
                  <input
                    type="radio"
                    name="rating"
                    value={index + 1}
                    checked={formData.rating === String(index + 1)}
                    onChange={handleChange}
                  />
                  <div className="rating-star">
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="rating-label">{label}</span>
                </label>
              ))}
            </div>
            {errors.rating && <span className="error-message">{errors.rating}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="comments">Comments</label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              className={`form-control ${errors.comments ? 'error-input' : ''}`}
              placeholder="Share your feedback..."
            />
            {errors.comments && <span className="error-message">{errors.comments}</span>}
          </div>

          <button type="submit" className="btn-submit">
            Submit Feedback
          </button>

          <div className="form-footer">
            <p>Your feedback helps us improve</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;