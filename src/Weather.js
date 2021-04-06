import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="weather-app">
          <form className="search-form" id="search-form">
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Type a city.."
                  autofocus="on"
                  autocomplete="off"
                  id="city-input"
                  className="form-control shadow-sm"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="form-control btn btn-primary shadow-sm w-100"
                />
              </div>
            </div>
          </form>
          <h1>Paris</h1>
          <ul>
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="Clear"
              id="icon"
              className="float-left"
            />
            <li id="date"></li>
            <li id="description"></li>
          </ul>
          <div className="row">
            <div className="col-6">
              <div className="clearfix">
                <div className="float-left">
                  <span className="temperature" id="temperature"></span>
                  <span className="units">
                    <span href="#" id="celsius-link" class="active">
                      °C
                    </span>{" "}
                    |
                    <span href="#" id="fahrenheit-link">
                      °F
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Humidity: <span id="humidity"></span>%
                </li>
                <li>
                  Wind: <span id="wind"></span> km/h
                </li>
              </ul>
            </div>
          </div>
          <div className="row weather-forecast" id="forecast"></div>
        </div>
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
