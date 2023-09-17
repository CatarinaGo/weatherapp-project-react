import React, {useState} from "react";


export default function WeatherTemp(props) {
    const [unit, setUnit] = useState("celsius");

    function convertToF(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertToC(event){
        event.preventDefault();
        setUnit("celsius");
    }
    

     if (unit === 'celsius'){
        return (
            <div className="WeatherTemp">
                <span className="card-title" id="currenttemp">{Math.round(props.celsius)}</span>
                <span id="unit">{" "}°C | <a href="/" onClick={convertToF}>°F</a> </span>
            </div>
          );
     } else{
        let fahrenheit = (props.celsius* 9/5) + 32;
        return (
            <div className="WeatherTemp">
                <span className="card-title" id="currenttemp">{Math.round(fahrenheit)}</span>
                <span id="unit">{" "}<a href="/" onClick={convertToC}>°C</a> | °F </span>
            </div>
          );
     }

}