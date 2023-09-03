import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Form from "./Form";
import Section from "./Section";
import Footer from "./Footer";


import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <div class="container">
        <div class="weather-app-wrapper">
          <div class="weather-app border p-5 mt-3 border-light rounded shadow p-3 mb-5 bg-white rounded">
            <img src="/images/weatherapp.svg" className="logo" alt="Weather Logo" />
            <h1>WeatherApp</h1>

            <Form />
            <Section />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </StrictMode>
);
