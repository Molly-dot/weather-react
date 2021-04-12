import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />

        <footer>
    
           <a
          href="https://github.com/Molly-dot/weather-app-updated"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          Open-source code
        </a>
        by Molly Townsend
      </div>
    </div>
  );
}