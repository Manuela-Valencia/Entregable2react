import { useState } from "react";
import './styles/weatherCard.css';

const WeatherCard = ({ weather, temp }) => {
  const [isCelsius, setisCelsius] = useState(true);

  const handleChangeTemp = () => setisCelsius(!isCelsius);

  return (
    <article className="weather-card-container">
      <header className="weather-header">
        <h1 className="weather-title">Weather App</h1>
        <h2 className="weather-subtitle">{weather?.name}, {weather?.sys.country}</h2>
      </header>
      <section className="weather-body">
        <div className="weather-img-container">
          <img src={weather ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png` : ''} alt="" />
        </div>
        <div className="weather-info">
          <h3 className="weather-info-title">{weather?.weather[0].description}</h3>
          <ul className="weather-list">
            <li className="weather-list-item">
              <span className="weather-list-label">Wind Speed</span>
              <span className="weather-list-value">{weather?.wind.speed} m/s</span>
            </li>
            <li className="weather-list-item">
              <span className="weather-list-label">Clouds</span>
              <span className="weather-list-value">{weather?.clouds.all} %</span>
            </li>
            <li className="weather-list-item">
              <span className="weather-list-label">Pressure</span>
              <span className="weather-list-value">{weather?.main.pressure} hPa</span>
            </li>
          </ul>
        </div>
      </section>
      <footer>
        <h2 className="weather-temp">{isCelsius ? `${temp?.celsius} °C` : `${temp?.farenheit} °F`}</h2>
        <button className="weather-btn" onClick={handleChangeTemp}>Change to {isCelsius ? '°F' : '°C'}</button>
      </footer>
    </article>
  );
}

export default WeatherCard;
