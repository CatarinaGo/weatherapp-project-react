import React from "react";
import "./WeatherForecastCSS.css";

export default function WeatherForecastDay(props) {
    console.log(props);

    function day(){
        let date = new Date (props.data.time*1000);
        let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let day = date.getDay();
        
   
        return  weekDays[day];
    }

    return(
        <div className="WeatherForecastDay">
            <div className="WeatherForecastDate">{day()}</div>
            <div className="WeatherForecastIcon">
            <img src={props.data.condition.icon_url} className="icon" id="icon" alt={props.data.condition.description}/></div>
            <span className="WeatherForecastTempMax">{Math.round(props.data.temperature.maximum)}° {" "}</span>
            <span className="WeatherForecastTempMin">{Math.round(props.data.temperature.minimum)}°</span>

        </div>
    );
}