import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App22() {
  const [weather, setWeather] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/weather') // ✅ Make sure the endpoint is spelled correctly
      .then(response => {
        setWeather(response.data.data); // ✅ Access the 'data' field inside the response object
      })
      .catch(error => {
        console.error('Error fetching weather:', error);
      });
  }, []);

  return (
    <div>
      <h2>Weather Report</h2>
      <p>Current Weather: {weather ? weather : 'Loading...'}</p>
    </div>
  );
}
