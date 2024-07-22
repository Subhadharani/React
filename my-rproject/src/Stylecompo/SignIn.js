import React, { useState } from 'react';
import './SignIN.css'; // Import the CSS file

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false); // Checkbox state
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Implement your logic for handling signin (e.g., API call, validation)
    // Replace the following with your actual login logic

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();

      // Handle successful login (e.g., redirect to another page)
      console.log('Login successful');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked); // Update checkbox state based on click
  };

  return (
    <div className="sign-in-container">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            id="remember-me"
            name="remember-me"
            checked={isChecked} // Set checked state based on "isChecked"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit">Sign In</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default SignIn;
