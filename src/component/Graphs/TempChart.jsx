import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./TempChart.css";

const TempChart = ({ data }) => {
  return (
    <div className='graphcontainer'>
      <ResponsiveContainer width="90%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          className='graphbg'
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line type="monotone" dataKey="minTemp" stroke="blue" name="Min Temp" />
          <Line type="monotone" dataKey="maxTemp" stroke="orange" name="Max Temp" />
          <Line type="monotone" dataKey="temp" stroke="green" name="Temp" />
        </LineChart>
      </ResponsiveContainer>
      </div>
  );
};

export default TempChart;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{label}</p>
        <p className="revenue">Min Temp: {payload[0].value}°C</p>
        <p className="profit">Max Temp: {payload[1].value}°C</p>
        <p className="temp">Temp: {payload[2].value}°C</p>
      </div>
    );
  }

  return null;
};
