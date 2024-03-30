import React from 'react';
import "./WindHum.css";

const WindHum = ({ data }) => {
  return (
    <div className='humwind'>
      <img src="./wind.png" alt="..." className='wind' />
      <span>Wind Speed: {data.wind.speed}Km/s</span>
      <span>Humidity: {data.main.humidity}</span>
    </div>
  )
}

export default WindHum