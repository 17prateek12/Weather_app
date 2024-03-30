import React, { useState, useEffect, useContext } from 'react';
import { currentweather } from '../../DataFolder/ApiCall';
import WeatherContext from '../../context/WeatherContext';
import Basicdetail from '../Basic/Basicdetail';
import Rise from '../Sunrise-Sunset/Rise';
import CurrentTimeandData from '../CurrTime/CurrentTimeandData';
import WindHum from '../OtherDetails/WindHum';
import "./CardTemp.css";

const CardTemp = () => {
    const [weather, setWeather] = useState([]);
    const { value } = useContext(WeatherContext);


    useEffect(() => {
        const getweather = async () => {
            try {
                const result = await currentweather(value);
                console.log(result);
                setWeather(result);
            } catch (error) {
                console.log(error);
            }
        }
        getweather();
    }, [value]);

    return (
        <div>
            {weather === null ? (
                <p>Loading...</p>
            ) : weather === undefined || weather.weather === undefined || weather.weather.length === 0 ? (
                <p>No weather data available</p>
            ) : (
                <div className='bodymain'>
                    <Basicdetail data={weather} />
                    <Rise data={weather} />
                    <div className='box'>
                        <CurrentTimeandData data={weather} />
                        <WindHum data={weather} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default CardTemp