import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import 'bootstrap/dist/css/bootstrap.css';


import Weather from "./Weather";
import Form from "./Form";
import Footer from "./Footer";


import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app border p-5 mt-3 border-light rounded shadow p-3 mb-5 bg-white rounded">
            <Weather  />
            <Form defaultCity="Lisbon"/>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </StrictMode>
);
