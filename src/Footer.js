import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        <small>
          <a
            href="https://github.com/CatarinaGo/weatherapp-project-react"
            target="_blank" rel="noreferrer"
          >
            Open-source code 
          </a>
          {" "}by Catarina Gomes, hosted on {" "}
          <a href="https://loving-torvalds-f457bf.netlify.app" target="_blank" rel="noreferrer">
          Netlify
          </a>
        </small>
      </p>
    </div>
  );
}
