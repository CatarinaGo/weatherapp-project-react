import React, {useState, useEffect} from "react";
import axios from "axios";
import "./WeatherForecastCSS.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    const [weatherForecast, setweatherForecast] = useState({});
    let [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(false);

    }, [props.city]);

    function handleResponse (response){
    console.log(response.data);
    setweatherForecast(response.data.daily);
    setLoaded(true);
    }

    if (loaded){
        console.log(weatherForecast);
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {weatherForecast.map(function(dailyForecast, index){
                        if (index <6 && index>0 ) {
                            return (
                                <div className="col" key={index}>
                                <WeatherForecastDay data={dailyForecast}/>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
            );
    } else {
    let apiKey = "b4a54a5504108f7ccbdff9c1ft0d1ob3";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return null;}
}

