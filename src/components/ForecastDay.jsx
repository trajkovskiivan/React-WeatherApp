import React from 'react';
import calculateStatistics from '../functions/caluclateStatistics';
const {renderImage, setSituations, setIcon} = require('../functions/renderImage');


const ForecastDay = (props) => {

  let {someDate, calcDay} = props;
  let s;
  let situations = {
    sky: 1,
    rain: 1,
    clouds: 1,
    thunderstorm: 1,
    snow: 1,
    mist: 1,
  }
  let icon;

  let filtered = someDate.filter((el, index) => new Date(el.dt_txt).getUTCDate() === (new Date().getUTCDate() + calcDay) ? <ForecastDay {...el} key={index} /> : "");
  if (filtered.length > 0) {
    s = calculateStatistics(filtered)

    setSituations(s.arrOfIcons, situations)
  }
  icon = setIcon(situations)


  return (
    <div className="forecast-day">
      <p>{icon}</p>
      <p><img src={renderImage(icon)} alt="" /></p>
      <p>avg: {s && s.temperature.avg}</p>
      <p>max: {s && s.temperature.max}</p>
      <p>min: {s && s.temperature.min}</p>
    </div>
  );
}

export default ForecastDay;