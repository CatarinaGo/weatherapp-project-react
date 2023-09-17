import React, {useState} from "react";
import axios from "axios";

import FormattedDate from "./FormattedDate";

export default function Form(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setweatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse (response){
    console.log(response.data);
  
    setweatherData({
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      country: response.data.country,
      description: response.data.condition.description,
      date: new Date (response.data.time*1000),
      iconUrl: response.data.condition.icon_url
    });
    setReady(true);
    
  }

  function displayWeather(){
    let apiKey = "b4a54a5504108f7ccbdff9c1ft0d1ob3";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

  }
  function handleSubmit(event) {
    event.preventDefault();
    displayWeather();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (ready){
    return (
      <div className="Form">
        <form id="submit-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a City"
                aria-label="Type City"
                aria-describedby="basic-addon2"
                autoFocus="on"
                id="userInput"
                autoComplete="off"
                onChange={updateCity}
              />
              <div className="input-group-append">
                <button
                  id="submit-button"
                  className="btn btn-info"
                  type="submit"
                  autoFocus="on"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
          <section>
            <h6 id="current-city">{weatherData.city}</h6>          
            <div id="current-date"> <FormattedDate date={weatherData.date} />
            </div>
            <h6 className="current-forecast">Current Forecast</h6>
            <div className="row">
              <div className="col-sm-6">
                <div className="card border-light">
                  <div className="card-body">
                  <img src={weatherData.iconUrl} className="icon" id="icon" alt={weatherData.description}/>
                  <h6 className="card-title" id="currenttemp">{Math.round(weatherData.temperature)}°C</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card border-light">
                  <div className="card-body">
                    <p className="text-capitalize">Description: {weatherData.description}</p>
                    <p>Wind: {Math.round(weatherData.wind)} km/h</p>
                    <p>Humidity: {weatherData.humidity} %</p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="card-deck text-center" id="forecast"></div>
          </section>
          </div>
    );
  } else {
    displayWeather();
    return "Loading...";
  }




}
