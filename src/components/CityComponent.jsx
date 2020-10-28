import React from 'react';
const {renderImageFromSingle} = require('../functions/renderImage');


const CityComponent = (props) => {

  let {fullData, city} = props
  let currentWeatherData = {};
  let cityName;
  let icon;
  let situations = {
    sky: 1,
    rain: 1,
    clouds: 1,
    thunderstorm: 1,
    snow: 1,
    mist: 1,
  };

  if (city && fullData) {
    cityName = city.name;
    currentWeatherData = fullData[0];
    icon = currentWeatherData.weather[0].description
  }
  return (
    <div className="left-data-main-div">
      <h1>{props && cityName ? `${cityName}` : ""}</h1>
      <h4>{props && currentWeatherData ? `${currentWeatherData.weather[0].description}` : ""}</h4>
      <span><img src={renderImageFromSingle(icon)} alt="" /> </span>
      <h3>{fullData && currentWeatherData ? `${currentWeatherData.main.temp}` : ""}</h3>
      <h3>feels like: {fullData && currentWeatherData ? `${currentWeatherData.main.feels_like}` : ""}</h3>

    </div>

  )
}

export default CityComponent