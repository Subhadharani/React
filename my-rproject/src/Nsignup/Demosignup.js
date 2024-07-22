import React, { useState } from 'react';
import './Demosign.css'; // Import the CSS file
import  { useNavigate } from 'react-router-dom';
const Demosignup = () => {
    const navigate=useNavigate();
    const handlenext=()=>{
        navigate('/SignInSide')
    }
  const [isLoading, setIsLoading] = useState(false); // State for loader

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Show loader on submit

    // Simulate form submission (replace with your actual API call)
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay

    setIsLoading(false); // Hide loader after delay
  };

  return (
    <div className="container">
      <div className="form-card">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" id="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" required />
          </div>
          <div className="input-group">
            <input type="checkbox" name="terms" id="terms" required />
            <label htmlFor="terms">I agree to the <a href="#">Terms of Service</a></label>
          </div>
          <button onClick={handlenext}>Sign Up</button>
          {isLoading && <div className="loader"></div>}
        </form>
        <p>Already have an account? <a href="login.html">Sign In</a></p>
      </div>
    </div>
  );
};

export default Demosignup;