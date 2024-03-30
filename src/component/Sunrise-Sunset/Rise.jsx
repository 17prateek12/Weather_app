import React from 'react';
import './Rise.css';

const Rise = ({ data }) => {
    const convertUnixTimestampToDate = (unixTimestamp) => {
        const milliseconds = unixTimestamp * 1000;
        const date = new Date(milliseconds);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const convertUnixTimestampToTime = (unixTimestamp) => {
        const milliseconds = unixTimestamp * 1000;
        const date = new Date(milliseconds);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    const convertTimezoneOffset = (timezoneOffset) => {
        const hours = Math.floor(Math.abs(timezoneOffset) / 3600);
        const minutes = Math.floor((Math.abs(timezoneOffset) % 3600) / 60);
        const sign = timezoneOffset >= 0 ? '+' : '-';
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        return `${sign}${formattedHours}:${formattedMinutes}`;
    };

    return (
        <div className='sunriseset'>
            <img src="./sunrise.png" alt="..." className='sun' />
            <div className='time'>
                <span>Sunrise: {convertUnixTimestampToDate(data.sys.sunrise)}<span> </span>{convertUnixTimestampToTime(data.sys.sunrise)}<br /> GMT {convertTimezoneOffset(data.timezone)}</span>
                <span>Sunset: {convertUnixTimestampToDate(data.sys.sunset)}<span> </span>{convertUnixTimestampToTime(data.sys.sunset)}<br /> GMT {convertTimezoneOffset(data.timezone)}</span>
            </div>
        </div>
    )
}

export default Rise