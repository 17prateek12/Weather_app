import React from 'react';
import AccessTimeFilledOutlinedIcon from '@mui/icons-material/AccessTimeFilledOutlined';
import "./CurrentTimeandData.css";

const CurrentTimeandData = ({ data }) => {
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
    const convertUnixTimestampToDate = (unixTimestamp) => {
        const milliseconds = unixTimestamp * 1000;
        const date = new Date(milliseconds);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString(undefined, options);
        return formattedDate;
    };


    return (
        <div className='realtime'>
            <AccessTimeFilledOutlinedIcon sx={{ color: 'white', fontSize: 40 }} />
            <div className='timetrue'>
                <span>{convertUnixTimestampToDate(data.dt)}</span>
                <span>{convertUnixTimestampToTime(data.dt)} <span>GMT {convertTimezoneOffset(data.timezone)}</span></span>
            </div>
        </div>
    )
}

export default CurrentTimeandData;