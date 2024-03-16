import React, { useState } from "react";
import "./Form.css";
import axios from "axios";

export default function Form() {
    let [city, setCity] = useState ("");
    let [weather, setWeather] = useState ("");
    let [updateDisplay, setUpdateDisplay] = useState ("");

    function updateTemperature(response) {
        setUpdateDisplay(true);
        setWeather({
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            description: response.data.main.description,
            icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,

        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = "866a208a73eeff02182218e9441647a1";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(updateTemperature);
    }

    function updateCity(event) {
        event.preventDefault();
        setCity(event.target.value);
    }

    let form = (
        <div className="Form">
            <h2><span>🌀</span> Current Update</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter city..." className="input-field" onChange={updateCity}/>
                <input type="submit" className="input-btn"/>
            </form>
            <div>
                <h1>Klersdorp</h1>
                <p>Saturday 23:34, clear sky <br /> Humidity: <strong>30%, Wind: <strong>0.74km/h</strong></strong> </p>
            </div>
            <div>
               <span className="weather-emoji">🌖</span> 
               <span className="weather-temp">20</span>
               <span className="weather-degree">°C</span>
            </div>
        </div>
    );

    if (updateDisplay) {
        return (
            <div>
                {form}
                <ul>
                    <li>Temperature: {Math.round(weather.temperature)}°C</li>
                    <li>Description: {weather.description}</li>
                    <li>Humidity: {weather.humidity}%</li>
                    <li>Wind: {Math.round(weather.wind)}km/h</li>
                    <img src={weather.icon} alt="Weather Icon"/>
                </ul>
            </div>
        );
    } else {
        return form;
    }
}