import React from 'react';
import './Basicdetail.css';

const Basicdetail = ({ data }) => {
    return (
        <div className='basic'>
            <h2>Weather in {data.name}, {data.sys.country}</h2>
            <img srcSet={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="..." />
            <span className='tempmain'>{data.main.temp}°C</span>
            <span>{data.weather[0].description}</span>
            <span>Feels like: {data.main.feels_like}°C</span>
            <div className='minmax'>
                <span style={{ color: 'darkblue' }}>{data.main.temp_min}°C</span>
                <span style={{ color: 'orange' }}>{data.main.temp_max}°C</span>
            </div>
        </div>
    )
}

export default Basicdetail