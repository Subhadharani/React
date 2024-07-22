import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Axios1 = () => {
  const [apidata, setApidata] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once, equivalent to componentDidMount()

  const fetchData = () => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => { 
        setApidata(response.data[1]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  return (
    
    <div style={bodyStyles}>
      <div style={wrapperStyles}>
        {loading && <div style={loadingStyles}>Loading...</div>} {/* Display loading indicator while fetching data */}
        {!loading && (
          <div style={profileContainerStyles}>
            <h1>Profile</h1>
            <h3>postId: {apidata && apidata.postId}</h3>
            <h3>id: {apidata && apidata.id}</h3>
            <h3>name: {apidata && apidata.name}</h3>
            <h3>email: {apidata && apidata.email}</h3>
            <h3>body: {apidata && apidata.body}</h3>
          </div>
        )}
      </div>
    </div>
    
  );
}

const bodyStyles = {
  fontFamily: 'Arial, sans-serif',
  backgroundColor: 'grey',
  margin: 0,
  padding: 0,
};

const wrapperStyles = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
};

const loadingStyles = {
  textAlign: 'center',
  fontSize: '20px',
  marginTop: '50px',
};

const profileContainerStyles = {
  backgroundColor:'skyblue',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  padding: '20px',
};

export default Axios1;
