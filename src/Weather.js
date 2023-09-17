import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function Weather() {
  const defaults = {
    icon: 'CLEAR_DAY',
    color: '#facf5a',
    size: 50,
    animate: true
  };
  return (
    <div className="Weather">
        <ReactAnimatedWeather
          icon={defaults.icon}
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
        />
        <h1>WeatherReactApp</h1>
    </div>
  );
}

