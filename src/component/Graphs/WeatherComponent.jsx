import React, { useState, useEffect, useContext } from 'react';
import TempChart from './TempChart';
import { getforcast } from '../../DataFolder/ApiCall';
import WeatherContext from '../../context/WeatherContext';
import "./TempChart.css"

const WeatherComponent = () => {
  const [weather, setWeather] = useState([]);
  const { value } = useContext(WeatherContext);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const result = await getforcast(value); // Use the imported getforcast function
        console.log("Graph Data");
        console.log(result);

        // Transform the data to match the expected structure
        const transformedData = result.list.map(item => ({
          name: item.dt_txt,
          minTemp: item.main.temp_min,
          maxTemp: item.main.temp_max,
          temp: item.main.temp
        }));

        setWeather(transformedData);
      } catch (error) {
        console.log(error);
      }
    };

    getWeather();
  }, [value]);

  return (
    <div>
      <h2 className='for'>5 DAYSFORCAST GRAPH</h2>
      {weather && <TempChart data={weather} />}
    </div>
  );
};

export default WeatherComponent;
