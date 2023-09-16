import React, {useState} from "react";
import axios from "axios";

export default function Form() {
  const [ready, setReady] = useState(false);
  const [weatherData, setweatherData] = useState({});

  function handleResponse (response){
    console.log(response.data);
  
    setweatherData({
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      country: response.data.country,
      description: response.data.condition.description,
      date: response.data.date,
      iconUrl: response.data.condition.icon_url
    });
    setReady(true);
  }

  if (ready){
    return (
      <div className="Form">
        <form id="submit-form">
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
            <h6 id="search-city">Search City</h6>
            <h6 id="current-city">{weatherData.city}</h6>
            <h6>
              <span id="current-date">Current Date</span>
            </h6>
            <br />
            <p className="links" id="links">
              {/*<a href="#" class="hyperlink" id="change-temp-one-C">
                C°
      </a>{" "}*/}
              |
             {/* <a href="#" class="hyperlink" id="change-temp-one-F">
               {" "}
              F°
              </a>*/}
            </p>
            <div className="card-deck" id="currentforecast">
              <div className="card text-center border-light">
                <img src={weatherData.iconUrl} className="icon" id="icon" alt={weatherData.description}/>
                <h5 className="card-title" id="tempone">Current temperature: {Math.round(weatherData.temperature)}°C</h5>
        
              </div>
              <ul>
                    <li className="text-capitalize">Description: {weatherData.description}</li>
                    <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                    <li>Humidity: {weatherData.humidity} %</li>
                </ul>
            </div>
            <br />
            <div className="card-deck text-center" id="forecast"></div>
          </section>
          </div>
    );
  } else {
    let apiKey = "b4a54a5504108f7ccbdff9c1ft0d1ob3";
    let query = "Lisbon";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }




}
