import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App22() {
  const [weather, setWeather] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/weather')
      .then(response => {
        setWeather(response.send); // "31degree"
      })
      .catch(error => {
        console.error('Error fetching weather:', error);
      });
  }, []);

  return (
    <div>
      <h2>Weather Report</h2>
      <p>Current Weather: {weather}</p>
    </div>
  );
}