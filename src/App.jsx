import React, { useState } from 'react';
import WeatherContext from './context/WeatherContext';
import LeftBoard from './component/Dashboard/LeftBoard';
import "./App.css";
import RightBoard from './component/Dashboard/RightBoard';

function App() {
  const [value, setValue] = useState("Delhi");


  return (
    <div className='app'>
      <WeatherContext.Provider value={{ value, setValue }}>
        <div className="leftside">
          <LeftBoard setValue={setValue} />
        </div>
        <div className="rightside">
          <RightBoard />
        </div>
      </WeatherContext.Provider>
    </div>
  );
}

export default App;
