import React from "react";


export default function WeatherTemp(props) {
        return (
            <div className="WeatherTemp">
                <span className="card-title" id="currenttemp">{Math.round(props.celsius)}</span>
                <span id="unit">{" "}°C </span>
            </div>
          );
     }