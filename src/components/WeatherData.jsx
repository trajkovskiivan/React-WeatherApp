import React from 'react';
import WeatherDataComponent from './WeatherDataComponent'
import CurrentWeather from './CurrentWeather';
import CityComponent from './CityComponent'
import './CurrentWeather.scss'
import ForecastData from './ForecastData';


const WeatherData = (props) => {
  const today = new Date().getFullYear();
  let fullData = [];
  let {city} = props

  if (props.data[0]) {
    props.data.forEach(el => fullData.push(el))
  }

  return (
    <div className="data-wrapper">
      <div className="left-data">
        {city && city.name ? <CityComponent city={city} fullData={fullData} /> : ""}
      </div>

      <div className="data-statictics">
        <div className="data-statistics-background"></div>
        <div className="current-data-div">

          <div className="avd-data-statistics">
            <h1 className="daily-info-h1">Daily Info</h1>
            <h4>{new Date().toLocaleDateString()}</h4>
            <CurrentWeather fullData={fullData} />
          </div>

          <div className="forecast-data">
            <h1 className="forecast-info-h1">5 days Forecast</h1>
            <ForecastData fullData={fullData} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default WeatherData;