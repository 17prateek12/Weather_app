import React, { useState, useEffect, useContext } from 'react';
import { getforcast } from '../../DataFolder/ApiCall';
import WeatherContext from '../../context/WeatherContext';
import "./ForcastModule.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ForcastModule = () => {
    const [selectedTimeData, setSelectedTimeData] = useState([]);
    const { value } = useContext(WeatherContext);
    const targetTime = "12:00:00";

    useEffect(() => {
        const getFiveDaysForcast = async () => {
            try {
                const result = await getforcast(value);
                console.log(result);
                if (result && result.list) {
                    const timeData = extractTimeDataForAllDays(result.list, targetTime);
                    setSelectedTimeData(timeData);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getFiveDaysForcast();
    }, [value])

    const extractTimeDataForAllDays = (forecastList, targetTime) => {
        const selectedTimeData = {};
        forecastList.forEach(item => {
            const date = item.dt_txt.split(" ")[0];
            const time = item.dt_txt.split(" ")[1];
            if (time === targetTime) {
                if (!selectedTimeData[date]) {
                    selectedTimeData[date] = item;
                }
            }
        });
        return selectedTimeData;
    };

    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const forcastweather = Object.keys(selectedTimeData).length === 0 ? (
        <p>Loading...</p>
    ) : (
        <div>
            <Slider {...settings}>
                {Object.keys(selectedTimeData).map(date => (
                    <div key={date} className='forcastcard'>
                        <img srcSet={`https://openweathermap.org/img/wn/${selectedTimeData[date].weather[0].icon}@2x.png`} alt="..." className='imgicon' />
                        <div className="details">
                            <span>{selectedTimeData[date].weather[0].description}</span>
                            <span>{date}</span>
                            <span>{selectedTimeData[date].main.temp} °C</span>
                            <span>{selectedTimeData[date].main.humidity} %</span>
                            <span>{selectedTimeData[date].wind.speed} Km/s</span>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );


    return (
        <div className='maindiv'>
            {forcastweather}
        </div>
    )
}

export default ForcastModule;
